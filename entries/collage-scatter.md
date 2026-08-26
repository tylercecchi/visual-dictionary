---
name: collage-scatter
title: Collage / Scatter
category: layout
aliases: [scattered layout, moodboard, polaroids on a table, freeform layout, overlapping cards, pinboard, scrapbook layout, tossed layout, mixed media]
media: [css, svg, canvas]
---

# Collage / Scatter

**Coordinate:** 2d · scattered · layered · hero-or-field · browse ·
single-surface.

Elements placed freely — rotated, overlapping, clustered — held together not
by tracks but by [[visual-composition]] balance. Polaroids on a table,
moodboards, scrapbook heros. The layout that says *assembled by a human
hand*; without the balance system active, it's just a mess.

```
      ┌────┐
  ┌───┼─┐  │   ┌──┐
  │   └─┼──┘ ┌─┴┐ │
  │ ▛▀▜ │    │  ├─┘
  └─┴──┴┘    └──┘
       ┌────┐
```

## You know it when you see

- Photos/cards at slight rotations, overlapping edges, clustered with deliberate gaps
- A hero composition of scattered artifacts around a headline
- Moodboard/pinboard energy — tape, pins, shadows ([[stickers-badges]] physics)
- The failure: uniform random scatter with no clusters, no counterweights, no resting space — restless and unreadable

## Dials

- **cluster structure** — scatter is *clustered*, never uniform: 2-3 groups of overlapping items + isolated singles + connected negative space ([[visual-composition]]'s void-as-shape law); uniform distribution is the giveaway of lazy randomness
- **jitter bands** — rotation ±2-8°, position offsets within a band, *seeded* ([[generative-art]] seed law — same layout every render); jitter magnitudes are the personality: barely-tossed (elegant) vs heaped (zine [[print-artifacts]] energy)
- **overlap grammar** — what may cover what (imagery overlaps imagery; nothing covers text or CTAs), z-order as depth story ([[elevation]]: consistent shadow contract — the [[stickers-badges]] tight shadow, not UI float), and overlap amounts (10-25% reads layered; 60% reads buried)
- **artifact physics** — the objects' material story: photos (white borders, [[film-stock]] frames), tape/pins holding corners, torn edges ([[print-artifacts]]), curled corners; one material system throughout
- **anchor structure** — the composition still needs a spine: a headline block, a dominant image, or a center of mass the scatter orbits ([[visual-composition]] hero + counterweights); pure field scatter (background texture register) is the exception, kept low-contrast behind content

## Content contract

Visually rich item-objects (photos, cards, clippings) that *survive partial
occlusion* and carry no required order — the browse contract is absolute.
Needs a curated count (5-15 in a hero; more becomes texture); each item
earns its place compositionally. Text content beyond labels/captions
doesn't scatter — it anchors.

## Collapse behavior

The honest answer: scatter mostly *dies* at narrow widths. Options in
order of grace: (1) recompose — a designed narrow variant with fewer items
and gentler offsets (jitter and overlap shrink with viewport); (2) the
cluster becomes a [[carousel-filmstrip]] of the items; (3) degrade to a
[[masonry]]/grid with rotation remnants (±2°) as a memory of the scatter.
Never let absolute positions reflow arbitrarily — collapse is a *redesign*,
committed in advance.

## Techniques

- **CSS transforms on a loose grid** — items on a coarse grid (or absolute
  % positions at [[visual-composition]] armature points), each with seeded
  `--rx/--ry/--rot` custom-property offsets; z-index staged; one shadow
  token ([[stickers-badges]] contract).
- **Seeded jitter** — a tiny hash of item index → offsets, or authored
  values exported from a design tool; `Math.random()` at render violates
  both stability and the seed law.
- **Interactive lift** — hover/press: straighten + lift + shadow deepen
  (the pick-it-up beat, [[interaction-feel]] spring); optionally draggable
  (then it's edging toward [[spatial-canvas]]).
- **Entrance** — items *land* (fall/settle with slight overshoot, staggered
  — [[motion-ceremony]] one-time ceremony); or assemble from a stack.
- **Canvas register** — large scatters (100+ background artifacts) render
  cheaper on canvas with the same seeded placement.

## Search queries

- `scattered polaroid layout css transform rotate`
- `seeded random jitter css custom properties`
- `overlapping collage z-index shadow consistent`
- `moodboard hero section design`

## Related

[[visual-composition]] (the organizing law — mandatory), [[stickers-badges]]
(the objects and their physics), [[print-artifacts]] + [[film-stock]]
(artifact materials), [[generative-art]] (seeding), [[elevation]] (z-order
contract), [[masonry]] (the on-tracks fallback), [[spatial-canvas]] (when
scatter becomes draggable and positions mean something), [[brutalism]]
(collision kinship).
