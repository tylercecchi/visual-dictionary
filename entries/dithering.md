---
name: dithering
title: Dithering
category: color-and-tone
aliases: [dither, ordered dither, bayer, retro pixel shading, stippling, blue noise, 1-bit look, game boy look]
media: [canvas, webgl]
---

# Dithering

Simulating more colors than a limited palette allows by patterning the
available colors — gradients become fields of structured dots instead of
smooth ramps.

## You know it when you see

- Gradients rendered as crosshatch/checkerboard dot patterns
- 1-bit or few-color imagery that still reads as shaded
- Retro computing / Game Boy / early-Mac aesthetic
- Up close: pattern; at distance: smooth tone

## Dials

- **palette size** — 2 colors (1-bit) up to a reduced palette (posterized + dithered)
- **pattern type** — *ordered/Bayer* (crisp regular grid, the retro look), *blue noise* (organic, no visible grid), *error diffusion / Floyd–Steinberg* (photographic, wormy)
- **dither scale** — 1:1 pixels vs chunky enlarged cells (modern "big pixel" retro)
- **threshold bias** — shifts overall lightness of the result

## Techniques

- **GLSL ordered dither** — compare luminance against a 4×4/8×8 Bayer matrix
  (constant array or tiny texture), snap to palette. A few lines; the right
  choice for real-time and animated dithering.
- **Blue-noise texture dither (GLSL)** — same comparison against a tiled
  blue-noise texture; organic result, no grid artifact.
- **Canvas 2D error diffusion** — Floyd–Steinberg over `ImageData`.
  Sequential, so CPU-only; right for one-off image processing, not per-frame.
- **Pre-dithered assets** — process images at build time (sharp/ImageMagick)
  when the content is static; zero runtime cost.

## Starting points

- Shadertoy: search "bayer dither", "blue noise dither"
- `postprocessing` / three.js community dither passes exist — verify currency
- Obra Dinn developer (Lucas Pope) devlogs — canonical reference on making
  dithering stable under motion (the hard problem)

## Search queries

- `glsl ordered dithering bayer matrix shader`
- `blue noise texture dithering webgl`
- `three.js dither postprocessing effect`
- `dithering stable camera motion obra dinn`

## Related

[[halftone]] (print-derived sibling: sized dots instead of thresholded
patterns), [[film-grain]] (unstructured noise with no palette job),
[[duotone-gradient-map]] (palette reduction without patterning),
[[procedural-noise]] (blue noise is a noise flavor).
