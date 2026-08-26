---
name: film-grain
title: Film Grain / Noise Texture
category: surface-and-material
aliases: [grain, noise texture, grainy, analog texture, static, gritty, textured gradient, paper texture]
media: [css, svg, canvas, webgl]
---

# Film Grain / Noise Texture

A fine layer of random per-pixel variation over a surface, reading as analog
film, paper tooth, or textured print rather than sterile digital flatness.

## You know it when you see

- Surfaces look slightly "sandy" or tactile instead of perfectly smooth
- Gradients feel airbrushed/printed rather than banded and digital
- A photographic, analog, or editorial mood
- In motion: the grain "boils" (re-randomizes per frame) like real film

## Dials

- **grain size** — pixel-fine (film) vs coarse (risograph, newsprint)
- **intensity / opacity** — barely-there texture vs heavy grit
- **monochrome vs chromatic** — luminance-only grain is filmic; RGB noise reads as sensor static
- **animated vs static** — static = paper/print; re-seeded per frame = film
- **blend mode** — `overlay`/`soft-light` texture the surface; `normal` at low opacity just dirties it

## Techniques

- **SVG `feTurbulence` as CSS background** — inline SVG data-URI with
  `fractalNoise`, overlaid at low opacity. Zero assets, resolution-independent.
  The default choice for UI grain.
- **Tiled PNG noise texture** — a small (~200px) transparent noise tile,
  repeated with a blend mode. Cheapest to render; fixed scale.
- **Canvas 2D `putImageData` random fill** — generate once or per-frame.
  Right when grain must animate outside WebGL.
- **GLSL hash/noise in fragment shader** — `fract(sin(dot(uv…)))` hash or a
  proper [[procedural-noise]] function, added in a final pass. Right inside
  any shader pipeline; grain is one line, effectively free.

## Starting points

- `feTurbulence` needs no library — copy the data-URI pattern
- `postprocessing` (pmndrs) `NoiseEffect` for three.js
- grain.js-style micro-libraries exist but are rarely worth a dependency

## Search queries

- `svg feTurbulence css grain overlay`
- `glsl film grain fragment shader`
- `three.js postprocessing noise effect`

## Related

[[procedural-noise]] (the generator behind structured grain), [[dithering]]
(noise with a job: trading color depth for texture), [[frosted-glass]] and
[[glow-bloom]] (grain hides their gradient banding), [[halftone]] (the ordered
print cousin).
