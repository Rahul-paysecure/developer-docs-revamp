// Brand-leak scanner (Goal 2, "no brand leaks" gate). Scans a built tenant
// site for forbidden strings and exits non-zero if any are found. In the real
// CI this would block the build; here it is a standalone command that reports
// exactly what still needs tokenising.
//
// Usage:  node scripts/leak-scan.mjs <tenant>     (default: northpay)

import fs from 'fs';
import path from 'path';

const tenant = process.argv[2] || process.env.VITE_TENANT || 'northpay';
const dir = path.resolve('builds', tenant);

const FORBIDDEN = ['paysecure', 'paysecure-sign', 'pstmn.io'];
const EXTS = ['.html', '.js', '.css', '.json', '.txt', '.xml'];

if (tenant === 'paysecure') {
  console.log('Tenant "paysecure" is the origin brand — leak scan not applicable.');
  process.exit(0);
}
if (!fs.existsSync(dir)) {
  console.error(`No build found at builds/${tenant}. Run:  npm run build:${tenant}`);
  process.exit(2);
}

function walk(d, out = []) {
  for (const name of fs.readdirSync(d)) {
    const p = path.join(d, name);
    const st = fs.statSync(p);
    if (st.isDirectory()) walk(p, out);
    else if (EXTS.includes(path.extname(name))) out.push(p);
  }
  return out;
}

const files = walk(dir);
const totals = Object.fromEntries(FORBIDDEN.map((t) => [t, 0]));
const perFile = [];

for (const f of files) {
  const text = fs.readFileSync(f, 'utf8').toLowerCase();
  let fileHits = 0;
  for (const term of FORBIDDEN) {
    const n = text.split(term).length - 1;
    totals[term] += n;
    fileHits += n;
  }
  if (fileHits) perFile.push({ f: path.relative(dir, f), hits: fileHits });
}

const grand = Object.values(totals).reduce((a, b) => a + b, 0);
console.log(`\nBrand-leak scan — tenant "${tenant}"  (${files.length} files scanned)`);
console.log('-------------------------------------------------------------');
for (const term of FORBIDDEN) console.log(`  "${term}": ${totals[term]}`);
console.log('-------------------------------------------------------------');

if (grand === 0) {
  console.log('PASS — no forbidden strings found.\n');
  process.exit(0);
}

perFile.sort((a, b) => b.hits - a.hits);
console.log(`FAIL — ${grand} forbidden string(s) across ${perFile.length} file(s). Top files:`);
perFile.slice(0, 10).forEach((r) => console.log(`   ${r.hits.toString().padStart(5)}  ${r.f}`));
console.log(
  '\nThese are almost all in page body text/assets — i.e. the content-tokenising\n' +
    'follow-up (Phase 9 WL-2). The chrome (nav, header, footer, theme) is already\n' +
    'tenant-clean. This gate is what would block a partner build in CI.\n'
);
process.exit(1);
