---
name: gzhel
title: Gzhel (Blue-and-White Painted Ware)
summary: "cobalt brushwork on white; one pigment, tonal strokes, the Gzhel rose"
category: pattern-and-texture
aliases: [gzhel, gzhel pattern, gzhel style, russian blue and white, russian porcelain, blue and white, blue and white porcelain, blue and white pattern, cobalt and white, cobalt blue pattern, delft, delft blue, delftware, blue willow, qinghua, cobalt brushwork, painted porcelain pattern, folk porcelain, blue floral ornament]
media: [css, svg, canvas]
---

# Gzhel (Blue-and-White Painted Ware)

The Russian folk ceramic painting from the Gzhel region: cobalt blue on
white, painted with a loaded brush so each stroke runs from deep blue to
pale in one pass. Its signature is the stroke-built rose ("gzhel rose"),
leaves and scrolling tendrils. It belongs to the wider blue-and-white
family with Delft, Chinese qinghua and blue willow, which share the one
pigment but differ in motif.

## You know it when you see

- Pure white ground, one cobalt blue, nothing else
- Flowers built from fat, teardrop brush strokes that fade from dark to
  light within the stroke
- Thin scrolling lines, dotted borders, mesh or lattice bands around rims
- Ornament that wraps a form (plate rim, teapot body) rather than sitting
  as a flat picture
- The failure: a flat blue clip-art flower. Without the in-stroke tonal
  gradient it stops reading as brushwork

## Dials

- **tradition**: Gzhel (big tonal-stroke roses and folk scrolls), Delft
  (Dutch scenes, windmills, tiles), qinghua (Chinese landscapes, lotus,
  dragon and cloud motifs), blue willow (transfer-printed narrative).
  Name the one you mean
- **stroke tonality**: how strongly each stroke goes from saturated to
  pale; this is the Gzhel signature
- **density**: a single central bloom vs an all-over pattern vs borders only
- **blue**: deep cobalt (`#1f3fa8`-ish) to ultramarine; one blue plus its
  tints, optionally a thin dark outline
- **ground**: glossy white glaze ([[ceramic-glaze]]) for objects; flat
  white for UI patterns
- **role in UI**: border bands, dividers, an illustrative hero or empty
  state; keep text on plain white areas

## Techniques

- **SVG strokes with gradients**: each petal a path filled with a
  linear/radial gradient from cobalt to pale; compose roses from a few
  repeated petal shapes rotated around a centre. Crisp and cheap.
- **Pattern tiles**: draw a motif once and repeat it as a CSS
  `background-image` or SVG `<pattern>` for borders and all-over bands.
- **Canvas brush simulation**: stamp a soft brush along a path with
  falling opacity for a true loaded-brush stroke.
- **On 3D or glossy objects**: wrap the pattern as a texture under a
  ceramic glaze material ([[ceramic-glaze]], [[specular-metallic]] for gilding).
- **Cultural care**: treat it as a craft tradition with a name, and
  credit the tradition in copy where it's the theme.

## Starting points

- Museum collections of Gzhel, Delftware and Chinese blue-and-white
  porcelain for motif reference
- SVG pattern tools (Pattern Monster, heropatterns) for tile scaffolding

## Search queries

- `gzhel pattern vector brush stroke rose`
- `blue and white porcelain pattern svg`
- `svg petal gradient brush stroke flower`
- `delft blue tile pattern css`
- `canvas brush stroke opacity simulation`

## Related

[[ornament-traditions]] (other pattern traditions), [[ceramic-glaze]]
(the glazed surface it lives on), [[historical-ornate]],
[[illustration-style]], [[duotone-gradient-map]] (one-hue colour
systems), [[soft-aesthetics]] (folk-cosy registers that borrow it).
