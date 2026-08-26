---
name: concrete-plaster
title: Concrete / Plaster
category: surface-and-material
aliases: [concrete, cement, plaster, stucco, brutalist concrete, board formed, limewash, venetian plaster, gallery wall, raw wall, mineral surface]
media: [css, svg, canvas, webgl]
---

# Concrete / Plaster

The architectural neutrals — cast concrete's cold gray mass, plaster's soft
mineral cloud, limewash's chalky drift. The gallery-wall register: surfaces
that recede into *space* rather than decorate, lending weight and calm to
whatever sits on them.

## You know it when you see

- Backgrounds that read as walls: soft gray-beige mottling, no pattern, no gloss
- Concrete tells: formwork lines (board or panel seams), tie holes in a grid, aggregate speckle, water staining
- Plaster tells: trowel sweeps (broad soft arcs of density), hairline cracks, chalky edges
- Brutalist web design borrowing the material (not just the attitude — [[brutalism]] is the layout stance; this is the wall itself)

## Dials

**Substance**
- **material register** — cast concrete (cool, uniform, engineered — with formwork evidence) vs plaster/stucco (warm-neutral, hand-applied — with trowel evidence) vs limewash (soft, cloudy, matte-chalky, slightly translucent layers); each has different mark-making
- **tone temperature** — cold gallery gray, warm greige, or tinted mineral (terracotta stucco, pigmented concrete); large fields demand near-neutral saturation ([[color-roles]]: these are *surface* tones — a hint of hue, never a color)

**Mottle & marks**
- **mottle scale & depth** — the cloudy density variation: large soft clouds (limewash, calm) vs tighter blotch (troweled); contrast stays whisper-low (2-6% luminance) — visible mottle at UI scale reads as dirt ([[film-grain]]'s restraint law at bigger wavelengths)
- **process marks** — the authenticity layer: formwork seams and tie holes (in a real construction grid — [[grid-systems]] literally), trowel arcs (broad, directional, overlapping), hairline settlement cracks (sparse, from corners and openings — placement logic like [[weathering-patina]]'s exposure map)
- **aggregate & pore speckle** — fine dark/light pinpricks and tiny air pores; density and size set rawness (polished concrete = almost none, raw cast = visible)

**Light response**
- **matte law** — near-zero specular; depth comes from the mottle and from *lighting the wall* ([[light-on-flat]]: a soft gradient wash or [[gobo-shadows]] across the surface is what makes it read as architecture rather than flat fill)
- **relief shadows** — seams, holes, and cracks carry tiny shadow/highlight pairs ([[ambient-occlusion]] at millimeter scale); without relief cues the marks read as printed-on

## Techniques

- **CSS layered mottle** — 2-3 stacked large `radial-gradient`s at
  whisper opacity over the base tone + an [[film-grain]] speckle layer +
  an overall [[light-on-flat]] wash gradient; the gallery wall in ~10
  lines, no assets
- **SVG turbulence plaster** — low-frequency `feTurbulence`
  (`fractalNoise`, 1-2 octaves) as the mottle, optionally
  `feDiffuseLighting` for true troweled relief (the [[material-texture]]
  paper recipe at wall scale)
- **Formwork/detail layer** — seams as hairline gradients on the
  construction grid, tie holes as tiny radial-gradient dimples with
  offset highlight; crack paths as 1px SVG polylines with paired
  light/dark strokes
- **Texture photography** — real concrete/plaster tiles (CC0 sources)
  color-graded to token tone ([[image-treatment]] discipline), seamless,
  2x; often the pragmatic route for hero walls
- **GLSL/three.js** — fBm mottle + speckle + normal-mapped seams/pores
  ([[procedural-noise]]); architectural scenes get real lighting response
  and [[gobo-shadows]] for free

## Search queries

- `css subtle concrete texture gradients noise`
- `svg feTurbulence feDiffuseLighting plaster`
- `board formed concrete seams reference`
- `limewash texture background web`
- `cc0 concrete texture seamless`

## Related

[[material-texture]] (the family; this is its architectural wing),
[[light-on-flat]] + [[gobo-shadows]] (what makes walls read as walls),
[[film-grain]] (speckle restraint law), [[weathering-patina]] (staining
and age), [[brutalism]] (the attitude this material grounds),
[[grid-systems]] (formwork grids), [[stone-veining]] (the luxury mineral
sibling), [[ambient-occlusion]] (relief shadows), [[scene-staging]]
(limbo walls and cycloramas).
