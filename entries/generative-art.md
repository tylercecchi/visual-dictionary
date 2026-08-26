---
name: generative-art
title: Generative Art Styles
category: pattern-and-texture
aliases: [flow field, truchet, plotter art, pen plotter, creative coding, algorithmic art, generative patterns, perlin flow, recursive subdivision, 10print]
media: [svg, canvas, webgl]
---

# Generative Art Styles

The recognizable families of algorithmic image-making — flow fields, truchet
tiles, recursive subdivision, plotter linework. Each is an algorithm *and* an
aesthetic; naming the family gets you both.

## You know it when you see

- **Flow fields** — thousands of strokes combed along invisible currents
- **Truchet** — one rotatable tile (arcs/diagonals) tiling into endless maze-like pattern
- **Recursive subdivision** — space split into nested rectangles/cells (Mondrian-like, or organic when jittered)
- **Plotter aesthetic** — pure line drawings, single stroke weight, visible path logic, ink-on-paper restraint
- **Packing** — circles/shapes nestled until no room remains
- **10 PRINT** — the diagonal maze from random slashes; the genre's haiku

## Dials

- **seeded randomness** — the generator's soul: same seed = same artwork; expose the seed, curate outputs
- **constraint palette** — generative work reads best under tight constraints: 2-3 colors ([[color-roles]] discipline), one stroke weight, one tile family
- **density & scale distribution** — uniform (calm, textile) vs power-law (few large, many small — the organic signature)
- **order↔chaos slider** — jitter on a grid, noise on a flow: every family has a knob between rigid and wild; the sweet spot is the artwork
- **medium fidelity** — screen-native (fills, [[glow-bloom]]) vs plotter-faithful (strokes only, no fills, overlap = darker ink)

## Techniques

- **Canvas 2D + seeded PRNG** — the default studio: a seedable random
  (mulberry32-class), [[procedural-noise]] for fields, draw loop. Most
  families are <100 lines.
- **Flow fields** — grid of angles from noise; drop particles, step them
  along the angles, draw their trails ([[particles]] + [[motion-blur-trails]]
  frozen).
- **SVG output** — build paths as data for crisp scaling and actual pen
  plotting; the plotter aesthetic demands SVG/polyline thinking.
- **p5.js** — the lingua franca of the genre; right for sketching and when
  following the community's countless examples. Plain canvas when shipping.
- **GLSL variants** — truchet and subdivision port to shaders for infinite/
  animated versions (domain-repeat, [[sdf-rendering]]).

## Starting points

- p5.js + its editor — the community and its example corpus
- Tyler Hobbs' essays (flow fields, aesthetically pleasing triangle
  subdivision) — the craft articles behind the famous looks
- generativeartistry.com — tutorials for the classic families
- #plottertwitter / drawingbots.net for the plotter wing

## Search queries

- `flow field tutorial canvas noise particles`
- `truchet tiles variations generative`
- `tyler hobbs flow fields essay`
- `svg pen plotter generative toolchain`
- `seeded random mulberry32 javascript`

## Related

[[procedural-noise]] (the field behind flow), [[voronoi-cellular]] +
[[kaleidoscope]] (adjacent pattern engines), [[sdf-rendering]] (shader-side
patterning), [[hatching-sketch]] (plotter linework kinship),
[[particles]] (flow fields animated), [[print-artifacts]] (riso prints of
generative work — a genre unto itself).
