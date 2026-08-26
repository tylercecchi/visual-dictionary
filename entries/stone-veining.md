---
name: stone-veining
title: Marble / Stone Veining
category: surface-and-material
aliases: [marble, veined stone, granite, onyx, malachite, agate, marbled paper, suminagashi, luxury stone, marble texture, terrazzo]
media: [css, canvas, webgl]
---

# Marble / Stone Veining

Mineral flow frozen in surface — marble's branching veins, agate's banded
rings, malachite's green swirls, and the paper-marbling arts that imitate
them. The luxury-material register: geology as ornament.

## You know it when you see

- White/cream fields crossed by branching gray-gold veins (carrara/calacatta marble)
- Concentric irregular bands (agate, onyx — often backlit like [[stained-glass]])
- Swirled ink-on-water patterns (marbled paper, suminagashi endpapers)
- Terrazzo: colored chips scattered in a cement field
- Luxury contexts: bathroom-showroom heroes, cosmetic branding, dark onyx with gold ([[color-roles]]: the black-gold-cream luxury triad)

## Dials

- **vein character** — the identity dial: fine hairline nets (carrara) vs bold dramatic rivers (calacatta) vs tight parallel bands (onyx); vein *branching* and thickness variation along the run separate real from procedural-looking
- **flow field coherence** — veins follow the stone's ancient flow: all features share one warped directional field ([[procedural-noise]] domain-warping — the vein pattern is literally warped fBm ridges); incoherent directions read as scribbles
- **polish level** — honed matte (soft, [[material-texture]] register) vs mirror-polished (sharp [[reflections]]/[[specular-metallic]] sheen + [[light-on-flat]] hotspot; depth below the polish — slight internal [[parallax]]/subsurface glow in onyx)
- **palette mineralogy** — each stone is a locked palette: carrara (white/gray), calacatta (white/gold-gray), nero marquina (black/white), malachite (banded greens), agate (translucent ambers); inventing palettes is fine but naming a stone loads one
- **scale honesty** — vein frequency vs the surface size: countertop-scale veins on a button reads as noise; crop as if cut from a large slab

## Techniques

- **Domain-warped ridge noise (GLSL)** — the marble formula:
  `veins = pow(1 - abs(sin(warped_fbm)), k)` — ridged noise through heavy
  domain warping, thresholded into vein masks over a field color; two
  octave-scales (major rivers + hairline net) layered. The
  [[procedural-noise]] entry's domain-warping put to its most famous use.
- **CSS approximation** — layered `radial-/linear-gradient`s can fake soft
  marble washes but not credible veins; use a (build-time generated or
  photographed) texture image for real marble in DOM, with
  [[image-treatment]] rules for cropping slabs.
- **Marbled paper (canvas)** — the simulation register: drop colors into a
  2D flow and comb it (velocity field + advection — [[fire-smoke]]'s fluid
  machinery at viscous settings); suminagashi = concentric drops + gentle
  perturbation. Interactive marbling is a beloved showpiece.
- **Terrazzo (canvas/SVG)** — scattered polygon chips (random convex
  shapes, 3-5 chip colors) in a field, non-overlapping via simple rejection;
  a flat, friendly cousin ([[mosaic-tile]]'s field register with organic
  chips).
- **Backlit onyx (three.js)** — banded noise as both color and
  transmission map on a lit slab; the luxury-hotel-wall effect
  ([[stained-glass]] physics, stone palette).

## Starting points

- Shadertoy: search "marble", "agate" — domain-warp formulas to port
- Real slab libraries (stone suppliers' galleries) for vein reference by name
- Paper-marbling / suminagashi demos (searchable canvas implementations)

## Search queries

- `glsl marble veins domain warping ridged noise`
- `canvas paper marbling simulation comb advection`
- `terrazzo pattern generator svg chips`
- `calacatta carrara vein reference difference`

## Related

[[procedural-noise]] (domain warping is the engine), [[fire-smoke]] (fluid
machinery for marbling), [[mosaic-tile]] (terrazzo kinship),
[[stained-glass]] (backlit onyx), [[specular-metallic]] + [[light-on-flat]]
(polish), [[material-texture]] (the honed register), [[image-treatment]]
(slab cropping), [[color-roles]] (luxury triads).
