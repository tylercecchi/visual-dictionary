#!/usr/bin/env node
/**
 * Visual Dictionary MCP server (production distribution).
 * Content ships inside the npm package; paths resolve from this file,
 * so `npx visual-dictionary-mcp` works from anywhere with zero clone.
 */
import { readFileSync, readdirSync, existsSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { z } from "zod";
import { parseEntry, resolve, closeCall, CATEGORIES, STRUCTURE_CATEGORIES, WARDROBE_CATEGORY } from "./lib/resolve.mjs";

const ROOT = dirname(fileURLToPath(import.meta.url));
const read = (p) => readFileSync(join(ROOT, p), "utf8");
const text = (t) => ({ content: [{ type: "text", text: t }] });

let cache = null;
function entries() {
  if (cache) return cache;
  cache = readdirSync(join(ROOT, "entries"))
    .filter((f) => f.endsWith(".md"))
    .map((f) => parseEntry(f.replace(/\.md$/, ""), read(join("entries", f))));
  return cache;
}
const byName = (n) => entries().find((e) => e.name === n.trim().toLowerCase());
const line = (e) => `${e.name}  (${e.category}) — ${e.summary || e.title}`;

// entry → registry sections that mention it (built once from LIBRARIES.md).
let libIndex = null;
function librariesIndex() {
  if (libIndex) return libIndex;
  libIndex = new Map();
  const md = read("LIBRARIES.md");
  const sections = md.split(/^(?=## )/m).slice(1);
  for (const sec of sections) {
    const heading = sec.split("\n")[0].replace(/^## /, "").trim();
    const rows = sec.split("\n").filter((l) => /^\|/.test(l) && !/^\|\s*-/.test(l) && !/^\|\s*(Component|Package|Catalog|Shader|Rule|Library)/i.test(l));
    const mentioned = new Set([...sec.matchAll(/\[\[([a-z0-9-]+)\]\]/g)].map((m) => m[1]));
    for (const name of mentioned) {
      const hits = rows.filter((r) => r.includes(`[[${name}]]`));
      if (!libIndex.has(name)) libIndex.set(name, []);
      libIndex.get(name).push({ heading, rows: hits });
    }
  }
  return libIndex;
}

// Structure × wardrobe tension table from LAYOUT.md (rows keyed by [[wardrobe]]).
function tensionsFor(name) {
  const md = read("LAYOUT.md");
  const sec = md.split(/^## Structure × wardrobe tensions/m)[1] ?? "";
  return sec
    .split("\n")
    .filter((l) => l.startsWith("|") && l.includes(`[[${name}]]`))
    .map((l) => l.split("|").slice(1, -1).map((c) => c.trim()))
    .map(([w, pressure, watch]) => `- ${w}: ${pressure}${watch ? ` — watch: ${watch}` : ""}`);
}

const server = new McpServer(
  { name: "visual-dictionary", version: "0.2.0" },
  {
    instructions:
      `A UX/UI design-quality dictionary: ${entries().length} entries mapping vague design ` +
      "language to canonical terms, tunable dials, contracts, and vetted " +
      "implementation paths. Fundamental model: compose every page as two " +
      "independent picks — STRUCTURE (layout/editorial entry) x WARDROBE (aesthetic " +
      "register, or a custom dial sheet over the foundation entries when no named " +
      "wardrobe fits) — then fine-tune dials. Start with protocol(); resolve() routes a " +
      "designer's phrase (one call per axis for structure-x-wardrobe briefs) and flags " +
      "close calls — present those to the designer (the judgment split: the dictionary " +
      "presents, the designer decides). compose() assembles the two picks; " +
      "libraries_for() finds registered implementations for an entry.",
  }
);

server.registerTool(
  "resolve",
  {
    description:
      "Route a designer's phrase (vague or precise) to the best-matching dictionary " +
      "entries, ranked, each with its one-line summary. Flags a CLOSE CALL when the " +
      "top results are within 2 points — present those candidates to the designer " +
      "instead of picking. For structure x wardrobe briefs ('recipe card, but gothic'), " +
      "resolve each axis as its OWN query. Vague critique ('feels off', 'premium') " +
      "routes to the foundation entries it should be diagnosed against.",
    inputSchema: { query: z.string(), top: z.number().int().min(1).max(20).default(5) },
  },
  async ({ query, top }) => {
    const r = resolve(entries(), query, top);
    if (!r.length)
      return text(
        "No direct match. If this is a vague critique ('feels off'), diagnose via the foundation entries: visual-hierarchy, spacing-density, text-block-grammar, color-roles, elevation, motion-ceremony. Otherwise browse() by category."
      );
    const lines = r.map((x) => `${x.name}  (score ${x.score}, ${x.category}) — ${x.summary || x.title}\n    matched: ${x.matched.join(", ") || "—"}`);
    const tail = closeCall(r)
      ? "\n\nCLOSE CALL — present the top candidates to the designer with a one-line distinction each (judgment split); do not pick silently."
      : "\n\nClear winner. Fetch with get_entry(name); check libraries_for(name) before hand-building.";
    return text(lines.join("\n") + tail);
  }
);

server.registerTool(
  "get_entry",
  {
    description:
      "Fetch a full dictionary entry by kebab-case name (e.g. 'frosted-glass', " +
      "'book-design'). Entries carry aliases, perceptual cues, DIALS (report in " +
      "these — they are the iteration vocabulary), techniques ordered " +
      "cheapest-medium-first, and search queries for current libraries. Layout " +
      "entries add: coordinate, content contract, collapse behavior.",
    inputSchema: { name: z.string() },
  },
  async ({ name }) => {
    const e = byName(name);
    if (!e) {
      const near = resolve(entries(), name.replace(/-/g, " "), 3).map((x) => x.name).join(", ");
      return text(`No entry '${name}'.${near ? ` Nearest: ${near}.` : ""} Use resolve() or browse().`);
    }
    return text(e.text);
  }
);

server.registerTool(
  "browse",
  {
    description:
      `List entries with summaries, optionally by category: ${CATEGORIES.join(", ")}. ` +
      "'wardrobe' = aesthetic registers; 'editorial' + 'layout' = structure; " +
      "'foundations' = the systems every UI has (the diagnosis path and the custom-wardrobe dial sheet); " +
      "'components' = component families. Empty = full INDEX.md.",
    inputSchema: { category: z.string().default("") },
  },
  async ({ category }) => {
    if (!category) return text(read("INDEX.md"));
    const c = category.trim().toLowerCase();
    const hits = entries().filter((e) => e.category === c).map(line);
    return text(hits.join("\n") || `No category '${category}'. Categories: ${CATEGORIES.join(", ")}.`);
  }
);

server.registerTool(
  "compose",
  {
    description:
      "Assemble the structure x wardrobe pair. `structure` is a layout or editorial " +
      "entry name. `wardrobe` is either ONE wardrobe entry name, or a comma-separated " +
      "list of attribute/foundation entries forming a CUSTOM wardrobe (use this when " +
      "no named register fits — the normal case for original work). Returns the " +
      "structure's content contract and collapse behavior, every wardrobe entry's " +
      "dials, the known structural-pressure tensions for named wardrobes, and the " +
      "foundation dial-sheet checklist for custom ones.",
    inputSchema: { structure: z.string(), wardrobe: z.string() },
  },
  async ({ structure, wardrobe }) => {
    const s = byName(structure);
    if (!s) return text(`No structure entry '${structure}'. Use browse('layout') or browse('editorial').`);
    const out = [];
    if (!STRUCTURE_CATEGORIES.has(s.category))
      out.push(`NOTE: '${s.name}' is a ${s.category} entry, not a structure (layout/editorial). Proceeding, but the content contract below may be absent.`);
    out.push(`# STRUCTURE — ${s.title} (${s.category})`, s.summary ? `_${s.summary}_` : "");
    for (const h of ["Content contract", "Collapse behavior", "Dials"]) if (s.sections[h]) out.push(`\n## ${h}\n${s.sections[h]}`);
    if (s.category === "editorial")
      out.push("\nEditorial entries carry their own costume — strip to the structural system (deck, zones, ceremony) when the wardrobe below should dress it.");

    const names = wardrobe.split(",").map((x) => x.trim().toLowerCase()).filter(Boolean);
    const ws = names.map((n) => [n, byName(n)]);
    const missing = ws.filter(([, e]) => !e).map(([n]) => n);
    if (missing.length) out.push(`\nUnknown wardrobe entries: ${missing.join(", ")} (use resolve()).`);
    const found = ws.filter(([, e]) => e).map(([, e]) => e);
    const custom = !(found.length === 1 && found[0].category === WARDROBE_CATEGORY);
    out.push(`\n# WARDROBE — ${custom ? "custom dial sheet" : found[0].title}`);
    for (const e of found) {
      out.push(`\n## ${e.title} (${e.category})${e.summary ? ` — ${e.summary}` : ""}`);
      if (e.sections["Dials"]) out.push(e.sections["Dials"]);
      const t = tensionsFor(e.name);
      if (t.length) out.push(`\nStructural pressure:\n${t.join("\n")}`);
    }
    if (custom) {
      const foundations = entries().filter((e) => e.category === "foundations").map((e) => e.name);
      const unset = foundations.filter((n) => !found.some((e) => e.name === n));
      out.push(
        `\n## Custom-wardrobe dial sheet\nA custom wardrobe is complete when every foundation system has an explicit setting. Not yet set for this brief: ${unset.join(", ")}. ` +
          "Set each from its entry's Dials (get_entry), then name the nearest named wardrobe(s) as calibration references (resolve on the brief's adjectives)."
      );
    }
    out.push(
      "\n## Compose check\n- Does the wardrobe's density/type pressure fight the structure's content contract? Name it; the designer resolves it.\n- One surface above tier 1 at a time (LAYOUT.md contract law).\n- Report the result in dial vocabulary."
    );
    return text(out.filter(Boolean).join("\n"));
  }
);

server.registerTool(
  "libraries_for",
  {
    description:
      "Which registered libraries, discovery sources, galleries, or tools cover a given " +
      "entry — the inverse of LIBRARIES.md's coverage maps. Check after resolving an " +
      "entry and before hand-building; apply the stack rule and use-time currency " +
      "verification to anything returned.",
    inputSchema: { entry: z.string() },
  },
  async ({ entry }) => {
    const n = entry.trim().toLowerCase();
    if (!byName(n)) return text(`No entry '${entry}'.`);
    const hits = librariesIndex().get(n) ?? [];
    if (!hits.length) return text(`No registry coverage for '${n}'. Use the entry's own techniques and search queries; the entry is the durable layer.`);
    return text(
      hits
        .map((h) => `## ${h.heading}${h.rows.length ? "\n" + h.rows.join("\n") : "\n(mentioned in prose — read the section in libraries())"}`)
        .join("\n\n") + "\n\nVerify currency, license, and stack fit before recommending (LIBRARIES.md resilience policy)."
    );
  }
);

server.registerTool(
  "protocol",
  { description: "The full agent protocol (CLAUDE.md): resolution flow, diagnosis path for vague critique, the stack rule, the structure x wardrobe doctrine incl. custom wardrobes, the judgment split. Read first in a new session.", inputSchema: {} },
  async () => text(read("CLAUDE.md"))
);
server.registerTool(
  "layout_system",
  { description: "LAYOUT.md: the seven-variable layout matrix with archetype coordinates, the tension tables (content/layout and structure/wardrobe), and the interaction-surface contract table. Consult before any layout or surface request.", inputSchema: {} },
  async () => text(read("LAYOUT.md"))
);
server.registerTool(
  "libraries",
  { description: "LIBRARIES.md: the full resource registry — cross-cutting libraries with coverage maps and stack-rule classes, craft-rule sets and tuning tools, discovery sources, reference galleries, and the resilience policy. For one entry, prefer libraries_for(entry).", inputSchema: {} },
  async () => text(read("LIBRARIES.md"))
);

const transport = new StdioServerTransport();
await server.connect(transport);
