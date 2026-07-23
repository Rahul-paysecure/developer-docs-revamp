import { getPageState } from './_shared/editor.mjs';
import { errorResponse, json, methodNotAllowed } from './_shared/http.mjs';
import { getSession } from './_shared/session.mjs';

export async function handler(event) {
  if (event.httpMethod !== 'GET') return methodNotAllowed('GET');
  try {
    const session = getSession(event);
    const slug = String(event.queryStringParameters?.slug || '');
    const page = await getPageState(slug);
    return json(200, {
      slug,
      changes: {},
      message: `Update ${slug} documentation`,
      baseRevision: page.baseRevision,
      pageRevision: page.pageRevision,
      revision: page.baseRevision,
      updatedAt: null,
      savedBy: session.email,
      sourcePath: page.sourcePath,
    });
  } catch (error) {
    return errorResponse(error);
  }
}
