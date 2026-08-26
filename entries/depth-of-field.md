---
name: depth-of-field
title: Depth of Field / Tilt-Shift
category: light-and-depth
aliases: [dof, bokeh, background blur, tilt-shift, miniature effect, focus, shallow depth, out of focus, lens blur]
media: [css, canvas, webgl]
---

# Depth of Field / Tilt-Shift

Sharpness reserved for one plane — everything nearer or farther dissolves
into blur, as a camera lens focuses. The strongest "look here" cue photography
owns.

## You know it when you see

- A crisp subject floating in front of a creamy blurred background
- Bright out-of-focus points swelling into soft discs (bokeh)
- Tilt-shift: a real scene blurred top-and-bottom so it reads as a miniature
- Focus *pulling* — sharpness sliding from one subject to another

## Dials

- **focal distance & range** — where the sharp plane sits and how deep it is
- **blur strength (aperture)** — subtle separation vs heavy dreamy melt
- **bokeh character** — gaussian smear (cheap) vs disc/hexagon highlights (lens-real); highlight overbrightening is what sells it
- **falloff** — how fast blur ramps away from the focal plane (tilt-shift = linear gradient falloff, not depth-based)
- **animation** — static (composition) vs focus pulls ([[motion-ceremony]] moment)

## Techniques

- **Layered CSS blur** — content split into planes, `filter: blur()` on the
  non-focal layers (hero art, illustration stacks). Right whenever content is
  already layered; combine with [[parallax]].
- **Tilt-shift via mask** — blur the copy, mask it in with a linear gradient
  so the middle band stays sharp. CSS `mask-image` or one small shader.
- **Depth-based blur (GLSL)** — blur radius from a depth buffer per pixel;
  `postprocessing` ships DoF/bokeh effects for three.js — the right choice in
  3D scenes.
- **Bokeh sprites** — for the *background itself*: draw blurred disc
  [[particles]] instead of blurring content; cheap and art-directable.

## Starting points

- `postprocessing` (pmndrs) `DepthOfFieldEffect` — current standard for R3F/three.js
- Shadertoy: search "bokeh dof" (gather-based single-pass versions)
- CSS layer-blur needs no library

## Search queries

- `three.js postprocessing DepthOfFieldEffect bokeh`
- `css tilt shift gradient mask blur`
- `glsl depth of field circle of confusion`
- `bokeh particles background canvas`

## Related

[[visual-hierarchy]] (DoF is hierarchy via optics), [[frosted-glass]]
(blur as material vs blur as optics), [[vignette]] (the other lens-borrowed
focus cue), [[parallax]] (layered planes serve both), [[glow-bloom]]
(bokeh highlights are bloom's cousins).
