# paysecure.openapi.yaml — spec notes (Phase 2)

**Status:** Phase 2 items 2.1–2.6 done. Bootstrapped from the developer-docs prototype on
13 July 2026, then **confirmed by the backend team on 14 July 2026** that the documented
endpoints and request/response shapes match the live API. So the **paths, operations and
examples are accurate**. What that confirmation did *not* cover — and still needs doing — is the
modelling detail below (field types, required flags, enum completeness) plus the Phase 4 content
facts.

## What's in it

- **25 paths / 28 operations**, tagged into 14 areas and grouped (`x-tagGroups`) into
  **Core & platform / Payment methods / Features**, mirroring the docs IA (2.5).
- **Security (2.3):** `bearerAuth` (Bearer API key) + `brandId` (`BrandId` header). One server,
  `https://api.paysecure.net/api/v1` (sandbox and production share it; the *Is Sandbox* flag on
  the key selects the environment).
- **Factored shared components (2.2):** `Client`, `Error`, `PurchaseRequest`, `PurchaseResponse`,
  `PayoutRequest`, `PayoutResponse`, plus the `MethodCode` (24 values) and `TransactionStatus`
  (19 values) enums. Operations reference these rather than repeating shapes.
- **Real examples (2.4):** every operation carries the documented success and failure examples.
  Where one endpoint (e.g. `POST /purchases/`) serves many payment methods, each method's body is
  a separate named example on that one operation.

## Lint (2.6)

- **Redocly:** valid, **0 errors, 0 warnings** (`redocly lint paysecure.openapi.yaml`, config in
  `redocly.yaml`).
- **swagger-parser:** validates (structure + refs resolve).
- **Spectral** (named in the roadmap): could not be run in the build sandbox — its transitive
  dependency `@asyncapi/specs` is broken under Node 22 there (`module is not defined in ES module
  scope`). This is an environment/dependency issue, not a spec issue; Spectral should be wired into
  CI on the team's toolchain. Redocly's `recommended` ruleset served as the lint gate here.

## Deliberate first-cut simplifications (BE to harden — 2.2)

- **Scalar leaf types are intentionally left open.** The schemas document that a field *exists*
  and its nesting/objects/enums, but do not commit to a scalar type BE hasn't confirmed. BE should
  set proper types, formats, and required flags.
- **Request/response schemas are unions of the documented examples** with `additionalProperties`
  allowed, so real payloads validate. Split or tighten per method as needed.
- **Identical path templates were merged** (e.g. `/purchases/{purchaseId}/` vs
  `/purchases/{Session ID}/`) and a stray leading `/v1` / `/api/v1` prefix was stripped from a few
  paths (the server URL already carries `/api/v1`). Confirm none of these were genuinely distinct.
- `Error` is permissive — confirm the real error body.

## Open items that need people, not scraping (Phase 4 / BE)

- Numeric **rate limits**, per-method **currency lists**, **Paymint / On Ramp** method codes.
- Flagged collection quirks: Interac Express payout code, Neosurf refund endpoint, UPI-INTENT,
  Google Pay `PAYMENT_GATEWAY` support.
- **`MethodCode` / `TransactionStatus` enums are partial** — confirm the full lists.
- Confirm which endpoints truly require `BrandId` (applied globally here).
- **Ambiguous path to resolve:** the documented `/{paysecureCustomerId}/patchCustomer` uses a
  leading path variable, which is ambiguous with `/mandate/{id}`. The `no-ambiguous-paths` rule is
  turned off in `redocly.yaml` pending BE confirmation of the real path shape (rather than silently
  rewriting it).

## Regenerate / validate

```bash
node gen-openapi.mjs                              # regenerate from the docs (script in the outputs workspace)
npx @redocly/cli lint paysecure.openapi.yaml       # lint (config: redocly.yaml)
```

## Next (Phase 3)

1. **Done:** BE confirmed the documented endpoints and shapes match the live API (14 Jul 2026).
2. Optional hardening pass with BE input: add scalar types, required flags, and complete the
   enums (turns the accurate-but-loose schemas into fully typed ones).
3. The spec can now drive the generated API reference (3.3), real try-it (5.4), SDKs (5.5) and
   docs-as-tests (5.3).
