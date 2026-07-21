import fs from 'node:fs';
import path from 'node:path';
import JSON5 from 'json5';
import { fileURLToPath } from 'node:url';
import { brandIdPlacement, fieldsForBrandIdPlacement } from '../src/utils/brandId.js';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const collectionFile = process.argv[2];
const syncMode = process.argv.includes('--sync');
const strictMode = process.argv.includes('--strict');
const writeAddendaMode = process.argv.includes('--write-addenda');
if (!collectionFile) {
  console.error('Usage: node scripts/audit-postman-parity.mjs <postman_collection.json> [report.json]');
  process.exit(1);
}

const collection = JSON.parse(fs.readFileSync(collectionFile, 'utf8'));

function collectionPage(location) {
  const rules = [
    ['Card Payments', 'api-cards'],
    ['Interac e-Transfer', 'api-interac-etransfer'],
    ['Interac Request Money', 'api-interac-request-money'],
    ['Interac Express', 'api-interac-express'],
    ['PIX', 'api-pix'],
    ['FawryPay', 'api-fawrypay'],
    ['UPI Solution', 'api-upi'],
    ['SPEI Payments', 'api-spei'],
    ['MobileMoney', 'api-mobilemoney'],
    ['Google Pay Redirect', 'api-googlepay'],
    ['Google Pay (Seamless)', 'api-googlepay'],
    ['Apple Pay Redirect', 'api-applepay'],
    ['Apple Pay (Seamless)', 'api-applepay'],
    ['Paymint - Crypto Wallet', 'api-paymint'],
    ['Neosurf - Voucher Payments', 'api-neosurf'],
    ['PayID', 'api-payid'],
    ['CryptoBridge', 'api-cryptobridge'],
    ['Virtual Accounts (South Korea)', 'api-virtual-accounts'],
    ['Paypal Wallet', 'api-paypal'],
    ['Virtual Cards Payout', 'api-virtual-cards-payout'],
    ['Skrill Payment', 'api-skrill'],
    ['Bank Transfers', 'api-bank-transfers'],
    ['Open Banking', 'api-openbanking'],
    ['ThirdParty UPI', 'api-thirdparty-upi'],
    ['Trust Score', 'api-trust-score'],
    ['Cashier APIs', 'api-cashier'],
    ['Recurring Payments', 'api-recurring'],
    ['Transaction Reporting', 'api-transaction-reporting'],
    ['Network Tokenisation', 'api-tokenisation'],
    ['Pre Authorization', 'api-preauth'],
    ['Payout Manual Review', 'api-payout-review'],
    ['Partial Refunds', 'api-partial-refunds'],
    ['ACH Payout', 'api-ach-payout'],
    ['Bitpace Crypto', 'api-pay-with-crypto'],
  ];
  return rules.find(([needle]) => location.includes(needle))?.[1] || null;
}

function rawUrl(request) {
  return typeof request.url === 'string' ? request.url : request.url?.raw || '';
}

function endpoint(url, source) {
  let value = String(url).trim().replace(/^<|>$/g, '').trim();
  value = value.replace(/\{\{BaseURL\}\}/gi, '');
  value = value.replace(/\{\{BaseV2URL\}\}/gi, '');
  if (source === 'postman') {
    value = value.replace(/^https?:\/\/(?:api|app|staging)\.paysecure\.net\/api\/v\d+/i, '');
    value = value.replace(/^https?:\/\/api\.paysecure\.net/i, '');
  }
  const hashless = value.split('#')[0];
  const [pathname, query = ''] = hashless.split('?');
  const cleanPath = `/${pathname.replace(/^\/+/, '').replace(/\/+$/, '')}` || '/';
  return { path: cleanPath === '/' ? '/' : cleanPath, query };
}

