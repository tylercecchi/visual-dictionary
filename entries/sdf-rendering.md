---
name: sdf-rendering
title: SDF Rendering
category: pattern-and-texture
aliases: [signed distance field, signed distance function, raymarching, distance field, sdf shapes, procedural shapes, smooth min]
media: [canvas, webgl]
---

# SDF Rendering

A *technique* entry: shapes defined as math functions returning distance to
their surface — the engine behind crisp procedural shapes, blobby merging,
glowing contours, and entire raymarched 3D scenes in a single fragment shader.

## You know it when you see

SDFs aren't a look themselves; they're the likely implementation when you see:

- Shapes that merge and split fluidly (smooth-union metaballs)
- Infinitely crisp procedural shapes/text at any zoom (no polygon edges)
- Contour lines, insets/outsets, and glows that follow a shape exactly
- Full 3D scenes on Shadertoy with soft shadows in one shader (raymarching)

## Dials

- **primitive vocabulary** — circles, rounded boxes, segments, bezier… combined by union/subtract/intersect
- **smooth-min k** — the blend radius when shapes merge; the "gooeyness" constant
- **edge treatment** — the distance value gives you, for free: anti-aliased fill (`smoothstep` at 0), strokes (bands near 0), glow (falloff with distance), insets (offset the threshold)
- **domain operations** — repeat space (infinite grids), twist, mirror; distortions of *where* you sample
- **2D vs raymarched 3D** — same math; 3D marches a ray through the field

## Techniques

- **2D SDF fragment shaders** — evaluate distance per pixel, color by it.
  Right for procedural UI shapes, blobby buttons, shape morphs, crisp
  patterns in canvas/WebGL.
- **Raymarching (3D)** — step rays through a 3D distance field; normals,
  shadows, and AO fall out of the field. Right for abstract 3D visuals
  without geometry pipelines; costly per-pixel.
- **SDF text (MSDF)** — glyphs baked as multi-channel distance textures;
  crisp text at any scale in WebGL. The standard for text-in-canvas.
- **CSS has no SDFs** — nearest equivalents are the SVG gooey filter
  ([[liquid-ripple]]) and `clip-path` morphs.

## Starting points

- iquilezles.org — *the* SDF reference: 2D/3D function catalogs, smooth-min,
  raymarching articles
- The Book of Shaders ch. 7 (shapes) for the 2D on-ramp
- `msdf-bmfont` / three.js MSDF text tooling for SDF type
- Shadertoy: nearly everything 3D there is raymarched SDFs — read winners

## Search queries

- `iquilezles 2d sdf functions`
- `raymarching sdf tutorial glsl`
- `msdf text rendering webgl three.js`
- `smooth min sdf blending k`

## Related

The implementation layer beneath [[liquid-ripple]] (metaballs),
[[shape-language]] (procedural geometry), [[glow-bloom]] (distance-falloff
glow), [[toon-outline]] (contour bands), [[refraction-displacement]] (SDF
gradients make displacement maps).
