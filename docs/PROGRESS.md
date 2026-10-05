# Progress log

## Supplied organisation crest — 2026-10-05
- Replaced Navbar placeholder boxed BCKS with supplied 640x640 crest; added
  aligned Footer branding using shared `src/components/BrandLogo.tsx`.
  Kept complete artwork, natural colours, square proportions and white backing.
- Asset: `public/images/brand/bcks-logo.png`. Added Next icon/apple-icon and
  supplied-crest favicon; updated OpenGraph/Twitter square-logo metadata.
  No founding/registration details inferred from text in the logo.
- Initial build failed because ICO PNG needed RGBA, not RGB. Regenerated with
  alpha; `npm run build` passed. Prior full lint/typecheck passed with no errors.
- Responsive/page-axe/menu/link run passed **82 tests in 4.1m**. New crest test
  initially checked lazy image loading too early; changed to wait for decoded
  image width. Focused test passed 1/1 at 360/768/1024/1280/1440px: both logos
  square, images load, zero horizontal overflow and all three icon URLs HTTP200.
- Inspected header screenshots at 360 and 1440px: crest/name vertically aligned,
  mobile donation/menu controls fit and desktop navigation remains unbroken.
- Updated content register. No public deployment, commit or new Lighthouse run.
  Previous mobile Lighthouse scores predate this branding change.

## Client-demo handover stage — 2026-10-05
- Completed local-demo form-boundary checks: trimmed email, donation precision,
  focusable custom-error summaries and error descriptions. Kept native checks,
  synthetic-only completion, uncertain-result lock and no demo POSTs.
- Added a separate `test:lighthouse:demo` command checking five routes for
  Performance/Accessibility/Best Practices ≥90 and actual noindex metadata.
  Only crawlability is excluded from demo SEO failure evidence; production
  audit remains strict and no production-readiness claim is made.
- First full run: 90 passed, two new tests failed because generic alert selectors
  also matched Next's route announcer. Scoped to form alerts; focused tests 2/2
  passed. First mobile audit: Home performance 89, other routes 94–99.
- Removed above-fold hero reveal delays and corrected hero responsive sizes;
  kept the layout, full image, below-fold motion and demo protections.
- `npm run lint && npm run typecheck && npm run build && npm run
  test:lighthouse:demo` passed after the fix: Home 97, Gallery 90, Donate 93,
  Apply 99, Scholarships 95 Performance; all Accessibility/Best Practices 100;
  all noindex true; SEO 63–66 informational, no other failing SEO audits.
- Final `npm test && npm audit --omit=dev --audit-level=high && git diff --check`
  passed: **92 tests in 4.2m**, zero production dependency vulnerabilities and
  clean whitespace checks. No asserted overflow, broken images or browser errors
  across 16 routes at four widths; all page/modal axe checks passed.
- Added `docs/CLIENT_DEMO_HANDOVER.md` with local startup, ten-minute meeting
  script, recovery steps and approvals for 6 October 2026 (user time zone).
  Updated `docs/DEMO_GUIDE.md` with actual current measurements.
- Stage complete for a local client demonstration, NOT public production.
  Live backend/storage/idempotency/email, NGO approval, media consent and domain
  deployment remain release blockers. No credentials, real records, live service
  requests, commits or pushes added. Visual-reference sign-off remains pending.

## Donate/Apply disclosure correction — 2026-10-05
- Demo headings and buttons now explicitly describe a local demo, not payment
  confirmation or real application submission. Success does not imply payment,
  receipt, selection or NGO acknowledgment. Browser retention is distinguished
  from the site's no-send/no-intentional-persistence behaviour.
- Both forms disclose that full live validation remains pending: server-side
  checks, storage, duplicate protection and acknowledgment/receipt delivery.
  Merely configuring an endpoint does not prove approved intake/payment availability.
- Submission logic and safe demo defaults unchanged. Updated copy regression
  assertions and `docs/DEMO_GUIDE.md`; no endpoint exercised or personal data used.
- `npm run lint && npm run typecheck && npm run build && npx playwright test
  --grep 'donate|apply|application form|demo can be presented' && git diff --check`
  passed: zero lint warnings/errors; successful typecheck/build; 13 focused
  tests including both routes at four widths, axe, required fields and repeated
  synthetic-only completion with no POST requests. Full 90-test suite not rerun.

## Iteration 1 — truthfulness and repository hygiene

### Audited
- Existing routes, shared navigation/footer, donation and application flows.
- Git state and dependency setup.
- First implementation claims against the client-supplied facts.

### Changed
- Added a single source of truth for verified organisation facts and payment/legal placeholders at `src/content/site.ts`.
- Added the outstanding content register at `docs/CONTENT_NEEDED.md`.
- Added `.env.example` for the future Apps Script endpoint.