function operation(method, url, source) {
  const { path: requestPath, query } = endpoint(url, source);
  const lower = requestPath.toLowerCase();
  if (/\/purchases?$/.test(lower)) return 'purchase-create';
  if (/\/p\/[^/]+/.test(lower)) return 's2s';
  if (/\/payment\/[^/]+/.test(lower)) return 'payment-init';
  if (lower.includes('/refundstatus/')) return 'refund-status';
  if (lower.includes('/refund')) return 'refund';
  if (lower.includes('/capture')) return 'capture';
  if (lower.includes('/cancel')) return 'cancel';
  if (/\/purchases?\/[^/]+/.test(lower)) return 'purchase-status';
  if (/\/payouts?$/.test(lower)) return 'payout-create';
  if (lower.includes('/getpayout/')) return 'payout-status';
  if (lower.includes('/getbalance')) return 'balance';
  if (lower.includes('/createsession')) return 'session';
  if (lower.includes('/patchcustomer')) return 'customer-patch';
  if (/\/customer$/.test(lower)) return `customer-${method.toLowerCase()}`;
  if (lower.includes('/mandate')) return `mandate-${method.toLowerCase()}-${query ? 'list' : 'item'}`;
  if (lower.includes('/external/transactions/list')) return 'transaction-list';
  if (lower.includes('/external/transactions/data')) return 'transaction-detail';
  if (lower.includes('/payments_methods') || lower.includes('/payment_methods')) return 'payment-methods';
  if (lower.includes('/checkwhitelist')) return 'check-whitelist';
  if (lower.includes('/whitelist/upload')) return 'whitelist-upload';
  if (lower.includes('/listsavedcards')) return 'list-saved-cards';
  if (lower.includes('/deletetoken')) return 'delete-token';
  if (lower.includes('/trustscore')) return 'trust-score';
  if (lower.includes('/checktransallowed')) return 'check-transaction';
  if (lower.includes('/payouts/')) return `payout-review-${query.includes('reject') ? 'reject' : 'approve'}`;
  return `${method.toLowerCase()}:${lower.replace(/[0-9a-f]{24}/gi, '{id}').replace(/\{[^}]+\}/g, '{id}')}`;
}

function normalizeField(field) {
  return String(field).replace(/\[\d+\]/g, '[]').replace(/\.\d+(?=\.|$)/g, '[]');
}

function leafEntries(value, prefix = '', result = []) {
  if (Array.isArray(value)) {
    if (!value.length) result.push([prefix, value]);
    else leafEntries(value[0], `${prefix}[]`, result);
    return result;
  }
  if (value && typeof value === 'object') {
    const entries = Object.entries(value);
    if (!entries.length && prefix) result.push([prefix, value]);
    for (const [key, child] of entries) {
      leafEntries(child, prefix ? `${prefix}.${key}` : key, result);
    }
    return result;
  }
  if (prefix) result.push([normalizeField(prefix), value]);
  return result;
}

function parsedBody(raw) {
  if (!raw || !String(raw).trim()) return null;
  return JSON5.parse(raw);
}

function responseKind(response) {
  const code = Number(response.code || 0);
  const label = `${response.name || ''} ${response.status || ''}`.toLowerCase();
  if ((code >= 200 && code < 300) || label.includes('success')) return 'success';
  if (code >= 400 || label.includes('error') || label.includes('invalid')) return 'error';
  return 'other';
}

function responseLabel(response) {
  return `${response.name || ''} ${response.status || ''}`.toLowerCase();
}

function selectSuccessResponse(responses) {
  return (
    responses.find((response) => /success|accepted|created|paid/.test(responseLabel(response)) && !/error|failure|invalid/.test(responseLabel(response))) ||
    responses.find((response) => Number(response.code) >= 200 && Number(response.code) < 300 && !/error|failure|invalid/.test(responseLabel(response))) ||
    null
  );
}

function selectErrorResponse(responses) {
  return (
    responses.find((response) => /error|failure|invalid|unauthori|not found/.test(responseLabel(response))) ||
    responses.find((response) => Number(response.code) >= 400) ||
    null
  );
}

