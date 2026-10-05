import { existsSync } from 'node:fs';
import assert from 'node:assert/strict';

const routes = ['/', '/about', '/scholarships', '/student-programmes', '/competitions', '/functions', '/our-people', '/updates', '/apply', '/donate', '/membership', '/agm', '/ways-to-give', '/privacy', '/refund-policy', '/gallery'];
for (const route of routes) assert.ok(existsSync(route === '/' ? 'src/app/page.tsx' : `src/app${route}/page.tsx`), `missing route ${route}`);
assert.ok(existsSync('src/content/site.ts'));
assert.ok(existsSync('docs/CONTENT_NEEDED.md'));
console.log(`smoke checks passed: ${routes.length} route entrypoints and content guardrails present`);
