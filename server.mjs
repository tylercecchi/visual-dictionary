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

const ROOT = dirname(fileURLToPath(import.meta.url));
const read = (p) => readFileSync(join(ROOT, p), "utf8");
const text = (t) => ({ content: [{ type: "text", text: t }] });

const STOP = new Set("the a an is are should be like when with on at of and or it its that make look looks feel feels vibe vibes style old new for in to they there".split(" "));
const stems = (w) => {
  const out = new Set([w]);
  for (const suf of ["ing", "ed", "es", "s", "ly"])
    if (w.endsWith(suf) && w.length > suf.length + 2) out.add(w.slice(0, -suf.length));
  return [...out];
};

function entries() {
  return readdirSync(join(ROOT, "entries"))
    .filter((f) => f.endsWith(".md"))
    .map((f) => {
      const t = read(join("entries", f));
      return {
        name: f.replace(/\.md$/, ""),
        alias: (t.match(/aliases:\s*\[([^\]]*)\]/)?.[1] ?? "").toLowerCase(),
        category: t.match(/category:\s*(\S+)/)?.[1] ?? "",
        cues: (t.match(/## You know it when you see\n([\s\S]*?)\n## /i)?.[1] ?? "").toLowerCase(),
        body: t.toLowerCase(),
      };
    });
}

const server = new McpServer(
  { name: "visual-dictionary", version: "0.1.0" },
  {
    instructions:
      "A UX/UI design-quality dictionary: ~178 entries mapping vague design " +
      "language to canonical terms, tunable dials, contracts, and vetted " +
      "implementation paths. Fundamental model: compose every page as two " +
      "independent picks — editorial/layout STRUCTURE x aesthetic WARDROBE — " +
      "then fine-tune dials. Start with protocol(); use resolve() to route a " +
      "designer's phrase (one call per axis for structure-x-wardrobe briefs); " +
      "present close candidates to the designer (the judgment split: the " +
      "dictionary presents, the designer decides).",
  }
);

server.registerTool(
  "resolve",
  {
    description:
      "Route a designer's phrase (vague or precise) to the best-matching " +
      "dictionary entries, ranked. When several score closely, present them " +
      "to the designer as options rather than silently picking one. For " +
      "structure x wardrobe briefs ('recipe card, but gothic'), resolve each " +
      "axis as its OWN query — mixing them in one query dilutes both.",
    inputSchema: { query: z.string(), top: z.number().int().min(1).max(20).default(5) },
  },
  async ({ query, top }) => {
    const toks = (query.toLowerCase().match(/[a-z0-9]+/g) ?? []).filter((w) => !STOP.has(w));
    const scored = entries()
      .map((e) => {
        let s = 0;
        for (const tok of toks) {
          const v = stems(tok);
          if (v.some((x) => e.alias.includes(x))) s += 4;
          else if (v.some((x) => e.name.replace(/-/g, " ").includes(x))) s += 3;
          else if (v.some((x) => e.cues.includes(x))) s += 2;
          else if (v.some((x) => new RegExp(`\\b${x}`).test(e.body))) s += 1;
        }
        return { s, name: e.name, category: e.category };
      })
      .filter((r) => r.s > 0)
      .sort((a, b) => b.s - a.s)
      .slice(0, top);
    if (!scored.length)
      return text(
        "No direct match. If this is a vague critique ('feels off'), diagnose via the foundation entries instead: visual-hierarchy, spacing-density, text-block-grammar, color-roles, elevation, motion-ceremony. Otherwise browse() by category."
      );
    return text(
      scored.map((r) => `${r.name}  (score ${r.s}, ${r.category})`).join("\n") +
        "\n\nFetch full entries with get_entry(name). If scores are close, offer the candidates to the designer (judgment split)."
    );
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
    const p = join(ROOT, "entries", `${name.trim().toLowerCase()}.md`);
    if (!existsSync(p)) return text(`No entry '${name}'. Use resolve() or browse().`);
    return text(readFileSync(p, "utf8"));
  }
);

server.registerTool(
  "browse",
  {
    description:
      "List entries, optionally by category: light-and-depth, surface-and-material, " +
      "distortion-and-lens, color-and-tone, pattern-and-texture, motion, " +
      "ui-foundations, layout. Empty = full INDEX.md (incl. the editorial cluster).",
    inputSchema: { category: z.string().default("") },
  },
  async ({ category }) => {
    if (!category) return text(read("INDEX.md"));
    const hits = entries()
      .filter((e) => e.category === category.trim())
      .map((e) => `${e.name}  — ${e.alias.slice(0, 90)}`);
    return text(hits.join("\n") || `No category '${category}'.`);
  }
);

server.registerTool(
  "protocol",
  { description: "The full agent protocol (CLAUDE.md): resolution flow, diagnosis path for vague critique, the stack rule, the structure x wardrobe doctrine, the judgment split. Read first in a new session.", inputSchema: {} },
  async () => text(read("CLAUDE.md"))
);
server.registerTool(
  "layout_system",
  { description: "LAYOUT.md: the seven-variable layout matrix with archetype coordinates, the tension table, and the interaction-surface contract table. Consult before any layout or surface request.", inputSchema: {} },
  async () => text(read("LAYOUT.md"))
);
server.registerTool(
  "libraries",
  { description: "LIBRARIES.md: the resource registry — cross-cutting libraries with coverage maps and stack-rule classes, discovery sources, reference galleries, and the resilience policy. Check after resolving an entry, before hand-building.", inputSchema: {} },
  async () => text(read("LIBRARIES.md"))
);

const transport = new StdioServerTransport();
await server.connect(transport);