const postmanRequests = [];
function walkPostman(items, parents = []) {
  for (const item of items || []) {
    const location = [...parents, item.name].join(' > ');
    if (!item.request) {
      walkPostman(item.item, [...parents, item.name]);
      continue;
    }
    const page = collectionPage(location);
    const body = parsedBody(item.request.body?.raw);
    const responses = (item.response || []).map((response) => {
      let parsed = null;
      let parseError = '';
      try {
        parsed = parsedBody(response.body);
      } catch (error) {
        parseError = error.message.split('\n')[0];
      }
      return {
        name: response.name,
        code: response.code || null,
        status: response.status || '',
        kind: responseKind(response),
        parsed,
        parseError,
      };
    });
    postmanRequests.push({
      page,
      location,
      name: item.name,
      method: item.request.method,
      url: rawUrl(item.request),
      operation: operation(item.request.method, rawUrl(item.request), 'postman'),
      body,
      requestEntries: leafEntries(body),
      headers: (item.request.header || []).filter((header) => !header.disabled).map((header) => header.key),
      headerEntries: (item.request.header || [])
        .filter((header) => !header.disabled)
        .map((header) => ({ key: header.key, value: header.value || '' })),
      bodyMode: item.request.body?.mode || '',
      responses,
    });
  }
}
walkPostman(collection.item);

const reactRequests = [];
const fileLines = new Map();
const pageDir = path.join(ROOT, 'src', 'pages');
for (const file of fs.readdirSync(pageDir).filter((name) => name.endsWith('.jsx')).sort()) {
  const page = file.replace(/\.jsx$/, '');
  const lines = fs.readFileSync(path.join(pageDir, file), 'utf8').split('\n');
  fileLines.set(file, lines);
  lines.forEach((line, index) => {
    const match = line.match(/h\(TryIt, (\{.*\})\),?$/);
    if (!match) return;
    const props = JSON.parse(match[1]);
    const placement = brandIdPlacement({
      method: props.method,
      url: props.url,
      fields: props.config?.fields || [],
      brandIdHeader: props.config?.brandIdHeader,
    });
    const fields = fieldsForBrandIdPlacement(props.config?.fields || [], placement);
    reactRequests.push({
      page,
      file,
      line: index + 1,
      method: props.method,
      url: props.url,
      operation: operation(props.method, props.url, 'react'),
      requestEntries: fields.map((field) => [normalizeField(field.k), field.v]),
      response: props.config?.response,
      responseStatus: props.config?.status || '',
      errorResponse: props.config?.errorResponse,
      errorStatus: props.config?.errorStatus || '',
      props,
    });
  });
}

const addendaFile = path.join(ROOT, 'src', 'data', 'postman-addenda.json');
if (fs.existsSync(addendaFile)) {
  const addenda = JSON.parse(fs.readFileSync(addendaFile, 'utf8'));
  addenda.forEach((example, index) => {
    const placement = brandIdPlacement({
      method: example.method,
      url: example.url,
      fields: example.config?.fields || [],
      brandIdHeader: example.config?.brandIdHeader,
    });
    const fields = fieldsForBrandIdPlacement(example.config?.fields || [], placement);
    reactRequests.push({
      page: example.slug,
      file: 'src/data/postman-addenda.json',
      line: index + 1,
      method: example.method,
      url: example.url,
      operation: operation(example.method, example.url, 'react'),
      requestEntries: fields.map((field) => [normalizeField(field.k), field.v]),
      response: example.config?.response,
      responseStatus: example.config?.status || '',
      errorResponse: example.config?.errorResponse,
      errorStatus: example.config?.errorStatus || '',
      props: { method: example.method, url: example.url, config: example.config },
      source: example.source,
      generatedAddendum: true,
    });
  });
}

function keyFor(request) {
  return `${request.page}|${request.method}|${request.operation}`;
}

const postmanQueues = new Map();
for (const request of postmanRequests.filter((request) => request.page)) {
  const key = keyFor(request);
  if (!postmanQueues.has(key)) postmanQueues.set(key, []);
  postmanQueues.get(key).push(request);
}

function setDiff(left, right) {
  const rightSet = new Set(right);
  return [...new Set(left)].filter((value) => !rightSet.has(value)).sort();
}

function importantValues(entries) {
  return Object.fromEntries(
    entries.filter(([field]) => /(?:^|\.)(?:paymentMethod|payoutMethod|currency|type|payment_type|skip_capture)$/i.test(field))
  );
}

