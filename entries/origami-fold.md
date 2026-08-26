---
name: origami-fold
title: Origami / Paper Fold
category: surface-and-material
aliases: [paper fold, folded paper, crease, unfold animation, low poly, faceted, paper craft, papercraft, fold transition, accordion fold]
media: [css, svg, canvas, webgl]
---

# Origami / Paper Fold

Surfaces that crease — faceted planes meeting at sharp folds, panels that
unfold to reveal content, the low-poly geometry that reads as folded paper.
Dimensionality earned by creasing, not extruding.

## You know it when you see

- Flat shapes broken into triangular/polygonal facets, each a slightly different shade (the fold lighting)
- Content unfolding like a map, brochure, or greeting card
- Low-poly illustration: animals and landscapes as faceted paper sculpture
- Accordion/concertina panels; corners that lift and fold back (dog-ears)

## Dials

- **facet shading law** — each face's brightness = its angle to the light ([[light-on-flat]] applied per-facet); flat fills per face with *no gradients inside faces* is what reads "folded" — smooth shading kills it
- **crease sharpness** — hard vector edges (crisp origami) vs slightly softened + a shadow line in the valley (physical paper); valley vs mountain folds shade opposite
- **fold choreography** — unfolds are sequential, not simultaneous: panel 2 waits on panel 1 ([[motion-ceremony]] stagger with hinge physics); the anticipating pause before the last panel is the charm
- **paper honesty** — thickness (a visible edge line), slight fold-angle imperfection (nothing opens to exactly 180°), [[material-texture]] paper grain; perfection reads as vector, imperfection as paper
- **facet density** (low-poly) — few large facets (bold, iconic) vs many small (detailed, drifts toward rendered 3D); triangulation style is the illustration's voice

## Techniques

- **CSS 3D fold** — panels as children with `transform-origin` at shared
  edges, `rotateX/Y` in sequence under a common `perspective`;
  brightness-shift each panel during rotation (a pseudo-element black/white
  overlay keyed to angle) for the fold lighting. The map-unfold pattern.
- **SVG faceted illustration** — polygons with hand-assigned face shades
  per the shading law; d3/triangulation or authored in a vector tool;
  animate fold-state by interpolating point positions ([[morphing]] with
  facet constraints).
- **three.js hinged geometry** — real hinge rotations with real lighting
  (the shading law for free), `flatShading: true` for the facet look;
  origami simulation libraries exist for the authentic register (verify
  currency).
- **Low-poly generation** — Delaunay-triangulate an image and flat-fill
  each triangle with its sampled color ([[voronoi-cellular]]'s
  d3-delaunay wing); the classic low-poly-ify pipeline.

## Starting points

- The CSS map-fold pattern (searchable; no library)
- three.js `flatShading` + hinge examples
- Delaunay image triangulation demos (d3-delaunay / trianglify-class)
- Origami simulator (Amanda Ghassaei's, GitHub) for the real crease-pattern
  register

## Search queries

- `css 3d fold unfold panels transform-origin`
- `low poly image triangulation delaunay flat fill`
- `three.js flat shading paper fold hinge`
- `origami simulator crease pattern web`

## Related

[[light-on-flat]] (the shading law's source), [[shape-language]] (facets as
geometry stance), [[material-texture]] (paper grain and thickness),
[[morphing]] (fold-state interpolation), [[motion-ceremony]] (sequential
hinges), [[long-shadow-isometric]] (flat-face shading kin),
[[illustration-style]] (low-poly as a register), [[page-transitions]]
(fold as route change).
