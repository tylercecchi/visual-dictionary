---
name: mosaic-tile
title: Mosaic Tile
category: surface-and-material
aliases: [ceramic tile, tesserae, roman mosaic, tile art, grout, subway tile, azulejo, penny tile, tiled mural, byzantine mosaic]
media: [css, svg, canvas, webgl]
---

# Mosaic Tile

Imagery assembled from physical tiles — tesserae with grout lines, slight
misalignment, and per-tile light. The ceramic register: heavier and more
architectural than [[stained-glass]] (opaque tiles, reflected light) or
[[pixelation]] (which has no matter).

## You know it when you see

- Pictures built from small squares/shards with visible grout gaps between
- Roman/Byzantine register: tesserae *flowing along* the contours of figures (opus vermiculatum), gold-leaf grounds
- Architectural registers: subway brick offset, penny rounds, azulejo painted squares, terrazzo chips
- Per-tile variation — no two tiles quite the same shade or angle

## Dials

- **tile shape & laying pattern** — square grid, offset brick, hex/penny, or contour-following flow; *flow* is the high-craft signal: tiles align to the image's edges, grid ignores them ([[pixelation]] with art direction)
- **grout** — width, color (dark grout = graphic and [[toon-outline]]-like; light = soft), and depth (an inset shadow line per tile: [[elevation]] at millimeter scale)
- **per-tile variance** — the handmade dial: each tile's color jittered slightly from its sampled value, rotation off by a degree, corners chipped; zero variance reads as a CSS grid, not a floor
- **surface response** — matte ceramic (flat + grout shadow), glazed (a small [[specular-metallic]] highlight per tile, positions agreeing with [[light-on-flat]]), gold tesserae (mirror-bright, the Byzantine glow)
- **register** — pictorial mural (image-driven), pattern (azulejo repeats, [[kaleidoscope]] symmetries), or field (single-color with variance — the bathroom-wall backdrop)

## Techniques

- **CSS field tiles** — grid/flex of tiles with `gap` as grout over a
  grout-colored ground; per-tile `--jitter` custom properties (tint/rotate)
  from a tiny script or nth-child noise; inset `box-shadow` for grout depth.
  Right for backdrops and hero panels.
- **Canvas image mosaic** — sample the image per cell ([[pixelation]]'s
  grid), draw each as a rounded-square tile with color jitter, gap, and a
  per-tile highlight; hex/penny variants by layout math.
- **Contour-flow mosaic** — the craft register: compute edge/flow direction
  of the image (structure tensor or gradient), lay tile rows along
  streamlines ([[generative-art]] flow-field machinery repurposed for
  laying tesserae); rare and striking.
- **SVG azulejo/pattern** — authored tiles as `<pattern>` with painted
  motifs; per-tile placement jitter needs unrolled tiles rather than
  pattern fill.
- **GLSL** — grid UV with per-cell hash jitter (color/rotation), grout via
  cell-border distance, glaze highlight from the hash; the animated/infinite
  register ([[voronoi-cellular]] cells for shard mosaics).

## Starting points

- Roman mosaic and azulejo museum collections for laying-pattern reference
- The canvas grid-sampling pipeline (shared with [[pixelation]]; no library)
- Structure-tensor / flow-field image processing references for contour flow

## Search queries

- `canvas photo mosaic tiles grout effect`
- `glsl grid cell jitter grout tile shader`
- `opus vermiculatum tile flow contour`
- `css tile wall gap inset shadow`

## Related

[[pixelation]] (the matterless twin), [[stained-glass]] (backlit sibling),
[[voronoi-cellular]] (shard geometry), [[material-texture]] (ceramic +
grout), [[light-on-flat]] + [[specular-metallic]] (glaze),
[[generative-art]] (flow laying), [[kaleidoscope]] (azulejo symmetry).
Terrazzo (chips scattered in a field) lives here too, as the field register
with random shard tiles.
