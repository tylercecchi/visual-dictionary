// Static site builder: one self-contained HTML page with the index, every
// entry, the doc files, and a live resolve box running lib/resolve.mjs.
// Run: node tools/build-site.mjs [--out site/index.html] [--fragment out.html]
//   --fragment writes the page WITHOUT <html>/<head>/<body> wrappers (for hosts
//   that wrap it themselves, e.g. Claude Artifacts).
import { readFileSync, readdirSync, writeFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseEntry, CATEGORIES } from "../lib/resolve.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(ROOT, p), "utf8");
const args = process.argv.slice(2);
const opt = (k, d) => (args.includes(k) ? args[args.indexOf(k) + 1] : d);
const OUT = opt("--out", "site/index.html");
const FRAGMENT = opt("--fragment", null);

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
const inline = (s) =>
  esc(s)
    .replace(/`([^`]+)`/g, "<code>$1</code>")
    .replace(/\*\*([^*]+)\*\*/g, "<strong>$1</strong>")
    .replace(/(^|[^*])\*([^*\n]+)\*/g, "$1<em>$2</em>")
    .replace(/\[\[([a-z0-9-]+)\]\]/g, '<a href="#e/$1" class="wl">$1</a>')
    .replace(/\[([^\]]+)\]\(entries\/([a-z0-9-]+)\.md\)/g, '<a href="#e/$2" class="wl">$1</a>')
    .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank" rel="noopener">$1</a>');

/** Minimal markdown → HTML (headings, lists, paragraphs, tables, fences, hr). */
function md(src) {
  const lines = src.replace(/^---\n[\s\S]*?\n---\n/, "").split("\n");
  const out = [];
  let i = 0;
  while (i < lines.length) {
    const l = lines[i];
    if (/^```/.test(l)) {
      const buf = [];
      i++;
      while (i < lines.length && !/^```/.test(lines[i])) buf.push(lines[i++]);
      i++;
      out.push(`<pre><code>${esc(buf.join("\n"))}</code></pre>`);
      continue;
    }
    if (/^#{1,6} /.test(l)) {
      const n = l.match(/^#+/)[0].length;
      out.push(`<h${n}>${inline(l.replace(/^#+ /, ""))}</h${n}>`);
      i++;
      continue;
    }
    if (/^---+$/.test(l.trim())) { out.push("<hr>"); i++; continue; }
    if (/^\|/.test(l)) {
      const rows = [];
      while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
      const cells = (r) => r.split("|").slice(1, -1).map((c) => c.trim());
      const body = rows.filter((r) => !/^\|\s*-/.test(r));
      const [head, ...rest] = body;
      out.push(
        `<div class="tw"><table><thead><tr>${cells(head).map((c) => `<th>${inline(c)}</th>`).join("")}</tr></thead><tbody>` +
          rest.map((r) => `<tr>${cells(r).map((c) => `<td>${inline(c)}</td>`).join("")}</tr>`).join("") +
          "</tbody></table></div>"
      );
      continue;
    }
    if (/^\s*(-|\d+\.) /.test(l)) {
      const ordered = /^\s*\d+\./.test(l);
      const items = [];
      while (i < lines.length && (/^\s*(-|\d+\.) /.test(lines[i]) || (/^\s{2,}\S/.test(lines[i]) && items.length))) {
        if (/^\s*(-|\d+\.) /.test(lines[i])) items.push(lines[i].replace(/^\s*(-|\d+\.) /, ""));
        else items[items.length - 1] += " " + lines[i].trim();
        i++;
      }
      out.push(`<${ordered ? "ol" : "ul"}>${items.map((x) => `<li>${inline(x)}</li>`).join("")}</${ordered ? "ol" : "ul"}>`);
      continue;
    }
    if (!l.trim()) { i++; continue; }
    const buf = [];
    while (i < lines.length && lines[i].trim() && !/^(#{1,6} |```|\||\s*(-|\d+\.) |---+$)/.test(lines[i])) buf.push(lines[i++]);
    out.push(`<p>${inline(buf.join(" "))}</p>`);
  }
  return out.join("\n");
}

const entries = readdirSync(join(ROOT, "entries"))
  .filter((f) => f.endsWith(".md"))
  .map((f) => parseEntry(f.replace(/\.md$/, ""), read(join("entries", f))))
  .sort((a, b) => a.title.localeCompare(b.title));

const data = {
  entries: entries.map((e) => ({
    name: e.name, title: e.title, category: e.category, summary: e.summary, aliases: e.aliases, media: e.media,
    cues: e.cues, body: e.body, html: md(e.text),
  })),
  docs: Object.fromEntries(["CLAUDE.md", "LAYOUT.md", "LIBRARIES.md", "INDEX.md", "TEMPLATE.md"].map((d) => [d, md(read(d))])),
  categories: CATEGORIES,
};
const CAT_LABEL = {
  "light-and-depth": "Light & depth", "surface-and-material": "Surface & material", "distortion-and-lens": "Distortion & lens",
  "color-and-tone": "Color & tone", "pattern-and-texture": "Pattern & texture", motion: "Motion", foundations: "Foundations",
  components: "Components", editorial: "Editorial (structure)", wardrobe: "Wardrobe", layout: "Layout",
};
// Resolver source, inlined as a plain script (strip ESM exports).
const resolverSrc = read("lib/resolve.mjs").replace(/^export (const|function) /gm, "$1 ");

const fonts = `<link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Newsreader:ital,opsz,wght@0,6..72,400;0,6..72,500;0,6..72,600;1,6..72,400&family=IBM+Plex+Sans:ital,wght@0,400;0,500;0,600;1,400&family=IBM+Plex+Mono:wght@400;500;600&display=swap">`;
const css = `
:root{--bg:#f3f4f1;--fg:#17201f;--mut:#5f6b68;--line:#d6dbd7;--acc:#0f6e63;--warn:#8a5a0e;--code:#e9ece8;--card:#fbfbf9;--tab:#e2e6e2;
  --serif:"Newsreader",Georgia,"Times New Roman",serif;--sans:"IBM Plex Sans",ui-sans-serif,system-ui,-apple-system,"Segoe UI",sans-serif;--mono:"IBM Plex Mono",ui-monospace,SFMono-Regular,Menlo,Consolas,monospace}
:root:not([data-theme="light"]){color-scheme:light dark}
@media (prefers-color-scheme:dark){:root:not([data-theme="light"]){--bg:#121716;--fg:#e6ebe8;--mut:#93a09c;--line:#273230;--acc:#4fc1ad;--warn:#d9a441;--code:#1a2220;--card:#161d1b;--tab:#1e2624}}
:root[data-theme="dark"]{--bg:#121716;--fg:#e6ebe8;--mut:#93a09c;--line:#273230;--acc:#4fc1ad;--warn:#d9a441;--code:#1a2220;--card:#161d1b;--tab:#1e2624}
*{box-sizing:border-box}html{background:var(--bg)}body{margin:0;background:var(--bg);color:var(--fg);font:15px/1.6 var(--sans)}
a{color:var(--acc);text-decoration-thickness:1px;text-underline-offset:.15em}a:focus-visible,button:focus-visible,input:focus-visible{outline:2px solid var(--acc);outline-offset:2px}
code,pre{font-family:var(--mono);font-size:.9em}code{background:var(--code);padding:.08em .35em;border-radius:2px}
pre{background:var(--code);padding:.8rem 1rem;overflow-x:auto;border-radius:2px}
h1,h2,h3{font-family:var(--serif);font-weight:500;letter-spacing:-.005em;text-wrap:balance}
.app{display:grid;grid-template-columns:272px minmax(0,1fr);min-height:100vh}
nav{border-right:1px solid var(--line);padding:1.1rem 0 2rem 1.1rem;position:sticky;top:0;height:100vh;overflow:auto;background:var(--tab)}
nav h1{font-size:1.35rem;margin:0 0 .1rem;line-height:1.15}nav .sub{color:var(--mut);font-size:.78rem;margin-bottom:1rem;font-family:var(--mono)}
nav h2{font-family:var(--mono);font-size:.68rem;font-weight:600;text-transform:uppercase;letter-spacing:.1em;color:var(--mut);margin:1.1rem 0 .25rem}
nav h2 span{font-weight:400;font-variant-numeric:tabular-nums}
nav ul{list-style:none;margin:0;padding:0}nav li a{display:block;padding:.13rem .5rem .13rem .4rem;margin-right:.6rem;border-radius:2px;color:var(--fg);text-decoration:none;font-size:.86rem;border-left:2px solid transparent}
nav li a:hover{color:var(--acc)}nav li a.on{border-left-color:var(--acc);color:var(--acc);background:var(--bg)}
nav .docs a{font-family:var(--mono);font-size:.78rem}
main{padding:1.4rem 2.6rem 4rem;max-width:900px}
.search{margin-bottom:1rem}.search input{width:100%;font:1.05rem/1.4 var(--sans);padding:.65rem .9rem;border:1px solid var(--line);border-bottom:2px solid var(--fg);border-radius:2px 2px 0 0;background:var(--card);color:var(--fg)}
.search input::placeholder{color:var(--mut)}
.res{border:1px solid var(--line);background:var(--card);margin-bottom:1.6rem}
.res .hit{display:grid;grid-template-columns:auto 1fr auto;gap:.15rem .9rem;padding:.6rem .9rem;border-bottom:1px solid var(--line);align-items:baseline}
.res .hit:last-child{border-bottom:0}.res .name{font-family:var(--mono);font-weight:600}.res .name a{text-decoration:none}
.res .sum{font-family:var(--serif);font-size:1.02rem}.res .meta{color:var(--mut);font-size:.76rem;grid-column:2;font-family:var(--mono)}.res .score{color:var(--mut);font-variant-numeric:tabular-nums;font-size:.78rem;font-family:var(--mono)}
.res .flag{padding:.55rem .9rem;background:var(--code);font-size:.86rem;border-top:1px solid var(--line)}.res .flag b{color:var(--warn)}
.entry>h1,.entry h1{font-family:var(--mono);font-weight:600;font-size:1.55rem;margin:.3rem 0 .2rem;letter-spacing:0}
.chip{display:inline-block;font-family:var(--mono);font-size:.68rem;text-transform:uppercase;letter-spacing:.08em;color:var(--mut);border:1px solid var(--line);padding:.05rem .45rem;margin-right:.3rem}
.summary{font-family:var(--serif);font-style:italic;font-size:1.12rem;color:var(--fg);margin:.1rem 0 .5rem;max-width:62ch}
.aliases{color:var(--mut);font-size:.82rem;margin:.2rem 0 1.4rem;font-family:var(--mono);line-height:1.7}.aliases b{color:var(--fg);font-weight:500}
.entry p,.entry li{max-width:68ch}.entry h2{font-size:1.15rem;margin:1.7rem 0 .45rem;padding-bottom:.25rem;border-bottom:1px solid var(--line)}
.entry ul{padding-left:1.15rem}.entry li{margin:.25rem 0}
.tw{overflow-x:auto}table{border-collapse:collapse;width:100%;font-size:.9rem}th,td{text-align:left;padding:.35rem .5rem;border-bottom:1px solid var(--line);vertical-align:top}th{font-family:var(--mono);font-size:.74rem;text-transform:uppercase;letter-spacing:.06em;color:var(--mut)}
.wl{font-family:var(--mono);font-size:.9em}.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(236px,1fr));gap:.55rem;margin-bottom:.6rem}
.card{border:1px solid var(--line);padding:.65rem .8rem;background:var(--card);text-decoration:none;color:var(--fg);display:block}.card:hover{border-color:var(--acc)}.card b{font-family:var(--mono);color:var(--acc);font-size:.84rem;font-weight:600}.card span{display:block;color:var(--mut);font-size:.82rem;margin-top:.15rem;line-height:1.45}
.home h2{font-size:1.2rem;margin:1.6rem 0 .5rem}.home .lede{font-family:var(--serif);font-size:1.15rem;max-width:60ch;margin:0 0 .4rem}.home .how{color:var(--mut);max-width:62ch;margin:0 0 1rem;font-size:.92rem}
.toggle{float:right;font:.74rem var(--mono);background:none;border:1px solid var(--line);color:var(--mut);cursor:pointer;padding:.15rem .5rem;text-transform:uppercase;letter-spacing:.06em}
@media (max-width:820px){.app{grid-template-columns:1fr}nav{position:static;height:auto;border-right:0;border-bottom:1px solid var(--line)}main{padding:1rem}}
@media (prefers-reduced-motion:no-preference){.card{transition:border-color .15s}}
`;

const js = `
${resolverSrc}
const DATA = JSON.parse(document.getElementById("vd-data").textContent);
const E = DATA.entries; const byName = Object.fromEntries(E.map(e => [e.name, e]));
const LABEL = ${JSON.stringify(CAT_LABEL)};
const $ = s => document.querySelector(s);
function navHtml(){
  let h = '<h1>Visual Dictionary</h1><div class="sub">'+E.length+' entries · structure × wardrobe</div>';
  h += '<h2>Docs</h2><ul class="docs">'+Object.keys(DATA.docs).map(d=>'<li><a href="#d/'+d+'">'+d+'</a></li>').join('')+'</ul>';
  for (const c of DATA.categories){
    const es = E.filter(e=>e.category===c); if(!es.length) continue;
    h += '<h2>'+LABEL[c]+' <span style="font-weight:400">'+es.length+'</span></h2><ul>'+es.map(e=>'<li><a href="#e/'+e.name+'" data-n="'+e.name+'">'+e.title+'</a></li>').join('')+'</ul>';
  }
  return h;
}
function hitHtml(r){
  return '<div class="hit"><span class="name"><a href="#e/'+r.name+'">'+r.name+'</a></span><span class="sum">'+(r.summary||r.title)+'</span><span class="score">'+r.score+'</span><span class="meta">'+LABEL[r.category]+' · matched: '+(r.matched.join(', ')||'—')+'</span></div>';
}
function doSearch(){
  const q = $('#q').value.trim(); const box = $('#res');
  if(!q){ box.hidden = true; return; }
  const r = resolve(E, q, 6); box.hidden = false;
  if(!r.length){ box.innerHTML = '<div class="flag">No direct match. Vague critique? Diagnose against the foundations: visual-hierarchy, spacing-density, text-block-grammar, color-roles, elevation, motion-ceremony.</div>'; return; }
  box.innerHTML = r.map(hitHtml).join('') + (closeCall(r) ? '<div class="flag"><b>Close call</b> — the top candidates are within 2 points. Present them with a one-line distinction each; the designer decides.</div>' : '');
}
function home(){
  const cards = f => '<div class="grid">'+E.filter(f).map(e=>'<a class="card" href="#e/'+e.name+'"><b>'+e.name+'</b><span>'+e.summary+'</span></a>').join('')+'</div>';
  let h = '<div class="home"><h1 style="margin:.2rem 0 .4rem;font-size:1.9rem">Visual Attribute Dictionary</h1>';
  h += '<p class="lede">Every page is two independent picks: a <em>structure</em> (how content is organized) wearing a <em>wardrobe</em> (how it is dressed), fine-tuned by dials.</p>';
  h += '<p class="how">Type what you would say to a designer into the box above — “milky see-through panel”, “feels off”, “recipe card, but gothic” (one axis per search). When two entries score within 2 points the page flags a close call: that decision is the designer\\'s, not the dictionary\\'s.</p>';
  h += '<h2>Wardrobe <span class="chip">'+E.filter(e=>e.category==='wardrobe').length+' registers</span></h2>'+cards(e=>e.category==='wardrobe');
  h += '<h2>Structure <span class="chip">layout · editorial</span></h2>'+cards(e=>e.category==='layout'||e.category==='editorial');
  h += '<h2>Foundations <span class="chip">the custom-wardrobe dial sheet</span></h2><p class="how">When no named wardrobe fits — the normal case for original work — set every one of these explicitly. That sheet is your wardrobe.</p>'+cards(e=>e.category==='foundations');
  h += '</div>';
  return h;
}
function render(){
  const h = location.hash.slice(1); const m = $('#content');
  document.querySelectorAll('nav a.on').forEach(a=>a.classList.remove('on'));
  if(h.startsWith('e/')){
    const e = byName[h.slice(2)]; if(!e){ m.innerHTML='<p>No entry.</p>'; return; }
    m.innerHTML = '<div class="entry"><span class="chip">'+LABEL[e.category]+'</span>'+e.media.map(x=>'<span class="chip">'+x+'</span>').join('')+
      '<h1>'+e.name+'</h1><p class="summary">'+(e.title!==e.name?e.title+' — ':'')+e.summary+'</p><div class="aliases"><b>also said as</b> '+e.aliases.join(' · ')+'</div>'+e.html.replace(/<h1>.*?<\\/h1>/,'')+'</div>';
    const a = document.querySelector('nav a[data-n="'+e.name+'"]'); if(a){ a.classList.add('on'); }
    window.scrollTo(0,0);
  } else if(h.startsWith('d/')){
    m.innerHTML = '<div class="entry">'+(DATA.docs[h.slice(2)]||'<p>No doc.</p>')+'</div>'; window.scrollTo(0,0);
  } else m.innerHTML = home();
}
document.getElementById('nav').innerHTML = navHtml();
$('#q').addEventListener('input', doSearch);
$('#theme').addEventListener('click', ()=>{ const r=document.documentElement; const cur=r.getAttribute('data-theme'); r.setAttribute('data-theme', cur==='dark'?'light':'dark'); });
window.addEventListener('hashchange', render); render();
`;

const body = `<title>Visual Attribute Dictionary</title>
${fonts}
<style>${css}</style>
<div class="app"><nav id="nav"></nav><main>
<button class="toggle" id="theme" aria-label="Toggle theme">theme</button>
<div class="search"><label for="q" class="chip" style="border:0;padding:0;margin-bottom:.3rem;display:block">resolve</label><input id="q" placeholder="Describe the look the way you would say it — “milky see-through panel”, “feels off”, “gov uk style form”" autocomplete="off"></div>
<div class="res" id="res" hidden></div>
<div id="content"></div>
</main></div>
<script id="vd-data" type="application/json">${JSON.stringify(data).replace(/<\//g, "<\\/")}</script>
<script>${js}</script>`;

mkdirSync(dirname(join(ROOT, OUT)), { recursive: true });
const [head, rest] = body.split(`<style>${css}</style>`);
writeFileSync(
  join(ROOT, OUT),
  `<!doctype html>\n<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1">${head}<style>${css}</style></head><body>${rest}</body></html>`
);
if (FRAGMENT) writeFileSync(FRAGMENT.startsWith("/") ? FRAGMENT : join(ROOT, FRAGMENT), body);
console.log(`site: ${OUT} (${(Buffer.byteLength(body) / 1024).toFixed(0)} KB)${FRAGMENT ? `, fragment: ${FRAGMENT}` : ""}`);
