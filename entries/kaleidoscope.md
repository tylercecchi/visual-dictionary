---
name: kaleidoscope
title: Kaleidoscope / Symmetry
category: pattern-and-texture
aliases: [mandala, radial symmetry, mirror pattern, sacred geometry, tiling, psychedelic pattern, fractal pattern, wallpaper group]
media: [css, svg, canvas, webgl]
---

# Kaleidoscope / Symmetry

Content folded through mirrors and rotations — one wedge of imagery becomes a
mandala; one tile becomes an infinite wallpaper. Order imposed by symmetry.

## You know it when you see

- Radial patterns where one slice repeats around a center, mirrored
- Mandalas blooming and rotating from any source imagery
- Seamless wallpaper patterns with mirror/rotate structure
- Psychedelic visuals that fold live video into symmetric blossoms

## Dials

- **fold count** — 6/8/12-fold radial segments; more folds = lacier
- **mirror vs rotate** — mirrored wedges (kaleidoscope proper) vs rotation-only (pinwheel); mirroring hides seams
- **source motion** — static source (ornament) vs drifting source ([[procedural-noise]] or video — the pattern *blooms*)
- **center drift** — moving the fold center animates the whole structure
- **recursion** — folding the folded output again → fractal density

## Techniques

- **GLSL polar folding** — convert UV to polar, `mod` the angle into one
  wedge, mirror alternate wedges, sample the source. ~6 lines; the right
  choice for live/animated kaleidoscopes of any content.
- **SVG `<pattern>` + transforms** — a wedge in a group, repeated with
  `rotate()`/`scale(-1,1)` for static mandalas and wallpaper tiles; exact and
  resolution-independent.
- **Canvas 2D clip-and-rotate** — draw the source clipped to a wedge, stamp
  it around the circle with mirrored alternates. Fine for moderate sizes.
- **CSS** — `conic-gradient` and `repeating-conic-gradient` give simple
  radial pattern structure; real imagery folding needs canvas/GL.

## Starting points

- Shadertoy: search "kaleidoscope" — the polar-fold pattern is canonical
- Wallpaper-group references (the 17 symmetry groups) for tiling beyond
  radial — worth knowing the vocabulary p6m/p4m when asking for patterns
- SVG pattern tutorials for static ornament

## Search queries

- `glsl kaleidoscope polar coordinates angle mod mirror`
- `svg pattern rotational symmetry mandala`
- `repeating-conic-gradient css pattern`
- `wallpaper group tiling p6m generator`

## Related

[[procedural-noise]] (the best live source material), [[voronoi-cellular]]
(organic tiling counterpoint), [[sdf-rendering]] (domain-repeat is the same
fold idea), [[liquid-ripple]] (folded ripples = classic psychedelia),
[[shape-language]] (ornament density as identity).
