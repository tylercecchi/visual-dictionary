---
name: holographic-foil
title: Holographic Foil (Diffraction Iridescence)
summary: "rainbow bands that sweep with tilt; holo stickers, trading cards, foil packaging"
category: surface-and-material
aliases: [holographic, holographic iridescence, holo, holo foil, holographic foil, hologram, holograms, hologram sticker, holo sticker, holo card, holographic card, trading card shine, rainbow foil, prismatic foil, diffraction, diffraction grating, laser foil, foil stamp, foil stamping, cd rainbow, y2k holographic, holographic gradient, foil card]
media: [css, svg, webgl]
---

# Holographic Foil (Diffraction Iridescence)

A surface that splits light into saturated rainbow bands that sweep
across it as the viewer or light moves, as on holo stickers, trading
cards, foil packaging and the back of a CD. It comes from diffraction
(fine grooves), which is why it's bandier and more saturated than the
soft thin-film colours of soap bubbles and oil.

## You know it when you see

- Hard-edged rainbow stripes that slide across the surface when you tilt
- Patterns inside the foil: sparkles, stars, linear or radial grooves,
  "cracked ice"
- A bright white glint riding with the rainbow
- Colour that reads metallic: the rainbow sits on silver, not on paint
- The failure: a static rainbow gradient. Without motion against tilt
  or pointer it looks like a sticker of a rainbow, not foil

## Dials

- **band frequency**: few broad bands (premium) vs many fine stripes
  (cheap holo, glitter)
- **saturation & spectral order**: full spectrum vs a narrowed palette
  (pastel holo, gold-pink); diffraction repeats the spectrum in order
- **pattern**: linear grooves, radial (CD), sparkle grain, star/shape
  emboss, cracked ice. The pattern is the texture under the colour
- **response**: how far the bands travel per degree of tilt or pixel of
  pointer; plus glare position following the light
- **coverage**: full card, a foil stamp on type or logo only, or an
  edge/border foil. Restraint reads premium
- **base metal**: silver (classic), gold, or clear holo over the art

## Techniques

- **CSS layered gradients**: a `repeating-linear-gradient` rainbow plus a
  noise/sparkle image, blended with `color-dodge`/`overlay`/`soft-light`
  over a silver base, with `background-position` driven by pointer or
  device tilt via a custom property. That's the standard holo-card recipe.
- **Tilt**: `transform: perspective() rotateX/Y` from pointer position
  ([[hover-response]]), the same variables shifting the gradient and a
  radial glare highlight.
- **Masking**: `mask-image` to confine foil to a logo or text for foil
  stamping.
- **WebGL**: compute a view-angle term per pixel (normal map + light/view
  vectors) and map it through a spectral ramp; adds real groove
  directions and sparkle. Use it for 3D objects or many cards.
- **Reduced motion / no tilt**: freeze at one attractive band position;
  respect `prefers-reduced-motion` on device-orientation effects.

## Starting points

- design.how Vault — [Holo](https://github.com/arla6ka/design.how/tree/main/vault/holo)
  (tilting ID card with sliding foil; MIT; see LIBRARIES.md)
- simeydotme's "Pokémon cards CSS" holo effects: the canonical CSS recipe set

## Search queries

- `holographic card css effect pointer tilt`
- `css holo foil repeating-linear-gradient color-dodge`
- `holographic shader diffraction webgl`
- `foil stamp effect css mask`
- `device orientation tilt card effect`

## Related

[[iridescence]] (thin-film colour: softer, oily, the other rainbow),
[[lenticular]] (images that change with angle), [[specular-metallic]]
(the base metal), [[shimmer-sheen]] (a moving highlight without
spectrum), [[stickers-badges]] (holo stickers), [[hover-response]]
(the tilt), [[prism-dispersion]].
