/**
 * Shared resolver: parses entry frontmatter/sections and scores a designer's
 * phrase against entries. Pure — no Node imports — so the same code runs in
 * server.mjs, tools/findability-audit.mjs, and the static site.
 *
 * Scoring (per entry):
 *   +10  query normalizes to the entry's exact name / title
 *   +3   an entire multi-word alias appears in the query (tie-breaker, not a lead)
 *   +6   a multi-word synonym rule fires (its tokens are consumed)
 *   +4   a single-word synonym rule fires (same weight as an alias hit)
 *   +4   a query token matches a word of an alias (stem-aware, whole word)
 *   +3   a query token matches a word of the name
 *   +2   a query token appears in the perceptual cues
 *   +1   a query token appears anywhere in the body
 * Tie-break: score, distinct tokens matched, phrase hits, name.
 */

export const STOP = new Set(
  (
    "the a an is are should be like when with on at of and or it its that make " +
    "look looks feel feels vibe vibes style old new for in to they there this " +
    "our my your we i want need something some more less bit little very really " +
    "kind sort modern clean nice cool simple better good great app page ui ux " +
    "design designed website site screen component section thing"
  ).split(" ")
);

// Query phrase/word → entries that the naive text match under-serves.
// Phrase rules (multi-word) consume their tokens; word rules do not.
export const SYNONYMS = {
  "dark mode": ["color-roles"],
  "light mode": ["color-roles"],
  "dark theme": ["color-roles"],
  theme: ["color-roles"],
  premium: ["visual-hierarchy", "elevation", "typographic-voice", "spacing-density"],
  expensive: ["visual-hierarchy", "elevation", "typographic-voice", "spacing-density"],
  luxury: ["fashion-editorial", "typographic-voice", "spacing-density"],
  cheap: ["visual-hierarchy", "color-roles", "spacing-density"],
  polish: ["visual-hierarchy", "spacing-density", "elevation", "motion-ceremony"],
  polished: ["visual-hierarchy", "spacing-density", "elevation", "motion-ceremony"],
  busy: ["visual-hierarchy", "spacing-density"],
  cluttered: ["visual-hierarchy", "spacing-density"],
  cramped: ["spacing-density"],
  off: ["visual-hierarchy", "spacing-density", "text-block-grammar", "color-roles"],
  pop: ["visual-hierarchy", "color-roles"],
  boring: ["visual-hierarchy", "typographic-voice", "motion-ceremony"],
  generic: ["typographic-voice", "color-roles", "illustration-style"],
  template: ["typographic-voice", "color-roles", "shape-language"],
  settings: ["form-grammar", "navigation-language", "app-shell"],
  preferences: ["form-grammar", "navigation-language"],
  dashboard: ["dashboard-tiles"],
  "long shadow": ["long-shadow-isometric"],
  "long shadows": ["long-shadow-isometric"],
  y2k: ["period-looks"],
  confetti: ["particles"],
  popup: ["popover-menu"],
  tooltip: ["popover-menu"],
  hover: ["hover-response"],
  candlelit: ["firelight-flicker"],
  landing: ["centered-stack"],
  homepage: ["centered-stack"],
  hero: ["centered-stack", "scene-staging"],
  pricing: ["comparison-columns"],
  login: ["focus-page"],
  signup: ["focus-page", "form-grammar"],
  checkout: ["focus-page", "form-grammar"],
  onboarding: ["coach-marks", "focus-page"],
  chat: ["conversation-layout"],
  chatbot: ["conversation-layout", "ai-orb"],
  assistant: ["ai-orb", "conversation-layout"],
  glass: ["frosted-glass"],
  glassy: ["frosted-glass"],
  wet: ["reflections", "liquid-ripple"],
  shiny: ["specular-metallic", "shimmer-sheen"],
  glow: ["glow-bloom"],
  glowing: ["glow-bloom"],
  retro: ["period-looks"],
  vintage: ["period-looks", "print-artifacts", "weathering-patina"],
  nostalgic: ["period-looks"],
  playful: ["cute-naive", "motion-ceremony", "illustration-style"],
  fun: ["cute-naive", "motion-ceremony"],
  minimal: ["spacing-density", "bauhaus-swiss", "visual-hierarchy"],
  minimalist: ["spacing-density", "bauhaus-swiss", "visual-hierarchy"],
  bold: ["typographic-voice", "visual-hierarchy"],
  elegant: ["fashion-editorial", "typographic-voice"],
  professional: ["civic-design", "engineering-datasheet", "spacing-density"],
  corporate: ["color-roles", "illustration-style"],
  trustworthy: ["civic-design", "color-roles"],
  "3d": ["scene-staging"],
  animated: ["motion-ceremony"],
  animation: ["motion-ceremony"],
  animations: ["motion-ceremony"],
  font: ["typographic-voice"],
  fonts: ["typographic-voice"],
  typography: ["typographic-voice", "type-composition"],
  color: ["color-roles"],
  colors: ["color-roles"],
  colour: ["color-roles"],
  colours: ["color-roles"],
  palette: ["color-roles"],
  spacing: ["spacing-density"],
  whitespace: ["spacing-density"],
  shadow: ["elevation"],
  shadows: ["elevation"],
  icons: ["iconography-style"],
  icon: ["iconography-style"],
  sidebar: ["app-shell", "navigation-language"],
  navbar: ["navigation-language", "app-shell"],
  menu: ["navigation-language", "popover-menu", "menu-design"],
  table: ["table-design"],
  form: ["form-grammar"],
  forms: ["form-grammar"],
  button: ["control-language"],
  buttons: ["control-language"],
  loading: ["loading-language"],
  loader: ["loading-language"],
  empty: ["illustration-style", "loading-language"],
  accessible: ["visible-accessibility"],
  accessibility: ["visible-accessibility"],
  mobile: ["sheet-drawer", "navigation-language"],
};

