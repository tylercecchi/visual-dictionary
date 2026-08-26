---
name: mesh-gradient
title: Mesh Gradient / Aurora
category: surface-and-material
aliases: [aurora background, blurry blobs, gradient blur, stripe gradient, animated gradient, lava lamp, ambient background, soft gradient field, northern lights, aurora borealis background]
media: [css, canvas, webgl]
---

# Mesh Gradient / Aurora

Multiple colors blending freely across a surface — not a linear ramp but a
soft 2D field of hues, often drifting slowly. The default "premium ambient
background" of the current era (the Stripe-header look).

## You know it when you see

- Backgrounds where several colors melt into each other with no clear direction
- Slowly drifting, lava-lamp-like color clouds behind hero content
- "Aurora" ribbons of color on dark backgrounds
- Blurred blob shapes bleeding through a page

## Dials

- **color set** — 3-5 hues; neighboring hues (analogous) = elegant, complements = energetic; on dark, saturated colors at low coverage = aurora
- **blob scale & softness** — big soft fields (calm) vs tighter defined blobs (playful)
- **drift speed** — barely perceptible is the premium register; fast reads as a screensaver
- **grain** — [[film-grain]] on top is near-mandatory to kill banding and add materiality
- **contrast ceiling** — the field must stay quiet enough for content on top ([[visual-hierarchy]])

## Techniques

- **CSS blurred blobs** — a few large `radial-gradient` layers or
  absolutely-positioned colored divs under `filter: blur(100px)`, keyframed
  transforms for drift. Right for most UI backgrounds; watch blur perf on
  large areas.
- **CSS `paint()`/static mesh image** — export a mesh gradient as an image
  (or SVG) when it doesn't need to move; zero runtime cost.
- **GLSL noise-driven gradient** — mix colors by layered
  [[procedural-noise]] (fBm, domain-warped for the marbled aurora look).
  The right choice for rich, non-repeating, animated fields; a small
  fragment shader outperforms giant CSS blurs.
- **True mesh gradient (bezier patch)** — actual Photoshop/Figma-style mesh
  interpolation; niche libraries exist for authoring-grade control.

## Starting points

- Stripe's famous animated gradient (widely reverse-engineered; search for
  "stripe gradient" recreations to port)
- Shadertoy/codrops: domain-warped fBm color fields
- CSS-only versions need no library — the blurred-blob pattern is standard

## Search queries

- `stripe animated gradient webgl recreation`
- `glsl domain warping fbm color gradient background`
- `css aurora background blur blobs animation`
- `mesh gradient generator svg export`

## Related

[[procedural-noise]] (the engine of the good versions), [[film-grain]]
(mandatory topping), [[visual-hierarchy]] (backgrounds must recede),
[[glow-bloom]] (aurora on dark is glow-adjacent), [[duotone-gradient-map]]
(fixed-palette discipline for the color set).
