---
name: masonry
title: Masonry
category: layout
aliases: [pinterest layout, waterfall grid, brick layout, variable height grid, staggered grid, photo wall, cascading grid]
media: [css]
---

# Masonry

**Coordinate:** 2d · flow (not grid!) · tiled · egalitarian · browse ·
single-surface.

Equal-width columns, variable-height items packed to eliminate vertical gaps
— the Pinterest waterfall. A *flow* system wearing a grid costume: items
pour into the shortest column, and reading order dies in exchange for
density.

```
┌────┐┌────┐┌────┐
│    ││    ││    │
│    │└────┘│    │
└────┘┌────┐└────┘
┌────┐│    │┌────┐
│    ││    ││    │
└────┘└────┘│    │
```

## You know it when you see

- Columns of cards with tops staggered — no shared horizontal lines after row one
- Variable-height imagery displayed uncropped, no dead space
- Endless-scroll browsing energy: no start, no end, no order
- The failure: ranked or sequential content masonried — position now lies about order

## Dials

- **column count & width** — fixed column width (item-first: columns adapt to viewport) vs fixed count; wider columns = fewer, calmer; the browse register likes 3-5
- **height variance** — the texture dial: natural media ratios (organic stagger) vs clamped min/max (tamer); uniform heights collapse it into a plain grid — variance *is* the point
- **gap** — tight (dense wall, image-forward) vs comfortable; uniform both axes ([[spacing-density]])
- **item chrome** — bare images (the wall), captioned cards, or full cards with actions; chrome weight sets whether the *collection* or the *items* star
- **entry animation** — items fading in as they load/append ([[loading-language]] skeleton columns; [[scroll-choreography]] trigger register, short and once)

## Content contract

Demands genuinely *orderless*, self-similar, variable-height content —
image-led collections where any item is a valid entry point. If order,
rank, or narrative matter, masonry is the wrong call (the tension table's
first row). Items must tolerate arbitrary neighbors.

## Collapse behavior

Columns reduce (4 → 3 → 2); masonry survives to 2 columns well. At one
column it silently becomes a [[timeline-feed]] — acceptable, but note the
layout's *meaning* changed (browse → linear); if that's wrong, keep 2
narrow columns.

## Techniques

- **CSS `columns`** — `columns: 4; column-gap` with
  `break-inside: avoid` items: trivial, but items order *down* each column
  (column-major) — fine for pure browse, wrong if append-order should read
  left-to-right.
- **Native masonry** — CSS `grid-template-rows: masonry` /
  `display: masonry` — long-standing proposal with shifting syntax;
  **verify current support** before relying on it.
- **JS placement** — the classic: measure items, absolutely position into
  the shortest column (Masonry.js lineage; modern React equivalents);
  needed for append-order correctness, animation, and infinite scroll.
- **Server-balanced columns** — distribute items into N column wrappers
  by estimated height at render time; no layout JS, good enough when
  heights are predictable.
- **Windowing** — infinite masonry needs virtualization
  (react-virtuoso/masonic-class; verify currency) — thousands of absolutely
  positioned cards will die without it.

## Search queries

- `css masonry support display masonry status`
- `css columns break-inside avoid order caveat`
- `masonry virtualization react masonic`
- `shortest column placement algorithm`

## Related

[[bento-grid]] (shared tracks vs this free flow), [[timeline-feed]] (its
single-column collapse), [[grid-systems]] (what it deliberately isn't),
[[image-treatment]] (the wall is an image system), [[loading-language]]
(skeleton columns), [[visual-composition]] (crystallographic balance — the
allover scheme), [[collage-scatter]] (the next step off the tracks).