export function stems(w) {
  const out = new Set([w]);
  for (const suf of ["ing", "ed", "es", "s", "ly", "y"])
    if (w.endsWith(suf) && w.length > suf.length + 2) out.add(w.slice(0, -suf.length));
  return out;
}

const words = (s) => (s.toLowerCase().match(/[a-z0-9]+/g) ?? []);

/** Parse one entry file into a record the scorer and tools can use. */
export function parseEntry(name, text) {
  const fm = text.match(/^---\n([\s\S]*?)\n---/)?.[1] ?? "";
  const field = (k) => fm.match(new RegExp(`^${k}:\\s*(.*)$`, "m"))?.[1]?.trim() ?? "";
  const list = (k) =>
    (field(k).match(/^\[([^\]]*)\]$/)?.[1] ?? "")
      .split(",")
      .map((x) => x.trim().toLowerCase())
      .filter(Boolean);
  const unquote = (s) => s.replace(/^"(.*)"$/, "$1").replace(/^'(.*)'$/, "$1");
  const sections = {};
  for (const m of text.matchAll(/^## (.+)\n([\s\S]*?)(?=^## |(?![\s\S]))/gm)) sections[m[1].trim()] = m[2].trim();
  return {
    name,
    title: unquote(field("title")) || name,
    category: field("category"),
    summary: unquote(field("summary")),
    aliases: list("aliases"),
    media: list("media"),
    cues: (sections["You know it when you see"] ?? "").toLowerCase(),
    body: text.toLowerCase(),
    sections,
    text,
    links: [...new Set([...text.matchAll(/\[\[([a-z0-9-]+)\]\]/g)].map((m) => m[1]))],
  };
}

function wordSetMatch(token, phraseWords) {
  const ts = stems(token);
  for (const w of phraseWords) {
    const ws = stems(w);
    for (const t of ts) if (ws.has(t)) return true;
  }
  return false;
}

const phraseIn = (q, phrase) =>
  phrase && new RegExp(`(^|[^a-z0-9])${phrase.replace(/[^a-z0-9 ]/g, " ").trim().replace(/\s+/g, "[^a-z0-9]+")}([^a-z0-9]|$)`).test(q);

/** Score entries against a query. Returns ranked results (all with score>0). */
export function resolve(entries, query, top = 5) {
  const q = " " + words(query).join(" ") + " ";
  let toks = words(query).filter((w) => !STOP.has(w));
  const boosts = new Map();
  const consumed = new Set();
  for (const [phrase, targets] of Object.entries(SYNONYMS)) {
    if (phrase.includes(" ")) {
      if (phraseIn(q, phrase)) {
        for (const t of targets) boosts.set(t, (boosts.get(t) ?? 0) + 6);
        for (const w of words(phrase)) consumed.add(w);
      }
    } else if (toks.includes(phrase)) {
      for (const t of targets) boosts.set(t, (boosts.get(t) ?? 0) + 4);
    }
  }
  toks = toks.filter((t) => !consumed.has(t));
  const qName = words(query).join("-");

  const results = entries
    .map((e) => {
      let s = boosts.get(e.name) ?? 0;
      let phraseHits = 0;
      const matched = new Set();
      const nameWords = e.name.split("-");
      const titleWords = words(e.title);
      if (qName === e.name || words(query).join(" ") === titleWords.join(" ")) {
        s += 10;
        phraseHits++;
      }
      for (const a of e.aliases)
        if (a.includes(" ") && phraseIn(q, a)) {
          s += 3;
          phraseHits++;
        }
      for (const tok of toks) {
        const ts = [...stems(tok)];
        if (e.aliases.some((a) => wordSetMatch(tok, words(a)))) s += 4;
        else if (wordSetMatch(tok, nameWords) || wordSetMatch(tok, titleWords)) s += 3;
        else if (ts.some((x) => new RegExp(`(^|[^a-z0-9])${x}`).test(e.cues))) s += 2;
        else if (ts.some((x) => new RegExp(`(^|[^a-z0-9])${x}`).test(e.body))) s += 1;
        else continue;
        matched.add(tok);
      }
      if (boosts.has(e.name)) matched.add("(synonym)");
      return { name: e.name, title: e.title, category: e.category, summary: e.summary, score: s, matched: [...matched], phraseHits };
    })
    .filter((r) => r.score > 0)
    .sort(
      (a, b) =>
        b.score - a.score || b.matched.length - a.matched.length || b.phraseHits - a.phraseHits || a.name.localeCompare(b.name)
    );
  return results.slice(0, top);
}

/** True when the top results are close enough that the designer should choose. */
export function closeCall(results, margin = 2) {
  return results.length > 1 && results[0].score - results[1].score <= margin;
}

export const CATEGORIES = [
  "light-and-depth",
  "surface-and-material",
  "distortion-and-lens",
  "color-and-tone",
  "pattern-and-texture",
  "motion",
  "foundations",
  "components",
  "editorial",
  "wardrobe",
  "layout",
];

export const STRUCTURE_CATEGORIES = new Set(["layout", "editorial"]);
export const WARDROBE_CATEGORY = "wardrobe";
