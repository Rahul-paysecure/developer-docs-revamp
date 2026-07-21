const NO_VALUE_FLAGS = new Set([
  '--compressed',
  '--fail',
  '--fail-with-body',
  '--globoff',
  '--location',
  '--show-error',
  '--silent',
  '-L',
  '-S',
  '-f',
  '-g',
  '-s',
]);

const DATA_FLAGS = new Set(['--data', '--data-ascii', '--data-binary', '--data-raw', '-d']);

function shellQuote(value) {
  return `'${String(value).replace(/'/g, `'\\''`)}'`;
}

export function buildCurl({ method = 'GET', url, headers = [], body }) {
  const lines = [`curl --location --request ${String(method).toUpperCase()} ${shellQuote(url)}`];
  headers.forEach(([name, value]) => {
    lines.push(`  --header ${shellQuote(`${name}: ${value}`)}`);
  });
  if (body !== undefined && body !== null && !['GET', 'HEAD'].includes(String(method).toUpperCase())) {
    const data = typeof body === 'string' ? body : JSON.stringify(body, null, 2);
    lines.push(`  --data-raw ${shellQuote(data)}`);
  }
  return lines.join(' \\\n');
}

export function tokenizeCurl(command) {
  const source = String(command).replace(/\\\r?\n/g, ' ');
  const tokens = [];
  let token = '';
  let quote = null;
  let escaping = false;

  const push = () => {
    if (token) tokens.push(token);
    token = '';
  };

  for (let index = 0; index < source.length; index += 1) {
    const character = source[index];
    if (escaping) {
      token += character;
      escaping = false;
      continue;
    }
    if (quote === "'") {
      if (character === "'") quote = null;
      else token += character;
      continue;
    }
    if (quote === '"') {
      if (character === '"') quote = null;
      else if (character === '\\') escaping = true;
      else token += character;
      continue;
    }
    if (character === "'" || character === '"') {
      quote = character;
      continue;
    }
    if (character === '\\') {
      escaping = true;
      continue;
    }
    if (/\s/.test(character)) {
      push();
      continue;
    }
    token += character;
  }

  if (quote) throw new Error('The cURL command contains an unterminated quote.');
  if (escaping) token += '\\';
  push();
  return tokens;
}

function optionValue(tokens, index, option) {
  if (index + 1 >= tokens.length) throw new Error(`${option} requires a value.`);
  return tokens[index + 1];
}

function addHeader(headers, header) {
  const separator = header.indexOf(':');
  if (separator <= 0) throw new Error(`Invalid header: ${header}`);
  const name = header.slice(0, separator).trim();
  const value = header.slice(separator + 1).trim();
  headers.push([name, value]);
}

export function parseCurl(command) {
  const tokens = tokenizeCurl(command);
  if (!tokens.length || !['curl', 'curl.exe'].includes(tokens[0].toLowerCase())) {
    throw new Error('The request must start with curl.');
  }

  let method = '';
  let url = '';
  let timeoutMs = 45000;
  const headers = [];
  const dataParts = [];

  for (let index = 1; index < tokens.length; index += 1) {
    const token = tokens[index];
    if (NO_VALUE_FLAGS.has(token)) continue;

    if (token === '--request' || token === '-X') {
      method = optionValue(tokens, index, token).toUpperCase();
      index += 1;
      continue;
    }
    if (token.startsWith('--request=')) {
      method = token.slice('--request='.length).toUpperCase();
      continue;
    }
    if (/^-X.+/.test(token)) {
      method = token.slice(2).toUpperCase();
      continue;
    }

    if (token === '--url') {
      url = optionValue(tokens, index, token);
      index += 1;
      continue;
    }
    if (token.startsWith('--url=')) {
      url = token.slice('--url='.length);
      continue;
    }

    if (token === '--header' || token === '-H') {
      addHeader(headers, optionValue(tokens, index, token));
      index += 1;
      continue;
    }
    if (token.startsWith('--header=')) {
      addHeader(headers, token.slice('--header='.length));
      continue;
    }
    if (/^-H.+/.test(token)) {
      addHeader(headers, token.slice(2));
      continue;
    }

    if (DATA_FLAGS.has(token)) {
      dataParts.push(optionValue(tokens, index, token));
      index += 1;
      continue;
    }
    const dataOption = [...DATA_FLAGS].find((flag) =>
      flag.startsWith('--') && token.startsWith(`${flag}=`)
    );
    if (dataOption) {
      dataParts.push(token.slice(dataOption.length + 1));
      continue;
    }
    if (/^-d.+/.test(token)) {
      dataParts.push(token.slice(2));
      continue;
    }

    if (token === '--max-time' || token === '-m') {
      const seconds = Number(optionValue(tokens, index, token));
      if (!Number.isFinite(seconds) || seconds <= 0) {
        throw new Error(`${token} must be a positive number of seconds.`);
      }
      timeoutMs = seconds * 1000;
      index += 1;
      continue;
    }
    if (token.startsWith('--max-time=')) {
      const seconds = Number(token.slice('--max-time='.length));
      if (!Number.isFinite(seconds) || seconds <= 0) {
        throw new Error('--max-time must be a positive number of seconds.');
      }
      timeoutMs = seconds * 1000;
      continue;
    }

    if (token.startsWith('-')) {
      throw new Error(`Unsupported cURL option: ${token}`);
    }
    if (!url) url = token;
    else throw new Error(`Unexpected cURL argument: ${token}`);
  }

  if (!url) throw new Error('The cURL command does not contain a URL.');
  let parsedUrl;
  try {
    parsedUrl = new URL(url);
  } catch {
    throw new Error('The cURL URL must be an absolute http:// or https:// URL.');
  }
  if (!['http:', 'https:'].includes(parsedUrl.protocol)) {
    throw new Error('Only http:// and https:// cURL URLs can be run in the browser.');
  }

  const body = dataParts.length ? dataParts.join('&') : undefined;
  return {
    method: (method || (body === undefined ? 'GET' : 'POST')).toUpperCase(),
    url: parsedUrl.toString(),
    headers,
    body,
    timeoutMs,
  };
}

export function requestPlaceholders(request) {
  const values = [request.url, request.body || '', ...request.headers.flat()];
  const matches = new Set();
  values.forEach((value) => {
    String(value).match(/\bYOUR_[A-Z0-9_]+\b/g)?.forEach((match) => matches.add(match));
    String(value).match(/\{\{[^{}]+\}\}/g)?.forEach((match) => matches.add(match));
  });
  try {
    const pathname = decodeURIComponent(new URL(request.url).pathname);
    pathname.match(/\{[^/{}]+\}/g)?.forEach((match) => matches.add(match));
  } catch {
    // parseCurl reports malformed URLs before this helper is called.
  }
  return [...matches];
}

export function requestCode(language, request) {
  if (language === 'curl') return buildCurl(request);
  const headers = Object.fromEntries(request.headers);
  if (language === 'js') {
    const options = {
      method: request.method,
      headers,
      ...(request.body !== undefined && !['GET', 'HEAD'].includes(request.method)
        ? { body: request.body }
        : {}),
    };
    return (
      `const response = await fetch(${JSON.stringify(request.url)}, ${JSON.stringify(options, null, 2)});\n` +
      `const text = await response.text();\n` +
      `console.log(response.status, text);`
    );
  }
  const headerCode = JSON.stringify(headers, null, 2)
    .replace(/true/g, 'True')
    .replace(/false/g, 'False')
    .replace(/null/g, 'None');
  let code = `import requests\n\nresponse = requests.request(\n    ${JSON.stringify(request.method)},\n    ${JSON.stringify(request.url)},\n    headers=${headerCode}`;
  if (request.body !== undefined && !['GET', 'HEAD'].includes(request.method)) {
    code += `,\n    data=${JSON.stringify(request.body)}`;
  }
  return `${code}\n)\nprint(response.status_code)\nprint(response.text)`;
}
