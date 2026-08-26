---
name: shape-language
title: Shape Language
category: ui-foundations
aliases: [border radius, rounded, sharp, geometry, corner radius, pill, squircle, blob, angular, soft]
media: [css, svg, webgl]
---

# Shape Language

The personality carried by geometry — how round, sharp, regular, or organic
the corners, containers, and forms are, applied consistently.

## You know it when you see

- Everything-rounded friendliness (pills, big radii) vs sharp editorial edges
- Squircles: corners that curve *continuously* instead of quarter-circles (the iOS feel)
- Organic blobs and goo vs strict rectangles
- Inconsistency you can feel: one sharp element in a soft system looks broken

## Dials

- **radius scale** — 0 (brutalist/editorial) → 4-8px (neutral product) → 12-24px (friendly) → pill (playful); nested elements need *nested radii* (inner = outer − padding) or corners look wrong
- **corner smoothing** — quarter-circle vs superellipse/squircle continuity
- **regularity** — geometric primitives vs hand-drawn/organic ([[voronoi-cellular]], blobs)
- **stroke vs fill** — outlined shapes read technical/light; filled read solid/heavy
- **consistency scope** — which elements share the language (buttons, cards, imagery, even focus rings)

## Techniques

- **CSS `border-radius` tokens** — a scale (sm/md/lg/full), plus the nested-
  radius rule. This is most of shape language.
- **Squircles** — CSS `corner-shape: squircle` where supported; otherwise
  SVG path / `clip-path` generators or a mask. Verify current browser support
  before choosing the approach.
- **Organic shapes** — SVG blob paths (generated or hand-drawn), the gooey
  filter ([[liquid-ripple]]), or SDF shapes in GLSL for canvas work.
- **SDF rounded shapes (GLSL)** — rounded rects/blobs as signed distance
  functions; the shader-world equivalent of border-radius (iquilezles.org 2D
  SDF catalog).

## Starting points

- figma/frame squircle articles + `corner-smoothing` discussions — the
  squircle math explained
- Íñigo Quílez 2D SDF functions — every shape, GLSL-ready
- Blob generators (blobmaker-style) for organic SVG paths

## Search queries

- `css corner-shape squircle support`
- `nested border radius formula`
- `iquilezles 2d sdf rounded box`
- `svg blob path generator`

## Related

[[elevation]] (physicality partner), [[liquid-ripple]] (shape language in
motion), [[visual-hierarchy]] (shape contrast can carry emphasis),
[[motion-ceremony]] (soft shapes want springy motion; sharp wants crisp).
