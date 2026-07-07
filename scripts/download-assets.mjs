import { readFileSync, mkdirSync, existsSync, writeFileSync } from 'node:fs';
import { dirname } from 'node:path';

const data = JSON.parse(readFileSync(new URL('../docs/research/section-content.json', import.meta.url)));

// extra global assets
const extra = {
  global: [
    'https://certifiedcrystal.com/cdn/shop/files/fabicon.png?crop=center&height=64&v=1756877960&width=64',
  ],
};

function cleanName(url) {
  try {
    const u = new URL(url);
    let base = u.pathname.split('/').pop() || 'img';
    base = base.replace(/[^a-zA-Z0-9._-]/g, '_');
    // add width hint to avoid collisions of same file different sizes
    const w = u.searchParams.get('width') || u.searchParams.get('height') || '';
    if (w && !/\d{2,}/.test(base)) base = base.replace(/(\.[a-z]+)?$/, '_' + w + '$1');
    if (!/\.(png|jpe?g|webp|gif|svg|avif)$/i.test(base)) base += '.webp';
    return base;
  } catch { return 'img_' + Math.abs([...url].reduce((a, c) => a + c.charCodeAt(0), 0)); }
}

const jobs = [];
for (const [section, v] of Object.entries(data)) {
  if (!v || !v.imgs) continue;
  for (const url of v.imgs) {
    if (!url || url.startsWith('data:')) continue;
    jobs.push({ section, url, out: `public/img/${section}/${cleanName(url)}` });
  }
}
for (const [section, urls] of Object.entries(extra)) {
  for (const url of urls) jobs.push({ section, url, out: `public/img/${section}/${cleanName(url)}` });
}

// dedup by out path
const seen = new Set();
const uniq = jobs.filter(j => (seen.has(j.out) ? false : (seen.add(j.out), true)));

const manifest = {};
let ok = 0, fail = 0;
async function dl(job) {
  const abs = new URL('../' + job.out, import.meta.url);
  try {
    if (!existsSync(dirname(abs.pathname))) mkdirSync(dirname(abs.pathname), { recursive: true });
    const r = await fetch(job.url, { headers: { 'User-Agent': 'Mozilla/5.0' } });
    if (!r.ok) throw new Error('HTTP ' + r.status);
    const buf = Buffer.from(await r.arrayBuffer());
    writeFileSync(abs, buf);
    manifest[job.url] = '/' + job.out.replace(/^public\//, '');
    ok++;
  } catch (e) { fail++; manifest[job.url] = null; }
}

// batches of 6
for (let i = 0; i < uniq.length; i += 6) {
  await Promise.all(uniq.slice(i, i + 6).map(dl));
  process.stdout.write(`\r${ok + fail}/${uniq.length} (ok ${ok}, fail ${fail})`);
}
writeFileSync(new URL('../docs/research/asset-manifest.json', import.meta.url), JSON.stringify(manifest, null, 1));
console.log(`\nDone. ${ok} downloaded, ${fail} failed. Manifest: docs/research/asset-manifest.json`);
