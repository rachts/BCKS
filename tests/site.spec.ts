import { test, expect } from '@playwright/test';
import AxeBuilder from '@axe-core/playwright';

const routes = [
  '/', '/about', '/scholarships', '/competitions', '/student-programmes',
  '/functions', '/our-people', '/membership', '/apply', '/agm', '/updates',
  '/donate', '/ways-to-give', '/privacy', '/refund-policy', '/gallery',
];

test('static export protects every route from indexing and omits unapproved assets', async ({ request }) => {
  for (const route of [...routes, '/missing-demo-page']) {
    const response = await request.get(route);
    expect(response.status()).toBe(route === '/missing-demo-page' ? 404 : 200);
    expect(response.headers()['x-robots-tag']).toContain('noindex');
    expect(response.headers()['x-content-type-options']).toBe('nosniff');
    expect(response.headers()['content-security-policy']).not.toContain('unsafe-eval');
    expect(await response.text()).toMatch(/<meta name="robots" content="[^"]*noindex/);
  }
  for (const asset of ['/images/history-1.png', '/images/history-2.png', '/images/events/event-01.webp']) {
    expect((await request.get(asset)).status()).toBe(404);
  }
  expect((await request.post('/donate', { data: { synthetic: true } })).status()).toBe(405);
});

test('supplied crest stays square in shared branding and browser icons load', async ({ page, request }) => {
  for (const width of [360, 768, 1024, 1280, 1440]) {
    await page.setViewportSize({ width, height: 900 });
    await page.goto('/');
    const logos = page.locator('header img[src*="bcks-logo"], footer img[src*="bcks-logo"]');
    await expect(logos).toHaveCount(2);
    for (const logo of await logos.all()) {
      await logo.scrollIntoViewIfNeeded();
      await expect(logo).toBeVisible();
      const rect = await logo.boundingBox();
      expect(rect).not.toBeNull();
      expect(Math.abs(rect!.width - rect!.height)).toBeLessThan(1);
      await expect.poll(() => logo.evaluate(img => (img as HTMLImageElement).naturalWidth)).toBeGreaterThan(0);
    }
    expect(await page.evaluate(() => document.documentElement.scrollWidth - document.documentElement.clientWidth)).toBe(0);
    await page.evaluate(() => window.scrollTo(0, 0));
    await page.locator('header').screenshot({ path: `/private/var/folders/qr/wlp25h6s7j3fl54pp6cqr1140000gn/T/opencode/logo-${width}.png` });
  }
  for (const path of ['/favicon.ico', '/icon.png', '/apple-icon.png']) {
    const response = await request.get(path);
    expect(response.status()).toBe(200);
    expect((await response.body()).length).toBeGreaterThan(100);
  }
});

for (const route of ['/donate', '/apply']) {
  test(`${route} local validation rejects invalid text without sending`, async ({ page }) => {
    const posts: string[] = [];
    page.on('request', request => { if (request.method() === 'POST') posts.push(request.url()); });
    await page.goto(route);
    const form = page.locator('form');
    await expect(form.locator('input[name="pan"], input[type="file"]')).toHaveCount(0);
    const sample = page.getByRole('button', { name: 'Use sample details' });
    const run = page.getByRole('button', { name: 'Run local demo' });
    await sample.click();
    await form.locator('input[name="name"]').fill('   ');
    await run.click();
    await expect(form.getByRole('alert')).toContainText('more than spaces');
    await expect(form.getByRole('alert')).toBeFocused();
    await sample.click();
    await form.locator('input[name="phone"]').fill('123');
    await run.click();
    await expect(form.getByRole('alert')).toContainText('10–15 digits');
    await sample.click();
    await form.locator('input[name="email"]').fill('not-an-email');
    await run.click();
    await expect(form.locator('input[name="email"]')).toBeFocused();
    await sample.click();
    if (route === '/donate') {
      await page.getByLabel('Amount', { exact: true }).fill('199');
      await run.click();
      await expect(form.getByRole('alert')).toContainText('at least');
      await page.getByLabel('Amount', { exact: true }).fill('200.001');
      await run.click();
      await expect(form.getByRole('alert')).toContainText('decimal places');
      await page.getByLabel('Amount', { exact: true }).fill('200.50');
    } else {
      await form.locator('input[name="class"]').fill('8');
      await run.click();
      await expect(form.locator('input[name="class"]')).toBeFocused();
      await sample.click();
    }
    await run.click();
    await expect(page.getByRole('heading', { name: /Local demo completed/ })).toBeVisible();
    expect(posts).toEqual([]);
  });
}

