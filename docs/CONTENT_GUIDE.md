# Content guide

This site must remain honest before it becomes complete. Edit only from an
approved source document or written approval by the NGO. Never replace a
`[TODO: ...]` value with a plausible guess.

## Before editing

1. Check `docs/CONTENT_NEEDED.md` for the route, field and required supplier.
2. Obtain the source: signed notice, certificate, approved roster, event
   record, bank letter, tax order, rights-cleared image or written approval.
3. Record the source, supplier, approval date and publication permission in
   the NGO's content record.
4. Keep student/child names out of public photo captions unless the privacy
   reviewer has approved publication.
5. Run `npm run lint`, `npm run typecheck`, `npm run build` and `npm test`.

## Where content lives

- `src/content/site.ts`: supplied organisation facts, fees and payment/legal
  placeholders.
- `src/app/<route>/page.tsx`: current route copy and structured page data.
- `src/app/<route>/layout.tsx`: route metadata.
- `docs/CONTENT_NEEDED.md`: approval backlog; it is not a content source.

The next content-architecture iteration should move notices, AGM records,
results, members and programme data into typed files under `src/content/`.
Keep English/Bengali strings separate so a later language toggle does not
duplicate business data.

## Safe editing rules

- Preserve the Heritage Broadside layout, palette and typography.
- Use visible TODO placeholders for missing facts.
- Use real dates only from approved notices; do not use the current year as a
  publication fact.
- Do not add registration, Act, 12A, 80G, CSR, tax deduction, audit,
  beneficiary, office-holder, address, contact or financial claims without
  evidence.
- Link a PDF only when the real file exists and has been reviewed.
- Update `docs/PROGRESS.md` with the source and commands run.
