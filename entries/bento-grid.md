---
name: bento-grid
title: Bento Grid
category: layout
aliases: [bento, bento box layout, mixed grid, feature grid, apple style grid, mosaic grid, spanning cards, tile collage]
media: [css]
---

# Bento Grid

**Coordinate:** 2d · grid · tiled · tiered · scannable · single-surface.

Mixed-size cells locked to one shared grid — a lunchbox of rounded
compartments where size encodes importance. The current-era feature-showcase
default (Apple product pages made it the house style of tech marketing).

```
┌────────────┬─────┐
│            │  B  │
│     A      ├─────┤
├─────┬──────┤     │
│  C  │  D   │  E  │
└─────┴──────┴─────┘
```

## You know it when you see

- A tight mosaic of rounded cards in clearly different sizes, gaps perfectly uniform
- Each cell a self-contained mini-composition (stat, demo, image, claim)
- Size tracking importance: the flagship spans, the supporting facts sit small
- The failure: equal-importance content forced into unequal cells (size lying about rank), or ragged bottom edges breaking the box

## Dials

- **span vocabulary** — which cell sizes exist (1×1, 2×1, 1×2, 2×2 on the base grid); 3-4 sizes max — more reads as [[masonry]] chaos; the composition should resolve into a clean filled rectangle
- **gap & radius contract** — uniform gap everywhere ([[spacing-density]] token) and radius scaled to cell size or uniform ([[shape-language]]: nested radii inside cells); the bento *look* is 60% gap discipline
- **cell autonomy** — each cell's internal register: all-same treatment (calm, systematic) vs per-cell personality (one dark, one photo-full-bleed, one chart — the Apple mode); cap the loud cells ([[visual-hierarchy]] accent budget)
- **tier legibility** — sizes must map to a real hierarchy (hero 2×2, features 2×1, facts 1×1); audit: could a stranger rank the content by size alone?
- **motion** — cells as [[scroll-choreography]] reveal targets (short stagger) and hover-lift candidates ([[elevation]]); one cell may animate its content ([[motion-ceremony]] budget: one)

## Content contract

Demands *deliberately mixed-importance* content: one genuine flagship, a few
mid-tier items, several small facts — 5-9 pieces total. Equal-rank content
belongs in a uniform grid; sequential narrative belongs in
[[alternating-rows]] or [[centered-stack]]. Every cell must be croppable to
its box (no cell needs "read more").

## Collapse behavior

Spans dissolve by tier: 2×2 hero → full-width first; 2×1s → full-width in
priority order; 1×1s → pairs (2-up) then single column. Source order must
equal priority order (the DOM is the collapse plan). The box shape is
sacrificed; the tier sequence survives.

## Techniques

- **CSS Grid spans** — `grid-template-columns: repeat(4, 1fr)` +
  `grid-column/row: span n` per cell; `grid-auto-flow: dense` only when
  order is truly free (it reorders visually — reading-contract hazard).
- **The filled-rectangle check** — design spans so rows complete; a
  spreadsheet sketch before code beats trial-and-error.
- **Aspect discipline** — `aspect-ratio` on cells keeps the mosaic stable
  across widths between breakpoints.
- **Per-cell theming** — cells consume the same tokens with per-cell
  `data-` variants; the dark or image cell stays inside the system
  ([[color-roles]]).

## Search queries

- `css grid span bento layout responsive`
- `grid-auto-flow dense reorder accessibility`
- `bento grid design examples apple`
- `aspect-ratio grid cells stable`

## Related

[[grid-systems]] (the tracks underneath), [[visual-hierarchy]] (size-rank
honesty), [[shape-language]] + [[spacing-density]] (the look's real
carriers), [[masonry]] (what it becomes without the shared grid),
[[dashboard-tiles]] (its working-tool sibling), [[magazine-spread]] (its
editorial ancestor), [[scroll-choreography]] (reveal staging).
