# Documentation ownership

Complete this table before enabling required code-owner approval. GitHub team
handles must refer to visible teams with write access to the repository.

| Area | Content owner | Technical reviewer | Documentation reviewer | GitHub team |
|---|---|---|---|---|
| Cards and 3DS | TBD | Payments engineering | Documentation owner | TBD |
| Paysecure Cashier | TBD | Cashier engineering | Documentation owner | TBD |
| Payouts | TBD | Payout engineering | Documentation owner | TBD |
| Alternative payment methods | Relevant product owner | Integrations engineering | Documentation owner | TBD |
| API reference and OpenAPI | API platform | API engineering | Documentation owner | TBD |
| Dashboard | Dashboard product | Dashboard engineering | Documentation owner | TBD |
| Webhooks and operations | API platform | Platform engineering | Documentation owner | TBD |
| React components and deployment | Documentation platform | Frontend/platform engineering | Documentation owner | TBD |

## Approval policy

- Prose-only changes require the content owner and documentation reviewer.
- API fields, endpoints, enums, examples, webhooks, currencies, and status codes
  require a technical reviewer.
- Navigation, shared components, build configuration, and publishing changes
  require the documentation-platform owner.
- The six existing `sourceExampleGap` records cannot be replaced with inferred
  examples. They require a fresh authoritative Postman example or written
  engineering confirmation.
