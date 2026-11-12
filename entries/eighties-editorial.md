---
name: eighties-editorial
title: 80s Editorial (Style-Magazine Era)
summary: "The Face / i-D era: bold sans, rotated and stacked type, photo-type collision, grid breaks"
category: editorial
aliases: [80s editorial, 80's editorial, eighties editorial, 1980s editorial, 80s magazine, 80s magazine layout, eighties magazine, the face magazine, i-d magazine, blitz magazine, neville brody, brody style, style magazine, 80s fashion magazine, new wave design, new wave graphics, post punk graphics, 80s graphic design, emigre]
media: [css, svg]
---

# 80s Editorial (Style-Magazine Era)

The layout and type language of 1980s style and youth-culture magazines
(The Face, i-D, Blitz, Arena, early Emigre): heavy geometric and
custom sans display type, words rotated, stacked and split across
pages, type colliding with cut-out photography, symbols and rules as
graphic elements, and grids broken on purpose. Like
[[newspaper-editorial]], it carries both structure and costume; strip it
to the structure when only the layout is wanted.

## You know it when you see

- Huge bold geometric or custom sans headlines, sometimes hand-built
- Type rotated 90°, stacked vertically, or splitting words across a
  spread
- Cut-out photos overlapping type; type running over and behind images
- Big numerals, symbols, arrows and thick rules used as graphics
- Strong black, red, white, with flat colour blocks; sometimes duotone
  photography ([[duotone-gradient-map]])
- The failure: a pastiche of neon and grids ([[retro-futurism]] synthwave
  isn't this). The 80s editorial look is ink, paper and attitude

## Dials

- **structure vs costume**: the spread grammar (rotation, stacking,
  collision, big numerals) with modern type, vs full period costume with
  period fonts, colours and halftone photos
- **rotation & stacking**: how many words turn 90° or stack per spread;
  one strong rotated element is often enough
- **type**: geometric/constructed sans (Brody-like), condensed
  grotesks, big numerals; size contrast extreme ([[typographic-voice]])
- **collision**: type over photo, photo cut-outs breaking frames,
  overlaps between columns; keep body text clear of collisions
- **colour**: black + white + one strong ink (red is the archetype) +
  flat blocks; duotone or high-contrast B&W photography
- **rules & symbols**: thick bars, arrows, circles, page-number
  graphics as structure

## Techniques

- **CSS grid with deliberate breaks**: a strict underlying grid
  ([[grid-systems]]) that a few elements break with negative margins,
  overlapping grid areas, and z-index.
- **Rotated type**: `writing-mode: vertical-rl` or `transform: rotate()`
  for side-running headlines; check reading order for screen readers.
- **Photo-type collision**: cut-out images (transparent PNG/WebP or
  `mask-image`) layered over and under large type.
- **Print texture**: optional halftone and paper grain for costume
  ([[halftone]], [[print-artifacts]]).

## Starting points

- Neville Brody, *The Graphic Language of Neville Brody* (book); The
  Face and i-D archives for spread references
- Emigre magazine archive

## Search queries

- `neville brody the face magazine layout`
- `80s magazine layout design rotated type`
- `css vertical text writing-mode headline`
- `editorial web design broken grid overlap`
- `i-d magazine 1980s covers typography`

## Related

[[magazine-spread]] (the spread mechanics), [[type-composition]]
(type as layout), [[experimental-type]], [[newspaper-editorial]]
and [[fashion-editorial]] (sibling editorial registers),
[[memphis-style]] (the same decade's product/interior language),
[[duotone-gradient-map]], [[grid-systems]], [[halftone]].
