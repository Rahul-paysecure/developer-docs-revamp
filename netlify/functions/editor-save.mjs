import { savePageChange } from './_shared/editor.mjs';
import { errorResponse, json, methodNotAllowed, parseJsonBody } from './_shared/http.mjs';
import { getSession, requireCsrf } from './_shared/session.mjs';

export async function handler(event) {
  if (event.httpMethod !== 'POST') return methodNotAllowed('POST');
  try {
    const session = getSession(event);
    requireCsrf(event, session);
    const payload = parseJsonBody(event);
    return json(201, await savePageChange(payload, session));
  } catch (error) {
    return errorResponse(error);
  }
}
