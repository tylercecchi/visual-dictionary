---
name: dirty-gradients
title: Dirty Gradients (Grainy / Gritty / Muddied)
summary: "gradients roughed up on purpose: grain, noise, blur, muddied off-hue midtones"
category: color-and-tone
aliases: [dirty gradient, dirty gradients, grainy gradient, grainy gradients, gritty gradient, gritty gradients, noisy gradient, noise gradient, textured gradient, grain gradient, muddy gradient, muddy gradients, grungy gradient, analog gradient, risograph gradient, blurry grain, grainy blur, grainy blur effect, gradient with noise, gradient banding fix]
media: [css, svg, canvas, webgl]
---

# Dirty Gradients (Grainy / Gritty / Muddied)

Gradients deliberately roughed up: heavy grain or noise over the blend,
blurred blobs of colour, and midtones that pass through murkier,
off-hue colours instead of a clean digital ramp. The look reads analog,
printed and warm. Grain also hides the banding that clean gradients
show on screens.

## You know it when you see

- A soft colour blur with visible film-like grain across it
- Blends that dip through brownish, greyish or dusty tones between the
  bright ends
- Edges that bloom and smudge like out-of-focus light or spray paint
- Posters, album art, landing heroes, and 2020s brand backgrounds
- The failure: an *accidental* muddy blend (sRGB interpolation turning
  blue → yellow into grey). Dirty is a choice: decide where the dirt goes

## Dials

- **grain amount & size**: fine (2-4% opacity, 1px) is subtle film;
  coarse (8-15%, 2-3px) is gritty print. Keep text areas lighter
- **grain colour**: monochrome (neutral) vs chromatic noise (more analog)
- **dirt in the midtones**: interpolate in sRGB or add a desaturated
  stop for a deliberate murky pass; interpolate in `oklch` for clean
  vivid ramps. The colour-space choice is the dial
- **blur**: blurred shapes as the gradient source (blobs, light leaks)
  vs straight ramps
- **palette**: dusty or burnt tones plus one bright, or a
  near-complementary pair that muddies where it meets
- **static vs drifting**: grain re-seeded per frame (film) or fixed
  (print); animate the blur blobs slowly or not at all

## Techniques

- **CSS + SVG noise**: a gradient (or blurred blobs with
  `filter: blur()`) under an SVG `feTurbulence` noise layer (as an
  inline SVG or data-URI background) at low opacity with
  `mix-blend-mode: overlay`/`soft-light`. Cheapest and resolution-free.
- **Colour-space control**: `linear-gradient(in oklch, …)` for clean,
  `in srgb` or added desaturated stops for dirty midtones.
- **Canvas/WebGL**: noise in the fragment shader (hash or blue noise)
  added after the gradient, optionally dithered to kill banding; animated
  grain via a time-seeded hash.
- **Export once**: for static heroes, bake to a compressed image; live
  noise layers on large areas cost paint time.

## Starting points

- fffuel gggrain: grainy gradient generator
- CSS-Tricks "Grainy Gradients": the SVG `feTurbulence` recipe
- Frontend Masters blog: "Grainy Gradients"

## Search queries

- `grainy gradient css svg feturbulence`
- `noise overlay gradient mix-blend-mode`
- `gradient banding dither noise shader`
- `css gradient in oklch vs srgb muddy`
- `grainy blur background generator`

## Related

[[gradients]] (clean ramps and interpolation), [[mesh-gradient]]
(the blob source), [[film-grain]] (grain as its own layer),
[[procedural-noise]], [[dithering]] (banding control), [[risograph]]
and [[print-artifacts]] (the printed cousins), [[glow-bloom]] (light-leak blobs).
