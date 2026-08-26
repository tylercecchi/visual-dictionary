---
name: stained-glass
title: Stained Glass / Backlit Mosaic
category: surface-and-material
aliases: [stained glass, cathedral glass, leaded glass, backlit panels, glowing mosaic, tiffany lamp, rose window, luminous tiles, glass mosaic]
media: [css, svg, canvas, webgl]
---

# Stained Glass / Backlit Mosaic

Colored panes held in dark leading, glowing as if lit from behind — the
cathedral window's grammar: saturated translucent cells, thick dark
boundaries, and light as the material itself.

## You know it when you see

- Compositions of jewel-toned cells separated by thick dark lines (the lead came)
- Colors that *glow* — luminous saturation reading as transmitted, not reflected, light
- Cell shapes flowing with the imagery (organic panes following a figure's contours)
- Rose-window radial symmetry ([[kaleidoscope]]'s sacred register)
- Light through the panes cast onto surfaces as colored [[caustics]]/pools

## Dials

- **leading weight & color** — the dark boundary network: thick black-brown (medieval), thin copper (Tiffany); the leading *is* the drawing — its graph structure carries the image ([[toon-outline]]'s heaviest cousin)
- **pane saturation & translucency** — full jewel tones (cathedral) vs milky opalescent (Tiffany lamp); panes are never flat: within-cell [[gradients]] and mottle sell "glass"
- **cell geometry** — [[voronoi-cellular]] organic panes, geometric tracery, or figure-following contours; cell size variation (large fields + small detail cells) is the craft
- **backlight behavior** — static glow, animated light behind ([[volumetric-light]] shifting through the window, cloud passage), or interactive (cursor as sun)
- **cast light** — the colored pools the window throws on floor/content: projected blurred copy of the panes, warped and drifting ([[caustics]] tinted per-pane)

## Techniques

- **SVG panes + filters** — cells as paths (thick dark strokes = leading),
  per-cell gradient/turbulence mottle; `feTurbulence` for glass texture.
  The precise, authorable register.
- **Glow discipline** — pane fills above the ground's luminance +
  [[glow-bloom]] (blurred bright copy behind the panel) = transmitted-light
  reading on a screen that can't transmit; screen/plus-lighter blending for
  the cast pools.
- **Voronoi stained glass (canvas/GLSL)** — [[voronoi-cellular]] F2−F1
  borders as leading, cell-ID flat-or-mottled jewel colors; instant
  generative windows, image-driven when cells sample a source photo (the
  mosaic-ify filter).
- **Backlit animation** — a moving light gradient *behind* semi-transparent
  panes (SVG/CSS layers), or in GLSL a light position modulating per-cell
  brightness + a warped projected copy beneath for cast light.
- **CSS quick version** — `clip-path` cells or grid tiles with jewel
  gradients + dark thick borders + a soft outer glow; enough for icon/hero
  accents.

## Starting points

- Rose window / Tiffany reference imagery (museum digital collections)
- [[voronoi-cellular]] entry's techniques (d3-delaunay for authored SVG
  cells, GLSL worley for generative)
- Shadertoy: search "stained glass", "mosaic"

## Search queries

- `svg stained glass filter turbulence gradient cells`
- `voronoi stained glass shader cell borders`
- `backlit glass effect css glow blend`
- `d3-delaunay svg mosaic from image`

## Related

[[voronoi-cellular]] (the cell engine), [[glow-bloom]] (transmitted-light
fakery), [[caustics]] + [[volumetric-light]] (the light it casts and rides),
[[toon-outline]] (leading as ink), [[kaleidoscope]] (rose windows),
[[duotone-gradient-map]] (jewel palette discipline), [[material-texture]]
(glass mottle), [[frosted-glass]] (the modern glass sibling).
