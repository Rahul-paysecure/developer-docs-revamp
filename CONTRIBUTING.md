# Contributing to Paysecure Developer Documentation

This repository is the source for the Paysecure React developer documentation.
Production content changes are proposed through branches and pull requests;
changes are not made directly on the production branch or Netlify site.

## Before making a change

1. Identify the owning product team and technical reviewer in
   `docs/OWNERSHIP.md`.
2. Confirm the authoritative source: engineering contract, approved product
   specification, current merchant-facing Postman collection, or tracked
   documentation ticket.
3. Keep one pull request focused on one page or one closely related change.
4. Never add merchant names, transaction volumes, personal information,
   credentials, private keys, or live API keys. The documentation is public.

## Local setup

Node.js 22 and npm are required.

```bash
npm ci
npm run dev
```

## Branch names

Use a short-lived branch named for the documentation change:

```text
docs/pix-webhook-update
docs/cashier-session-example
docs/dashboard-balance-copy
```

Do not create permanent branches for individual product teams.

## Editing content

All page copy lives in structured records under `src/content/pages/` or
`src/content/trees/`. Page modules under `src/pages/` are thin route wrappers.

- Preserve every existing stable content ID.
- Do not renumber generated text IDs when editing copy.
- Do not place editorial content back into page-wrapper JSX.
- Keep `TryIt` request fields and response examples structured.
- Do not infer endpoint paths, request fields, enum values, or response data.

In local development, the Admin content editor saves previews in the current
browser. In production, open the page with `?admin=1` and authenticate through
company SSO. **Create pull request** writes a stable-field override to a
short-lived branch and returns the GitHub pull request and Netlify Deploy
Preview. It never writes directly to `main`.

Do not hand-edit `src/content/editor-field-index.json`. When structured fields
are intentionally added or removed, run `npm run editor:index` and review the
generated diff. Committed page overrides live in
`src/content/overrides/<slug>.json`.

## Required verification

Run both commands before opening or updating a pull request:

```bash
npm run verify
npm run build
```

The checks enforce structured-document coverage, stable IDs, routes, media,
interactive requests, Brand ID placement, cURL behavior, editor persistence,
Git editor authentication and conflict contracts, and production compilation.

When a fresh merchant-facing Postman export is available, API changes also
require strict parity verification:

```bash
npm run audit:postman -- "/absolute/path/to/collection.json" /tmp/postman-parity.json --strict
```

## Pull-request review

Review the Netlify Deploy Preview and the changed source. API changes require
engineering approval in addition to documentation review. Merge only after all
required checks, approvals, and review conversations are complete.
