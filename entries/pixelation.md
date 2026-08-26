---
name: pixelation
title: Pixelation / Mosaic
category: color-and-tone
aliases: [pixelate, pixel art, mosaic, 8-bit, blocky, low-res, chunky pixels, censored blur blocks, minecraft look]
media: [css, canvas, webgl]
---

# Pixelation / Mosaic

Imagery quantized into large uniform blocks — deliberate low resolution, from
8-bit nostalgia to mosaic censorship to chunky data-viz cells.

## You know it when you see

- Images or scenes made of visible square blocks
- Retro game aesthetic; sprites, chunky edges, no anti-aliasing
- A reveal that "de-pixelates" from coarse blocks to sharp
- Mosaic-blurred regions (privacy squares)

## Dials

- **block size** — near-invisible (subtle texture) vs huge (abstract mosaic); animating it = the classic reveal/hide transition
- **sampling point** — center of each cell (crisp) vs averaged cell (mosaic-smooth)
- **palette coupling** — pixelation alone is "low-res"; add palette reduction + [[dithering]] for true retro hardware looks
- **grid shape** — square, hex, or arbitrary cells ([[voronoi-cellular]] mosaic)
- **edge fidelity** — hard aliased block edges sell it; smoothing kills it

## Techniques

- **GLSL UV snapping** — `uv = floor(uv * cells) / cells` before sampling.
  One line; the right choice for live content, transitions, and canvas scenes.
- **Canvas downscale-upscale** — draw the image tiny, then scale up with
  `imageSmoothingEnabled = false`. The standard 2D-canvas trick; also how
  pixel-art games render (small buffer, integer upscale).
- **CSS `image-rendering: pixelated`** — for actual low-res assets (pixel
  art) that must scale crisply; doesn't pixelate high-res content by itself.
- **SVG mosaic** — `<rect>` grid sampled from an image; right when the cells
  need to be individually addressable/animatable.

## Starting points

- Shadertoy: search "pixelate" (often combined with dither/palette)
- three.js community `RenderPixelatedPass` — pixel-art rendering of 3D
  scenes with normal-edge outlines; verify currency
- No library needed for the canvas or GLSL patterns

## Search queries

- `glsl pixelate uv floor cells`
- `canvas imageSmoothingEnabled pixel art upscale`
- `three.js RenderPixelatedPass pixel art 3d`
- `pixelation transition image reveal shader`

## Related

[[dithering]] (its palette partner — together they make "retro hardware"),
[[crt-scanlines]] (the display those pixels lived on), [[ascii-rendering]]
(cells that become characters instead of blocks), [[voronoi-cellular]]
(irregular-cell mosaic).
