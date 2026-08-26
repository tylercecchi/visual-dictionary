---
name: vignette
title: Vignette
category: light-and-depth
aliases: [edge darkening, spotlight, framed light, faded corners, focus falloff, tunnel]
media: [css, canvas, webgl]
---

# Vignette

Darkening (or desaturating/blurring) toward the edges of a frame, pulling the
eye to the center — the oldest focus trick in photography.

## You know it when you see

- Corners of an image or scene fade toward dark
- A "spotlight" feel: center lit, surroundings receding
- Hero sections whose edges melt into the page background
- The subtle cinematic weight on graded footage

## Dials

- **strength** — imperceptible grade (~0.1) vs heavy tunnel
- **radius & feather** — where falloff starts and how soft it lands
- **roundness** — circular vs following the frame's aspect ratio
- **mode** — darken (classic), desaturate, or blur toward edges (tilt-shift feel)
- **color** — pure black vs a tinted vignette (warm = nostalgia, cool = tension)

## Techniques

- **CSS `radial-gradient` overlay** — transparent center to
  semi-opaque edges, layered over content (or as `mask-image` to fade the
  content itself into the page). Right for almost all UI/imagery.
- **CSS `box-shadow: inset`** — huge blurred inset shadow; quick, less control.
- **GLSL** — `smoothstep` on distance from center (scaled by aspect),
  multiplied into the final color. One line at the end of any shader pipeline;
  `postprocessing` ships a `VignetteEffect`.
- **Blur vignette** — CSS `backdrop-filter` rings are awkward; do edge blur in
  a shader or with a pre-blurred layer masked to the edges.

## Starting points

- No library needed in CSS
- `postprocessing` (pmndrs) `VignetteEffect` for three.js pipelines

## Search queries

- `css radial-gradient vignette overlay mask`
- `glsl vignette smoothstep aspect ratio`
- `postprocessing vignette effect three.js`

## Related

[[glow-bloom]] (its opposite: light spilling vs light receding),
[[duotone-gradient-map]] (grading companion), [[film-grain]] (the trio —
grain + grade + vignette — is the "cinematic" recipe), [[visual-hierarchy]]
(vignette is hierarchy enforced with light).
