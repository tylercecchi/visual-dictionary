---
name: split-screen
title: Split Screen
category: layout
aliases: [50 50 layout, two panel, side by side, half and half, sticky split, duo layout, comparison layout, text image split]
media: [css]
---

# Split Screen

**Coordinate:** horizontal · grid · tiled · hero-or-equal · linear ·
single-surface.

The viewport divided into two full-height panes — image beside text, product
beside pitch, before beside after. The bluntest, most confident layout move:
one cut, two worlds.

```
┌─────────┬─────────┐
│         │         │
│    A    │    B    │
│         │         │
└─────────┴─────────┘
```

## You know it when you see

- A hero cut vertically: media one side, message the other
- Sticky-split scrolling: one pane pinned while the other scrolls its story
- Comparison duels (before/after, plan A/plan B), sometimes with a draggable divider
- The failure: two panes competing at equal visual volume with no designated speaker

## Dials

- **ratio** — 50/50 (formal, confrontational, comparison-ready) vs 60/40–70/30 (a designated hero: [[visual-hierarchy]] decided by area); asymmetric is the safer default for message+media
- **the seam** — hard color/image cut (graphic), [[border-stroke]] hairline, or elements *crossing* the seam (a product straddling both panes — instant depth, [[visual-composition]] tension); draggable seam for comparisons
- **pane contrast** — the two sides' registers: dark/light, photo/flat, warm/cool ([[color-roles]] duel); high contrast makes the split the statement; low contrast makes it mere columns
- **scroll relationship** — both static (a moment), both scroll together, or sticky-split (one pinned, one scrolling — [[scroll-choreography]]'s pin applied to half the screen; the storytelling register)
- **internal alignment** — each pane composes independently but shares a baseline/center line across the seam ([[grid-systems]]: the seam doesn't excuse misalignment)

## Content contract

Exactly two content masses with a *stated relationship*: complement
(media+message), opposition (comparison), or sequence (step pair). Three
things means this isn't the layout; two things of wildly unequal volume
want an asymmetric ratio or a different layout entirely.

## Collapse behavior

Stacks vertically — but *which pane leads* is a content decision, not
source-order luck (message-first usually; image-first when the image is the
message). Sticky-splits unpin and interleave their steps. Comparison
splits keep the side-by-side as long as possible (2-up at small scale, or a
draggable overlay) — stacking a before/after destroys the comparison.

## Techniques

- **CSS Grid two-track** — `grid-template-columns: 1fr 1fr` (or
  `3fr 2fr`); full-height via `min-height: 100dvh`; the seam-crossing
  element absolutely positioned against the grid line.
- **Sticky-split** — the pinned pane `position: sticky; top: 0;
  height: 100dvh` inside a taller section; the scrolling pane's steps
  drive pinned-pane state swaps (IntersectionObserver / [[scroll-choreography]]).
- **Draggable comparison** — two layers + `clip-path: inset()` driven by a
  slider input; the accessible version keeps both fully viewable.
- **Diagonal/curved seams** — `clip-path: polygon()` on the top pane for
  the non-rectilinear cut ([[shape-language]] statement; keep text off the
  slope).

## Search queries

- `css sticky split scroll two pane storytelling`
- `before after comparison slider clip-path`
- `diagonal split section clip-path polygon`
- `split hero responsive stacking order`

## Related

[[scroll-choreography]] (sticky-split's engine), [[visual-hierarchy]]
(ratio as rank), [[visual-composition]] (seam-crossing tension),
[[alternating-rows]] (this layout serialized), [[magazine-spread]] (the
multi-region evolution), [[page-transitions]] (panes as wipe origins),
[[color-roles]] (the two-register duel).