const matches = [];
const syncPairs = [];
const unmatchedReact = [];
for (const react of reactRequests) {
  const queue = postmanQueues.get(keyFor(react));
  const reactFieldsForMatch = react.requestEntries.map(([field]) => field);
  let bestIndex = react.source ? queue?.findIndex((candidate) => candidate.location === react.source) ?? -1 : queue?.length ? 0 : -1;
  let bestScore = Number.POSITIVE_INFINITY;
  for (let index = 0; react.page === 'api-payout-review' && index < (queue?.length || 0); index += 1) {
    const candidate = queue[index];
    const candidateFields = candidate.requestEntries.map(([field]) => field);
    const fieldScore =
      setDiff(candidateFields, reactFieldsForMatch).length +
      setDiff(reactFieldsForMatch, candidateFields).length;
    const candidateEndpoint = endpoint(candidate.url, 'postman').path.toLowerCase();
    const reactEndpoint = endpoint(react.url, 'react').path.toLowerCase();
    const score = fieldScore + (candidateEndpoint === reactEndpoint ? 0 : 2);
    if (score < bestScore) {
      bestScore = score;
      bestIndex = index;
    }
  }
  const postman = bestIndex >= 0 ? queue.splice(bestIndex, 1)[0] : null;
  if (!postman) {
    unmatchedReact.push(react);
    continue;
  }
  const postmanRequestFields = postman.requestEntries.map(([field]) => field);
  const reactRequestFields = react.requestEntries.map(([field]) => field);
  const success = selectSuccessResponse(postman.responses);
  const error = selectErrorResponse(postman.responses);
  const postmanSuccessFields = success?.parsed ? leafEntries(success.parsed).map(([field]) => field) : [];
  const reactSuccessFields = react.response ? leafEntries(react.response).map(([field]) => field) : [];
  const postmanErrorFields = error?.parsed ? leafEntries(error.parsed).map(([field]) => field) : [];
  const reactErrorFields = react.errorResponse ? leafEntries(react.errorResponse).map(([field]) => field) : [];
  const postmanEndpoint = endpoint(postman.url, 'postman');
  const reactEndpoint = endpoint(react.url, 'react');
  const proseSource = (fileLines
    .get(react.file) || [])
    .filter((line) => !line.includes('h(TryIt,'))
    .join('\n');
  const missingFromPageText = postmanRequestFields.filter((field) => {
    const candidates = [field, field.replace(/\[\]/g, ''), field.split('.').at(-1).replace(/\[\]/g, '')];
    return !candidates.some((candidate) => candidate && proseSource.includes(`"${candidate}"`));
  });
  syncPairs.push({ react, postman, success, error });
  matches.push({
    page: react.page,
    react: `${react.file}:${react.line}`,
    postman: postman.location,
    method: react.method,
    operation: react.operation,
    urlMismatch: postmanEndpoint.path.toLowerCase() !== reactEndpoint.path.toLowerCase(),
    urls: { postman: postmanEndpoint.path, react: reactEndpoint.path },
    request: {
      missingInReact: setDiff(postmanRequestFields, reactRequestFields),
      extraInReact: setDiff(reactRequestFields, postmanRequestFields),
      postmanImportantValues: importantValues(postman.requestEntries),
      reactImportantValues: importantValues(react.requestEntries),
    },
    parameters: { missingFromPageText },
    success: {
      postmanExample: success ? { name: success.name, code: success.code, status: success.status, parseError: success.parseError } : null,
      reactStatus: react.responseStatus,
      missingInReact: setDiff(postmanSuccessFields, reactSuccessFields),
      extraInReact: setDiff(reactSuccessFields, postmanSuccessFields),
    },
    error: {
      postmanExample: error ? { name: error.name, code: error.code, status: error.status, parseError: error.parseError } : null,
      reactStatus: react.errorStatus,
      missingInReact: setDiff(postmanErrorFields, reactErrorFields),
      extraInReact: setDiff(reactErrorFields, postmanErrorFields),
    },
  });
}

const unmatchedPostman = [...postmanQueues.values()].flat();
const mismatchMatches = matches.filter(
  (match) =>
    match.urlMismatch ||
    match.request.missingInReact.length ||
    match.request.extraInReact.length ||
    match.parameters.missingFromPageText.length ||
    match.success.missingInReact.length ||
    match.success.extraInReact.length ||
    match.error.missingInReact.length ||
    match.error.extraInReact.length
);

