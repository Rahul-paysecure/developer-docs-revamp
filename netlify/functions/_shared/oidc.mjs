import {
  createHash,
  createPublicKey,
  randomBytes,
  verify as verifySignature,
} from 'node:crypto';
import { EditorHttpError, requestOrigin } from './http.mjs';

let discoveryCache;
let jwksCache;

function oidcConfig() {
  const issuer = String(process.env.EDITOR_OIDC_ISSUER || '').replace(/\/+$/, '');
  const clientId = process.env.EDITOR_OIDC_CLIENT_ID;
  const clientSecret = process.env.EDITOR_OIDC_CLIENT_SECRET;
  if (!issuer || !clientId || !clientSecret) {
    throw new EditorHttpError(503, 'EDITOR_NOT_CONFIGURED', 'Company OIDC settings are incomplete.');
  }
  return { issuer, clientId, clientSecret };
}

async function fetchJson(url, options, code) {
  const response = await fetch(url, options);
  if (!response.ok) {
    throw new EditorHttpError(502, code, `The identity provider returned HTTP ${response.status}.`);
  }
  return response.json();
}

export async function getDiscovery() {
  const { issuer } = oidcConfig();
  if (discoveryCache?.issuer === issuer) return discoveryCache.value;
  const value = await fetchJson(
    `${issuer}/.well-known/openid-configuration`,
    undefined,
    'OIDC_DISCOVERY_FAILED'
  );
  if (!value.authorization_endpoint || !value.token_endpoint || !value.jwks_uri) {
    throw new EditorHttpError(502, 'OIDC_DISCOVERY_INVALID', 'The identity provider discovery document is incomplete.');
  }
  discoveryCache = { issuer, value };
  return value;
}

function randomToken(bytes = 32) {
  return randomBytes(bytes).toString('base64url');
}

export function createLoginState(returnTo) {
  const verifier = randomToken(48);
  return {
    state: randomToken(),
    nonce: randomToken(),
    verifier,
    challenge: createHash('sha256').update(verifier).digest('base64url'),
    returnTo,
  };
}

export async function authorizationUrl(event, loginState) {
  const discovery = await getDiscovery();
  const { clientId } = oidcConfig();
  const callback = `${requestOrigin(event)}/.netlify/functions/editor-auth-callback`;
  const url = new URL(discovery.authorization_endpoint);
  url.search = new URLSearchParams({
    client_id: clientId,
    response_type: 'code',
    scope: 'openid email profile',
    redirect_uri: callback,
    state: loginState.state,
    nonce: loginState.nonce,
    code_challenge: loginState.challenge,
    code_challenge_method: 'S256',
  }).toString();
  return url.toString();
}

export async function exchangeCode(event, code, verifier) {
  const discovery = await getDiscovery();
  const { clientId, clientSecret } = oidcConfig();
  const callback = `${requestOrigin(event)}/.netlify/functions/editor-auth-callback`;
  return fetchJson(
    discovery.token_endpoint,
    {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: new URLSearchParams({
        grant_type: 'authorization_code',
        code,
        client_id: clientId,
        client_secret: clientSecret,
        redirect_uri: callback,
        code_verifier: verifier,
      }),
    },
    'OIDC_TOKEN_EXCHANGE_FAILED'
  );
}

function parseJwt(value) {
  const [headerPart, payloadPart, signaturePart] = String(value || '').split('.');
  if (!headerPart || !payloadPart || !signaturePart) {
    throw new EditorHttpError(401, 'OIDC_TOKEN_INVALID', 'The identity token is malformed.');
  }
  try {
    return {
      header: JSON.parse(Buffer.from(headerPart, 'base64url').toString('utf8')),
      payload: JSON.parse(Buffer.from(payloadPart, 'base64url').toString('utf8')),
      signature: Buffer.from(signaturePart, 'base64url'),
      signed: Buffer.from(`${headerPart}.${payloadPart}`),
    };
  } catch {
    throw new EditorHttpError(401, 'OIDC_TOKEN_INVALID', 'The identity token could not be decoded.');
  }
}

