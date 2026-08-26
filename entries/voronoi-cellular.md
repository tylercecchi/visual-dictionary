---
name: voronoi-cellular
title: Voronoi / Cellular
category: pattern-and-texture
aliases: [worley noise, cellular noise, cells, cracked, mosaic, stained glass, water caustics, honeycomb, organic tiles]
media: [canvas, webgl]
---

# Voronoi / Cellular

Space partitioned by distance to scattered seed points — organic cell
structures: cracked earth, foam, stained glass, and the shimmering light webs
on pool floors.

## You know it when you see

- Organic cell/bubble tiling, each region hugging a center point
- Crack networks or mud-flat patterns (the cell *edges*)
- Underwater caustics — bright wobbling web of light lines
- Mosaic / shattered / stained-glass segmentation of an image

## Dials

- **cell density** — seed count per area
- **distance metric** — euclidean (round cells), manhattan/chebyshev (angular, techy)
- **feature** — F1 (distance to nearest = cell interiors), F2−F1 (cell *borders*), cell ID (flat color per cell)
- **jitter** — full random (organic) → zero (perfect grid/honeycomb)
- **animation** — moving seed points makes cells crawl; animated F2−F1 ≈ caustics

## Techniques

- **GLSL Worley/cellular noise** — grid-hashed nearest-seed search per
  fragment; the standard implementation is ~20 lines. Right for all real-time
  uses: caustics, cell shading, animated mosaics.
- **CPU Voronoi (d3-delaunay)** — exact polygon geometry, not a field. Right
  when you need the cells as *shapes* (SVG stained glass, layout, shattering).
- **Caustics specifically** — animated `pow(1 - (F2-F1), n)` is the cheap
  fake; true refracted caustics exist in three.js land (drei `Caustics`).

## Starting points

- The Book of Shaders ch. 12 — cellular noise, with editable code
- Íñigo Quílez's Voronoi articles (iquilezles.org) — borders, smooth voronoi
- `d3-delaunay` (npm) for geometric Voronoi
- drei `Caustics` for R3F scenes

## Search queries

- `glsl worley cellular noise F2-F1 borders`
- `iquilezles voronoi smooth borders`
- `webgl water caustics shader fake`
- `d3-delaunay voronoi svg`

## Related

[[procedural-noise]] (the family it belongs to), [[liquid-ripple]] (caustics
sit on water), [[shape-language]] (cellular = an organic shape statement).
