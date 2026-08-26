---
name: glow-bloom
title: Glow / Bloom
category: light-and-depth
aliases: [glow, bloom, halo, neon, light bleed, luminous, radiant, aura, hdr glow]
media: [css, svg, canvas, webgl]
---

# Glow / Bloom

Light appearing to spill beyond the boundary of a bright element, as a camera
lens or the eye would blur an overexposed source.

## You know it when you see

- Bright elements have a soft halo bleeding past their edges
- Neon-sign look; text or lines that seem to emit light
- Highlights "blow out" and feather into their surroundings
- The scene feels luminous rather than lit

## Dials

- **threshold** — how bright a pixel must be before it blooms; lower = everything glows, higher = only hot spots
- **radius / spread** — how far the halo reaches
- **intensity** — opacity/strength of the bloomed layer added back
- **passes** — number of blur passes; more = smoother, more cinematic falloff
- **tint** — color shift of the halo relative to the source (neon looks tint toward the source hue)

## Techniques

- **CSS `box-shadow` / `text-shadow` / `filter: drop-shadow()`** — stack 2-3
  shadows of increasing blur radius in the element's own color. Right choice
  for static UI glow (buttons, neon text). `drop-shadow` follows alpha shape.
- **SVG `feGaussianBlur` + `feMerge`** — blur a copy of the element and merge
  under the original. Right for glowing vector artwork/icons.
- **Canvas 2D `shadowBlur`** — quick for procedural drawings; quality is poor
  at large radii.
- **WebGL bloom (threshold → downsample → blur → additive composite)** — the
  real thing: extract pixels above threshold, blur in mip chain, add back.
  Right choice for scenes, animation, or when glow must react to content.

## Starting points

- three.js `UnrealBloomPass` (postprocessing) — the standard scene bloom
- `postprocessing` npm package (pmndrs) — better-performing bloom for three.js
- Shadertoy: search "bloom" for single-pass approximations

## Search queries

- `npm three.js bloom postprocessing`
- `github selective bloom webgl`
- `shadertoy bloom dual kawase`
- `css neon glow text-shadow technique`

## Related

[[volumetric-light]] (light with visible shape in the air, not just a halo),
[[shimmer-sheen]] (moving highlight), [[vignette]] (its inverse: darkening edges).
Often combined with [[film-grain]] for cinematic looks.