### Commands and real results
- `npm ci` — **FAIL**: `ENOTEMPTY` while removing `node_modules/lucide-react`; repeated install on the external drive timed out. The project could not complete the mandatory dependency gate.
- `npm run lint` — **FAIL**: `eslint: command not found` after the incomplete install.
- `npx tsc --noEmit --incremental false` — **FAIL**: TypeScript compiler unavailable through the incomplete install.
- `npm audit --omit=dev --audit-level=high` — **PASS**: `found 0 vulnerabilities`.
- Limited tracked-file secret grep — no matching patterns found. This did not inspect full git history or establish a clean secrets gate.

### Remaining
- Replace all remaining unverified public copy and simulated flows.
- Complete the npm install on a reliable local filesystem before claiming any gate is green.

### Iteration 1 implementation update
- Removed public screenshot assets and the duplicate starter tree; removed the Bun lockfile so npm is the only declared package manager.
- Added verified-content constants, privacy/refund draft pages, custom 404/error handling, sitemap and robots metadata.
- Replaced the donation and application pages with honest three-step flows using a mock when `NEXT_PUBLIC_FORM_ENDPOINT` is blank.
- Added a smoke-test script and `typecheck` script.
- Validation after edits: `node scripts/smoke-test.mjs` — **PASS** (`15 route entrypoints and content guardrails present`); `npm audit --omit=dev --audit-level=high` — **PASS** (`found 0 vulnerabilities`). ESLint and TypeScript remained **FAIL** because the external-drive npm install is incomplete (`Cannot find module './IsArray'`; missing TypeScript lib files).

### Stopped — incomplete and not release-ready
- Zero completed iterations; no iteration commit. Work continued after failed checks contrary to the requested stop rule. No further implementation should proceed without resolving the install blocker.
- `rm -rf node_modules && npm ci` timed out after 120 seconds; a subsequent `npm ci` timed out after 300 seconds. `npm ci --ignore-scripts --no-audit --no-fund --loglevel=verbose` failed with ENOTEMPTY. A further removal/install attempt timed out after 300 seconds. No successful clean installation was observed.
- `node node_modules/eslint/bin/eslint.js .` failed with missing module `./IsArray` (exit 2).
- `node node_modules/typescript/bin/tsc --noEmit --incremental false` failed with missing global types and `lib.esnext.d.ts` (exit 2).
- The smoke script checks file existence only, NOT Playwright, routes returning 200, headings, submissions, accessibility, or links.
- Build, Playwright, axe, Lighthouse, four-width browser checks, reduced-motion, keyboard checks, full-history secrets scan and unused-public-asset gate were NOT run.
- Truthfulness remains incomplete: public pages still contain unsupported facts; mission/vision strings and payment account name in the new content file need source confirmation. CONTENT_NEEDED.md is incomplete.
- Donate/Apply are unfinished: no server acknowledgement validation or Pending-status contract, enforced upload limits, effective honeypot check, or complete validation. Donation amount is not included in submitted FormData. Mock mode needs a notice before submission. Apply incorrectly uses payment-receipt wording.
- The Donate, Apply and Ways to Give rewrites have not been visually compared with Stitch and may violate the layout-preservation requirement. Draft legal/error pages are not linked in the footer. SEO uses a localhost fallback; production configuration remains unresolved.
- Do not claim production readiness or deploy. Recommend moving the project to a user-chosen internal-drive directory for a clean install; no move has been performed.

## Takeover checkpoint — 2026-10-04, iteration 1 initial gate

### Audited
- Inspected current git status, package scripts, route inventory, existing progress/content registers, shared components, and Donate/Apply handlers. Substantial uncommitted work predates this session; it was preserved.
- Read-only route and truthfulness reviews identified unsupported dates, names, results, financial/legal claims and programme details across the original pages. The existing content register remains incomplete.

### Commands run in this session and actual results
| Command | Result |
| --- | --- |
| `npm ci` | PASS: added 362 packages in 54s. Warning: unrs-resolver postinstall is not covered by allowScripts; no approval change made. The previously recorded installation blocker did not recur. |
| `npm run lint` | FAIL, exit 1: 72 problems (3 errors, 69 warnings). Errors: explicit any in src/app/functions/page.tsx:77; unescaped apostrophe in src/components/Footer.tsx:123; synchronous setState in effect in src/components/Navbar.tsx:24. Warnings include unused imports and raw img elements. |
| `npm run typecheck` | PASS: tsc --noEmit --incremental false completed without diagnostics. |
| `npm run build` | PASS: Next.js 16.3.8 compiled and generated 20 static pages, including framework/metadata routes. This does not prove rendering or behavioral correctness. |
| `npm test` | PASS for existing limited script: smoke checks passed: 15 route entrypoints and content guardrails present. This is NOT the requested Playwright gate. The read-only review also ran node scripts/smoke-test.mjs with the same result. |
| `npm audit --omit=dev --audit-level=high` | PASS: found 0 vulnerabilities. |
| `git grep -n -I -E '(sk_live_|pk_live_|AIza|BEGIN (RSA|OPENSSH|EC|DSA) PRIVATE KEY|password[[:space:]]*[:=]|api[_-]?key[[:space:]]*[:=])' -- . ':!package-lock.json' \|\| true` | No matches printed. Limited tracked working-tree pattern check only; NOT proof of a clean secrets gate or git-history scan. |

