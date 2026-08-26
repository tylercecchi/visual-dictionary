---
name: visual-composition
title: Visual Composition / Balance
category: layout
aliases: [composition, visual weight, balance, asymmetric balance, negative space, tension, focal point, rule of thirds, eye path, dynamic layout]
media: [css, svg, canvas]
---

# Visual Composition / Balance

The painter's organizing system — visual weight, balance, tension, and
negative space. What arranges elements when there is no grid, and what the
grid was always approximating. The foundation every `scattered`, `layered`,
and broken layout is actually tuned by.

## You know it when you see

- Asymmetric arrangements that feel stable anyway: one large mass countered by smaller ones across the frame
- Empty space that reads as a *shape* doing work, not leftover room
- A clear path the eye travels: entry point → focal point → exit
- Deliberate imbalance creating energy (tension) that a symmetric version would kill
- The failure: scattered elements with no counterweights — restless, "messy," nothing to rest on

## Dials

- **visual weight inventory** — what makes an element heavy: size, value contrast against ground, saturation, detail/busyness, faces (heaviest of all), isolation (whitespace multiplies weight); balance is done in *weight*, not element count
- **balance scheme** — symmetric (formal, still), asymmetric (one heavy near center vs small far from it — the lever law: weight × distance), radial (around a center), crystallographic (allover even texture, [[masonry]]'s scheme); pick one per composition
- **negative space shape** — the emptiness must have deliberate geometry: one large connected void beats many small trapped pockets; trapped space between elements is the amateur tell
- **focal structure & eye path** — one primary focal point ([[visual-hierarchy]]'s apex), 1-2 secondaries, and directional cues (gaze direction, diagonals, [[gradients]] of density) forming a path — classically a Z, F, or spiral; elements pointing *out* of frame leak attention
- **tension & rotation** — controlled instability: elements near (not at) edges, near-alignments broken by a committed offset, rotation jitter within a band (±2-6°, [[stickers-badges]]' scatter law); tension without a counterweight reads as error
- **thirds & armatures** — placement scaffolds when off-grid: rule of thirds, golden-section points, diagonal armatures; softer than a grid, stronger than nothing

## Techniques

Composition is judgment encoded, so techniques are audits and scaffolds:

- **The squint/blur audit** — blur the layout ([[visual-hierarchy]]'s test
  at composition scale): what survives is the actual weight map; check it
  balances and the focal point wins.
- **Weight-map pass** — mark every element's weight (size × contrast ×
  saturation × isolation) and check the lever law across both axes; move or
  shrink, don't add.
- **CSS armatures** — position `scattered` elements against a thirds grid
  (`grid-template: repeat(3, 1fr) / repeat(3, 1fr)` as invisible scaffold)
  or absolute percentages at armature points; jitter via seeded custom
  properties, never `random()` at render ([[generative-art]] seed law).
- **Negative-space check** — trace the void as a shape (literally: invert
  the layout); if it's fragmented confetti, merge elements into clusters
  until the void connects.
- **Counterweight discipline** — every heavy off-center element gets an
  answering mass, edge, or type block across the frame; captions and small
  UI can serve as counterweights (the editorial trick).

## Starting points

- Classic composition literature (Arnheim "Art and Visual Perception";
  photography composition guides for thirds/armatures/eye-path)
- Editorial and poster design archives (the applied craft)
- Molly Bang, "Picture This" — the shortest, sharpest weight/tension primer

## Search queries

- `visual weight balance principles design`
- `molly bang picture this principles`
- `negative space as shape layout`
- `asymmetric balance lever arm composition`

## Related

The organizing law under [[collage-scatter]], [[radial-orbital]],
[[magazine-spread]], and every `scattered`/`layered` coordinate in
LAYOUT.md; [[grid-systems]] (the mechanized approximation),
[[visual-hierarchy]] (weight in service of rank), [[spacing-density]]
(negative space's unit system), [[forced-perspective]] (depth cues as
weight), [[vignette]] + [[gobo-shadows]] (light as compositional mass),
[[image-treatment]] (crop composition).
