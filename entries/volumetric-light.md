---
name: volumetric-light
title: Volumetric Light
category: light-and-depth
aliases: [god rays, light shafts, crepuscular rays, light through fog, atmosphere, dusty light, beams]
media: [canvas, webgl]
---

# Volumetric Light

Light with visible *shape in the air* — shafts through fog, rays streaming
past an occluder, the dusty beam of a projector.

## You know it when you see

- Visible beams or shafts radiating from a light source
- Light "streaming through" a window, tree line, or logo
- Hazy atmosphere where distance dissolves into glow
- The rays shift as the source or camera moves

## Dials

- **density / exposure** — thin haze vs thick dramatic shafts
- **decay** — how fast rays fade with distance from the source
- **sample count** — quality of the ray march; low counts band or grain (hide it with [[film-grain]]/blue-noise jitter)
- **source position** — on-screen radial rays vs off-screen directional wash
- **occlusion** — what blocks the light defines the ray shapes (this is the whole look)

## Techniques

- **Radial blur "god rays" (GLSL post-process)** — render occluders black
  against the bright source, then sample repeatedly along the line toward the
  source and accumulate. The classic screen-space technique; right for 2D
  scenes, logos, and most web uses.
- **Ray-marched volumetrics** — march through a noise-density volume
  accumulating scattered light. The real thing; expensive. Right for
  atmosphere-first 3D scenes.
- **Faked geometry** — translucent gradient cones/planes from the source
  (three.js "lightshafts"). Cheap, art-directable, right for stylized scenes.
- **CSS approximation** — conic/linear gradients at low opacity from a corner
  give a static "light wash"; no true occlusion. Decorative only.

## Starting points

- Shadertoy: search "god rays", "light shafts" — the radial-sample version is short
- GPU Gems 3 ch. 13 (volumetric light scattering as a post-process) — the
  canonical reference the shader world copies
- `postprocessing` (pmndrs) `GodRaysEffect` for three.js

## Search queries

- `glsl god rays radial blur post process`
- `three.js postprocessing GodRaysEffect example`
- `raymarched volumetric fog light shaft shadertoy`

## Related

[[glow-bloom]] (halo on the source itself; the two combine constantly),
[[procedural-noise]] (density variation in the haze), [[vignette]]
(darkened frame makes shafts read brighter).
