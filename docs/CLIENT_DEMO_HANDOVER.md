# Private client-demo handover

## Start locally

```bash
npm run build
npm start -- --hostname 127.0.0.1 --port 3200
```

Open http://localhost:3200. This is local-only, not a share link. Build exports
to `out/`; no Next server or image optimiser is needed. Forms cannot be made live
by setting environment variables.

## Presentation

1. Home/About: Heritage Broadside styling, supplied facts and exact mission/vision.
2. Scholarships: four supplied eligibility criteria; current notice still pending.
3. Gallery/Functions: explain why photos are withheld until event mapping is verified.
4. Donate: ₹2,000 new membership, ₹500 renewal, donations from ₹200. No real payment
   identifiers. Use sample details, Run local demo, then Restart demo.
5. Apply: synthetic sample details only. No application is sent; no uploads or PAN.
6. Pending records: one short information note instead of fabricated rows/timelines.

No data is sent or intentionally persisted by the demo. Browsers may retain inputs.
No receipt is issued. Future wording is: “We will email your receipt after we verify
your payment.” No turnaround promise is approved.

## Hosting decision

Cloudflare Pages: `npm run build`, publish `out/`, no server adapter. Netlify is
the alternative. `public/_headers` exports CSP/security headers and noindex.
Configure and verify access protection on all hostnames before sharing remotely.
Noindex/unlisted does not make a page private. No deployment has been performed.
Never upload the whole repository, `.opencode/`, private attachments or archives.

## Required confirmations

- Founder: confirm supplied mission/vision once.
- Photo custodian: supply labelled ceremony folders; written rights and guardian consent.
- Treasurer: payment details, verification process, receipt delivery and any timeframe.
- NGO-owned Google account: service owner, editor access, approved schema and privacy/storage contract.
- Governing body: contacts/legal status, notice/records, privacy/refund wording, production domain.

See `docs/CONTENT_NEEDED.md`. Public launch remains blocked. Latest static-build
and browser checks are recorded in `docs/PROGRESS.md`; historical Lighthouse
scores are not fresh measurements of the revised export.
