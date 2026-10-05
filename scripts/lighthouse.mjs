import { spawn, spawnSync } from 'node:child_process';
import { mkdir, readFile } from 'node:fs/promises';
import { chromium } from '@playwright/test';

// Local synthetic audit only; never point this runner at private/live forms.
const demo = process.argv.includes('--demo');
const mode = demo ? 'demo' : 'production';
const routes = demo ? ['/', '/gallery', '/donate', '/apply', '/scholarships'] : ['/', '/donate', '/scholarships'];
console.log(JSON.stringify({ mode, message: demo
  ? 'Client-demo gate only. SEO is informational; a demo PASS is NOT a production pass. Every route must have a robots noindex meta tag.'
  : 'Strict production gate: all four Lighthouse categories must score at least 90.' }));
const origin = 'http://127.0.0.1:3101';
const server = spawn(process.execPath, [
  'scripts/serve-static.mjs', '--hostname', '127.0.0.1', '--port', '3101',
], { stdio: 'ignore' });
let serverError;
server.on('error', (error) => { serverError = error; });
let failed = false;
let browser;
try {
  let ready = false;
  for (let attempt = 0; attempt < 60; attempt++) {
    if (serverError) throw serverError;
    if (server.exitCode !== null) throw new Error('Audit server exited before readiness');
    try { ready = (await fetch(origin)).ok; } catch { /* wait for local server */ }
    if (ready) break;
    await new Promise((resolve) => setTimeout(resolve, 500));
  }
  if (!ready) throw new Error('Audit server did not become ready');
  await mkdir('reports/verification', { recursive: true });
  if (demo) browser = await chromium.launch();
  for (const route of routes) {
    const name = route === '/' ? 'home' : route.slice(1);
    const output = `reports/verification/${demo ? 'demo-' : ''}lighthouse-${name}.json`;
    let noindex;
    if (demo) {
      const page = await browser.newPage();
      try {
        await page.goto(`${origin}${route}`, { waitUntil: 'load' });
        noindex = await page.locator('meta[name]').evaluateAll((tags) => tags.some((tag) =>
          tag.getAttribute('name')?.toLowerCase() === 'robots'
          && /(?:^|[\s,])noindex(?:$|[\s,])/i.test(tag.getAttribute('content') ?? '')));
      } finally {
        await page.close();
      }
    }
    const result = spawnSync(process.execPath, [
      'node_modules/lighthouse/cli/index.js', `${origin}${route}`,
      '--chrome-flags=--headless', '--quiet', '--output=json', `--output-path=${output}`,
      '--only-categories=performance,accessibility,best-practices,seo',
    ], { env: { ...process.env, CHROME_PATH: chromium.executablePath() }, encoding: 'utf8', timeout: 180_000 });
    if (result.status !== 0) throw new Error(`Lighthouse failed on ${route}: ${result.error?.message || result.stderr}`);
    const report = JSON.parse(await readFile(output, 'utf8'));
    if (report.runtimeError) throw new Error(`Lighthouse runtime failure: ${report.runtimeError.code}`);
    const scores = Object.fromEntries(Object.entries(report.categories)
      .map(([id, value]) => [id, Math.round((value.score ?? 0) * 100)]));
    const seoFailures = demo ? report.categories.seo.auditRefs
      .map(({ id }) => report.audits[id])
      .filter((audit) => audit.id !== 'is-crawlable'
        && !['manual', 'notApplicable'].includes(audit.scoreDisplayMode)
        && typeof audit.score === 'number' && audit.score < 1)
      .map(({ id, title, score, description }) => ({ id, title, score, description })) : [];
    const passes = demo
      ? ['performance', 'accessibility', 'best-practices'].every((id) => scores[id] >= 90)
        && noindex && !seoFailures.some((audit) => audit.score === 0)
      : Object.values(scores).every((score) => score >= 90);
    console.log(JSON.stringify({ route, mode, formFactor: report.configSettings.formFactor, scores,
      ...(demo ? { noindex, seo: 'INFORMATIONAL — not a production pass; only is-crawlable excluded from SEO failure evidence', seoFailures } : {}),
      result: passes ? (demo ? 'DEMO PASS (NOT PRODUCTION)' : 'PASS') : 'FAIL', output }));
    failed ||= !passes;
  }
} finally {
  try {
    await browser?.close();
  } finally {
    server.kill('SIGTERM');
  }
}
process.exitCode = failed ? 1 : 0;
