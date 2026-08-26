# Visual Attribute Dictionary

This repo is a dictionary of visual attributes — the named looks, effects, and
qualities of UI and graphics — structured so an agent can translate a human
description of a look into the right technique and library. **Its domain is
UX/UI design**: graphic-design entries (movements, editorial registers,
wardrobes) serve as aesthetic and structural vocabulary *for product
interfaces*, not as a standalone print/poster/branding toolkit. Its fundamental
composition model: every page is two independent picks — **structure**
(layout/editorial entries) × **wardrobe** (aesthetic registers) — resolved
separately and composed (see the doctrine under the layout section).

## How to use this dictionary (agent protocol)

When the user describes a visual quality they want ("frosted", "the colors
split at the edges", "old-print texture", "soft light leaking off the button"):

1. **Resolve the term.** Grep `entries/` for the user's words — every entry
   lists `aliases` and *perceptual cues* precisely so vague descriptions land
   on the canonical name. If nothing matches, check `INDEX.md` by category.

   **Vague critique with no nameable look** ("feels off", "too busy",
   "looks cheap", "needs polish") is diagnosed, not grepped: audit the
   actual UI against the foundation entries — `visual-hierarchy` (squint
   test, accent budget), `spacing-density` (within-vs-between),
   `text-block-grammar` (proximity/attachment), `color-roles` (surface
   saturation), `elevation`/`light-on-flat` (shadow coherence),
   `motion-ceremony` (budget) — report the attribute-level findings, then
   fix them. **UI-building with no aesthetic language at all** ("build the
   settings page") still routes through the dictionary: layout coordinate
   and surface contracts first, foundation entries as the quality floor.
2. **Read the entry.** It gives you the canonical terminology, the *dials*
   (named parameters of the effect), and implementation techniques ordered by
   medium (CSS → SVG → Canvas 2D → WebGL/GLSL).
3. **Pick the medium first, then the technique.** The cheapest medium that
   achieves the look wins. Don't reach for a shader when `backdrop-filter`
   does it; don't fight CSS when the look is fundamentally a fragment shader.
4. **Find the library.** Entries list *starting points* (known libraries and
   reference implementations) but these go stale. Also check `LIBRARIES.md` —
   the registry of cross-cutting libraries that implement many entries at
   once (e.g. Canvas UI's HTML-in-canvas effect components). Run the entry's
   **search queries** against current sources (npm, GitHub, Shadertoy) and
   verify the library is maintained and fits the project's stack before
   recommending it.

   **Stack rule — before adding any dependency:**
   - *Inventory first.* Read package.json (and the build setup). Prefer the
     entry's technique variant that matches what's already installed — the
     techniques are ordered by medium precisely so you can meet the stack
     where it is (project has framer-motion → use it, don't add GSAP;
     no three.js → the CSS/SVG technique beats proposing WebGL).
   - *Classify the addition.* **Trivial** (micro-library, no new paradigm:
     canvas-confetti, split-type): install, mention it. **Moderate** (a
     capability library: GSAP, embla, Floating UI): install only if nothing
     already present covers it, and say what it replaces. **Structural**
     (a new rendering or runtime paradigm: three.js/R3F, maplibre,
     xterm.js, a physics engine): stop and confirm with the user before
     installing — these shape the project far beyond the effect, and the
     tradeoff (quality ceiling vs. weight) is theirs to make. Offer the
     best no-new-stack alternative alongside.
   - *Prefer platform-native* when quality is comparable — many entries
     mark "no library needed"; that marking wins ties.
5. **Report in dial vocabulary.** When you implement or propose the effect,
   describe it using the entry's dials ("threshold at 0.8, two blur passes,
   intensity 0.4") so iteration feedback stays precise.

**The judgment split.** The dictionary resolves and presents; the
designer decides. When a description plausibly matches several entries
(wet → reflections vs liquid; premium → any of a dozen registers),
present the top 2-3 candidates with a one-line distinction each and let
the designer pick — never silently commit to one reading of an
ambiguous brief. Same for taste-level dials: propose a setting, but
frame it as the starting point of the iteration loop, not the verdict.


For **layout requests** ("bento this", "make it a dashboard", "more
organic arrangement"), read `LAYOUT.md` first: resolve the request to a
coordinate across its seven variables (from the named archetype or from
content intent), check the tension table for content/layout mismatches,
then read the matching `layout`-category entry. Layout entries carry three
extra sections — ASCII diagram, content contract, collapse behavior — and
the content contract is the first thing to check against the actual
content.

**The structure × wardrobe doctrine.** Page composition is two
independent picks: **structure** (a layout or editorial entry — how
content is organized: deck systems, two-zone contracts, chapter
ceremony, panel grids) and **wardrobe** (an aesthetic register — how
it's dressed: art-deco, soft-aesthetics, historical-ornate, brutalism…).
Resolve them separately and compose — any structure can wear any
wardrobe. Editorial entries are the default structural baseline. Two
cautions: some entries are both (newspaper-editorial carries its own
costume — strip it to the deck system when only structure is wanted),
and some wardrobes carry structural pressure (fashion-editorial implies
sparse density) — name the tension when the picks fight, and let the
designer resolve it.

## Structure

- `INDEX.md` — all entries grouped by category. Keep it updated when adding entries.
- `TEMPLATE.md` — the entry format. New entries must follow it.
- `LAYOUT.md` — the layout matrix and interaction-surface contracts.
- `LIBRARIES.md` — registry of cross-cutting libraries spanning many entries.
- `entries/` — one file per attribute, flat; category lives in frontmatter.

## Adding entries

When the user names a look that has no entry, offer to add one. Research the
canonical terminology first (the graphics-programming name, not just the
design-trend name — e.g. "glassmorphism" is the trend, `backdrop blur` +
`refraction` are the techniques). Follow `TEMPLATE.md`, then add a line to
`INDEX.md`. After a batch of new entries, run
`python3 tools/findability-audit.py` — the findability harness scoring
~56 realistic vague phrasings against aliases/cues; add each new entry's
expected phrasings to its CASES list, and fix misses by adding aliases,
not by weakening the phrase.
