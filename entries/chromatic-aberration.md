---
name: chromatic-aberration
title: Chromatic Aberration
category: distortion-and-lens
aliases: [rgb split, color fringing, rgb shift, glitch colors, prism edges, lens fringe, colors splitting at the edges]
media: [css, svg, canvas, webgl]
---

# Chromatic Aberration

The red, green, and blue channels of an image displaced from each other, as a
cheap lens splits colors — red/cyan or rainbow fringes at edges.

## You know it when you see

- Colored fringes (usually red one side, cyan/blue the other) along high-contrast edges
- "The colors split apart" — text or shapes with offset RGB ghosts
- Glitch/VHS/analog-video vibes when the offset is large
- Lens realism when the offset is subtle and grows toward the frame edges

## Dials

- **offset distance** — subtle (lens realism) vs large (glitch aesthetic)
- **direction** — linear shift (glitch) vs radial from center (lens; zero at center, max at corners)
- **channels** — classic R vs B split, or all three at 120° for rainbow fringing
- **animation** — static (lens) vs jittering offsets (glitch, often gated by [[procedural-noise]])

## Techniques

- **CSS stacked copies** — layer the element twice with
  `mix-blend-mode: screen`, tint one red one cyan, offset with transforms.
  Right for text/logo treatments; needs duplicated DOM.
- **SVG `feOffset` per channel + `feComposite`/`feBlend`** — split channels
  with `feColorMatrix`, offset each, recombine. Right for filterable images
  without a canvas.
- **Canvas 2D `globalCompositeOperation: 'screen'`** — draw the image thrice
  with channel tints and offsets.
- **GLSL: three samples per fragment** — sample the texture at `uv`,
  `uv ± offset`, take `.r`, `.g`, `.b` from each. Radial: scale offset by
  `uv - 0.5`. The right choice whenever a shader pipeline exists; near-free.

## Starting points

- `postprocessing` (pmndrs) `ChromaticAberrationEffect` for three.js
- Shadertoy: search "chromatic aberration" — the 3-sample pattern is ~5 lines
- gl-transitions and glfx.js contain reference implementations

## Search queries

- `glsl chromatic aberration radial fragment shader`
- `three.js postprocessing chromatic aberration`
- `css rgb split text effect mix-blend-mode`

## Related

[[refraction-displacement]] (real glass shows aberration at refracting edges —
combine them), [[liquid-ripple]] (aberration in the displaced zone sells the
liquid), [[film-grain]] (co-star of the analog/VHS look).
