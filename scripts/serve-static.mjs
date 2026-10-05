import { createServer } from 'node:http';
import { createReadStream } from 'node:fs';
import { readFile, realpath, stat } from 'node:fs/promises';
import { dirname, extname, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';
import { pipeline } from 'node:stream/promises';

// Preview the deployable export, including the static host's header rules.
const args = process.argv.slice(2);
let hostname = '127.0.0.1';
let port = 3000;
for (let index = 0; index < args.length; index++) {
  const option = args[index];
  const value = args[++index];
  if (option === '--hostname' && value) hostname = value;
  else if (option === '--port' && /^\d+$/.test(value ?? '') && Number(value) <= 65535) port = Number(value);
  else throw new Error('Usage: npm start -- --hostname 127.0.0.1 --port 3000');
}

const root = await realpath(resolve(dirname(fileURLToPath(import.meta.url)), '../out'));
await stat(resolve(root, 'index.html'));
const rules = [];
let current;
for (const line of (await readFile(resolve(root, '_headers'), 'utf8')).split(/\r?\n/)) {
  if (!line.trim() || line.trimStart().startsWith('#')) continue;
  if (!/^\s/.test(line)) {
    const escaped = line.trim().split('*').map((part) => part.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'));
    current = { pattern: new RegExp(`^${escaped.join('.*')}$`), headers: {} };
    rules.push(current);
  } else {
    const match = line.trim().match(/^([^:]+):\s*(.+)$/);
    if (!current || !match) throw new Error('Invalid exported _headers rule');
    current.headers[match[1]] = match[2];
  }
}

const mime = {
  '.html': 'text/html; charset=utf-8', '.css': 'text/css; charset=utf-8',
  '.js': 'text/javascript; charset=utf-8', '.mjs': 'text/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8', '.txt': 'text/plain; charset=utf-8',
  '.xml': 'application/xml; charset=utf-8', '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon', '.webp': 'image/webp', '.png': 'image/png',
  '.jpg': 'image/jpeg', '.jpeg': 'image/jpeg', '.gif': 'image/gif', '.avif': 'image/avif',
  '.woff': 'font/woff', '.woff2': 'font/woff2', '.ttf': 'font/ttf', '.otf': 'font/otf',
  '.pdf': 'application/pdf', '.mp4': 'video/mp4', '.webm': 'video/webm',
};

async function findFile(path) {
  const requested = resolve(root, `.${path}`);
  const candidates = path.endsWith('/')
    ? [resolve(requested, 'index.html')]
    : [requested, `${requested}.html`, resolve(requested, 'index.html')];
  for (const candidate of candidates) {
    try {
      const actual = await realpath(candidate);
      if (!actual.startsWith(`${root}${sep}`)) continue;
      const info = await stat(actual);
      if (info.isFile()) return { path: actual, size: info.size };
    } catch (error) {
      if (!['ENOENT', 'ENOTDIR'].includes(error.code)) throw error;
    }
  }
}

const server = createServer(async (request, response) => {
  let path = '/';
  try {
    // Decode before normalization so encoded traversal cannot disappear in URL parsing.
    path = decodeURIComponent((request.url ?? '/').split('?')[0]);
    for (const rule of rules) {
      if (rule.pattern.test(path)) for (const [name, value] of Object.entries(rule.headers)) response.setHeader(name, value);
    }
    if (!path.startsWith('/') || path.includes('\\') || path.includes('\0') || path.split('/').includes('..')) {
      response.writeHead(400).end('Bad request');
      return;
    }
    if (!['GET', 'HEAD'].includes(request.method)) {
      response.writeHead(405, { Allow: 'GET, HEAD' }).end('Method not allowed');
      return;
    }
    const file = await findFile(path);
    const target = file ?? await findFile('/404.html');
    if (!target) {
      response.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' }).end('Not found');
      return;
    }
    response.writeHead(file ? 200 : 404, {
      'Content-Type': mime[extname(target.path).toLowerCase()] ?? 'application/octet-stream',
      'Content-Length': target.size,
    });
    if (request.method === 'HEAD') response.end();
    else await pipeline(createReadStream(target.path), response);
  } catch (error) {
    if (response.headersSent) response.destroy();
    else {
      // All-path policies also cover malformed URL and internal error responses.
      for (const rule of rules) {
        if (rule.pattern.test('/')) for (const [name, value] of Object.entries(rule.headers)) response.setHeader(name, value);
      }
      response.writeHead(error instanceof URIError ? 400 : 500).end(error instanceof URIError ? 'Bad request' : 'Internal server error');
    }
  }
});
server.listen(port, hostname, () => console.log(`Static preview: http://${hostname}:${server.address().port}`));
for (const signal of ['SIGINT', 'SIGTERM']) process.on(signal, () => server.close());
