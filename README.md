# Bardhaman Chhatra Kalyan Samiti (BCKS)

Next.js website for Bardhaman Chhatra Kalyan Samiti, a student-welfare NGO in
Bardhaman, West Bengal. This repository is a publication candidate, not proof
of registration, tax status, payment credentials, programme history or live
intake. Unverified content remains visibly marked `[TODO: ...]`.

## Verified client-supplied scope

- Activities: scholarships, quiz competitions, drawing and cultural
  competitions, and health checkups.
- Founder and founder-secretary: Sri Baidyanath Singha Roy, now on the
  Advisory Committee; formerly Assistant Headmaster of Bardhaman Raj
  Collegiate School and co-founder of Students Health Home, Bardhaman.
- Fees: new membership Rs 2,000; annual renewal Rs 500; minimum donation
  Rs 200.
- Scholarship eligibility is limited to the four criteria shown on
  `/scholarships` and `/apply`.

See [`docs/CONTENT_NEEDED.md`](docs/CONTENT_NEEDED.md) before publishing.

## Stack and routes

Next.js 16 App Router, React 19, TypeScript, Tailwind CSS v4, GSAP and Lenis.
The current route set is `/`, `/about`, `/scholarships`, `/competitions`,
`/student-programmes`, `/functions`, `/our-people`, `/membership`, `/apply`,
`/agm`, `/updates`, `/donate`, `/ways-to-give`, `/privacy` and
`/refund-policy` and `/gallery`, plus `robots.txt` and `sitemap.xml`.

The visual system is the existing Heritage Broadside design: cream paper,
deep ink, maroon and restrained marigold, serif/sans typography, hairlines and
calm motion. Do not add facts while editing content.

## Requirements

- Node.js `>=20.9.0` and npm `>=10`.
- One package manager: npm. Use the committed `package-lock.json`.
- Forms are hard-coded local demos. Environment variables cannot enable live
  submissions; connecting a service requires a separately approved code change.

## Commands

```bash
npm ci
npm run dev
npm run lint
npm run typecheck
npm run build
npm test
npm run test:axe
npm run test:lighthouse
npm audit --omit=dev --audit-level=high
```

`npm test` runs Playwright route, viewport, overflow, image, console, reduced-
motion, accessibility, navigation, link, mock Donate and form-validation
checks. Lighthouse audits `/`, `/donate` and `/scholarships` on mobile and
writes ignored reports under `reports/verification/`.

## Environment

| Variable | Required | Purpose |
| --- | --- | --- |
| `NEXT_PUBLIC_SITE_URL` | Required for hosted metadata | HTTPS preview origin for social metadata and sitemap. Canonicals still need a production decision. |

Never commit `.env.local`, credentials, QR payloads, private sheet URLs or
tokens. See `docs/PAYMENT_RUNBOOK.md` for the operational contract still
needed before live payment use.

## Content workflow

Editable site constants currently live in `src/content/site.ts`; most page
copy is still in route components and needs migration to `content/` before a
non-developer editing workflow is promised. Use `docs/CONTENT_GUIDE.md` and
the approval register in `docs/CONTENT_NEEDED.md`. Do not publish student or
child names beside photos.

## Deployment notes

`npm run build` exports to `out/`; `npm start` previews that directory locally.
Cloudflare Pages is approved, with Netlify as an alternative: build command
`npm run build`, publish directory `out`, no Next server adapter. Images are
served as static assets (`unoptimized: true`); security headers are supplied by
`public/_headers`. All pages retain noindex, including the 404.

No hosted preview has been deployed. Configure access protection for ALL preview
and domain aliases before sharing: noindex and an unlisted URL are not privacy.
Upload only `out/`, never private `.opencode/` material or archival references.
Public launch remains blocked by content, consent and service approvals.

## Current verification snapshot

2026-10-05: lint, typecheck and static export passed; 93 Playwright tests passed,
including 16-route accessibility, responsive layouts, local-only forms and
withheld photographs. Historical Lighthouse measurements predate this export;
do not treat them as fresh scores. Demo SEO is intentionally limited by noindex.
No live payment, backend, consent or hosted access-control verification is claimed.
