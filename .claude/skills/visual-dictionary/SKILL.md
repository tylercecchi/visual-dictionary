---
name: visual-dictionary
description: Design-quality reference for UX and UI design: how product interfaces look AND behave. Use for building and iterating on interfaces, screens, components, and prototypes (not standalone graphic-design deliverables). Use whenever the work is interface design ("build the settings page", "improve the empty state", "add a modal"), and especially when the user critiques a design in vague terms ("feels off", "too busy", "looks cheap or unfinished", "the button gets lost", "needs polish", "feels clunky", "the animation feels sluggish"), asks to make something feel a certain way ("premium", "vintage", "frosted", "more organic", "calm dev-tool look"), invokes an editorial register ("like a magazine", "newspaper style", "recipe card"), names a layout or surface ("bento this", "bottom sheet", "make it a dashboard"), describes an interaction or behavior ("undo should be forgiving", "the submenu closes when I move to it", "drag and drop feels broken", "add slash commands", "infinite scroll", "show who else is editing", "voice mode", "the AI should ask before deleting"), or requests any visual effect or transition by vibe or name. Resolves vague design language into canonical terms, tunable dials, layout/surface contracts, behavior rules (what it does, when to use, when not), and vetted implementation paths with their licence and stack terms; composes every page as two independent picks: editorial/layout structure × aesthetic wardrobe.
---

# Visual Attribute Dictionary

A ~222-entry dictionary of visual attributes **and interaction
behaviors** (github.com/tylercecchi/visual-dictionary). It maps described
looks and behaviors → canonical terms → tunable dials → implementation
techniques → registered libraries and knowledge sources, each with its
usage terms. The repo's `CLAUDE.md` carries the full protocol; this skill
is the router.

**Where the dictionary is:**
- **In any project, use the MCP server** (`visual-dictionary` tools:
  `resolve`, `get_entry`, `browse`, `compose`, `libraries_for`,
  `references`, `protocol`, `layout_system`, `libraries`). It serves the
  whole dictionary and uses the same resolver the findability tests
  check. If the tools aren't available, tell the user it can be installed
  with `claude mcp add visual-dictionary -s user -- npx -y
  github:tylercecchi/visual-dictionary`.
- **Inside the dictionary repo itself**, the files are at the repo root
  (`entries/`, `INDEX.md`, `LAYOUT.md`, `LIBRARIES.md`, `REFERENCES.md`).
  Grep and read them directly if the server isn't connected; the steps
  below are the same.

File names below (`entries/`, `LAYOUT.md`, `TEMPLATE.md`…) refer to the
repo; through the server, `get_entry`, `layout_system`, `libraries` and
`references` return the same content.

## Scope

UX and UI design: product interfaces, web apps, prototypes. Looks and
behaviors are one subject (a toast is a surface *and* a commit delay; a
drop zone is a highlight *and* a contract), so the dictionary covers both.
Graphic-design entries (art movements, editorial registers, wardrobes)
serve interface work as aesthetic and structural vocabulary, not as a
toolkit for standalone print, poster or logo projects.

## The fundamental model: structure × wardrobe

Every composition is two independent picks. **Structure** is a layout or
editorial entry (deck systems, two-zone contracts, panel grids; the
editorial cluster is the default baseline). **Wardrobe** is an aesthetic
register (art-deco, soft-aesthetics, calm-console, pressable-glass…), or
a custom dial sheet over the `foundations` entries when no named
wardrobe fits, which is the usual case. Resolve them separately and
compose freely ("recipe card, but gothic" is a complete brief). When the
picks fight, name the tension for the designer; `LAYOUT.md` keeps the
tension table. Behaviors sit across both: any structure in any wardrobe
can carry an undo window or drag-and-drop.

## Protocol

