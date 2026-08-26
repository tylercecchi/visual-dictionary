---
name: ornament-traditions
title: Ornament Traditions
category: pattern-and-texture
aliases: [islamic geometric pattern, girih, arabesque, celtic knot, knotwork, damask, filigree, moroccan tile pattern, mandala pattern, decorative border, interlace, tessellation ornament, chinoiserie, acanthus, toile]
media: [css, svg, canvas, webgl]
---

# Ornament Traditions

The great rule-built pattern systems — Islamic geometric stars, Celtic
interlace, damask/arabesque scrollwork. Not "decorative clip-art" but
*construction systems*: each tradition is an algorithm centuries old,
which is exactly why they reproduce perfectly in code.

## You know it when you see

- **Islamic geometric**: star-and-polygon tessellations (6/8/10/12-fold), strapwork lines weaving over-under, infinite non-figurative fields
- **Celtic interlace**: continuous knotwork ribbons crossing alternately over and under, spiral and key patterns, illuminated-manuscript borders
- **Damask/arabesque**: symmetric scrolling foliage in tone-on-tone, the wallpaper/luxury-textile register

## Dials

- **construction honesty** — each tradition has real rules: Islamic patterns from polygon grids and angle families (the girih method — 36°/72° families for 10-fold); Celtic knots from grid-plotted paths with strictly *alternating* over-under crossings (one wrong crossing breaks the spell); damask from mirrored S-scroll skeletons; eyeballed imitations read instantly as clip-art
- **the over-under law** (interlace) — strapwork and knot ribbons alternate crossings without exception; rendered via gaps in the underpath at each crossing ([[border-stroke]] gap-ring logic) plus optional shading
- **symmetry group** — the tiling's wallpaper group is the pattern's identity: pick the fold (4/6/8/12-fold rotational, mirror lines) and the construction follows ([[kaleidoscope]]'s symmetry machinery is the generator)
- **density & scale** — border ornament (a band framing content — the deployable register), field ornament (allover ground at low contrast — [[material-texture]] duty), or medallion (a single centered construction — [[radial-orbital]] geometry as ornament)
- **tone discipline** — the usable registers are tone-on-tone (damask: pattern 4-8% from ground — [[color-roles]] surface-shift subtlety) or line-on-ground (geometric/knot strapwork in one ink); full-color ornament is the museum register, not the UI one
- **cultural respect** — these are living traditions with sacred and regional contexts; use as pattern craft with correct construction and naming, not as exotic garnish — and verify context when the product touches the cultures involved

## Techniques

- **Islamic construction (SVG/canvas)** — polygon grid → inscribed
  star lines → extend to strapwork; or the shortcut: one correctly
  constructed tile unit + the symmetry group's transforms
  ([[kaleidoscope]] fold code reused as a tiler).
- **Celtic knot generators** — grid-based plotting (walls block
  crossings, paths wrap) is a classic algorithm; libraries and
  reference implementations exist (search); over-under via masked
  gaps at crossings.
- **Damask** — one mirrored S-scroll motif as an SVG `<pattern>` in
  tone-on-tone; luxury registers add [[velvet-plush]] or
  [[specular-metallic]] foil treatments.
- **GLSL fields** — tile-unit + fold in a fragment shader for infinite
  animated grounds ([[sdf-rendering]] domain-repeat +
  [[kaleidoscope]]).

## Search queries

- `girih islamic geometric pattern construction`
- `celtic knot generator algorithm grid`
- `damask svg pattern tone on tone`
- `wallpaper group symmetry pattern tiling`

## Related

[[kaleidoscope]] (the symmetry engine), [[generative-art]] (fellow
rule-built pattern craft), [[border-stroke]] (over-under gaps),
[[material-texture]] (field-ornament duty), [[stained-glass]] +
[[art-nouveau]] (ornament siblings), [[art-deco]] (the modernist
ornament system), [[cartographic-style]] (fellow convention-bound
craft), [[radial-orbital]] (medallion geometry), [[sdf-rendering]]
(shader tiling).
