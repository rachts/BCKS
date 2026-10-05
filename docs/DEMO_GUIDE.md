# Demonstration guide

For the 6 October client meeting, use `docs/CLIENT_DEMO_HANDOVER.md` for the
presentation script, restart instructions and approval checklist.

This is a design/interaction preview, not a live NGO intake or payment site.
Keep visible TODOs: they identify facts awaiting NGO approval, not sample
records. Existing photo provenance still requires approval before publication.

## Run the demo

```bash
npm ci
npm run build
npm start -- --port 3200
```

Open `http://localhost:3200`. Demo mode is the safe default. Set
`NEXT_PUBLIC_DEMO_MODE=true` before building when using an environment file;
it disables submission even if a form endpoint is configured. The preview is
intentionally blocked from search indexing. Do not switch it off for a demo.

## Suggested walkthrough

1. Home: introduce the supplied NGO name, activities and editorial design.
   Explain the visible TODO values rather than presenting them as real records.
2. Scholarships: show the four supplied eligibility criteria. Dates and
   document lists are awaiting the NGO's notice.
3. Donate: choose new membership, renewal or donation; explain the supplied
   fees. No payment QR or real payment action is available.
4. Click **Use sample details**, then **Run local demo**. Completion
   explicitly says nothing was submitted. **Restart demo** lets you repeat it.
5. Apply: use the same sample-details demonstration. Do not enter personal
   information, PAN, real references or children's documents.
6. Mobile navigation: demonstrate keyboard focus, Escape and active links.
   Reduced-motion settings disable smooth scrolling/reveal motion.
7. Gallery: open **More → Gallery** or the Home gallery link. Browse all 57
   supplied photos, filter by visible scene category, and open a photograph.
   Use Previous/Next or arrow keys, then Escape or Close to return to the grid.
   Names and event dates have not been inferred from the photographs.

## What is verified for this demo

- Production build and TypeScript checks succeeded.
- 92 Playwright tests passed, including 64 route/viewport checks and 16 axe
  checks at the tested widths/settings.
- Demo form walkthroughs generated no POST requests and can be restarted.
- Keyboard menu looping/Escape restoration and dynamic reduced-motion
  scrolling checks passed.
- Competition rules start closed; Enter/Space controls a single panel at a
  time, with properly labelled panels and reduced-motion support.
- The gallery and selected Home, Functions, Scholarships and Programme slots
  use optimised user-supplied event photos. Existing legacy photo slots retain
  blur placeholders. Publication rights and participant consent need approval.
- Gallery filtering, keyboard lightbox navigation, focus restoration and
  lightbox accessibility checks passed.
- Local invalid-input/upload tests passed for both forms, including whitespace,
  phone/email, PAN/class, donation decimal precision, file type and 5 MB limit.
- Latest mobile demo Lighthouse Performance: Home 97, Gallery 90, Donate 93,
  Apply 99, Scholarships 95; Accessibility and Best Practices 100 for all five.
  The demo gate requires verified noindex and reports SEO separately.

Use `npm run test:lighthouse:demo` for the preview gate. The strict production
command `npm run test:lighthouse` still requires SEO ≥90; SEO is 63–66 because
indexing is deliberately blocked for the demo. Do not call production green.

## Not verified

Passing the local demo checks is not full Donate/Apply validation. Server-side
validation, storage read-back, duplicate/idempotency protection, acknowledgment
and receipt delivery, and real end-to-end endpoint behaviour remain unverified.
The site does not intentionally persist demo inputs, but browsers may retain them.

Live Apps Script persistence/email, actual transfers, official content and
media approval, production domain/SEO, and complete Stitch visual sign-off.
The live endpoint remains a separate release task. Explicitly disabling demo
mode with an endpoint requires a rebuild and must not be done before approval.
# Current status — 2026-10-05

The revised private static demo supersedes any gallery/upload/live-mode instructions
below. Photos are withheld pending verifiable ceremony mapping; PAN and all uploads
are removed; environment variables cannot enable submissions. Exact supplied
mission/vision are installed. Use `docs/CLIENT_DEMO_HANDOVER.md` for the current
walkthrough. Historical Lighthouse results are not fresh export measurements.
