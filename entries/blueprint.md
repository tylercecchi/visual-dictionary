---
name: blueprint
title: Blueprint / Technical Drawing
category: pattern-and-texture
aliases: [blueprint style, technical drawing, schematic, engineering drawing, cad look, wireframe aesthetic, patent drawing, exploded view, dimension lines, drafting]
media: [css, svg, canvas, webgl]
---

# Blueprint / Technical Drawing

The drafting table's language — white linework on cyanotype blue, dimension
arrows and annotations, exploded views, hatched sections. Says "engineered,
measured, documented" and lends any product an air of precision.

## You know it when you see

- White/light lines on deep blue ground (the cyanotype), or ink-on-vellum inverse
- Dimension lines with arrowheads, extension ticks, and measurements in a drafting hand
- Exploded views: assemblies pulled apart along an axis, parts floating in order
- Section hatching ([[hatching-sketch]]'s ruled register), centerlines (dash-dot), hidden edges (dashed)
- Title blocks, revision tables, part numbers — the bureaucratic furniture as ornament

## Dials

- **ground & ink** — classic cyanotype (deep blue + white), vellum (cream + ink, [[material-texture]] paper), dark-mode CAD (near-black + cyan, drifting toward [[fui]]); the ground names the era
- **line-weight grammar** — drafting's actual system: thick object outlines, thin dimensions/hatching, dashed hidden, dash-dot centers; obeying it is what makes it read *drafted* rather than just outlined ([[border-stroke]] with a rulebook)
- **annotation density** — a few elegant callouts (product-marketing register) vs full documentation (every dimension, the maximalist texture); annotations are the decoration — [[typographic-voice]]: condensed caps or a drafting hand
- **projection** — orthographic multi-view (front/top/side), [[long-shadow-isometric]] axonometric, or exploded along one axis; perspective is *forbidden* in the authentic register
- **wear** — pristine CAD vs reproduced print: slight blur, grain, fold lines, coffee ring ([[print-artifacts]] wear applied to drafting)

## Techniques

- **SVG as the native medium** — linework, `stroke-dasharray` for line
  types, marker arrowheads for dimensions, `<pattern>` hatching; a small
  component kit (dimension, callout, centerline) makes any diagram
  blueprint-voiced.
- **CSS grid-paper ground** — `repeating-linear-gradient` grids (fine +
  major rules) under content; the graph-paper wing ([[grid-systems]] made
  visible).
- **3D wireframe/exploded (three.js)** — `EdgesGeometry`/`LineSegments`
  for true wireframes; exploded views by animating parts along their
  assembly axis ([[scroll-choreography]] scrubbing an explode is the
  product-page showpiece); blueprint shader = edges white, faces blue or
  transparent.
- **Draw-on animation** — `stroke-dashoffset` line drawing ([[loading-language]]'s
  logo trick at diagram scale): the blueprint that draws itself.
- **Cyanotype conversion** — any linework/photo → invert + blue ramp
  ([[duotone-gradient-map]] with the cyanotype ramp) + paper grain.

## Starting points

- Patent drawings (Google Patents) — free, beautiful reference linework
- Engineering drawing standards (line conventions, searchable summaries)
  for the grammar
- Exploded-view product marketing (Apple-style teardowns) as the modern
  register

## Search queries

- `svg dimension lines arrowheads technical drawing`
- `three.js EdgesGeometry wireframe exploded view`
- `css graph paper background repeating gradient`
- `stroke-dashoffset draw on scroll diagram`
- `cyanotype blueprint effect duotone`

## Related

[[hatching-sketch]] (section fills), [[long-shadow-isometric]] (the
projection), [[grid-systems]] (visible structure), [[fui]] (the fictional
descendant), [[border-stroke]] (line-weight grammar), [[terminal-aesthetic]]
+ [[brutalism]] (kin in exposed structure), [[scroll-choreography]]
(scrubbed explosions), [[print-artifacts]] (reproduction wear).
