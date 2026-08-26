---
name: refraction-displacement
title: Refraction / Displacement
category: distortion-and-lens
aliases: [liquid glass, lensing, warp, distortion map, heat haze, looking through water, bending light, displacement map]
media: [svg, canvas, webgl]
---

# Refraction / Displacement

Background content bending as it passes behind or through a surface — the
image is sampled from a *displaced* position, as glass, water, or heat bends
light.

## You know it when you see

- Content behind a shape looks bent, magnified, or squeezed near its edges
- "Liquid glass" — a blob or pane that warps what's under it
- Heat-haze wobble over a surface
- Type or imagery viewed "through" a lens, droplet, or ripple

## Dials

- **displacement strength** — how far samples are pushed; subtle = thick glass, strong = funhouse
- **displacement map** — *what shape* drives the bend: a normal map (glass form), [[procedural-noise]] (heat/water), a radial gradient (lens/droplet)
- **edge behavior** — refraction concentrates at edges (fresnel-ish); interior often nearly straight
- **chromatic split** — offsetting channels slightly differently ([[chromatic-aberration]]) makes it read as real glass
- **animation** — scrolling/evolving the map = liquid; static map = solid glass

## Techniques

- **SVG `feDisplacementMap`** — displace an image (or `BackdropFilter`ed
  region, where supported) using another image's channels. The only
  no-WebGL true displacement; Safari/Chrome support caveats — verify.
- **Canvas 2D slice tricks** — draw the image in thin strips with per-strip
  offsets. Only viable for 1D wobble (heat haze bands).
- **GLSL displacement sampling** — `texture(bg, uv + displace(uv) * strength)`.
  The canonical technique. Displacement from a texture, normal map, SDF
  gradient, or noise. Right choice for anything interactive or animated.
- **three.js transmission materials** — physically-based refraction through
  3D geometry (`MeshPhysicalMaterial.transmission`, drei
  `MeshTransmissionMaterial`). Right when there's an actual 3D glass object.

## Starting points

- drei `MeshTransmissionMaterial` — the shortcut to premium "liquid glass" in R3F
- Shadertoy: search "refraction", "lens distortion"
- Apple's "Liquid Glass" (2025 design language) — reference for the
  UI-panel-that-refracts look; community shader recreations exist on GitHub

## Search queries

- `webgl displacement map background distortion`
- `liquid glass shader recreation github`
- `svg feDisplacementMap browser support backdrop`
- `react three fiber MeshTransmissionMaterial example`

## Related

[[frosted-glass]] (blur + refraction = full glass material),
[[liquid-ripple]] (time-varying displacement), [[chromatic-aberration]] (the
finishing touch), [[procedural-noise]] (the usual displacement source).
