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

// The conditions an agent must see before using a source: the section's
// install model, stack-rule class, licence/usage terms, cautions, and
// paywall notes. Pulled from bold-labelled paragraphs so they travel with
// every coverage row instead of staying buried in prose.
const TERM_LABEL = /\*\*(install model|stack-rule class|licen[cs]e[^*]*|licensing[^*]*|usage[^*]*|caveats?|cautions?|pricing[^*]*|when to consult[^*]*)[:.]?\*\*/i;
function sectionTerms(sec) {
  const paras = sec.split(/\n\s*\n/).map((p) => p.trim());
  const out = [];
  paras.forEach((p, i) => {
    if (p.startsWith("|") || p.startsWith("#") || !TERM_LABEL.test(p)) return;
    let t = p.replace(/\s*\n\s*/g, " ");
    // A term that ends "So:" / "means:" continues in the bullet list after it.
    const next = paras[i + 1] ?? "";
    if (t.endsWith(":") && next.startsWith("- ")) t += " " + next.split(/\n(?=- )/).map((b) => b.replace(/\s*\n\s*/g, " ")).join(" ");
    out.push(t);
  });
  return out;
}

// entry → knowledge sources in REFERENCES.md that inform it.
let refIndex = null;
function referencesIndex() {
  if (refIndex) return refIndex;
  refIndex = new Map();
  if (!existsSync(join(ROOT, "REFERENCES.md"))) return refIndex;
  for (const sec of read("REFERENCES.md").split(/^(?=## )/m).slice(1)) {
    const heading = sec.split("\n")[0].replace(/^## /, "").trim();
    const terms = sectionTerms(sec);
    for (const name of new Set([...sec.matchAll(/\[\[([a-z0-9-]+)\]\]/g)].map((m) => m[1]))) {
      if (!refIndex.has(name)) refIndex.set(name, []);
      refIndex.get(name).push({ heading, terms });
    }
  }
  return refIndex;
}
const formatTerms = (terms) => (terms.length ? "\nTerms:\n" + terms.map((x) => "- " + x).join("\n") : "");

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
    const terms = sectionTerms(sec);
    for (const name of mentioned) {
      const hits = rows.filter((r) => r.includes(`[[${name}]]`));
      if (!libIndex.has(name)) libIndex.set(name, []);
      libIndex.get(name).push({ heading, rows: hits, terms });
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
      `A UX/UI design-quality dictionary covering how interfaces LOOK and BEHAVE: ${entries().length} entries ` +
      "mapping vague design language to canonical terms, tunable dials, layout/surface contracts, behavior " +
      "rules, and vetted implementation paths with their licence and stack terms.\n\n" +
      "USE IT WHENEVER the work is product interface design (screens, components, prototypes; not standalone " +
      "print or logo work), and especially when the user: critiques vaguely ('feels off', 'too busy', 'looks " +
      "cheap', 'the button gets lost', 'needs polish', 'feels clunky', 'the animation feels sluggish'); wants a " +
      "feel ('premium', 'vintage', 'frosted', 'calm dev-tool look'); names an editorial register ('like a " +
      "magazine', 'recipe card'), a layout or surface ('bento this', 'bottom sheet', 'dashboard'), or an effect " +
      "or transition by vibe; or describes a behavior ('undo should be forgiving', 'the submenu closes when I " +
      "move to it', 'drag and drop feels broken', 'add slash commands', 'infinite scroll', 'show who else is " +
      "editing', 'voice mode', 'the AI should ask before deleting'). Plain UI-building ('build the settings " +
      "page') also applies: the foundation entries set the quality floor.\n\n" +
      "HOW: (1) resolve(phrase), one call per axis for 'X but Y' briefs; on a CLOSE CALL present the candidates " +
      "and let the designer pick. Vague visual critique: diagnose against the foundation entries " +
      "(visual-hierarchy, spacing-density, text-block-grammar, color-roles, elevation, motion-ceremony); vague " +
      "behavior critique: against interaction-principles. (2) get_entry and read all of it: behavior entries " +
      "have 'When not to use' (check it first); layout/surface entries have a content contract (check it " +
      "against the real content; layout_system() for the matrix). (3) Inventory the project's stack, then take " +
      "the cheapest technique that works within it. (4) libraries_for(entry) returns implementations and " +
      "knowledge sources WITH TERMS: apply them. Structural additions (three.js, native models, new input " +
      "paradigms) need user confirmation; 'no redistribution' means use and link, never copy; 'cite and link " +
      "only' means read and cite; surface paywalls, including ship-time ones. (5) Build to explicit dial " +
      "values with reduced-motion and keyboard paths, and report back in dial vocabulary so iteration stays " +
      "precise. Page composition is STRUCTURE (layout/editorial) x WARDROBE (aesthetic register, or a custom " +
      "dial sheet over the foundations); compose() assembles them. protocol() has the full rules.",
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
    const libs = librariesIndex().get(e.name) ?? [];
    const refs = referencesIndex().get(e.name) ?? [];
    const foot = [];
    if (libs.length) foot.push(`${libs.length} registry source${libs.length > 1 ? "s" : ""} (${libs.map((h) => h.heading.split(" — ")[0].split(" (")[0]).join(", ")})`);
    if (refs.length) foot.push(`knowledge source${refs.length > 1 ? "s" : ""}: ${refs.map((r) => r.heading.split(" — ")[0]).join(", ")}`);
    const tail = foot.length
      ? `\n\n---\nCoverage: ${foot.join("; ")}. Call libraries_for('${e.name}') for rows and their licence/stack terms before installing anything.`
      : `\n\n---\nNo registry coverage: build from the Techniques above.`;
    return text(e.text + tail);
  }
);

server.registerTool(
  "browse",
  {
    description:
      `List entries with summaries, optionally by category: ${CATEGORIES.join(", ")}. ` +
      "'wardrobe' = aesthetic registers; 'editorial' + 'layout' = structure; " +
      "'foundations' = the systems every UI has (the diagnosis path and the custom-wardrobe dial sheet); " +
      "'components' = component families; 'behavior' = interaction patterns (what a mechanism does, when to use it, when not). Empty = full INDEX.md.",
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
    const refs = referencesIndex().get(n) ?? [];
    if (!hits.length && !refs.length) return text(`No registry coverage for '${n}'. Use the entry's own techniques and search queries; the entry is the durable layer.`);
    const out = [];
    if (hits.length)
      out.push(
        "# Implementations (LIBRARIES.md)\n\n" +
          hits
            .map((h) => `## ${h.heading}${h.rows.length ? "\n" + h.rows.join("\n") : "\n(mentioned in prose — read the section in libraries())"}${formatTerms(h.terms)}`)
            .join("\n\n")
      );
    else out.push(`No registered implementation for '${n}'; build from the entry's techniques.`);
    if (refs.length)
      out.push("# Knowledge sources (REFERENCES.md) — consult and cite under these terms\n\n" + refs.map((r) => `## ${r.heading}${formatTerms(r.terms)}`).join("\n\n"));
    return text(
      out.join("\n\n") +
        "\n\nBefore using anything above: apply the Terms (licence, paywall, stack-rule class), verify currency and stack fit (LIBRARIES.md resilience policy), and confirm structural additions with the user."
    );
  }
);

server.registerTool(
  "references",
  {
    description:
      "REFERENCES.md: knowledge sources the dictionary consults and cites (e.g. Interface Lineage for " +
      "interaction patterns, design.how) with their USAGE TERMS — what may be quoted, adapted, or must " +
      "only be linked. Pass an entry name to get just the sources that inform it. Read the terms before " +
      "drawing from a source.",
    inputSchema: { entry: z.string().default("") },
  },
  async ({ entry }) => {
    if (!entry.trim()) return text(read("REFERENCES.md"));
    const n = entry.trim().toLowerCase();
    if (!byName(n)) return text(`No entry '${entry}'.`);
    const refs = referencesIndex().get(n) ?? [];
    if (!refs.length) return text(`No knowledge source registered for '${n}'. Call libraries_for('${n}') for implementations.`);
    return text(refs.map((r) => `## ${r.heading}${formatTerms(r.terms)}`).join("\n\n") + "\n\nFull text: references().");
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
