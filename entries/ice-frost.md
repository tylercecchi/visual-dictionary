---
name: ice-frost
title: Ice / Frost
category: surface-and-material
aliases: [frozen, frost, icicles, frozen glass, ice crystals, frosted window, winter effect, freeze, crystallize, frozen over]
media: [css, svg, canvas, webgl]
---

# Ice / Frost

Water's solid vocabulary — feathery frost crystals creeping across glass,
thick ice with cracks and trapped depth, icicles and freeze-over moments.
Distinct from [[frosted-glass]] (which borrowed the name for plain blur):
this is *cold* as a material, with crystal structure.

## You know it when you see

- Fern-like crystal feathers growing from edges and corners of a "window"
- Thick ice: blue-white translucency, internal cracks catching light, depth below the surface
- Freeze-over as an event: frost racing across a surface, color desaturating toward blue as it goes
- Icicles, snow caps, and the glassy-hard specular of frozen surfaces

## Dials

- **frost coverage & growth pattern** — edge-in creep (windows frost from borders), dendritic feathers (branching, the beautiful register) vs granular haze (fine crystals, plainer); animated growth = the freeze event
- **ice depth** — surface frost (opaque-ish white lace over content) vs deep ice (content visible *through* blue-tinted thickness with [[refraction-displacement]] and internal cracks at different depths — parallax between crack layers sells thickness)
- **crack language** — branching fractures (bright when light-catching), trapped bubbles, shatter webs on impact ([[voronoi-cellular]] shard geometry); cracks are ice's [[border-stroke]]
- **temperature grade** — the freeze recolors: desaturate + blue-shift + brighten highlights ([[duotone-gradient-map]] with an ice ramp); warm content behind cold surface is the classic contrast
- **specular hardness** — frost is matte-sparkly (glint [[particles]] at crystal scale), solid ice is glassy ([[specular-metallic]] tight hotspots + fresnel edge brightness)

## Techniques

- **Frost overlay (CSS/SVG)** — `feTurbulence`-shaped white lace masked to
  edges (border-heavy gradient mask), over a `backdrop-filter: blur`
  ([[frosted-glass]] as the base layer + crystal lace as the identity
  layer); static but convincing for UI "frozen" states.
- **Dendritic growth (canvas)** — branching random walks from edge seeds
  (DLA — diffusion-limited aggregation — or L-system ferns) drawn as fine
  white strokes with glint dots; animate by revealing along growth order —
  the freeze-over showpiece.
- **GLSL ice material** — blue-tinted transmission +
  [[refraction-displacement]] via a crack/crystal normal map + fresnel rim +
  sparkle (glint hash at high frequency); three.js transmission materials
  with a frost roughness map for the 3D register.
- **Crack systems** — [[voronoi-cellular]] edges as fracture webs (impact
  = radial + concentric voronoi bias), brightened where "light" crosses
  them; layered at 2-3 depths with slight [[parallax]] offsets.
- **Freeze event** — a progress-driven composite: frost mask grows
  ([[dissolve-disintegration]]'s threshold machinery, inverted — accreting
  instead of destroying) + temperature grade sweeps + audio-visual crackle
  moments ([[motion-ceremony]] stepped, not smooth).

## Starting points

- DLA / dendritic growth references (searchable algorithms; short
  implementations)
- Shadertoy: search "frost", "ice", "frozen glass"
- three.js transmission + roughness-map ice examples

## Search queries

- `diffusion limited aggregation frost canvas`
- `glsl ice shader fresnel cracks refraction`
- `svg feTurbulence frost overlay window`
- `frozen glass effect webgl normal map`

## Related

[[frosted-glass]] (the blur base this crystallizes on), [[voronoi-cellular]]
(cracks and shatter), [[refraction-displacement]] (depth distortion),
[[specular-metallic]] (glassy hotspots), [[weather-effects]] (winter's
sibling: snow falls, frost *grows*), [[duotone-gradient-map]] (the cold
grade), [[dissolve-disintegration]] (accretion machinery reversed),
[[caustics]] (light through thick ice), [[seasonal-theming]] (the December
deployment).
