---
name: reflections
title: Reflections
category: light-and-depth
aliases: [mirror, mirror floor, reflective surface, screen-space reflections, ssr, wet floor, glossy floor, mirrored text]
media: [css, canvas, webgl]
---

# Reflections

A surface repeating the world above it — mirror floors under products, wet
pavement doubling neon, glass mirroring the room. Distinct from
[[specular-metallic]] (which reflects an *environment map*): this is
reflecting the *actual scene content*.

## You know it when you see

- An object doubled upside-down beneath itself, fading with distance
- "Wet floor" — a dark glossy ground carrying smeared lights
- Showroom/product-shot staging: the hero floating on a mirror plane
- Ripples or roughness breaking the mirrored copy ([[liquid-ripple]] water)

## Dials

- **falloff** — how fast the reflection fades with distance from the contact point; fast fade = wet floor, none = hard mirror
- **blur / roughness** — sharp mirror vs increasingly-blurred-with-distance (the premium look; matches real rough floors)
- **intensity** — ghost-subtle (10-20%, elegant) vs full mirror (staged, formal)
- **distortion** — flat plane vs ripple/noise perturbation ([[procedural-noise]])
- **color shift** — reflections on dark floors often darken/cool; tinting sells the floor material

## Techniques

- **CSS flipped clone** — duplicate the element, `scaleY(-1)`, fade with a
  gradient mask (`mask-image`). Right for text/logo/card reflections;
  content-doubling in DOM is its only cost.
- **Planar reflection (WebGL)** — render the scene again from the mirrored
  camera into a texture, sample on the floor plane. Exact for flat floors;
  three.js `Reflector`, drei `MeshReflectorMaterial` (adds distance blur —
  the wet-floor standard in R3F).
- **Screen-space reflections (SSR)** — march the depth buffer for
  reflections on arbitrary surfaces; approximate, artifacts at screen edges.
  `postprocessing` SSR effects exist; right when floors aren't flat planes.
- **Fake it with gradients** — a vertical gradient + blurred copy smear
  under lights; enough for wet-street *moods* in 2D scenes.

## Starting points

- drei `MeshReflectorMaterial` — the go-to wet-floor material
- three.js `Reflector` / `ReflectorForSSRPass` examples
- Shadertoy: search "planar reflection", "wet road"

## Search queries

- `drei MeshReflectorMaterial blur mix strength`
- `three.js Reflector planar mirror example`
- `css reflection scaleY mask-image gradient`
- `screen space reflections webgl postprocessing`

## Related

[[specular-metallic]] (envmap reflection; this entry is scene reflection),
[[liquid-ripple]] (perturbed water mirrors), [[glow-bloom]] (reflected lights
bloom), [[elevation]] (a mirror floor *is* a ground plane statement),
[[frosted-glass]] (glass = reflection + transmission).
