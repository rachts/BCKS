# Payment confirmation runbook

This is an operational draft. Live payment collection is **not ready** until
the treasurer supplies verified UPI/bank details and the endpoint contract,
and the NGO approves the privacy/refund wording.

## Current website flow

1. The donor chooses New membership (Rs 2,000), Renewal (Rs 500 per year) or
   Donation (minimum Rs 200).
2. The website displays placeholders until the treasurer verifies the UPI QR,
   UPI ID and bank details. The site does not process a payment.
3. The visitor can test a synthetic reference/UTR locally. No endpoint is called,
   even if configured in the environment. No PAN or uploads are collected.

## Before enabling the endpoint

The treasurer and Apps Script maintainer must approve:

- Endpoint URL, owner, deployment access and CORS behaviour.
- Separate `formKind` values for `donation_confirmation` and
  `scholarship_application`.
- Exact fields and server validation; no PAN or uploads in v1.
- A client-generated idempotency key reused on retries and a server-generated reference ID.
- Persisted status starting at `Pending`; no client HTTP 200 alone counts as
  persistence.
- Receipt email sender, verification SLA and failure/retry behaviour.
- Retention/deletion, Sheet access and child/guardian data handling.

## Proposed v1 contract — NOT approved or connected

The existing `formKind` names above were a draft, not an authoritative backend
contract. Proposed JSON request examples (synthetic values only):

```json
{"schemaVersion":1,"formKind":"donation_confirmation","idempotencyKey":"<uuid>","type":"donation","amountPaise":20000,"name":"Demo Visitor","phone":"0000000000","email":"demo@example.invalid","reference":"SAMPLE-UTR"}
```

```json
{"schemaVersion":1,"formKind":"scholarship_application","idempotencyKey":"<uuid>","name":"Demo Student","phone":"0000000000","email":"","school":"Demo School","class":9}
```

Donation `type` is `new`, `renewal` or `donation`: server enforces exactly 200000,
50000 or at least 20000 integer paise respectively. Class is an integer 9–12;
application email is optional. Reject unknown fields, enforce bounded text,
server-side email/phone/reference validation and abuse controls. No uploads/PAN.

Success must mean a saved row, not a verified payment: return
`{"ok":true,"referenceId":"<server-id>","status":"Pending","duplicate":false}`
after durable write. Same key/payload returns the same reference; same key with
different payload is rejected. Guard concurrent duplicates with locking and
flag repeated UTRs for review. Reject malformed payloads with bounded public
errors; never return personal data or internal Sheet details.

NGO owns the Google account, Sheet and deployment; grant only needed editor
access. Agree transport/CORS, privacy notice/consent and retention before coding
live integration. Scholarship acknowledgment is not a payment receipt. Only the
treasurer's verification can authorise receipt email; turnaround is unconfirmed.

## Sheet review procedure

1. Open the approved Sheet using the treasurer's normal account; never put its
   URL, credentials or private rows in this repository.
2. Find the row by the server reference ID, not only by donor name or amount.
3. Match the amount, payment type, UPI reference/UTR and date against the bank
   or UPI statement.
4. Check that the supplied details correspond to the verified organisation
   account. Do not treat a screenshot alone as proof.
5. Record the reviewer, review time and evidence location in the restricted
   Sheet audit columns.
6. Change status from `Pending` to `Verified` only after the match is complete.
   For a mismatch use `Needs review`; do not delete the original row.
7. Receipt delivery may run only from the approved automation after status is
   `Verified`. Confirm the delivery result without exposing PAN or documents.

## Incident handling

- Duplicate or uncertain submission: search by reference/idempotency key before
  retrying; never create a second row automatically.
- Wrong account or suspected fraud: set `Needs review`, restrict access and
  notify the treasurer through the approved private channel.
- Endpoint failure: tell the donor that delivery is uncertain; do not claim
  that no row was saved.
- Data leak or exposed credential: revoke the credential, preserve the minimum
  necessary evidence and follow the NGO's incident process.

Keep this runbook aligned with the approved privacy and refund policies.
