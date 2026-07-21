function normalizedPath(url = '') {
  const withoutOrigin = String(url).replace(/^https?:\/\/[^/]+/i, '');
  return withoutOrigin.split('?')[0].replace(/\/+$/, '') || '/';
}

function fieldValue(fields, key) {
  return fields.find((field) => field.k === key)?.v;
}

// Brand ID placement follows the merchant-facing live Postman collection:
// purchases use body.brand_id; customer, session, mandate and reporting APIs
// use the BrandId header; Interac payouts use the header; other payouts use
// neither. Query/path Brand IDs remain in their URL.
export function brandIdPlacement({ method = 'GET', url = '/', fields = [], brandIdHeader }) {
  const path = normalizedPath(url);
  const payoutMethod = String(fieldValue(fields, 'payoutMethod') || '');
  const inferredHeader =
    /\/customer$/i.test(path) ||
    /\/patchCustomer$/i.test(path) ||
    /\/createSession$/i.test(path) ||
    /\/mandate(?:\/|$)/i.test(path) ||
    /\/external\/transactions\//i.test(path) ||
    (/\/payout$/i.test(path) && /^PAYOUT-INTERAC-/i.test(payoutMethod));
  const header = typeof brandIdHeader === 'boolean' ? brandIdHeader : inferredHeader;
  const canHaveBody = !['GET', 'HEAD'].includes(String(method).toUpperCase());
  const isPayout = /\/payout$/i.test(path);
  const hasBodyField = fields.some((field) => field.k === 'brand_id');

  return {
    header,
    body: canHaveBody && hasBodyField && !header && !isPayout,
  };
}

export function fieldsForBrandIdPlacement(fields = [], placement) {
  if (placement.body) return fields;
  return fields.filter((field) => field.k !== 'brand_id');
}
