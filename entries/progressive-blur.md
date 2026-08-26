---
name: progressive-blur
title: Progressive Blur
category: surface-and-material
aliases: [gradient blur, graduated blur, blur fade, variable blur, blur hierarchy, soft edge blur, ios blur edge]
media: [css, canvas, webgl]
---

# Progressive Blur

Blur that varies across space — sharp here, dissolving there — used as a
*material* for edges and transitions rather than an optical story
(that's [[depth-of-field]]). The signature soft edge of modern OS chrome.

## You know it when you see

- Content dissolving into blur as it approaches a toolbar or screen edge
  (iOS-style headers with no hard boundary)
- Images whose edges melt into the page instead of ending
- Fixed UI floating over scrolling content with a graduated, not abrupt, blur zone
- Blur intensity used as a layer hierarchy: deeper layers blurrier

## Dials

- **ramp profile** — where blur starts and how fast it climbs; linear vs eased (eased reads far more natural)
- **max radius** — a whisper (4-8px) vs full dissolve (30px+)
- **paired scrim** — progressive blur almost always pairs with a gradient tint/fade ([[gradients]] eased scrim); blur alone leaves smeared-but-bright content fighting the UI
- **direction** — vertical edge zones (headers/footers), radial (focus vignette-blur), or per-layer constant steps (hierarchy mode)
- **saturation/brightness shift in the blurred zone** — matching [[frosted-glass]]'s recipe keeps the dissolved region alive

## Techniques

- **Stacked masked blur layers (CSS)** — several `backdrop-filter: blur()`
  layers, each masked (`mask-image: linear-gradient`) to a band, radii
  stepping up (e.g. 2/4/8/16px). The standard CSS approximation — a few
  layers with eased masks read as continuous. Watch compositing cost.
- **Single mask trick** — one blurred layer with a gradient mask fades blur
  *opacity*, not radius; cheaper, acceptable for subtle edges.
- **Variable blur (GLSL)** — blur radius driven per-pixel by a ramp or mask
  texture; the real thing, right inside canvas/WebGL apps or when the ramp
  must animate.
- **Pre-blurred crossfade** — for static images: overlay a blurred copy,
  mask the crossfade; zero runtime blur cost.

## Starting points

- The stacked-masked-layers pattern (widely documented as "progressive blur
  css"; no library)
- Shadertoy: search "variable blur", "gradient blur"
- iOS/visionOS chrome — the reference implementation to imitate

## Search queries

- `progressive blur css stacked backdrop-filter mask`
- `glsl variable blur radius mask texture`
- `ios header gradient blur recreation`
- `image edge fade blur mask`

## Related

[[frosted-glass]] (uniform ancestor; same recipe, now with a ramp),
[[depth-of-field]] (optics-story blur vs this material blur),
[[gradients]] (the mandatory scrim partner), [[elevation]] (blur steps as
layer hierarchy), [[visual-hierarchy]] (blur recedes what it touches).
