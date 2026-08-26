---
name: toon-outline
title: Toon / Outline Shading
category: light-and-depth
aliases: [cel shading, toon shader, cartoon, outlines, ink lines, npr, comic shading, flat shading, borderlands look]
media: [svg, canvas, webgl]
---

# Toon / Outline Shading

Non-photorealistic rendering that draws like an illustrator: flat bands of
color instead of smooth lighting, and ink lines around silhouettes and creases.

## You know it when you see

- 3D objects shaded in 2-3 flat tones with hard boundaries (cel shading)
- Black (or colored) contour lines around shapes, like inked comics
- The Zelda/Borderlands/anime look
- Illustration-flat surfaces that still move like 3D

## Dials

- **band count & thresholds** — 2 bands (graphic) → 4-5 (soft anime); where the shadow line falls is the drawing's character
- **outline width & color** — hairline (technical) vs thick (cartoon); pure black vs darkened-hue lines (softer)
- **outline source** — silhouette only, or also creases/normal-breaks and texture edges
- **specular treatment** — hard-edged white shape (anime highlight) or none
- **line stability** — consistent screen-space width vs perspective-scaled; wobble/sketchiness for hand-drawn feel

## Techniques

- **GLSL quantized lighting** — `floor(NdotL * bands)/bands` or a 1D ramp
  texture instead of smooth diffuse. Three.js `MeshToonMaterial` +
  `gradientMap` is this, ready-made.
- **Inverted-hull outlines** — render the mesh again, slightly inflated along
  normals, backfaces only, flat color. Cheap, robust silhouettes; misses
  interior creases.
- **Screen-space edge detection** — Sobel over depth + normals in a
  post-pass; catches silhouettes *and* creases, uniform line weight.
  `postprocessing` has outline effects; pixel-art variants exist.
- **SVG/2D flat illustration** — when nothing is 3D, toon look = flat fills +
  stroke discipline; a [[shape-language]] and palette decision, not a shader.

## Starting points

- three.js `MeshToonMaterial` + gradientMap docs/examples
- drei/pmndrs `Outlines` component and `postprocessing` outline effect
- Roystan's toon shader tutorial (widely ported reference for banding +
  rim + specular anatomy)

## Search queries

- `three.js MeshToonMaterial gradientMap example`
- `inverted hull outline shader webgl`
- `screen space outline depth normal sobel postprocessing`
- `anime specular hard edge shader`

## Related

[[duotone-gradient-map]] (banding applied to color instead of light), [[pixelation]] (pairs in retro-3D looks), [[shape-language]] (line
weight is shape language), [[glow-bloom]] (rim light + bloom = stylized pop).
