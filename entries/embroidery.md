---
name: embroidery
title: Embroidery / Stitched Texture
category: surface-and-material
aliases: [stitched, embroidered, cross stitch, patch, knit, woven badge, thread texture, needlepoint, sampler, yarn, textile art]
media: [css, svg, canvas, webgl]
---

# Embroidery / Stitched Texture

Imagery made of thread — visible stitches with direction and sheen, cross-
stitch grids, knit loops, the raised pile of an embroidered patch. Craft
warmth and handmade-time encoded as texture.

## You know it when you see

- Letterforms or icons built from directional satin-stitch bands with thread sheen
- Cross-stitch: imagery on a visible X-grid (pixel art's textile ancestor)
- Patches: embroidered fill + overlocked border ([[stickers-badges]]'s fabric wing)
- Knit textures: V-stacked loops, ribbing, the heather of mixed yarn
- Sampler compositions: alphabets, borders, folk motifs on linen

## Dials

- **stitch vocabulary** — satin (smooth directional bands, the logo-fill standard), cross-stitch (gridded X's), running/back stitch (outlines), french knots (dots); each maps imagery differently
- **thread direction & sheen** — satin stitches catch light by angle: direction changes between regions create the color-shift that reads "thread" ([[specular-metallic]] anisotropy at craft scale); this dial *is* the realism
- **grid coupling** (cross-stitch) — the X-grid is [[pixel-art-technique]]'s law in fabric: imagery quantized to the count, palette limited to floss colors
- **relief & shadow** — stitches are *raised*: per-stitch micro-shadow and edge highlight ([[elevation]] at millimeter scale); flat stitch-patterns without relief read as print, not thread
- **substrate** — linen/aida weave visible between stitches ([[material-texture]]), or full coverage (patch); the ground peeking through is authenticity

## Techniques

- **SVG stitch builders** — letterforms/shapes filled with parallel stroke
  runs (the satin direction per region), dashed strokes for running stitch,
  X-glyph patterns for cross-stitch; a small generator (paths → hatch fills
  at region angles) gets surprisingly far.
- **Cross-stitch conversion (canvas)** — [[pixelation]]'s grid sampling,
  each cell rendered as an X sprite (two crossing strokes with per-cell
  color + slight jitter) over an aida-weave tile.
- **Displacement/normal relief (GLSL/three.js)** — stitch-direction maps
  as normal maps lit for sheen and relief; the premium register for hero
  embroidery ([[material-texture]]'s normal-map technique with authored
  stitch maps).
- **CSS approximations** — dashed borders as running stitch (the classic
  "coupon" look), `repeating-linear-gradient` ribbing for knit backgrounds,
  patch buttons via [[stickers-badges]] contour + fabric texture fill.
- **Real embroidery files** — when output targets actual machines
  (merch), stitch-path formats (DST/PES) and their digitizing tools are a
  separate craft — flag it rather than faking it.

## Starting points

- Embroidery/cross-stitch pattern communities for the visual grammar
- ambientCG-class fabric normal maps for the relief register
- The dashed-border stitch and knit-gradient CSS recipes (searchable, no
  library)

## Search queries

- `css dashed border stitch effect coupon`
- `cross stitch filter canvas grid x pattern`
- `embroidery normal map fabric lighting`
- `satin stitch svg parallel lines fill`

## Related

[[material-texture]] (the substrate and relief machinery),
[[stickers-badges]] (patches), [[pixel-art-technique]] + [[pixelation]]
(cross-stitch's digital twins), [[hatching-sketch]] (directional-stroke
kin), [[specular-metallic]] (thread sheen physics), [[illustration-style]]
(embroidery as an illustration register), [[seasonal-theming]] (holiday
sampler energy).