1. **Resolve the term.** `resolve(phrase)`, or grep `entries/` for the
   user's words: entries list aliases and perceptual cues the way
   non-experts describe things. Resolve each axis of a structure ×
   wardrobe brief as its own query. When resolve flags a **close call**,
   present the top candidates instead of picking.

   **Vague visual critique** ("feels off", "too busy", "looks cheap"):
   diagnose instead of grepping. Audit the actual UI against the
   foundation entries: `visual-hierarchy` (squint test, accent budget),
   `spacing-density` (within-vs-between), `text-block-grammar`,
   `color-roles`, `elevation`/`light-on-flat`, `motion-ceremony`. Report
   the attribute-level problems you found, then fix them.

   **Vague behavior critique** ("feels clunky", "users keep making
   mistakes", "too many popups"): diagnose against
   `interaction-principles` (Fitts, Hick, memory limits, response-time
   bands, modes, undo over warnings) the same way.

   **UI-building with no aesthetic or behavior language** ("build the
   settings page"): the dictionary still applies. Check layout
   coordinates and surface contracts (`LAYOUT.md`) and let the foundation
   entries set the quality floor without waiting to be asked.
2. **Read the whole entry** (`get_entry`). It gives canonical terms,
   **dials** (the named parameters), techniques ordered cheapest medium
   first (CSS → SVG → Canvas → WebGL), starting points, and search
   queries. Then:
   - **`behavior` entries** carry *What it does*, *When to use*, and *When
     not to use* before the dials. Check the when-not list against the
     user's situation before building; each item names the alternative.
     Most behaviors have a visible face in another entry (the undo window
     is `toast-notification`), so read both halves.
   - **Layout and surface entries** ("bento this", "add a bottom sheet"):
     read `LAYOUT.md` first, resolve the layout coordinate or surface
     contract, then check the entry's **content contract** against the
     real content and its **collapse behavior** for narrow widths.
   - **Wardrobes**: set every foundation dial from the wardrobe's values;
     the tension table says which structures it fights.
3. **Inventory the stack, then pick the medium.** Read package.json and
   the build setup first. Take the cheapest technique that achieves it
   *within what's installed* (framer-motion present → springs, not
   GSAP; no three.js → the CSS/SVG technique). Platform-native wins ties.
4. **Check implementations and their Terms.** `libraries_for(entry)`
   returns the registry rows that cover the entry, each with the source's
   **Terms** (install model, stack-rule class, licence, paywall,
   cautions), plus any knowledge sources (`references(entry)` returns
   those alone). Apply them before installing or drawing from anything:
   - **Stack rule:** trivial additions install freely; capability
     libraries only when nothing present covers them; **structural**
     additions (three.js/R3F, maplibre, a physics engine, a native model,
     a new input paradigm) need explicit user confirmation first, offered
     alongside the best no-new-stack alternative.
   - **Licence:** "no redistribution" (e.g. transitions.dev) means use in
     the product and link it, never copy it into the dictionary. "Cite
     and link only" (e.g. Interface Lineage) means read it and cite the
     URL, never copy or paraphrase its entries.
   - **Paywalls:** surface them to the user, including ship-time ones
     (e.g. libraries.dev Models need a paid plan for commercial release).
     Never work around one.
   - **Currency:** starting points go stale; run the entry's search
     queries and confirm the library is maintained before recommending it.
5. **Build to the dials and the entry's quality rules.** Implement with
   explicit dial values. Include what the entry requires: a
   reduced-motion fallback, a keyboard path for behaviors, accessible text
   behind decorative type. For motion, `ui-state-transitions` has the
   per-element grammar (closes faster than opens, small travel, no
   bounce on close).
6. **Report in dial vocabulary.** Describe what you built in the entry's
   dials ("undo window 6s with a progress ring; close 150ms against a
   250ms open") so iteration feedback stays precise. Keep the dial names
   in play across iterations.

   **The judgment split:** the dictionary resolves and presents; the
   designer decides. On ambiguous briefs, offer the top 2-3 candidates
   with one-line distinctions; on taste-level dials, propose a starting
   value and iterate from the designer's reaction.
7. **Grow it.** If a look or behavior has no entry, offer to add one:
   follow `TEMPLATE.md` (behavior entries have their own required
   sections and sourcing rule), add it to `INDEX.md` (and `LAYOUT.md`
   for layout or surface entries), add findability cases, and run
   `npm test` in the dictionary repo.
