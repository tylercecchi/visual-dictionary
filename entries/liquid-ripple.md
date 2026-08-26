---
name: liquid-ripple
title: Liquid / Ripple
category: distortion-and-lens
aliases: [water effect, ripple, wave distortion, fluid, gooey, melting, wobble, jelly]
media: [svg, canvas, webgl]
---

# Liquid / Ripple

Surfaces or imagery that move like fluid — propagating rings from a touch
point, standing waves across a surface, or blobby shapes that merge and split.

## You know it when you see

- Rings spreading from a click/cursor like a stone in water
- Imagery gently undulating as if underwater
- Blobs that stretch toward each other and merge ("gooey"/metaball look)
- Buttons or type that wobble like jelly on interaction

## Dials

- **frequency / wavelength** — tight ripples vs long slow swells
- **amplitude** — subtle shimmer vs heavy warp (this is [[refraction-displacement]] strength varying in time)
- **damping / decay** — how fast a disturbance dies out
- **propagation** — expanding rings (interactive) vs global sine field (ambient)
- **viscosity** (for goo) — how reluctantly blobs separate

## Techniques

- **Sine-field displacement (GLSL)** — displace UVs by summed sines of
  distance-from-origin and time. Cheap, ambient underwater look.
- **Ripple simulation (ping-pong buffers, WebGL)** — the wave equation on two
  alternating textures; disturbances propagate and reflect realistically.
  Right for interactive touch-ripples on imagery.
- **SVG gooey filter** — `feGaussianBlur` + contrast-boosting
  `feColorMatrix`: blurred shapes threshold back into merged blobs. The
  classic metaball trick for DOM elements.
- **Metaballs (GLSL SDF)** — smooth-min of distance fields. Right for canvas
  blob scenes.
- **Spring physics on paths/meshes** — jelly wobble is often better done as
  springs (animation library) than as a shader.

## Starting points

- Shadertoy: search "water ripple buffer" (ping-pong examples), "metaballs"
- three.js water examples (`Water`, `Reflector`) for literal water surfaces
- SVG gooey: the Lucas Bebber / CSS-Tricks gooey-effect pattern
- Spring wobble: framer-motion / react-spring / GSAP

## Search queries

- `webgl interactive water ripple ping pong buffer`
- `svg gooey effect filter blur contrast`
- `glsl metaball smooth min sdf`
- `shadertoy water ripple click`

## Related

[[refraction-displacement]] (ripple = animated displacement),
[[procedural-noise]] (organic wobble source), [[shimmer-sheen]] (light on the
moving surface), [[shape-language]] (goo is a shape-language statement).