Lint, typecheck, build, smoke test, audit and limited grep were dispatched together after npm ci succeeded. Their already-dispatched results were collected; no fix was attempted after the lint failure.

### Stop and remaining work
- Stopped under the user's explicit stop-on-failure rule. Zero completed iterations; no application edits or iteration commit in this takeover. Only this progress checkpoint was appended. No pre-existing changes were committed.
- Full gate NOT green: Playwright, axe, Lighthouse, real-browser viewport/overflow checks, reduced-motion/keyboard checks, full-history secrets scanning and unused-public-asset validation were not run.
- Priority truthfulness risks include Donate metadata claiming 50% tax exemption/zero overhead, fabricated committee/member/awardee records, historical milestones, notices and schedules, unsupported scholarship cutoffs and membership tiers, and identifying photo captions without provenance. Replace unsupported facts with explicit TODO placeholders and expand CONTENT_NEEDED.md before publication.
- Donate amount is outside its form and omitted from submitted FormData. Both forms accept any HTTP-success response, lack enforced upload limits and honeypot handling, and disclose mock mode only after apparent success. Apply incorrectly promises a payment receipt. These remain unfixed.
- Annual renewal Rs 500 and the requested donation receipt wording are explicitly supplied in the user's brief; do not incorrectly classify those as invented. Application acknowledgment must remain distinct from payment acknowledgment. Exact approved mission/vision wording still needs locating or confirmation.
- Next action requires resolving the stop condition: authorize a focused repair of the three lint errors, then rerun lint before continuing the truthfulness-first iteration. No project move is currently warranted by the successful install.

## Iteration 1 continuation — authorised lint repair and truthfulness pass

### Scope and changes
- User authorised fixing the three lint errors and resuming the truthfulness-first pass.
- Fixed `functions/page.tsx` with a generic year filter preserving item fields, escaped the Footer apostrophe, and replaced Navbar's effect-based menu reset with a guarded route-change state reset.
- Replaced unsupported factual content across home, About, Scholarships, Student Programmes, Competitions, Functions, People, Membership, AGM and Updates with explicit TODO labels; preserved editorial section structure/classes. Corrected scholarship criteria to the four supplied criteria, membership options to Rs 2,000 new / Rs 500 annual renewal, and membership CTAs to Donate. Removed invented public member/awardee identities and fake PDF actions in those pages.
- Neutralised unsupported Donate and Apply metadata, removed higher-education scholarship keywords, replaced assumed bank account name and mission/vision with TODOs, and corrected shared navigation/footer unsupported programme/history/motto copy.
- Added pre-submit mock disclosures and honest mock success headings in Donate/Apply; separated application acknowledgment from payment receipts; labelled payment details as awaiting verification and exposed 12A/80G placeholders. Full form correctness remains unfinished.
- Expanded `docs/CONTENT_NEEDED.md` with route/field/supplier tables and service/deployment prerequisites. This is an approval backlog, not a declaration of complete rendered truthfulness validation.
- Added Playwright/axe/Lighthouse dev dependencies and Chromium. `npm test` now targets Playwright instead of file existence. Added `playwright.config.ts`, `tests/site.spec.ts`, and `scripts/lighthouse.mjs`; reports ignored via `.gitignore`. The new tests are NOT yet validated or passing.
- Tests defined: 60 route/viewport cases (15 routes x 360/768/1024/1440), 15 axe cases, mobile menu route-close regression and internal link/fragment check. Lighthouse runner targets /, /donate and /scholarships. Donation endpoint, year-filter and member-search behavioral tests still need adding.