const invalidResponseExamples = postmanRequests.flatMap((request) =>
  request.responses
    .filter((response) => response.parseError)
    .map((response) => ({
      request: request.location,
      response: response.name || '(unnamed)',
      code: response.code,
      error: response.parseError,
    }))
);
const emptyUrlRequests = postmanRequests
  .filter((request) => !request.url.trim())
  .map((request) => request.location);
const hardCodedAuthorizationHeaders = postmanRequests
  .filter((request) =>
    request.headerEntries.some(
      (header) =>
        header.key.toLowerCase() === 'authorization' &&
        header.value.trim() &&
        !/\{\{[^}]+\}\}/.test(header.value)
    )
  )
  .map((request) => request.location);
const responseStatusAnomalies = postmanRequests.flatMap((request) =>
  request.responses
    .filter((response) => {
      const label = responseLabel(response);
      const code = Number(response.code || 0);
      return (
        (/success|accepted|created|paid/.test(label) && code >= 400) ||
        (/error|failure|invalid|unauthori|not found/.test(label) && code >= 200 && code < 300)
      );
    })
    .map((response) => ({ request: request.location, response: response.name, code: response.code }))
);

const report = {
  generatedAt: new Date().toISOString(),
  collection: path.resolve(collectionFile),
  summary: {
    postmanRequests: postmanRequests.length,
    reactRequests: reactRequests.length,
    matched: matches.length,
    matchedWithDifferences: mismatchMatches.length,
    unmatchedReact: unmatchedReact.length,
    unmatchedPostman: unmatchedPostman.length,
    invalidPostmanResponseExamples: invalidResponseExamples.length,
  },
  collectionIssues: {
    invalidResponseExamples,
    emptyUrlRequests,
    hardCodedAuthorizationHeaders,
    responseStatusAnomalies,
    nonJsonRequests: postmanRequests
      .filter((request) => request.bodyMode && request.bodyMode !== 'raw')
      .map((request) => ({ request: request.location, bodyMode: request.bodyMode })),
  },
  matches: mismatchMatches,
  unmatchedReact: unmatchedReact.map(({ page, file, line, method, url, operation }) => ({ page, react: `${file}:${line}`, method, url, operation })),
  unmatchedPostman: unmatchedPostman.map(({ page, location, method, url, operation }) => ({ page, location, method, url, operation })),
};

function requestFieldName(field) {
  return field.replace(/\[\]/g, '[0]');
}

function sanitizedScalar(field, value) {
  const lower = field.toLowerCase();
  if (typeof value === 'string' && /\b[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}\b/i.test(value)) return 'user@example.com';
  if (lower.includes('merchantcustomerid')) return 'merchant-customer-12345';
  if (lower === 'brand_id' || lower.endsWith('.brand_id')) return '{{BrandId}}';
  if (lower.includes('merchantref') || lower.includes('merchant_reference')) return 'order-12345';
  if (lower.includes('email')) return 'user@example.com';
  if (lower.includes('merchantname') || lower.includes('merchant_name')) return 'Test Merchant';
  if (lower.endsWith('.legal_name') || lower.endsWith('.brand_name')) return 'Test Merchant';
  if (
    lower.endsWith('full_name') ||
    lower.endsWith('fullname') ||
    lower.endsWith('cardholder_name') ||
    lower.endsWith('cardholdername') ||
    lower.endsWith('bankaccountname') ||
    lower.endsWith('.name')
  ) return 'Test User';
  if (lower.includes('phone')) return '+15555550123';
  if (lower.includes('street_address') || lower.endsWith('.address')) return '1 Test Street';
  if (lower.includes('zip_code')) return '10001';
  if (lower.includes('date_of_birth') || lower.endsWith('_date')) return '1990-01-01';
  if (
    lower.includes('_ip') ||
    lower.endsWith('.ip') ||
    lower.includes('ip_address') ||
    /(?:^|\.)(?:clientip|merchantip|remoteip|ipaddress|createdfromip)$/.test(lower)
  ) return '203.0.113.10';
  if (lower.endsWith('avatarurl') || lower.endsWith('avatar_url')) return 'https://merchant.example/avatar.png';
  if (/(?:redirect|callback)$/.test(lower)) return `https://merchant.example/${lower.replace(/_/g, '-')}`;
  if (typeof value === 'string' && /rahul/i.test(value)) return 'Test User';
  if (value && typeof value === 'object') return JSON.stringify(value);
  return value;
}

