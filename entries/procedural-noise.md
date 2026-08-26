---
name: procedural-noise
title: Procedural Noise
category: pattern-and-texture
aliases: [perlin noise, simplex noise, fbm, fractal noise, organic randomness, turbulence, clouds, smoke, flow field]
media: [svg, canvas, webgl]
---

# Procedural Noise

Smooth, organic randomness computed from coordinates — the foundational
generator behind clouds, smoke, terrain, flowing gradients, wobble, and almost
every "organic" shader effect.

## You know it when you see

- Cloudy, marbled, or smoky fields with no repeating tile
- Gradients that drift and swirl organically ("aurora"/"mesh gradient in motion")
- Motion that feels alive rather than mechanical (drifting particles, wandering blobs)
- Terrain-like or wood-grain-like structure

## Dials

- **frequency / scale** — zoomed-out billows vs fine turbulence
- **octaves (fBm)** — layers of noise at doubling frequencies; more octaves = more detail richness
- **lacunarity & gain** — how much each octave's frequency rises and amplitude falls
- **flavor** — *value/Perlin* (smooth, slightly grid-y), *simplex* (smoother, cheaper in high dims), *worley/cellular* (see [[voronoi-cellular]]), *curl* (divergence-free, for flow)
- **domain warping** — feeding noise its own output as coordinates; the marbled, folded look
- **time evolution** — sampling 3D noise with z=time makes any of it drift

## Techniques

- **GLSL noise functions** — paste-in implementations of simplex/Perlin/fBm
  (no texture needed) or sample a noise texture. The core primitive: drive
  displacement, color, alpha, particle velocity from it.
- **SVG `feTurbulence`** — built-in fractal noise as a filter primitive;
  drives [[film-grain]] and `feDisplacementMap` wobble without a canvas.
- **CPU noise libraries (canvas/JS)** — for driving layout, paths, or
  particle systems in 2D canvas or even DOM positions.
- **CSS approximations** — layered animated gradients fake low-frequency
  noise ("aurora" backgrounds) when a canvas isn't warranted.

## Starting points

- Ashima / stegu `webgl-noise` — the canonical GLSL simplex implementations
  everyone pastes
- `glsl-noise` (npm, for glslify) packages the same
- The Book of Shaders ch. 11-13 — noise, fBm, domain warping, with editable code
- JS: `simplex-noise` (npm) for CPU-side

## Search queries

- `stegu webgl-noise simplex glsl`
- `book of shaders fbm domain warping`
- `simplex-noise npm`
- `curl noise particles webgl`

## Related

The generator behind [[liquid-ripple]], [[refraction-displacement]] (heat
haze), [[film-grain]], animated gradients, and [[voronoi-cellular]]'s family.
[[dithering]] uses its blue-noise cousin.
