const fs = require('node:fs');
const path = require('node:path');
const {projects,redirects} = require('./content.cjs');
const root = path.join(__dirname, 'dist');
const errors = [];
const relative = file => path.relative(root, file).split(path.sep).join('/');
const fail = (file, message) => errors.push(`${relative(file)}: ${message}`);
const escapeHtml = value => String(value ?? '').replace(/[&<>"']/g, character => ({'&':'&amp;', '<':'&lt;', '>':'&gt;', '"':'&quot;', "'":'&#39;'}[character]));
const decodeHtml = value => value.replace(/&(#x[\da-f]+|#\d+|amp|quot|apos|lt|gt);/gi, (match, entity) => {
  if (entity[0] === '#') return String.fromCodePoint(entity[1].toLowerCase() === 'x' ? parseInt(entity.slice(2), 16) : Number(entity.slice(1)));
  return {amp:'&', quot:'"', apos:"'", lt:'<', gt:'>'}[entity.toLowerCase()];
});

function walk(directory) {
  return fs.readdirSync(directory, {withFileTypes:true}).flatMap(entry => {
    const file = path.join(directory, entry.name);
    if (entry.isSymbolicLink()) { fail(file, 'symbolic links are not allowed in the publication folder'); return []; }
    return entry.isDirectory() ? walk(file) : [file];
  });
}

// This generated site uses ordinary quoted HTML attributes, so a dependency-free
// tag reader is sufficient for checking its links and structural landmarks.
function tags(html) {
  return [...html.replace(/<!--[\s\S]*?-->/g, '').matchAll(/<([a-z][\w:-]*)\b((?:[^>"']|"[^"]*"|'[^']*')*)>/gi)].map(match => {
    const attributes = {};
    for (const attribute of match[2].matchAll(/([^\s=\/]+)(?:\s*=\s*(?:"([^"]*)"|'([^']*)'|([^\s>]+)))?/g)) {
      attributes[attribute[1].toLowerCase()] = decodeHtml(attribute[2] ?? attribute[3] ?? attribute[4] ?? '');
    }
    return {name:match[1].toLowerCase(), attributes};
  });
}

if (!fs.existsSync(root)) { console.error('No dist folder. Run npm run build first.'); process.exit(1); }
const allFiles = walk(root);
const htmlFiles = allFiles.filter(file => /\.html$/i.test(file));
const pages = new Map(htmlFiles.map(file => {
  const html = fs.readFileSync(file, 'utf8');
  return [file, {html, tags:tags(html)}];
}));
let references = 0;

function checkReference(file, reference, dependency = false) {
  if (!reference.trim()) { fail(file, 'empty URL reference'); return; }
  if (/^(?:tel|mailto):/i.test(reference)) {
    if (dependency) fail(file, `invalid resource URL ${reference}`);
    return;
  }
  if (/^data:/i.test(reference)) return;
  let url;
  try { url = new URL(reference, `https://local.invalid/${relative(file)}`); }
  catch { fail(file, `invalid URL ${reference}`); return; }
  if (url.origin !== 'https://local.invalid') {
    if (dependency) fail(file, `external dependency ${reference}`);
    else if (!/^https?:$/.test(url.protocol)) fail(file, `unsupported link protocol ${reference}`);
    return;
  }
  let target, fragment;
  try {
    const localPath = decodeURIComponent(reference.split(/[?#]/)[0]);
    target = localPath.startsWith('/') ? path.resolve(root, '.' + localPath) : localPath ? path.resolve(path.dirname(file), localPath) : file;
    fragment = decodeURIComponent(url.hash.slice(1));
  } catch { fail(file, `invalid URL encoding ${reference}`); return; }
  const inside = path.relative(root, target);
  if (inside.startsWith('..') || path.isAbsolute(inside)) { fail(file, `reference escapes publication folder: ${reference}`); return; }
  if (!fs.existsSync(target) || !fs.statSync(target).isFile()) { fail(file, `missing file ${reference}`); return; }
  references++;
  if (fragment) {
    const targetTags = pages.get(target)?.tags ?? tags(fs.readFileSync(target, 'utf8'));
    if (!targetTags.some(tag => tag.attributes.id === fragment || (tag.name === 'a' && tag.attributes.name === fragment))) fail(file, `missing fragment ${reference}`);
  }
}

for (const [file, page] of pages) {
  const byName = name => page.tags.filter(tag => tag.name === name);
  for (const name of ['html', 'h1', 'title', 'main']) {
    if (byName(name).length !== 1) fail(file, `expected exactly one ${name}; found ${byName(name).length}`);
  }
  if (byName('html')[0]?.attributes.lang !== 'en') fail(file, 'missing English document language');
  if (!/<title>\s*[^<\s][\s\S]*?<\/title>/i.test(page.html)) fail(file, 'empty page title');
  const descriptions = byName('meta').filter(tag => tag.attributes.name === 'description');
  if (descriptions.length !== 1 || !descriptions[0].attributes.content?.trim()) fail(file, 'expected exactly one nonempty meta description');
  if (byName('main')[0]?.attributes.id !== 'main') fail(file, 'main landmark must retain the skip-link target');
  if (byName('nav').filter(t=>t.attributes.id==='site-nav').length!==1) fail(file, 'expected exactly one main site navigation');
  if (byName('nav').some(t=>!t.attributes['aria-label'])) fail(file, 'navigation needs an accessible label');
  const ids = page.tags.map(tag => tag.attributes.id).filter(Boolean);
  if (new Set(ids).size !== ids.length) fail(file, 'duplicate element IDs');
  for (const tag of page.tags) {
    if (tag.name === 'img' && !Object.hasOwn(tag.attributes, 'alt')) fail(file, 'image is missing alt attribute');
    for (const attribute of ['href', 'src', 'poster', 'data']) {
      if (!Object.hasOwn(tag.attributes, attribute)) continue;
      if (attribute === 'data' && tag.name !== 'object') continue;
      const metadataLink = tag.name === 'link' && /^(?:canonical|alternate)$/i.test(tag.attributes.rel ?? '');
      const dependency = attribute !== 'href' || (!['a', 'area'].includes(tag.name) && !metadataLink);
      checkReference(file, tag.attributes[attribute], dependency);
    }
    if (tag.attributes.srcset) {
      for (const candidate of tag.attributes.srcset.split(',')) checkReference(file, candidate.trim().split(/\s+/)[0], true);
    }
  }
}

for (const file of allFiles) {
  const name = relative(file);
  if (/(?:^|\/)(?:knowledge-base|sources|supporting|\.local-backups|\.git)(?:\/|$)/i.test(name) || /\.(?:docx?|xlsx?|zip|md|cjs|py)$/i.test(name) || /(?:knowledge-base|financial-schedule|metrics-evidence|validation-results|file-manifest)\.json$/i.test(name)) fail(file, 'private source material or authoring files must not be published');
  if (/\.css$/i.test(file)) {
    const css = fs.readFileSync(file, 'utf8').replace(/\/\*[\s\S]*?\*\//g, '');
    for (const match of css.matchAll(/url\(\s*["']?([^\s"')]+)["']?\s*\)/gi)) checkReference(file, match[1], true);
    for (const match of css.matchAll(/@import\s+["']([^"']+)["']/gi)) checkReference(file, match[1], true);
  }
}

const packageInfo = JSON.parse(fs.readFileSync(path.join(__dirname, 'package.json'), 'utf8'));
if (Object.keys(packageInfo.dependencies ?? {}).length) errors.push('package.json: this static website should have no third-party runtime dependencies');
const publicPages = ['index.html', 'services.html', 'work.html', 'government.html', 'about.html', 'contact.html', 'capabilities.html', 'privacy.html'];
for (const name of publicPages) if (!pages.has(path.join(root, name))) errors.push(`Missing required public page ${name}`);
if (htmlFiles.length !== publicPages.length + projects.length + Object.keys(redirects).length) errors.push(`Unexpected HTML page count: found ${htmlFiles.length}; expected ${publicPages.length + projects.length}`);
if (new Set(projects.map(project => project.id)).size !== projects.length) errors.push('Duplicate project identifiers');
if(new Set(projects.map(p=>p.client.toLowerCase())).size!==projects.length) errors.push('Duplicate company cards');
const workstreamCount = projects.reduce((count, project) => count + project.work.length, 0);
const workIndex = pages.get(path.join(root, 'work.html'));
for (const project of projects) {
  const file = path.join(root, 'projects', project.id + '.html');
  const page = pages.get(file);
  if (!page) { fail(file, 'missing project page'); continue; }
  if (!workIndex?.tags.some(tag => tag.name === 'a' && tag.attributes.href === `projects/${project.id}.html`)) fail(file, 'project is absent from the experience index');
  if (page.tags.filter(tag => tag.name === 'details').length !== project.work.length) fail(file, 'workstream disclosure count differs from the source');
  for (const field of ['client', 'role', 'scope', 'status']) if (!page.html.includes(escapeHtml(project[field]))) fail(file, `missing source ${field}`);
  for(const e of project.engagements||[]) {
    for(const key of ['role','scope','status','experienceType']) if(!page.html.includes(escapeHtml(e[key]))) fail(file,'missing engagement '+key+': '+e.id);
    for(const metric of e.metrics||[]) for(const value of metric) if(!page.html.includes(escapeHtml(value))) fail(file,'missing engagement metric: '+e.id);
    if(!page.tags.some(t=>t.attributes.id===e.id)) fail(file,'missing engagement anchor '+e.id);
  }
  for (const workstream of project.work) {
    if (workstream.length !== 3 || workstream.some(value => typeof value !== 'string' || !value.trim())) { fail(file, 'incomplete workstream source'); continue; }
    for (const value of workstream) if (!page.html.includes(escapeHtml(value))) fail(file, `missing workstream content: ${value.slice(0, 65)}`);
  }
}

if (errors.length) {
  console.error(`Website checks failed (${errors.length}):\n${errors.join('\n')}`);
  process.exit(1);
}
console.log(`Checked all ${htmlFiles.length} HTML pages and ${references} local references: required landmarks, titles, descriptions, links, fragments, local dependencies and publication boundaries. Preserved ${projects.length} projects and ${workstreamCount} complete source workstreams.`);