function sanitizedExample(value, field = '') {
  if (Array.isArray(value)) return value.length ? [sanitizedExample(value[0], `${field}[]`)] : [];
  if (value && typeof value === 'object') {
    return Object.fromEntries(
      Object.entries(value).map(([key, child]) => [key, sanitizedExample(child, field ? `${field}.${key}` : key)])
    );
  }
  return sanitizedScalar(field, value);
}

function mergeExample(current, source, field = '') {
  if (current === undefined) return sanitizedExample(source, field);
  if (Array.isArray(source)) {
    if (!source.length) return Array.isArray(current) ? current : [];
    const currentFirst = Array.isArray(current) ? current[0] : undefined;
    return [mergeExample(currentFirst, source[0], `${field}[]`)];
  }
  if (source && typeof source === 'object') {
    const currentObject = current && typeof current === 'object' && !Array.isArray(current) ? current : {};
    const merged = { ...currentObject };
    for (const [key, child] of Object.entries(source)) {
      merged[key] = mergeExample(currentObject[key], child, field ? `${field}.${key}` : key);
    }
    return merged;
  }
  return current;
}

function formattedStatus(response, fallback) {
  if (!response?.code) return fallback;
  const labels = { 200: 'OK', 201: 'Created', 202: 'Accepted', 204: 'No Content', 400: 'Bad Request', 401: 'Unauthorized', 404: 'Not Found', 500: 'Internal Server Error' };
  return `${response.code} ${response.status || labels[response.code] || ''}`.trim();
}

const addendumSpecs = [
  ['Payment Methods > 💳 Card Payments > APIs > Purchase', 'api-cards', 'Create a card purchase', 'Create the purchase object before initiating card payment.'],
  ['Payment Methods > 💳 Card Payments > APIs > Payment (To be initiated From client browser)', 'api-cards', 'Initiate payment from the customer browser', 'Open this endpoint from the customer browser after creating the purchase.'],
  ['Payment Methods > 💳 Card Payments > APIs > Get Status', 'api-cards', 'Get card purchase status', 'Retrieve the latest card purchase state.'],
  ['Payment Methods > 💳 Card Payments > APIs > Refund', 'api-cards', 'Refund a card purchase', 'Initiate a refund for the purchase.'],
  ['Payment Methods > 💳 Card Payments > APIs > Cancel', 'api-cards', 'Cancel a card purchase', 'Cancel a purchase that has not reached a terminal state.'],
  ['Payment Methods > 💰 APMs (Alternative Payment Methods) > 🌎 Google Pay (Seamless) > APIs > Purchases (Decrypted Flow)', 'api-googlepay', 'Google Pay seamless — decrypted flow', 'Create a purchase using the decrypted Google Pay payload contract.'],
  ['Payment Methods > 💰 APMs (Alternative Payment Methods) > 🌎 Google Pay Redirect > APIs > Session', 'api-googlepay', 'Google Pay redirect — create session', 'Create a hosted Google Pay session for an existing customer.'],
  ['Payment Methods > 💰 APMs (Alternative Payment Methods) > 🌎 Google Pay (Seamless) > APIs > Get Status', 'api-googlepay', 'Google Pay seamless — get status', 'Retrieve the latest seamless Google Pay purchase state.'],
  ['Payment Methods > 💰 APMs (Alternative Payment Methods) > 🌎 Apple Pay (Seamless) > APIs > Purchases (Decrypted Flow)', 'api-applepay', 'Apple Pay seamless — decrypted flow', 'Create a purchase using the decrypted Apple Pay payload contract.'],
  ['Payment Methods > 💰 APMs (Alternative Payment Methods) > 🌎 Apple Pay Redirect > APIs > Session', 'api-applepay', 'Apple Pay redirect — create session', 'Create a hosted Apple Pay session for an existing customer.'],
  ['Payment Methods > 💰 APMs (Alternative Payment Methods) > 🌎 Apple Pay Redirect > APIs > Get Status', 'api-applepay', 'Apple Pay redirect — get status', 'Retrieve the latest redirect Apple Pay purchase state.'],
  ['Payment Methods > 💰 APMs (Alternative Payment Methods) > 🌎 Apple Pay (Seamless) > APIs > Get Status', 'api-applepay', 'Get Apple Pay purchase status', 'Retrieve the latest Apple Pay purchase state.'],
  ['Payout Manual Review > List Payouts', 'api-payout-review', 'List payouts pending manual review', 'Retrieve payouts using the filters in the live collection.'],
  ['Payout Manual Review > Approve Payout', 'api-payout-review', 'Approve payout without remarks', 'Approve a payout without submitting a remarks body.'],
  ['Payout Manual Review > Reject Payout', 'api-payout-review', 'Reject payout without remarks', 'Reject a payout without submitting a remarks body.'],
];

