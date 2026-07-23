import { exchangeCode, verifyIdToken } from './_shared/oidc.mjs';
import {
  OIDC_STATE_COOKIE,
  SESSION_COOKIE,
  createSession,
  readSignedCookie,
  signedCookie,
} from './_shared/session.mjs';
import {
  EditorHttpError,
  clearCookie,
  errorResponse,
  methodNotAllowed,
  redirect,
} from './_shared/http.mjs';

export async function handler(event) {
  if (event.httpMethod !== 'GET') return methodNotAllowed('GET');
  try {
    const code = event.queryStringParameters?.code;
    const returnedState = event.queryStringParameters?.state;
    const providerError = event.queryStringParameters?.error;
    if (providerError) {
      throw new EditorHttpError(401, 'OIDC_LOGIN_FAILED', `Company SSO returned ${providerError}.`);
    }
    const loginState = readSignedCookie(event, OIDC_STATE_COOKIE);
    if (!loginState || !code || returnedState !== loginState.state) {
      throw new EditorHttpError(401, 'OIDC_STATE_INVALID', 'The SSO login state is missing or invalid. Start the login again.');
    }
    const token = await exchangeCode(event, code, loginState.verifier);
    if (!token.id_token) {
      throw new EditorHttpError(401, 'OIDC_TOKEN_MISSING', 'Company SSO did not return an identity token.');
    }
    const user = await verifyIdToken(token.id_token, loginState.nonce);
    const session = createSession(user);
    return redirect(loginState.returnTo, [
      signedCookie(SESSION_COOKIE, session, session.exp - Math.floor(Date.now() / 1000)),
      clearCookie(OIDC_STATE_COOKIE),
    ]);
  } catch (error) {
    return errorResponse(error);
  }
}
