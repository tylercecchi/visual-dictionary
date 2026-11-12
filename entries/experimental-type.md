---
name: experimental-type
title: Experimental Typography
summary: "letterforms pushed past convention: distorted, stretched, broken, overlapped, custom"
category: wardrobe
aliases: [experimental type, experimental typography, experimental typeface, expressive typography, expressive type, distorted type, distorted typography, warped type, stretched type, squashed type, liquid type, melted type, broken type, glitch type, anti-legibility, illegible type, variable font experiments, custom letterforms, acid type, acid graphics, y2k type, brutal type, typographic experiments, type distortion, deconstructed letters]
media: [css, svg, canvas, webgl]
---

# Experimental Typography

Letterforms treated as raw material rather than a fixed font: stretched,
squashed, warped, sliced, overlapped, built from scratch, or pushed along
variable-font axes past their intended range. Legibility is a dial you
trade deliberately. Where [[type-composition]] is about type as the
*layout*, and [[kinetic-type]] is type in *motion*, this entry is about
changing the letters themselves.

## You know it when you see

- Headlines stretched tall or crushed flat far beyond normal widths
- Letters melting, bending, or warped along a curve or field
- Glyphs sliced, offset, outlined and filled, or overlapping each other
- Custom or modular letterforms (built from shapes, pixels, lines)
- Variable fonts pushed to extreme weight/width/slant, often animated
- The failure: distortion everywhere. Experimental type works on a few
  words at display size, with plain type doing the reading

## Dials

- **legibility budget**: how much of the word may be lost. Display words
  can go far; navigation, buttons and body text must stay readable
- **distortion kind**: scale (stretch/squash), geometric (shear, curve,
  perspective), field (warp, liquify, wave), cut (slice, offset, mask),
  construct (modular, custom glyphs)
- **source**: an existing font distorted vs custom letterforms vs a
  variable font driven past normal settings
- **contrast with system type**: experimental display against a very
  plain text face makes both stronger ([[typographic-voice]])
- **motion**: static vs animated distortion; tie animation to scroll or
  pointer, and respect reduced motion
- **colour & surface**: flat, outlined (`-webkit-text-stroke`), chrome,
  gradient, or textured fills ([[liquid-metal]], [[dirty-gradients]])

## Techniques

- **CSS**: `transform: scale(x, y)` per word or letter for
  stretch/squash; `font-variation-settings` for variable axes (`wght`,
  `wdth`, `slnt`, custom axes); `-webkit-text-stroke` for outlines;
  `clip-path` and duplicated layers for slice and offset effects.
- **Per-letter control**: split text into spans (SplitType) to set each
  glyph's size, axis value, rotation or offset; keep an `aria-label` with
  the real text.
- **SVG**: `<textPath>` for type on curves; `feDisplacementMap` +
  `feTurbulence` for warps and melts; text converted to paths for
  hand-editing.
- **Canvas/WebGL**: render text to a texture and distort it in a shader
  (wave fields, liquify, pixel sorting); needed for true field
  distortion and real-time interaction.
- **Accessibility**: real, selectable text underneath or in an
  `aria-label`; never put essential information only in distorted glyphs.

## Starting points

- design.how Vault kinetic-type family (Warp type, Swing type, Wild type,
  Spike type…): many are distortion recipes; see LIBRARIES.md
- Variable font playgrounds (v-fonts.com, Google Fonts axes)

## Search queries

- `experimental typography css variable font animation`
- `text distortion shader webgl`
- `svg text displacement map warp`
- `stretched type css transform scale`
- `split text per letter animation`

## Related

[[type-composition]] (type as layout), [[kinetic-type]] (type in
motion), [[knockout-typography]], [[typographic-voice]],
[[eighties-editorial]] (an origin of deconstructed type), [[glitch]],
[[ransom-note-type]], [[liquid-metal]].