async function getJwks(uri) {
  if (jwksCache?.uri === uri && jwksCache.expiresAt > Date.now()) return jwksCache.value;
  const value = await fetchJson(uri, undefined, 'OIDC_JWKS_FAILED');
  jwksCache = { uri, value, expiresAt: Date.now() + 15 * 60 * 1000 };
  return value;
}

function claimIncludes(value, expected) {
  return Array.isArray(value) ? value.includes(expected) : value === expected;
}

function allowedIdentity(payload) {
  if (!payload.sub) {
    throw new EditorHttpError(401, 'OIDC_SUBJECT_REQUIRED', 'The identity token does not identify an SSO account.');
  }
  const email = String(payload.email || '').toLowerCase();
  if (!email || payload.email_verified === false) {
    throw new EditorHttpError(403, 'EDITOR_EMAIL_REQUIRED', 'The SSO account must have a verified email address.');
  }
  const domains = String(process.env.EDITOR_ALLOWED_EMAIL_DOMAINS || '')
    .split(',')
    .map((value) => value.trim().toLowerCase())
    .filter(Boolean);
  if (domains.length && !domains.some((domain) => email.endsWith(`@${domain}`))) {
    throw new EditorHttpError(403, 'EDITOR_EMAIL_NOT_ALLOWED', 'This company account is not allowed to edit documentation.');
  }
  const requiredGroups = String(process.env.EDITOR_ALLOWED_GROUPS || '')
    .split(',')
    .map((value) => value.trim())
    .filter(Boolean);
  if (!domains.length && !requiredGroups.length) {
    throw new EditorHttpError(
      503,
      'EDITOR_NOT_CONFIGURED',
      'Configure an allowed company email domain or SSO group for the editor.'
    );
  }
  const groups = Array.isArray(payload.groups) ? payload.groups.map(String) : [];
  if (requiredGroups.length && !requiredGroups.some((group) => groups.includes(group))) {
    throw new EditorHttpError(403, 'EDITOR_GROUP_NOT_ALLOWED', 'This company account is not in an approved documentation group.');
  }
  return {
    sub: String(payload.sub),
    email,
    name: String(payload.name || payload.preferred_username || email),
    groups,
  };
}

export async function verifyIdToken(idToken, expectedNonce) {
  const discovery = await getDiscovery();
  const { issuer, clientId } = oidcConfig();
  const token = parseJwt(idToken);
  if (token.header.alg !== 'RS256') {
    throw new EditorHttpError(401, 'OIDC_ALGORITHM_UNSUPPORTED', 'The editor requires an RS256 identity token.');
  }
  const jwks = await getJwks(discovery.jwks_uri);
  const jwk = (jwks.keys || []).find((key) => key.kid === token.header.kid && key.kty === 'RSA');
  if (!jwk) throw new EditorHttpError(401, 'OIDC_SIGNING_KEY_MISSING', 'The identity token signing key was not found.');
  const verified = verifySignature(
    'RSA-SHA256',
    token.signed,
    createPublicKey({ key: jwk, format: 'jwk' }),
    token.signature
  );
  if (!verified) throw new EditorHttpError(401, 'OIDC_SIGNATURE_INVALID', 'The identity token signature is invalid.');

  const now = Math.floor(Date.now() / 1000);
  if (token.payload.iss !== issuer || !claimIncludes(token.payload.aud, clientId)) {
    throw new EditorHttpError(401, 'OIDC_CLAIMS_INVALID', 'The identity token issuer or audience is invalid.');
  }
  if (!token.payload.exp || token.payload.exp <= now || (token.payload.nbf && token.payload.nbf > now + 30)) {
    throw new EditorHttpError(401, 'OIDC_TOKEN_EXPIRED', 'The identity token has expired or is not active.');
  }
  if (token.payload.nonce !== expectedNonce) {
    throw new EditorHttpError(401, 'OIDC_NONCE_INVALID', 'The identity token nonce is invalid.');
  }
  return allowedIdentity(token.payload);
}