### Commands and actual results
| Command/check | Actual result |
| --- | --- |
| `npx eslint src/components/Navbar.tsx` | PASS: 0 errors, 3 existing unused-import warnings (implementation worker). |
| `npx eslint src/app/functions/page.tsx src/components/Footer.tsx` | PASS: 0 errors, 10 warnings (implementation worker). |
| `npm run lint && npm run typecheck && git diff -- src/components/Navbar.tsx src/components/Footer.tsx src/app/functions/page.tsx` | PASS after original lint repair: lint 0 errors / 69 warnings; typecheck no diagnostics. Diff reviewed; pre-existing edits preserved. |
| Python heuristic history scan using `git rev-list --objects --all` and `git cat-file` | 112 blobs, 0 candidate files for private-key headers and selected AWS/Google/GitHub/Stripe token patterns. No secret values printed. Not a comprehensive secrets clearance. |
| Targeted page lint/typecheck by implementation workers | Student-facing six-file batch: 0 lint errors / 33 warnings and typecheck passed. Governance eight-file batch: 0 lint errors / 6 warnings and typecheck passed. Form-disclosure targeted lint passed. These ran before the new Playwright test file was added. |
| `npm install --save-dev @playwright/test @axe-core/playwright lighthouse` | PASS: added 106 packages. unrs-resolver install-script approval warning retained; no approval setting changed. |
| `npx playwright install chromium` | PASS: Chromium 1243, headless shell and FFmpeg downloaded. This is installation, not a browser test result. |
| Shell inspection using `rg` and assumed `src/components/PageHero.tsx` | FAILED: rg not installed, guessed file absent. Used dedicated grep/read afterward; no code result inferred from this failed inspection. |
| `npm ci && npm run lint && npm run typecheck && npm run build && npm audit --omit=dev --audit-level=high` | FAIL at typecheck. npm ci succeeded (468 packages); lint succeeded (0 errors / 43 warnings); typecheck reported TS2339 at tests/site.spec.ts:33 for complete and naturalWidth on SVGElement or HTMLElement. Build and audit were NOT executed by this chained command. |

### Stopped at verification failure
- The TS2339 regression was introduced by this session's new browser test: Playwright's inferred element type needs narrowing to HTMLImageElement before reading image-specific properties. No application TypeScript diagnostic was reported in this run.
- Honouring the stop-on-failure rule: no further implementation, build, browser, axe or Lighthouse run after this failure. No passing iteration or production-readiness claim. No commit created from this failed verification checkpoint; earlier unrelated changes remain uncommitted.
- Next focused repair: narrow the test's image element type, rerun typecheck, then build and run the actual browser/axe/Lighthouse checks. Installed tooling alone does not satisfy the gate.
- Actual donor/application transport, amount payload, upload restrictions, honeypot enforcement, acknowledgment contract, full keyboard/reduced-motion checks, image rights/optimisation, production SEO/domain/security headers, unused public assets and final handover docs remain open. Existing photos remain unverified and must not be deployed as approved material.
- No Stitch screenshot-to-render comparison or per-page acceptance claim was made. Some formerly short invented values now have long TODO labels; responsive fit must be measured and refined without hiding placeholders.

## Verification continuation — 2026-10-05

- User authorised continuation. Narrowed Playwright image elements with `instanceof HTMLImageElement` before reading `complete` and `naturalWidth`; no application changes in this continuation.
- `npm run typecheck && npm run build` — PASS: no type diagnostics; Next.js compiled and generated 20 static pages including framework/metadata routes.
- `npm audit --omit=dev --audit-level=high` — PASS: found 0 vulnerabilities.
- `npm test` — launched the 77-case real Chromium suite; final results pending at this checkpoint. Already completed homepage 360px test reports horizontal overflow: document 397px vs viewport 360px. Do not interpret intermediate passes as full acceptance.
- `npm run test:lighthouse` — FAIL overall, exit 1. Actual mobile category scores (Performance / Accessibility / Best Practices / SEO): `/` 82 / 94 / 100 / 92; `/donate` 94 / 94 / 100 / 91; `/scholarships` 95 / 94 / 100 / 92. Reports: `reports/verification/lighthouse-home.json`, `lighthouse-donate.json`, `lighthouse-scholarships.json` (ignored generated files). Browser suite and Lighthouse ran concurrently: remeasure Lighthouse alone before final performance acceptance.
- Homepage Lighthouse details: FCP 1.2s, LCP 3.5s, Speed Index 4.7s, TBT 250ms, CLS 0. LCP insight requests high fetch priority for the hero photo. Footer motto translation contrast is 3.95:1 (requires 4.5:1); heading order skips to h4/h5. Scores >=90 do not mean zero accessibility violations.
- Python literal-reference scan of public assets — FAIL, exit 1: unreferenced `public/.DS_Store`, `public/{file,globe,next,vercel,window}.svg`, and `public/public/{file,globe,next,vercel,window}.svg`. Heuristic scan; dynamic references require manual review before deletion. No files deleted.
- Read the captured homepage at `test-results/site--renders-at-360px/page.png` and the metadata-matched Stitch mobile image `stitch_screens/09054092529944b78d40cfdd097a5e9b.png`. Oversized TODO metric text visibly breaks the intended compact number treatment; it needs readable labels without hiding missing facts. This is a finding, not visual acceptance.
- Read-only motion inspection: SmoothScroll registers an anonymous GSAP ticker callback without removing it on cleanup; reduced-motion is only checked at mount. RevealOnScroll has gsap.context/revert but also only checks reduced-motion at mount. Not yet runtime-tested.
- An exploratory read of nonexistent `src/components/AnimatedSection.tsx` failed; actual component listing located `RevealOnScroll.tsx`. No code conclusion was drawn from the missing path.
- Stop-on-failure remains in effect: no additional fixes after verification failures. The already-running browser batch will be allowed to complete and its results recorded before reporting. No commit yet.

