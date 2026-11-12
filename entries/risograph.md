---
name: risograph
title: Risograph
summary: "spot-ink stencil print: fluorescent inks, overprint mixes, grain, loose registration"
category: color-and-tone
aliases: [risograph, riso, riso print, riso printing, riso style, risograph print, risograph style, risograph poster, fluorescent pink, fluo pink, spot color print, spot colour print, two color print, two colour print, overprint, overprinting, soy ink print, stencil duplicator, riso zine, riso grain]
media: [css, svg, canvas, webgl]
---

# Risograph

The look of the stencil duplicator: images built from two or three
spot inks printed one drum at a time, so colours mix only where layers
overlap, flats carry grain, and each layer sits slightly off from the next.

## You know it when you see

- Fluorescent pink and bright blue (or teal, yellow, green) making a
  purple or deep tone wherever they overlap
- Flat areas that aren't flat: speckle, uneven coverage, grain like
  pressed powder
- Layers a millimetre off each other, leaving thin slivers of paper or a
  third colour at edges
- Uncoated, off-white paper showing through the lighter tones
- The failure: smooth gradients and full-colour photos with a pink tint
  on top. Riso builds tone from halftone dots or grain in each ink, never
  from blended colour

## Dials

- **ink set**: 2-3 spot inks from the real riso palette (fluorescent
  pink, blue, yellow, teal, black, red, green). Every colour in the piece
  must be an ink, a tint of one, or an overprint of two
- **overprint mixing**: multiply blend between layers; pink × blue →
  violet is the classic. Decide which pairs touch
- **tone method**: per-ink halftone dots or grain dither ([[halftone]],
  [[dithering]]); coarse reads handmade, fine reads polished
- **registration drift**: offset per layer, 0.5-3px at screen scale;
  vary slightly per element for the hand-fed feel
- **grain & coverage**: speckle density, edge roughness, faint banding in
  big solids
- **paper**: warm off-white ground with faint fibre ([[material-texture]]);
  pure white looks like a screen
- **restraint**: riso reads best on illustration, type, and posters, and
  worst on dense UI chrome

## Techniques

- **CSS blend layers**: separate each ink into its own layer (SVG or
  image, one colour), stack with `mix-blend-mode: multiply` on a paper
  background, nudge each layer with `transform` for registration. Grain
  via an SVG `feTurbulence` mask on each layer.
- **SVG filters**: `feTurbulence` + `feColorMatrix` + `feComposite` for
  grainy fills; `feDisplacementMap` for rough edges.
- **Canvas/WebGL separation**: split an image into ink channels
  (luminance or chosen hues → per-ink density), halftone or dither each,
  composite with multiply, add per-layer offset and grain. This is the
  right path for photos.
- **Stay in-gamut**: fluorescent pink and some inks exceed sRGB; use
  `color(display-p3 …)` with an sRGB fallback for punch.

## Starting points

- Risograph ink colour charts (official and community hex/P3 lists)
- Spectrolite: desktop app for previewing riso separations
- design.how Vault — [Spray burst](https://github.com/arla6ka/design.how/tree/main/vault/spray-burst)
  (screenprint with boiling dot edges; MIT; see LIBRARIES.md)

## Search queries

- `risograph effect css mix-blend-mode multiply`
- `riso ink colors hex fluorescent pink`
- `risograph shader halftone separation webgl`
- `svg grain texture feTurbulence print`
- `spectrolite risograph`

## Related

[[print-artifacts]] (the wider photocopy/zine family), [[halftone]]
and [[dithering]] (how each ink makes tone), [[duotone-gradient-map]]
(two-ink colour mapping), [[material-texture]] (paper), [[film-grain]],
[[knockout-typography]], [[paper-ephemera]].