test('gallery withholds supplied photos pending mapping and consent', async ({ page }) => {
  await page.goto('/gallery');
  await expect(page.getByText('Information coming soon', { exact: true })).toBeVisible();
  await expect(page.getByText(/verified event mapping and publication consent/i)).toBeVisible();
  await expect(page.locator('main img')).toHaveCount(0);
});

test('gallery has no unconsented photographs in the private demo', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/gallery');
  await expect(page.getByRole('heading', { name: 'Photo gallery' })).toBeVisible();
  await expect(page.getByText(/Photographs are withheld pending verified event mapping and publication consent/i)).toBeVisible();
  const result = await new AxeBuilder({ page }).withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
  expect(result.violations.map(({ id }) => id)).toEqual([]);
});

for (const width of [360, 768, 1024, 1440]) {
  for (const route of routes) {
    test(`${route} renders at ${width}px`, async ({ page }, testInfo) => {
      await page.setViewportSize({ width, height: 900 });
      const errors: string[] = [];
      page.on('pageerror', (error) => errors.push(error.message));
      page.on('console', (message) => {
        if (message.type() === 'error') errors.push(message.text());
      });
      const response = await page.goto(route);
      expect.soft(response?.status()).toBe(200);
      await page.evaluate(() => document.fonts.ready);
      await expect.soft(page.locator('h1')).toHaveCount(1);
      await expect.soft(page.locator('h1')).not.toHaveText('');
      // Scroll through the real page so lazy images and reveal triggers execute.
      await page.evaluate(async () => {
        for (let y = 0; y < document.body.scrollHeight; y += 700) {
          window.scrollTo(0, y);
          await new Promise((resolve) => setTimeout(resolve, 60));
        }
      });
      await page.waitForTimeout(1200);
      const broken = await page.locator('img').evaluateAll((images) =>
        images.filter((image) => image instanceof HTMLImageElement && (!image.complete || image.naturalWidth === 0))
          .map((image) => image.getAttribute('src')));
      expect.soft(broken, 'broken images').toEqual([]);
      const dimensions = await page.evaluate(() => ({
        content: document.documentElement.scrollWidth,
        viewport: document.documentElement.clientWidth,
      }));
      expect.soft(dimensions.content, 'horizontal overflow').toBeLessThanOrEqual(dimensions.viewport);
      expect.soft(errors, 'browser errors').toEqual([]);
      await page.evaluate(() => window.scrollTo(0, 0));
      await page.waitForTimeout(500);
      await page.screenshot({ path: testInfo.outputPath('page.png'), fullPage: true });
    });
  }
}

for (const route of routes) {
  test(`${route} accessibility`, async ({ page }) => {
    await page.setViewportSize({ width: 390, height: 844 });
    await page.emulateMedia({ reducedMotion: 'reduce' });
    await page.goto(route);
    const result = await new AxeBuilder({ page })
      .withTags(['wcag2a', 'wcag2aa', 'wcag21aa', 'wcag22aa']).analyze();
    expect(result.violations.map(({ id, impact, nodes }) => ({
      id, impact, targets: nodes.map((node) => node.target),
    }))).toEqual([]);
  });
}

test('mobile menu opens and closes after navigation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Toggle Navigation Menu' });
  await toggle.click();
  const about = page.getByRole('navigation').getByRole('link', { name: 'About', exact: true });
  await expect(about).toBeVisible();
  await about.click();
  await expect(page).toHaveURL(/\/about$/);
  await expect(about).not.toBeVisible();
});

test('donate mock flow validates and reports local-only completion', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/donate');
  const form = page.locator('form');
  await form.getByLabel('Name').fill('Test visitor');
  await form.getByLabel('Phone').fill('0000000000');
  await form.getByLabel('Email').fill('test@example.invalid');
  await form.getByLabel('UPI reference / bank UTR').fill('TEST-REFERENCE');
  await expect(page.getByText('This build cannot submit applications or payments.', { exact: false })).toBeVisible();
  await form.getByRole('button', { name: 'Run local demo' }).click();
  await expect(page.getByRole('heading', { name: 'Local demo completed', exact: true })).toBeVisible();
  await expect(page.getByText('No data was sent to the NGO.', { exact: false })).toBeVisible();
});

