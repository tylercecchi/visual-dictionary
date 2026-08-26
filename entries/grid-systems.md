---
name: grid-systems
title: Grid Systems
category: ui-foundations
aliases: [layout grid, columns, baseline grid, swiss grid, broken grid, modular grid, 12 column, asymmetric layout, editorial layout, magazine layout]
media: [css]
---

# Grid Systems

The invisible skeleton of layout — columns, gutters, baselines, and the
choice to obey or visibly break them. Swiss rigor, editorial asymmetry, and
the broken-grid statement are all *grid* decisions.

## You know it when you see

- Everything aligning to shared invisible verticals; edges that agree across sections
- Swiss/International style: strict columns, flush alignment, the grid almost visible
- Editorial asymmetry: wide text column + narrow margin column, deliberate imbalance
- Broken grid: elements straddling columns, overlapping, bleeding off — but tension *against* a felt structure
- The failure: near-alignment (edges off by a little, everywhere), which reads as sloppiness not statement

## Dials

- **column count & gutter** — 12 (product flexibility) vs 6/8 (calmer) vs asymmetric splits (2:1 editorial); gutter width couples to [[spacing-density]]
- **obedience level** — strict (every element on the grid: Swiss), mostly (breaks reserved for heroes), broken (violation as identity — needs the underlying grid *felt* to register as intent)
- **baseline grid** — vertical rhythm: line-heights and block spacing in one unit; the print-derived discipline that makes dense text layouts feel machined ([[typographic-voice]] line-height must divide into it)
- **bleed & margin drama** — content touching viewport edges (full-bleed imagery) vs generous framing margins; where bleeding is allowed is a system rule
- **visible structure** — showing the grid (hairline column rules, [[border-stroke]]; graph-paper backgrounds) as aesthetic — the blueprint/technical register

## Techniques

- **CSS Grid as the system** — `grid-template-columns` with named lines;
  the modern pattern: one page-level grid, children placed by line names,
  full-bleed via a grid that includes margin columns
  (the "content/breakout/full" three-track pattern).
- **Subgrid** — nested elements aligning to the page grid (verify support
  matters less now, but check targets); the fix for card-internals alignment.
- **Baseline rhythm** — a `--rhythm` unit; all `line-height`, `margin-block`,
  and fixed heights in multiples; a repeating-gradient overlay for the audit.
- **Broken-grid moves** — negative margins, `grid-column` spans past the
  content area, overlapping via shared grid cells + z-index; keep type
  columns honest while imagery breaks.
- **Debug overlay** — a keyboard-toggled column/baseline overlay during
  build; the difference between broken and sloppy is measurable.

## Starting points

- Müller-Brockmann "Grid Systems in Graphic Design" — the canon
- Every-Layout / modern CSS grid pattern write-ups (the three-track
  full-bleed pattern is widely documented)
- Editorial references: magazine sites for asymmetric registers

## Search queries

- `css grid named lines content breakout full-bleed pattern`
- `baseline grid css custom property rhythm`
- `subgrid browser support alignment cards`
- `broken grid layout overlapping editorial css`

## Related

[[spacing-density]] (the grid's units), [[typographic-voice]] (baseline
coupling), [[visual-hierarchy]] (placement *is* hierarchy), [[brutalism]]
(visible structure kinship), [[blueprint]] (the grid worn as decoration),
[[border-stroke]] (column rules), [[cartographic-style]] +
[[chart-voice]] (grids under data).
