---
name: morphing
title: Morphing / Shape Interpolation
category: motion
aliases: [shape morph, blob morph, svg morph, transform between shapes, shapeshifting, tweening paths, icon morph, crossfade]
media: [css, svg, canvas, webgl]
---

# Morphing / Shape Interpolation

One shape becoming another — an icon flowing into its next state, a blob
retargeting, a logo dissolving into a menu. Continuity where a cut would do.

## You know it when you see

- A play icon bending into a pause icon rather than swapping
- Blobs continuously reshaping between organic silhouettes
- Page elements that stretch into their next-layout position (shared element)
- Text or logos liquefying between states

## Dials

- **correspondence** — which point of shape A goes to which of shape B; good morphs come from matched point counts/topology, bad ones tangle and self-intersect
- **in-between quality** — does the midpoint look like a *shape* or like noise; the test of correspondence
- **timing & overshoot** — morphs read best slightly slower than moves, with [[motion-ceremony]] easing; springy morphs = gooey personality
- **topology changes** — one shape into two (splits/merges) needs gooey ([[liquid-ripple]]) or SDF techniques, not path interpolation
- **fallback** — a crossfade or scale-swap is honest when a true morph would tangle

## Techniques

- **SVG path interpolation** — normalize both paths to equal point counts,
  interpolate. Libraries (flubber-class, GSAP MorphSVG, polymorph) handle
  correspondence — never hand-roll it. Right for icons, logos, illustrations.
- **CSS `clip-path` / `d:` transitions** — animatable when point counts
  already match; cheapest morph for simple geometry. `clip-path` morphs crop
  content — a different, useful effect (reveal-morph).
- **SDF blending (GLSL)** — `mix()` two distance fields; handles splits and
  merges gracefully, no correspondence problem at all. The right choice for
  blobs and canvas shapes ([[sdf-rendering]]).
- **Threshold-field morph (heightfield metaballs)** — cheaper cousin of SDF
  blending: `mix()` two density heightfields and `smoothstep`-threshold the
  result; liquid coalescence (necks pinching, blobs merging) emerges from
  the field arithmetic. Any raster works as a field — notably *blurred text
  alpha*, giving "liquid coagulates into a word" morphs; shade depth/rim/
  specular from the same field's gradient so both states read as one
  substance. Damp a domain-warp wobble by morph progress for molten→set.
  Reference implementation: coffeex3 `src/orders/spillShader.ts`.
- **Shared-element / FLIP** — for *layout* morphing (card → page): animate
  position/scale of the same element between layouts; View Transitions API or
  framer-motion `layoutId`.
- **Mesh/texture morph (WebGL)** — vertex blending between geometries, or
  displacement-driven dissolves for imagery.

## Starting points

- flubber (npm) — the shape-correspondence standard (check maintenance)
- GSAP MorphSVG (paid) — the polished commercial option
- framer-motion `layoutId` / View Transitions API for layout morphs
- Shadertoy: search "sdf morph shape blend"

## Search queries

- `flubber svg shape interpolation npm`
- `view transitions api shared element morph`
- `glsl sdf shape morph mix smoothstep`
- `css clip-path polygon transition morph`

## Related

[[motion-ceremony]] (morphs are ceremony spent on continuity),
[[liquid-ripple]] (gooey handles topology), [[sdf-rendering]] (the
correspondence-free engine), [[shape-language]] (morph style must match the
geometry's personality), [[glitch]] (the anti-morph: cut violently instead).