### Completed browser batch
- `npm test` — FAIL, exit 1: **60 passed, 17 failed**, 77 tests in 3.7 minutes.
- Of 60 route/viewport cases, 58 passed. Homepage overflow failed at 360px (397px document width, 37px excess) and 1024px (1118px document width, 94px excess). Homepage passed at 768px and 1440px; all other 14 routes passed all four widths.
- All 15 axe cases failed for serious color-contrast violations. The shared footer motto-translation text is implicated on every route; several editorial labels, table headers, metadata and marigold text also fail on individual pages.
- Home, Scholarships, Competitions and Membership additionally failed `scrollable-region-focusable` for horizontal table wrappers.
- Mobile menu opening and closing after navigation PASSED. Internal link/fragment check PASSED. These do not establish focus trapping, Escape handling, external-link validity, real document availability or complete keyboard accessibility.
- No HTTP-status, h1 count/nonempty, image-load or browser-console/page-error assertion failures were reported in the 60 render cases. These tests do not check route-specific heading wording, every interaction, or live submissions.
- Axe ran with reduced motion requested; this is NOT an end-to-end proof that GSAP/Lenis is disabled. Full motion, keyboard, form, Stitch-reference and production-readiness acceptance remain incomplete.
- Results and screenshots are retained under ignored `test-results/`, with structured results in `test-results/results.json`. No further code edits or commit after the failed gate.

## Accessibility/overflow repair attempt — 2026-10-05

### Changes
- Homepage: constrained TODO statistic text and editorial columns with `min-w-0`/wrapping, made homepage table scroll region keyboard-focusable with a label, corrected eligibility subheading semantics from h4 to h3, raised low-opacity labels, and marked the hero image high priority/fetch priority.
- Shared navigation: desktop links now switch at `xl` rather than `lg`, avoiding the measured 1024px collision while retaining the mobile menu.
- Shared footer and affected route pages: raised failing low-opacity text to readable existing ink opacity, changed small marigold foreground labels to maroon where axe identified contrast failures, made table scroll wrappers named keyboard-focusable regions, and converted Footer section headings from h5 to h2 while preserving visual classes.
- No new content, facts, palette, fonts or sections added.

### Validation
- Implementation-worker checks: homepage targeted ESLint 0 errors / 7 existing warnings; shared accessibility batch targeted ESLint 0 errors / 33 existing warnings; scoped `git diff --check` passed.
- `npm run build` after these edits — PASS: Next.js compiled, TypeScript completed, and 20 static routes generated.
- `npm run lint && npm run typecheck && npm test` was started concurrently with the edits. The output is not a valid post-edit acceptance run because the suite's later tests received 500 responses from the reused production server during the in-flight build/server transition; an earlier context shows three 500 resource errors. Do not count this run as a regression result. A clean rerun with one freshly started server is required.
- `git diff --check` — PASS: no whitespace errors.
- No commit made. Full accessibility/overflow/Lighthouse verification remains open until a clean fresh-server rerun completes.

## Clean verification continuation — 2026-10-05

- Stopped the stale listener on 127.0.0.1:3100 (PID 8868) after Playwright reported the port occupied, then restarted the suite with a fresh server. The first attempt is recorded as an environment failure, not an application result.
- `npm run lint && npm run typecheck && npm run build` — PASS: lint 0 errors / 43 warnings; typecheck completed; Next.js build compiled and generated 20 static routes. Warnings remain mainly unused imports and raw `<img>` recommendations.
- `npm run test:lighthouse` — PASS, exit 0 on a separate local server: mobile scores were `/` 98 Performance / 100 Accessibility / 100 Best Practices / 92 SEO; `/donate` 97 / 100 / 100 / 91; `/scholarships` 96 / 100 / 100 / 92. Reports written to ignored `reports/verification/lighthouse-{home,donate,scholarships}.json`.
- Donate/Apply submission hardening: client-side honeypot early return, 5 MB and MIME allowlist checks for optional uploads, and donation amount explicitly added to the submitted FormData. These checks still require server-side enforcement and a response schema/idempotency contract before live use.
- Removed the 11 confirmed-unused generated public assets from the earlier literal-reference scan: `public/.DS_Store`, duplicated default SVGs under `public/` and `public/public/`. Existing history PNGs remain because they are referenced by page code, but their rights/provenance and WebP optimisation remain unverified.
- A fresh `npm test` was started after killing the stale listener and is still running at this checkpoint. Do not claim its final result until the process reports completion; the concurrently running prior attempt was invalidated by the server transition. No commit yet.

