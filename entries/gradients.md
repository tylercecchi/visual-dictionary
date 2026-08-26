---
name: gradients
title: Gradients
category: color-and-tone
aliases: [linear gradient, radial gradient, conic gradient, color ramp, fade, ombre, gradient banding, gradient text]
media: [css, svg, canvas, webgl]
---

# Gradients

The fundamentals of color-in-transition — direction, stops, interpolation
space, and the craft details (easing, banding) that separate a considered
gradient from a default one. The primitive under half this dictionary.

## You know it when you see

- Any smooth passage from one color to another: fades, ombre, sunset ramps
- Gradient-filled text and icon accents
- Conic color wheels and pie-like sweeps
- The failures: gray dead-zones mid-gradient, visible banding stripes, the "default blue-purple" that says template

## Dials

- **geometry** — linear (directional statement), radial (focal/lighting), conic (rotation/progress); the geometry should mean something
- **interpolation space** — sRGB (default; muddy gray middles between saturated hues) vs OKLCH/LAB (clean vivid paths — modern CSS: `in oklch`); *the* upgrade most gradients need
- **stop easing** — evenly-spaced stops read mechanical; easing the midpoints (or multi-stop approximations of a curve) reads photographic — critical for fade-to-transparent scrims
- **hue path** — short vs long way around the wheel (`longer hue` in CSS); through-white vs through-color
- **banding control** — smooth ramps on dark backgrounds band visibly; [[film-grain]]/dither on top is the fix

## Techniques

- **CSS gradients** — `linear-/radial-/conic-gradient()`, now with color
  space control (`in oklch`, `longer hue` — verify support for targets).
  Layer multiple gradients in one `background` for complex fields.
- **Eased fades** — approximate an ease curve with 4-6 stops of decreasing
  alpha instead of two stops; the "smooth scrim" pattern under text on images.
- **Gradient text/borders** — `background-clip: text`; borders via nested
  backgrounds or `border-image` ([[border-stroke]]).
- **SVG gradients** — per-shape control, `gradientTransform` animation, and
  mesh-adjacent tricks via multiple overlapping gradients.
- **GLSL ramps** — `mix()` in the space of your choice (convert to OKLab in
  shader for clean paths), or 1D ramp textures ([[duotone-gradient-map]]).

## Starting points

- No library — this is a craft entry
- OKLCH gradient tools and easing-gradient generators (searchable; churn)
- Josh Comeau's gradient generator — eased stops + color-space comparison

## Search queries

- `css gradient in oklch interpolation support`
- `easing gradient smooth scrim stops`
- `gradient banding dither noise fix`
- `css conic-gradient longer hue`

## Related

The primitive beneath [[mesh-gradient]] (freeform fields),
[[duotone-gradient-map]] (ramps applied to imagery), [[vignette]] (radial
darkening), [[glow-bloom]] (radial light), [[color-roles]] (gradients must
obey the palette), [[film-grain]] (banding medicine).