function addendumUrl(request) {
  const { path: requestPath, query } = endpoint(request.url, 'postman');
  const cleanPath = requestPath
    .replace(/purchaseid/gi, '{purchaseId}')
    .replace(/[0-9a-f]{24}/gi, '{purchaseId}')
    .replace(/\{\{([^{}]+)\}\}/g, '{$1}');
  if (!query) return cleanPath;
  const params = new URLSearchParams(query);
  for (const [key, value] of params.entries()) {
    if (key.toLowerCase().includes('email')) params.set(key, 'user@example.com');
    else if (key.toLowerCase().includes('date')) params.set(key, value.replace(/\d{4}-\d{2}-\d{2}/, '2026-01-01'));
  }
  return `${cleanPath}?${params.toString()}`;
}

if (writeAddendaMode) {
  const addenda = addendumSpecs.map(([location, slug, title, description], index) => {
    const request = postmanRequests.find((candidate) => candidate.location === location);
    if (!request) throw new Error(`Addendum source not found: ${location}`);
    const success = selectSuccessResponse(request.responses);
    const error = selectErrorResponse(request.responses);
    const config = {
      fields: request.requestEntries.map(([field, value]) => ({
        k: requestFieldName(field),
        v: sanitizedScalar(field, value),
        req: false,
      })),
    };
    if (success?.parsed) {
      config.status = formattedStatus(success, '200 OK');
      config.response = sanitizedExample(success.parsed);
    }
    if (error?.parsed) {
      config.errorStatus = formattedStatus(error, '400 Bad Request');
      config.errorResponse = sanitizedExample(error.parsed);
    }
    return {
      slug,
      id: `live-collection-${index + 1}`,
      title,
      description,
      source: location,
      method: request.method,
      url: addendumUrl(request),
      config,
    };
  });
  fs.writeFileSync(path.join(ROOT, 'src', 'data', 'postman-addenda.json'), `${JSON.stringify(addenda, null, 2)}\n`);
  console.log(`Generated ${addenda.length} React addendum examples from the live collection.`);
}