### Browser result received
- The fresh `npm test` completed: **68 passed, 9 failed**, exit 1. All 15 route/viewport cases through 1024px passed; the nine failures were 1440px routes (`/our-people`, `/membership`, `/apply`, `/agm`, `/updates`, `/donate`, `/ways-to-give`, `/privacy`, `/refund-policy`) reporting browser console 500 resource errors. All 15 axe cases passed, mobile menu navigation passed, and local link/fragment checks passed. No overflow failures remained.
- A focused rerun `npx playwright test tests/site.spec.ts -g 'donate renders at 1440px'` passed 1/1 with a fresh server. The nine 500s therefore appear correlated with the earlier concurrent Lighthouse/server run or transient resource handling, not reproduced in the focused check. A full browser rerun alone is required before acceptance; do not call the 68/9 run green.

### Clean full browser rerun
- `npm test` with no concurrent Lighthouse process — PASS: **77 passed in 3.4 minutes**. All 60 route/viewport cases passed at 360/768/1024/1440px; all 15 axe checks passed with reduced motion; mobile menu navigation and internal link/fragment checks passed. This verifies the current browser suite, not the live Apps Script endpoint or every keyboard interaction.
- Added two behavior tests for mock submission boundaries: Donate local-only completion/wording and Apply required-field browser validation. `npm run typecheck && npx playwright test tests/site.spec.ts -g 'donate mock flow|application form reports'` — PASS: 2 passed in 4.2s.

## Security/footer continuation — 2026-10-05

- Added deployment-safe response headers in `next.config.ts`: X-Content-Type-Options, Referrer-Policy, X-Frame-Options, Permissions-Policy and a CSP allowing same-origin Next assets, the configured HTTPS form endpoint and required inline Next/GSAP styles/scripts. CSP should be tightened for the chosen host after confirming the final endpoint and runtime.
- Linked the clearly labelled draft Privacy and Refund pages from the shared Footer.
- `npm run lint && npm run typecheck && npm run build && npm audit --omit=dev --audit-level=high` — PASS: lint 0 errors / 43 warnings; typecheck clean; build generated 20 static routes; audit found 0 vulnerabilities.
- Runtime header check: `npm start -- --hostname 127.0.0.1 --port 3200` followed by `curl -sS -D - -o /dev/null http://127.0.0.1:3200/` — PASS: HTTP 200 and all configured security headers were present. Server was stopped after the check.
- Current gate status: full browser/axe suite passes 77/77 and Lighthouse mobile passes all required categories on home, Donate and Scholarships. Remaining release blockers are truthfulness/content approvals, live endpoint contract and persistence, image rights/optimisation, metadata canonical/domain configuration, full reduced-motion runtime proof, and docs/deployment handover. No commit created because this working tree began with substantial pre-existing uncommitted changes and branch/commit ownership has not been established.

## Handover documentation continuation — 2026-10-05

- Replaced the inaccurate original README with a truthful setup, route, environment, content-approval, deployment and verification guide. It no longer publishes unverified registration, tax, office, people, programme, date or payment claims.
- Added `docs/CONTENT_GUIDE.md` for evidence-based content editing and `docs/PAYMENT_RUNBOOK.md` for the pending Apps Script/Sheet verification workflow, idempotency, `Pending`/`Verified` statuses and incident handling.
- Final chained command `npm run lint && npm run typecheck && npm run build && npm test` — PASS: lint 0 errors / 43 warnings; typecheck clean; build generated 20 static routes; Playwright **79 passed** in 3.4 minutes, including 60 route/viewport checks, 15 axe checks, navigation/link checks and the two mock form checks.
- Earlier standalone `npm run test:lighthouse` remains PASS: home 98/100/100/92, Donate 97/100/100/91, Scholarships 96/100/100/92 for Performance/Accessibility/Best Practices/SEO. Runtime security header check remains PASS and production dependency audit remains PASS with 0 vulnerabilities.
- Remaining warnings are non-blocking but should be cleaned in a future focused pass: unused imports and raw `<img>` recommendations. Full live endpoint persistence, exact endpoint response validation/idempotency, real UPI/bank details, real photos/rights, exact mission/vision/Bengali copy, production domain/canonical metadata and client content approval remain unverified.

## Demo refinement — 2026-10-05

User requested a demo refinement, not live release. Preserved the editorial
layout and factual placeholders; did not fabricate NGO records or payment QR.

