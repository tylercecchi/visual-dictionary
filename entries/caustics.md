---
name: caustics
title: Caustics
category: light-and-depth
aliases: [water light, pool light, light through glass, focused light patterns, dancing light, underwater light web, glass shadow rainbow]
media: [canvas, webgl]
---

# Caustics

Light focused by a curved surface into bright wandering filaments — the
shimmering web on a pool floor, the bright crescent inside a glass's shadow.
The signature that says "transparent material bending real light."

## You know it when you see

- A living net of bright lines dancing across underwater surfaces
- Sharp bright arcs inside the shadow of glassware
- Sunlight through a window pane throwing wavering bright bands
- Faint rainbow fringes on the bright filaments ([[chromatic-aberration]] of real optics)

## Dials

- **sharpness** — tight thin filaments (shallow clear water, hard sun) vs soft wide bands (deep/murky, diffuse light)
- **scale & speed** — the cell size of the web and how fast it crawls; slow = calm pool, fast = agitated
- **intensity & blend** — additive over the receiving surface; overdriving into [[glow-bloom]] reads as strong sun
- **dispersion** — slight per-channel offset gives the rainbow edge
- **source coupling** — free-floating pattern (cheap, fine) vs actually derived from a water surface/glass geometry (physical)

## Techniques

- **Voronoi-based fake (GLSL)** — animated `pow(1 - (F2-F1), n)` from
  [[voronoi-cellular]], or thresholded ridged [[procedural-noise]], projected
  on surfaces. The standard fake; right for ambient underwater/pool moods,
  costs almost nothing.
- **Layered-noise caustics texture** — two scrolling caustic textures
  multiplied (classic game trick); works even in Canvas 2D with blend modes.
- **Geometry-derived caustics (three.js)** — drei's `Caustics` component
  computes caustics from actual transmissive geometry; right for product-shot
  glassware realism in R3F.
- **CSS/video** — a looping caustics video/sequence under `screen` blend for
  pure decoration where no canvas exists.

## Starting points

- drei `Caustics` — geometry-driven, the realism shortcut
- Shadertoy: search "caustics" — voronoi and ridged-noise fakes to port
- Evan Wallace's WebGL water demo — the canonical real-time water+caustics
  reference

## Search queries

- `drei caustics component glass`
- `glsl fake caustics voronoi F2-F1 animated`
- `evan wallace webgl water caustics`
- `scrolling caustic texture multiply game trick`

## Related

[[voronoi-cellular]] (the fake's engine), [[refraction-displacement]] (the
bending that causes them — pair for underwater scenes), [[liquid-ripple]]
(the surface above), [[volumetric-light]] (underwater god rays complete the
kit), [[glow-bloom]] (hot filaments).