if (syncMode) {
  const changedFiles = new Set();
  for (const { react, postman, success, error } of syncPairs) {
    if (react.generatedAddendum) continue;
    const props = react.props;
    props.config ||= {};
    const existingFields = props.config.fields || [];
    const used = new Set();
    const syncedFields = postman.requestEntries.map(([postmanField, value]) => {
      const exactIndex = existingFields.findIndex((field, index) => !used.has(index) && normalizeField(field.k) === postmanField);
      const caseIndex = existingFields.findIndex(
        (field, index) => !used.has(index) && normalizeField(field.k).toLowerCase() === postmanField.toLowerCase()
      );
      const arrayBaseIndex = existingFields.findIndex(
        (field, index) =>
          !used.has(index) &&
          normalizeField(field.k).replace(/\[\]$/, '').toLowerCase() === postmanField.toLowerCase()
      );
      const index = exactIndex >= 0 ? exactIndex : caseIndex >= 0 ? caseIndex : arrayBaseIndex;
      if (index >= 0) {
        used.add(index);
        const contractValue = /(?:^|\.)(?:paymentMethod|payoutMethod|currency|type|payment_type|skip_capture)$/i.test(postmanField)
          ? value
          : existingFields[index].v;
        return {
          ...existingFields[index],
          k: requestFieldName(postmanField),
          v: sanitizedScalar(postmanField, contractValue),
        };
      }
      return { k: requestFieldName(postmanField), v: sanitizedScalar(postmanField, value), req: false };
    });
    existingFields.forEach((field, index) => {
      if (!used.has(index)) syncedFields.push(field);
    });
    const exclusions = new Set();
    if (postman.location.includes('Apple Pay (Seamless)') && postman.location.includes('Encrypted Flow')) {
      exclusions.add('extraParam.applepay_param.apple_merchant_id');
      exclusions.add('extraParam.applepay_param.applepay_encrypted_payload');
    }
    if (postman.location.includes('Payout Manual Review') && postman.location.includes('With Remarks')) {
      exclusions.add('reviewed_by');
    }
    if (postman.location.endsWith('Pre Authorization > APIs > Capture')) exclusions.add('amount');
    if (postman.location.endsWith('Recurring Payments > APIs > Revoke Mandate')) {
      exclusions.add('pause_start_date');
      exclusions.add('pause_end_date');
    }
    props.config.fields = syncedFields
      .filter((field) => !exclusions.has(field.k))
      .map((field) => ({ ...field, v: sanitizedScalar(field.k, field.v) }));

    if (success?.parsed) {
      props.config.response = sanitizedExample(success.parsed);
      props.config.status = formattedStatus(success, props.config.status || '200 OK');
    }
    if (error?.parsed) {
      props.config.errorResponse = sanitizedExample(error.parsed);
      props.config.errorStatus = formattedStatus(error, props.config.errorStatus || '400 Bad Request');
    }
    if (props.config.response !== undefined) props.config.response = sanitizedExample(props.config.response);
    if (props.config.errorResponse !== undefined) props.config.errorResponse = sanitizedExample(props.config.errorResponse);

    const lines = fileLines.get(react.file);
    lines[react.line - 1] = lines[react.line - 1].replace(/h\(TryIt, \{.*\}\),?$/, `h(TryIt, ${JSON.stringify(props)}),`);
    changedFiles.add(react.file);
  }
  for (const react of unmatchedReact) {
    if (react.generatedAddendum) continue;
    const props = react.props;
    props.config ||= {};
    props.config.fields = (props.config.fields || []).map((field) => ({
      ...field,
      v: sanitizedScalar(field.k, field.v),
    }));
    if (react.operation === 'purchase-create') {
      const standardOptionalFields = [
        ['pending_redirect', 'https://merchant.example/pending-redirect'],
        ['success_callback', 'https://merchant.example/success-callback'],
        ['failure_callback', 'https://merchant.example/failure-callback'],
      ];
      for (const [key, value] of standardOptionalFields) {
        if (!props.config.fields.some((field) => field.k === key)) {
          props.config.fields.push({ k: key, v: value, req: false });
        }
      }
    }
    if (react.file === 'api-ach-payout.jsx' && props.url === '/payout/{payoutId}/') {
      props.url = '/getpayout/{payoutId}/';
    }
    if (props.config.response !== undefined) props.config.response = sanitizedExample(props.config.response);
    if (props.config.errorResponse !== undefined) props.config.errorResponse = sanitizedExample(props.config.errorResponse);
    const lines = fileLines.get(react.file);
    lines[react.line - 1] = lines[react.line - 1].replace(/h\(TryIt, \{.*\}\),?$/, `h(TryIt, ${JSON.stringify(props)}),`);
    changedFiles.add(react.file);
  }
  for (const file of changedFiles) {
    fs.writeFileSync(path.join(pageDir, file), `${fileLines.get(file).join('\n')}\n`);
  }
  console.log(`Synced ${syncPairs.length} matched requests across ${changedFiles.size} React pages.`);
}

const outputFile = process.argv.slice(3).find((argument) => !argument.startsWith('--'));
if (outputFile) fs.writeFileSync(outputFile, `${JSON.stringify(report, null, 2)}\n`);
console.log(JSON.stringify(report.summary, null, 2));
if (!outputFile) console.log(JSON.stringify(report, null, 2));

if (strictMode) {
  const contractFailures = matches.filter(
    (match) =>
      match.request.missingInReact.length ||
      match.success.missingInReact.length ||
      match.error.missingInReact.length
  );
  if (contractFailures.length) {
    console.error(`${contractFailures.length} matched React requests are missing Postman contract fields.`);
    process.exitCode = 1;
  } else {
    console.log('Strict parity check passed: no matched request or parseable response fields are missing.');
  }
}
