# Documentation ownership

This repository currently operates in single-owner mode. `@Rahul-paysecure`
owns every documentation and application area until individual collaborators
are invited.

| Area | Current GitHub owner | Future reviewer role |
|---|---|---|
| Cards and 3DS | `@Rahul-paysecure` | Payments engineering |
| Paysecure Cashier | `@Rahul-paysecure` | Cashier engineering |
| Payouts | `@Rahul-paysecure` | Payout engineering |
| Alternative payment methods | `@Rahul-paysecure` | Product and integrations |
| API reference and OpenAPI | `@Rahul-paysecure` | API engineering |
| Dashboard | `@Rahul-paysecure` | Dashboard product and engineering |
| Webhooks and operations | `@Rahul-paysecure` | Platform engineering |
| React components and deployment | `@Rahul-paysecure` | Frontend and platform engineering |

## Current approval policy

- Every change must be submitted through a pull request.
- The documentation verification and production build must pass before merge.
- Review conversations must be resolved before merge.
- Pull requests are merged using squash merge, and merged working branches are
  deleted automatically.
- Independent approval is temporarily disabled because GitHub does not allow a
  pull-request author to approve their own work.
- API fields, endpoints, enums, examples, webhooks, currencies, and status codes
  must still come from an authoritative source. Do not infer missing contract
  details merely because a second reviewer is not yet configured.
- The remaining Apple Pay Redirect `sourceExampleGap` cannot be replaced with
  an inferred example. It requires a valid saved Postman response with HTTP
  status metadata or written engineering confirmation.

## When collaborators are added

Add each person's GitHub username to the relevant `CODEOWNERS` path, require one
approval and code-owner review on `main`, and assign technical review according
to the table above.
