import { authorizationUrl, createLoginState } from './_shared/oidc.mjs';
import { OIDC_STATE_COOKIE, signedCookie } from './_shared/session.mjs';
import { errorResponse, methodNotAllowed, redirect, safeReturnTo } from './_shared/http.mjs';

export async function handler(event) {
  if (event.httpMethod !== 'GET') return methodNotAllowed('GET');
  try {
    const returnTo = safeReturnTo(event.queryStringParameters?.returnTo);
    const loginState = createLoginState(returnTo);
    const now = Math.floor(Date.now() / 1000);
    const stateCookie = signedCookie(
      OIDC_STATE_COOKIE,
      {
        state: loginState.state,
        nonce: loginState.nonce,
        verifier: loginState.verifier,
        returnTo,
        iat: now,
        exp: now + 10 * 60,
      },
      10 * 60
    );
    return redirect(await authorizationUrl(event, loginState), [stateCookie]);
  } catch (error) {
    return errorResponse(error);
  }
}