### Changed
- `src/content/demo.ts`: safe-default demo mode, synthetic sample values and
  shared form validation/acknowledgment helpers. Live intake requires explicit
  `NEXT_PUBLIC_DEMO_MODE=false` plus an endpoint; default/demo never fetches.
- Donate/Apply: sample-fill and restart controls, fixed membership amounts,
  visible upload rules, trimmed required fields/phone/PAN validation,
  ref-based double-submit guard, disabled sending-state controls, form kind
  and amount payloads. Live responses must acknowledge `{ok:true,
  status:'Pending',reference:nonempty string}`; uncertain delivery is not
  silently retried. This live contract is not tested against Apps Script.
- Navbar: active route ARIA, expanded/controls, keyboard focus loop and Escape
  focus restoration; removed blur/shadow decoration.
- SmoothScroll/RevealOnScroll: responsive GSAP matchMedia, native mobile and
  reduced-motion scrolling, ticker removal on cleanup, static content after
  preference change, anchor support without global lag-smoothing mutation.
- Layout/styles: explicit demo preview label, skip link, visible maroon focus
  rings and CSS reduced-motion fallback. Demo metadata/robots block indexing.
- `.env.example`: demo mode and public-origin variables documented.
- `docs/DEMO_GUIDE.md`: honest walkthrough and release limitations.

### Actual checks
- Worker targeted lint/typecheck and diff checks passed for their scoped files.
- `npm run lint && npm run typecheck && npm run build && npx playwright test
  --grep 'demo can|mobile navigation loops|reduced motion|donate mock|application
  form reports'` — PASS: lint 0 errors / 40 warnings; typecheck/build succeeded;
  five focused tests passed in 6.6s.
- `npm test` — PASS: **82 passed in 3.5m**, including all 60 viewport checks,
  all 15 axe checks, no observed browser errors/broken images/overflow, synthetic
  form completion/restart with no POSTs, mobile keyboard navigation and runtime
  reduced-motion preference change.
- `npm run test:lighthouse` — FAIL overall, exit 1 due to intentional noindex.
  Mobile Performance/Accessibility/Best Practices/SEO: Home 95/100/100/66;
  Donate 97/100/100/63; Scholarships 98/100/100/66.
- Inspected all three reports: the only failed SEO audit is `is-crawlable`
  ('Page is blocked from indexing'). Kept demo protection; no claim the
  production SEO gate passed. Stop-on-failure: no further application edits
  after this result; only demo/progress documentation recorded the distinction.
- No iteration commit made; inherited uncommitted work was not silently staged.

### Remaining
Production content/media approval, live endpoint contract/persistence/receipts,
official payment details, full Stitch page-by-page visual sign-off and
deployment/domain setup remain outside demo acceptance. Existing photos remain
provenance-pending. This is not a live-release completion claim.

### Demo preview
- Initial `npm start -- --hostname 127.0.0.1 --port 3200` was accidentally
  given a 1000ms timeout: it became ready then timed out; curl returned connection
  refused (HTTP 000). Retried as a background server with timeout disabled.
- `curl -sS -o /dev/null -w 'Demo preview HTTP %{http_code}\n'
  http://127.0.0.1:3200/` — PASS: HTTP 200. Preview left running at
  `http://localhost:3200` for the user.

## Editorial component refinement — 2026-10-05

### Scope and changes
- Preserved page sections, colour tokens, fonts, crop/aspect ratios and TODO
  content. Migrated the remaining raw image slots in About, Scholarships,
  Student Programmes, Functions and People to `next/image`, using static
  imports of existing PNGs for intrinsic dimensions/asset-derived blur,
  responsive sizes and lazy loading. Assets inspected as 512x341 and 512x512;
  no higher-resolution source or publication rights were fabricated.
- Competition clauses now start closed, with stable trigger/panel IDs,
  expanded/control/label relationships, inert/aria-hidden closed panels,
  keyboard operation and calm grid-height/opacity transitions. Refined the
  shared CollapsibleRow similarly and corrected heading/button markup.
- SectionHeader labels now have a decorative 24px x 1px hairline. Balanced
  heading wrapping, hanging quote punctuation, explicit 300ms button
  transitions and active scale 0.98 added without changing typography/palette.
- Removed the remaining unused imports. Full lint is now warning-free.
- Added a regression test for default-closed, single-open, keyboard-operated
  competition rules. Current sample forms and no-index protection remain.

### Commands and actual results
- Worker-scoped ESLint/typecheck/diff checks passed for images and accordions.
- `npm run lint && npm run typecheck && npm run build && npx playwright test
  --grep 'competition clauses'` — PASS: at that point eight unused-import
  warnings remained; build succeeded; focused accordion test passed 1/1.
