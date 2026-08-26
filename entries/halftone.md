---
name: halftone
title: Halftone
category: color-and-tone
aliases: [ben-day dots, comic book dots, newsprint, screen print, cmyk dots, pop art dots, risograph, pointillism, seurat dots]
media: [css, svg, canvas, webgl]
---

# Halftone

Tone reproduced as a regular grid of dots whose *size* varies with darkness —
the language of print: newsprint, comics, screen printing.

## You know it when you see

- Regular grids of dots, big in shadows and small in highlights
- Comic-book / pop-art / newspaper texture
- Rotated dot grids in cyan/magenta/yellow/black (CMYK print look)
- Lines or crosshatch whose thickness carries the shading

## Dials

- **cell size** — fine (newsprint at distance) vs chunky (pop art)
- **dot shape** — round, square, line, crosshatch
- **screen angle** — the grid rotation; multiple layers at classic CMYK angles (15°/75°/0°/45°) give authentic print
- **channel separation** — single-ink (mono halftone, riso) vs multi-layer CMYK
- **contrast curve** — how tone maps to dot size; clipping it stylizes further

## Techniques

- **GLSL halftone** — rotate UV into screen space, tile into cells, compare
  distance-from-cell-center against local luminance. Right choice for live
  imagery/video and animated treatments; per-channel for CMYK.
- **SVG pattern fills** — dot patterns as `<pattern>`, masked by an image or
  gradient. Right for static vector illustration.
- **CSS `radial-gradient` tiles** — repeating radial gradients approximate a
  uniform dot screen; can't vary dot size with content. Decorative only.
- **Canvas 2D sampling** — sample image luminance on a grid, draw a sized
  circle per cell. Simple, fine for static images.

## Starting points

- Shadertoy: search "halftone", "cmyk halftone"
- three.js has a community `HalftonePass` — verify it's still maintained
- glfx.js `dotScreen` — reference implementation of the classic dot screen

## Search queries

- `glsl halftone shader cmyk angles`
- `three.js halftone pass postprocessing`
- `canvas halftone dot size luminance`
- `svg pattern halftone illustration`

## Related

[[dithering]] (fixed-size patterned pixels vs halftone's sized dots),
[[duotone-gradient-map]] (riso look = duotone + halftone + [[film-grain]]),
[[film-grain]] (adds the paper).
