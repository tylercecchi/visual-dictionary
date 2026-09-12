---
name: engineering-datasheet
title: Engineering Datasheet / Industrial Catalog
summary: "grotesque prose + mono data, part numbers on everything, exposed state"
category: wardrobe
aliases: [datasheet, data sheet, spec sheet, specification sheet, parts catalog, industrial catalog, part numbers, sku table, mil-spec, military spec, bell labs, control panel labeling, engineering graphics, technical documentation look, usgraphics style, berkeley mono site, micrographics, order form, bureaucratic form, dense technical ui, verbosity over opacity]
media: [css, svg]
---

# Engineering Datasheet / Industrial Catalog

The wardrobe of the component datasheet and the parts catalog — Swiss
grotesque prose, monospaced data, a part number on everything, and the
system's own state printed in the footer. Trust is built by verbosity,
not polish.

## You know it when you see

- Every product, tier, and option carries a code (`TX-02`, `FX-102`,
  `LT-04`) and lives in a table with SKU / stock / price columns
- Two typefaces with strict jobs: a grotesque (Univers, Helvetica, Akzidenz)
  for sentences, a monospace for numbers, codes, and anything a machine
  might read
- Arrows as the only decoration — `ORDER →`, `Datasheet (PDF) →` — and
  em-dashes where a lesser site would hide an empty cell
- Build version, revision date, legal entity ID, "MADE IN" — state and
  provenance exposed as furniture, the way a title block does on a drawing
- The failure: cosplay — mono type and fake part numbers over content
  that has no real structure, density, or data behind them

## Dials

- **prose / data type split** — grotesque for reading, mono for data is the
  canonical pairing; all-mono drifts to [[terminal-aesthetic]], all-grotesque
  to [[bauhaus-swiss]]; a third "arrow" or symbol face is a signature
  flourish
- **numbering density** — what gets a code: products only → every section,
  tab, figure, and license tier; numbering is the hierarchy in a flat
  register, so it must be systematic (prefix = class, number = order)
- **state exposure** — how much inner working is printed: version string
  in the footer, stock status per row, revision history per product,
  "discontinued / obsolete" kept visible rather than deleted; the
  manifesto move is *expose state and inner workings*
- **null / status vocabulary** — the fixed word set for cells: `Incl.`,
  `No Charge`, `—`, `Discontinued`, `Obsolete`, `Custom`; decided once,
  never paraphrased; [[table-design]]'s alignment law applies
- **density & flatness** — dense not sparse, flat not hierarchical: one
  page holds the whole catalog; section headers and rules do the
  grouping, not cards or [[elevation]]; [[spacing-density]] sits at the
  compact end
- **alarm-color budget** — black on white (or cream) plus one or two
  signal colors (a red, a blue) used only for state and action; focus
  rings are hard offset strokes ([[border-stroke]]), never glows
- **provenance register** — datasheet (electronic-component sheet:
  header block, absolute-maximum tables, figure numbers), catalog
  (price list, order form), control panel (engraved labels, black
  synthetic lacquer, [[skeuomorphism]]-adjacent), bureaucratic form
  (numbered boxes, "for office use only"); the register sets the
  furniture set

## Techniques

- **Type stack** — load a grotesque (Univers/Helvetica-class; system
  fallback) and a mono with a *data* cut if available (tabular figures,
  slashed zero, `font-variant-numeric: tabular-nums slashed-zero`);
  apply mono via a `.data` utility, not by element, so the split stays a
  rule.
- **Catalog tables** — semantic `<table>` with `<th scope>`; SKU column
  first, mono, left-aligned; price right-aligned; status words from the
  fixed vocabulary; row rules as hairlines; no zebra striping (density
  does the scanning).
- **Numbering system** — CSS counters per section (`counter-reset` on
  the container, `counter-increment` per heading) so figure/tab numbers
  can't drift; codes rendered as `<code>` or a `.sku` class.
- **State footer** — inject the build/version string at build time
  (`PROD v2.11.4`), print revision date and entity/registration IDs in
  the footer block; a `<dl>` fits the label/value pairs.
- **Arrow links** — a trailing `→` via `::after` (or a dedicated arrow
  glyph face) on every action; no buttons where a link will do
  ([[control-language]]'s quietest register).
- **Functional-CSS layer** — Tachyons-style utilities for border color,
  dashed/dotted rules, and text transforms suit this register better
  than component libraries; the site *is* a set of documented rules.
- **Print parity** — the datasheet register should print correctly:
  `@page` margins, table headers repeating, no color dependence.

## Starting points

- usgraphics.com — the reference implementation (Univers + TX-02 data
  mono + Berkeley Arrow; General Catalog page; footer state); its home
  page lists the register's rules verbatim
- Real component datasheets (Texas Instruments, Analog Devices PDFs) for
  the header-block / figure-numbering furniture
- Berkeley Mono, JetBrains Mono, IBM Plex Mono — monos with tabular and
  slashed-zero data cuts
- Tachyons — the functional-CSS model for the utility layer

## Search queries

- `datasheet style website design univers monospace`
- `parts catalog ui sku table design`
- `font-variant-numeric tabular-nums slashed-zero css`
- `css counters section figure numbering`
- `tachyons functional css border utilities`

## Related

[[terminal-aesthetic]] (the all-mono neighbor — this register keeps mono
for data only), [[blueprint]] (the drawing to this entry's document —
title blocks and revision tables shared), [[table-design]] (the
mechanics of every table here), [[bauhaus-swiss]] (the grotesque
lineage), [[instructional-manual]] (the procedural sibling), [[fui]]
(where control-panel labeling drifts when it glows), [[brutalism]] (also
anti-polish, but raw where this is over-engineered), [[typographic-voice]]
+ [[grid-systems]] (the two systems it is made of), [[skeuomorphism]]
(engraved-panel register), [[spacing-density]] (compact end).