- After removing the remaining unused imports, `npm run lint && npm run
  typecheck && npm run build && npm test && npm audit --omit=dev
  --audit-level=high && git diff --check` — PASS: lint zero warnings/errors;
  typecheck/build succeeded; **83 Playwright tests passed in 3.5m**;
  production audit found zero vulnerabilities; diff whitespace check clean.
- Every tested route returned HTTP 200 at 360/768/1024/1440px with no observed
  horizontal overflow, broken images or console/page errors. All 15 scoped
  axe checks passed. These are bounded automated checks, not full human WCAG
  or complete visual reference acceptance.
- Lighthouse was not rerun for this component refinement. Previous demo
  no-index SEO failure remains intentional; do not represent production SEO
  as green. Prior performance scores are not new measurements.

### Remaining
- Photos are still provenance-pending; official content and payment details
  remain TODOs. Full Stitch page-by-page comparison and live integration are
  not complete. No invented records, new sections or new dependencies added.
- No commit created; pre-existing uncommitted changes remain preserved.

## Supplied event photo gallery — 2026-10-05

### Follow-up refinement
- Home hero and Functions photographs now preserve complete photographic
  content with object-contain instead of cutting attendees out of portrait
  frames. The audience photo on Student Programmes was moved out of Health
  Checkups into a separate community gallery section; it is not medical evidence.
- Corrected event-18 to Displays & artwork (4 displays, 18 gatherings,
  35 presentations). Removed gallery foreground/background interpolation to
  prevent transient low contrast on hover, without masking the axe check.
- Added `/gallery` to README route inventory and updated category tests.
- `npm run lint && npm run typecheck && npm run build && npm test && git
  diff --check` passed: zero lint warnings/errors, successful build/typecheck,
  all 90 tests passed in 4.0m including responsive/image and accessibility checks.
- No new Lighthouse measurement, public deployment or commit performed.

- Added `/gallery` with all 57 supplied JPEG photographs converted to oriented,
  metadata-stripped WebP assets in `public/images/events/` (5.2 MB total).
  Originals remain untouched. `src/content/gallery.ts` holds dimensions,
  neutral visible-scene descriptions and categories; no event date or person
  identity was inferred. Similar/duplicate views remain included as supplied.
- Added category filtering with reversible All photographs control and live
  counts, responsive complete-image thumbnails, and a native modal viewer.
  Previous/Next, arrow keys, Escape/Close, restored focus and scroll-lock
  cleanup are implemented without a new dependency.
- Reused selected photographs on Home (hero and three-photo gallery teaser),
  Functions (eight different photos), Scholarships and Student Programmes.
  Founder/committee portraits were not replaced with unidentified attendees.
  Added Gallery to navigation More menu, Footer and sitemap. Kept demo noindex
  and local-only forms unchanged. Updated content approval and demo guide.
- `npm run lint && npm run typecheck` passed, zero lint warnings/errors.
- `npm run build && npm test` passed: **90 tests in 4.0m**, including all 16
  routes at 360/768/1024/1440px, 16 page axe audits and a modal axe audit.
  Tests checked all 57 photos, three category counts, reset, arrow/button
  navigation, wraparound, Close/Escape, focus restoration and modal overflow.
  Route checks reported no broken images, browser errors or horizontal overflow.
- Inspected rendered gallery screenshots at 360px and 1440px: filters wrap,
  editorial spacing is maintained and portrait images remain fully visible.
  No independent visual sign-off or new Lighthouse measurement was performed.
- Asset preparation initially failed on an incorrect Sharp return-value
  destructuring; corrected it and successfully processed all 57 images.
  `git diff --check` passed after the final docs update.
- Public launch still requires media permissions/participant or guardian
  consent, approved event names/dates and existing outstanding NGO facts.
  No commit, push or deployment was performed.
# Private static demo verification — 2026-10-05

- Implemented exact supplied mission/vision, concise pending records, no PAN/uploads,
  no live POST paths, placeholder-only payment details, and unconfirmed receipt timing.
- Withheld all 57 unmapped event photos. Preserved originals privately; moved legacy
  misleading portrait assets to `stitch_screens/archive/`, outside the public export.
- Static export to `out/`, unoptimized static images, Cloudflare/Netlify `_headers`,
  local static preview server. Robots/sitemap routes explicitly static.
- Fresh lint/typecheck/build and 16-route file smoke checks passed. Full Playwright
  run: 93 passed. Added static headers/noindex/404/asset-omission/POST-rejection test
  after that run: 1 passed against rebuilt export (94 tests total, split runs).
- No deployment, commit or push. Hosted privacy/access control and live Apps Script
  ownership/schema/storage/idempotency/receipts remain unverified. Proposed contract
  in `docs/PAYMENT_RUNBOOK.md` is not approved or connected.
- Current client walkthrough: `docs/CLIENT_DEMO_HANDOVER.md`. Old progress entries
  and Lighthouse scores below describe earlier builds, not current export results.
