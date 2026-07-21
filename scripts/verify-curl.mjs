import assert from 'node:assert/strict';
import {
  buildCurl,
  parseCurl,
  requestCode,
  requestPlaceholders,
} from '../src/utils/curl.js';
import { brandIdPlacement, fieldsForBrandIdPlacement } from '../src/utils/brandId.js';

const original = {
  method: 'POST',
  url: 'https://api.paysecure.net/api/v1/purchases/',
  headers: [
    ['Content-Type', 'application/json'],
    ['Authorization', 'Bearer YOUR_API_KEY'],
    ['BrandId', 'YOUR_BRAND_ID'],
  ],
  body: { customer: "O'Brien", amount: 10 },
};

const generated = buildCurl(original);
const parsed = parseCurl(generated);
assert.equal(parsed.method, original.method);
assert.equal(parsed.url, original.url);
assert.deepEqual(parsed.headers, original.headers);
assert.deepEqual(JSON.parse(parsed.body), original.body);
assert.deepEqual(requestPlaceholders(parsed).sort(), ['YOUR_API_KEY', 'YOUR_BRAND_ID']);
assert.match(requestCode('js', parsed), /fetch/);
assert.match(requestCode('py', parsed), /requests\.request/);

const getRequest = parseCurl(
  "curl -L --url 'https://api.paysecure.net/api/v1/purchases/abc' -H 'Accept: application/json'"
);
assert.equal(getRequest.method, 'GET');
assert.equal(getRequest.body, undefined);

assert.throws(() => parseCurl('wget https://example.com'), /start with curl/);
assert.throws(() => parseCurl('curl --insecure https://example.com'), /Unsupported cURL option/);
assert.deepEqual(requestPlaceholders(parseCurl("curl 'https://example.com/{purchaseId}'")), [
  '{purchaseId}',
]);

const purchaseFields = [{ k: 'brand_id', v: '{{BrandId}}' }];
assert.deepEqual(
  brandIdPlacement({ method: 'POST', url: '/purchases/', fields: purchaseFields }),
  { header: false, body: true }
);
assert.deepEqual(
  brandIdPlacement({ method: 'POST', url: '/createSession', fields: [] }),
  { header: true, body: false }
);
assert.deepEqual(
  brandIdPlacement({
    method: 'POST',
    url: '/payout/',
    fields: [{ k: 'payoutMethod', v: 'PAYOUT-INTERAC-ETRANSFER' }],
  }),
  { header: true, body: false }
);
const pixPayoutPlacement = brandIdPlacement({
  method: 'POST',
  url: '/payout/',
  fields: [...purchaseFields, { k: 'payoutMethod', v: 'PAYOUT-PIX' }],
});
assert.deepEqual(pixPayoutPlacement, { header: false, body: false });
assert.deepEqual(fieldsForBrandIdPlacement(purchaseFields, pixPayoutPlacement), []);
assert.deepEqual(
  brandIdPlacement({
    method: 'GET',
    url: '/external/transactions/list?page_no=0',
    fields: [],
  }),
  { header: true, body: false }
);
assert.deepEqual(
  brandIdPlacement({ method: 'GET', url: '/payment_methods?brand_id={brand_id}', fields: purchaseFields }),
  { header: false, body: false }
);

console.log('cURL execution parser and Brand ID placement checks passed');
