---
name: duotone-gradient-map
title: Duotone / Gradient Map
category: color-and-tone
aliases: [duotone, gradient map, color grading, two-tone, tritone, colorize, spotify look, false color]
media: [css, svg, canvas, webgl]
---

# Duotone / Gradient Map

An image's luminance remapped onto a chosen color ramp — shadows become one
color, highlights another, everything between interpolates.

## You know it when you see

- Photos rendered entirely in two brand colors (the classic Spotify-era look)
- Imagery that matches the palette perfectly no matter the source photo
- "False color" — tone is preserved but hue is editorial, not photographic

## Dials

- **ramp stops** — the shadow color and highlight color (duotone); add mids for tritone or full grading ramps
- **contrast / levels pre-map** — crushing blacks before mapping makes the look graphic; gentle curve keeps it photographic
- **blend with original** — partial opacity gives a "graded" rather than "replaced" feel
- **ramp easing** — where the midpoint sits shifts the mood (dark-heavy = moody)

## Techniques

- **SVG `feColorMatrix` + `feComponentTransfer`** — desaturate, then map
  channels through table functions. Works as a CSS `filter: url(#id)` on any
  element, including video. The standard web duotone.
- **CSS approximation** — grayscale + contrast filters under a color overlay
  with `mix-blend-mode` (multiply for shadows, screen/lighten for highlights).
  Close enough for backgrounds; less exact than the SVG filter.
- **Canvas 2D lookup** — compute luminance per pixel, index into a ramp array.
- **GLSL gradient map** — `texture(ramp, vec2(luma, 0.5))` with a 256×1 ramp
  texture, or `mix(shadowColor, highlightColor, luma)` for pure duotone. One
  line; also how full cinematic color grading (LUTs) works — a 3D LUT is this
  idea in three dimensions.

## Starting points

- SVG filter duotone: well-documented CSS-Tricks pattern, no library
- `postprocessing` (pmndrs) `LUT3DEffect` for real grading in three.js
- LUT `.cube` files — industry-standard grading ramps you can load directly

## Search queries

- `svg feColorMatrix duotone filter css`
- `glsl gradient map luminance ramp texture`
- `three.js LUT color grading postprocessing`

## Related

[[halftone]] and [[film-grain]] (the riso/print recipe), [[dithering]]
(palette reduction with texture), [[vignette]] (grading's usual companion).
