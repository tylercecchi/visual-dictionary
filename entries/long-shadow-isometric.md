---
name: long-shadow-isometric
title: Long Shadows / Isometric
category: light-and-depth
aliases: [long shadow, isometric, 2.5d illustration, axonometric, flat design shadow, 45 degree shadow, dimetric, game map view]
media: [css, svg, canvas, webgl]
---

# Long Shadows / Isometric

Two graphic conventions for depth without perspective: shadows extruded far
at 45°, and scenes drawn on a parallel-projection grid where nothing
converges. Both trade realism for diagram-clean order.

## You know it when you see

- Flat icons/type casting a hard shadow stretching to 2-3× their size at 45°
- City-builder / tech-diagram scenes viewed from an angle with no vanishing point — parallel lines stay parallel
- Cubes drawn from three visible faces, each face one flat tone
- Architectural/product illustrations that feel measured, not photographed

## Dials

- **shadow length & fade** — short graphic accent vs dramatic extrusion; solid vs gradient fade-out
- **shadow tone** — darker shade of the background (classic flat design) vs a color multiply
- **projection** — true isometric (30°, all axes equal) vs dimetric/2:1 pixel-art projection vs arbitrary axonometric; pick one and never mix
- **face lighting** — the fixed light rule (top face lightest, one side mid, one dark) that makes iso read as 3D
- **line vs fill** — outlined isometric (technical/blueprint) vs flat-fill (game/friendly)

## Techniques

- **Long shadow in CSS** — stacked `text-shadow`/`box-shadow` at 1px steps
  (or a generator), or a skewed pseudo-element gradient. SVG: a `<use>` copy
  offset-stacked or a filter.
- **Isometric in CSS** — `transform: rotateX(~54.7deg) rotateZ(45deg)` on a
  plane (or the 2D shortcut `rotate(30deg) skewX(-30deg)` per face). Real DOM
  content on iso planes — dashboards love this.
- **SVG isometric illustration** — draw on an iso grid; each cube face is a
  parallelogram with the face-lighting rule. Illustration tooling (or
  generators) helps more than code here.
- **Orthographic camera (three.js)** — real 3D with `OrthographicCamera` at
  the iso angle: parallel projection for free, plus lighting/shadows/motion.
  The right choice for animated isometric scenes.

## Starting points

- three.js `OrthographicCamera` iso examples
- CSS long-shadow generators (many; trivial to inline)
- Pixel-art iso reference: the 2:1 dimetric convention docs

## Search queries

- `three.js orthographic camera isometric scene`
- `css isometric transform rotateX rotateZ`
- `long shadow css generator stacked`
- `isometric grid svg illustration 30 degrees`

## Related

[[elevation]] (long shadow is elevation, stylized), [[shape-language]]
(iso is a geometry statement), [[toon-outline]] (flat-face shading is
banding), [[pixelation]] (2:1 pixel iso tradition), [[parallax]] (iso layers
pan beautifully).
