// Repo lint: entry structure, frontmatter, wiki-links, INDEX consistency,
// entry-count drift, and registry staleness. Run: node tools/lint.mjs
// Errors exit 1; warnings are informational.
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { parseEntry, CATEGORIES } from "../lib/resolve.mjs";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
const read = (p) => readFileSync(join(ROOT, p), "utf8");
const errors = [], warnings = [];
const err = (m) => errors.push(m), warn = (m) => warnings.push(m);

const files = readdirSync(join(ROOT, "entries")).filter((f) => f.endsWith(".md"));
const entries = files.map((f) => parseEntry(f.replace(/\.md$/, ""), read(join("entries", f))));
const names = new Set(entries.map((e) => e.name));

const REQUIRED = ["You know it when you see", "Dials", "Techniques", "Search queries", "Related"];
const LAYOUT_REQUIRED = ["Content contract", "Collapse behavior"];
// Layout *archetypes* (rows of LAYOUT.md's coordinate table) must carry the contract sections;
// layout-category principles (visual-composition) need not.
const archetypes = new Set([...(read("LAYOUT.md").split("## Interaction surfaces")[0].matchAll(/^\| \[\[([a-z0-9-]+)\]\]/gm))].map((m) => m[1]));

for (const e of entries) {
  const fmName = e.text.match(/^name:\s*(\S+)/m)?.[1];
  if (fmName !== e.name) err(`${e.name}: frontmatter name '${fmName}' != filename`);
  if (!e.title) err(`${e.name}: missing title`);
  if (!CATEGORIES.includes(e.category)) err(`${e.name}: category '${e.category}' not in ${CATEGORIES.join("|")}`);
  if (!e.summary) err(`${e.name}: missing summary (one line; shown by resolve/browse)`);
  if (e.aliases.length < 5) warn(`${e.name}: only ${e.aliases.length} aliases`);
  if (!e.media.length) err(`${e.name}: missing media`);
  for (const h of REQUIRED) if (!(h in e.sections)) err(`${e.name}: missing section '## ${h}'`);
  if (!("Starting points" in e.sections)) warn(`${e.name}: no '## Starting points' (optional, but entries with libraries should have it)`);
  if (e.category === "layout" && archetypes.has(e.name)) for (const h of LAYOUT_REQUIRED) if (!(h in e.sections)) err(`${e.name}: layout archetype missing '## ${h}'`);
  for (const l of e.links) if (!names.has(l)) err(`${e.name}: dangling link [[${l}]]`);
}

// Wiki-links in the doc files.
for (const doc of ["INDEX.md", "LAYOUT.md", "LIBRARIES.md", "CLAUDE.md"]) {
  const t = read(doc);
  for (const m of t.matchAll(/\[\[([a-z0-9-]+)\]\]/g)) if (!names.has(m[1])) err(`${doc}: dangling link [[${m[1]}]]`);
  for (const m of t.matchAll(/\(entries\/([a-z0-9-]+)\.md\)/g)) if (!names.has(m[1])) err(`${doc}: link to missing entries/${m[1]}.md`);
}

// INDEX coverage.
const index = read("INDEX.md");
for (const e of entries) if (!index.includes(`(entries/${e.name}.md)`)) err(`INDEX.md: '${e.name}' not indexed`);

// Entry-count drift in README / package.json.
const n = entries.length;
for (const [doc, re] of [["README.md", /~(\d+) entries/], ["package.json", /~(\d+) entries/]]) {
  const m = read(doc).match(re);
  if (!m) warn(`${doc}: no '~N entries' count found`);
  else if (Number(m[1]) !== n) err(`${doc}: says ~${m[1]} entries, repo has ${n}`);
}

// TEMPLATE category list matches the resolver's.
const tmpl = read("TEMPLATE.md").match(/category:\s*([^\n]+)/)?.[1] ?? "";
for (const c of CATEGORIES) if (!tmpl.includes(c)) err(`TEMPLATE.md: category list missing '${c}'`);

// Registry staleness: registered/verified dates older than 6 months.
const lib = read("LIBRARIES.md");
const now = new Date();
for (const m of lib.matchAll(/^## (.+?)\s*\((?:[^)]*?)(registered|verified) (\d{4})-(\d{2})(?:-(\d{2}))?[^)]*\)/gm)) {
  const d = new Date(Number(m[3]), Number(m[4]) - 1, Number(m[5] ?? 1));
  const months = (now - d) / (1000 * 60 * 60 * 24 * 30.4);
  if (months > 6) warn(`LIBRARIES.md: '${m[1]}' last ${m[2]} ${Math.round(months)} months ago — re-verify`);
}

for (const w of warnings) console.log("warn  " + w);
for (const e of errors) console.log("ERROR " + e);
console.log(`\n${entries.length} entries · ${errors.length} errors · ${warnings.length} warnings`);
if (errors.length) process.exit(1);