test('application form reports required-field validation', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/apply');
  await page.getByRole('button', { name: 'Run local demo' }).click();
  await expect(page.locator('input[required]').first()).toBeFocused();
});

test('demo can be presented twice without transmitting form data', async ({ page }) => {
  const posts: string[] = [];
  page.on('request', (request) => { if (request.method() === 'POST') posts.push(request.url()); });
  await page.goto('/donate');
  await expect(page.getByText('Demonstration preview', { exact: true })).toBeVisible();
  await page.getByRole('button', { name: 'New membership' }).click();
  await expect(page.getByLabel('Amount', { exact: true })).toHaveValue('2000');
  await expect(page.getByLabel('Amount', { exact: true })).toHaveAttribute('readonly', '');
  for (let round = 0; round < 2; round++) {
    await page.getByRole('button', { name: 'Use sample details' }).click();
    await page.getByRole('button', { name: 'Run local demo' }).click();
    await expect(page.getByRole('heading', { name: 'Local demo completed', exact: true })).toBeVisible();
    await page.getByRole('button', { name: 'Restart demo' }).click();
  }
  expect(posts).toEqual([]);
  await page.goto('/apply');
  await page.getByRole('button', { name: 'Use sample details' }).click();
  await expect(page.getByText('This private demo is not connected to the NGO and cannot accept a real application.', { exact: false })).toBeVisible();
  await page.getByRole('button', { name: 'Run local demo' }).click();
  await expect(page.getByRole('heading', { name: 'Local demo completed — no application sent' })).toBeVisible();
  expect(posts).toEqual([]);
});

test('mobile navigation loops keyboard focus and Escape restores trigger', async ({ page }) => {
  await page.setViewportSize({ width: 390, height: 844 });
  await page.goto('/');
  const toggle = page.getByRole('button', { name: 'Toggle Navigation Menu' });
  await toggle.click();
  await expect(toggle).toHaveAttribute('aria-expanded', 'true');
  await expect(page.getByRole('navigation').getByRole('link', { name: 'Home', exact: true })).toBeFocused();
  await page.keyboard.press('Shift+Tab');
  await expect(toggle).toBeFocused();
  await page.keyboard.press('Escape');
  await expect(toggle).toHaveAttribute('aria-expanded', 'false');
  await expect(toggle).toBeFocused();
});

test('reduced motion uses native scrolling on mount and preference change', async ({ page }) => {
  await page.setViewportSize({ width: 1440, height: 900 });
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/');
  await expect(page.locator('html')).not.toHaveClass(/lenis/);
  expect(await page.locator('html').evaluate((element) => getComputedStyle(element).scrollBehavior)).toBe('auto');
  await page.emulateMedia({ reducedMotion: 'no-preference' });
  await expect(page.locator('html')).toHaveClass(/lenis/);
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await expect(page.locator('html')).not.toHaveClass(/lenis/);
  await expect(page.locator('h1')).toBeVisible();
});

test('competition rules remain a concise pending note without fake clauses', async ({ page }) => {
  await page.emulateMedia({ reducedMotion: 'reduce' });
  await page.goto('/competitions');
  const clauses = page.locator('main button[aria-controls][aria-expanded]');
  await expect(clauses).toHaveCount(0);
  await expect(page.getByText('Information coming soon.', { exact: true })).toBeVisible();
});

test('local links resolve and fragment targets exist', async ({ page, request }) => {
  const checked = new Set<string>();
  for (const route of routes) {
    await page.goto(route);
    const hrefs = await page.locator('a[href]').evaluateAll((links) =>
      links.map((link) => link.getAttribute('href')!));
    for (const href of hrefs) {
      if (!href.startsWith('/') && !href.startsWith('#')) continue;
      const url = new URL(href, `http://127.0.0.1:3100${route}`);
      const key = `${url.pathname}${url.hash}`;
      if (checked.has(key)) continue;
      checked.add(key);
      const response = await request.get(url.href);
      expect.soft(response.status(), key).toBe(200);
      if (url.hash) {
        const html = await response.text();
        expect.soft(html, `missing fragment ${key}`).toContain(`id="${decodeURIComponent(url.hash.slice(1))}"`);
      }
    }
  }
});
