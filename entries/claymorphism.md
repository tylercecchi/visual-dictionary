---
name: claymorphism
title: Claymorphism
summary: "soft, puffy 3D clay UI: pastel fills, big radii, inner highlight + inner shade"
category: surface-and-material
aliases: [claymorphism, clay morphism, clay ui, clay style, clay buttons, clay cards, claymorphic, 3d clay, clay 3d, clay render, plasticine, play doh, play-doh, soft 3d ui, puffy ui, chunky 3d icons, toy-like ui, squishy cards]
media: [css, svg, webgl]
---

# Claymorphism

A UI surface style that makes cards and buttons look moulded from soft
clay: rounded, slightly puffed, pastel, lit by a soft light, with a
highlight on the upper inner edge and a shaded lower inner edge. It
usually comes with chunky 3D clay icons and illustrations.

## You know it when you see

- Cards that look like soft pillows of colour floating over the
  background, with a big soft drop shadow beneath
- Inner glow along the top-left edge and an inner shade along the
  bottom-right, so the surface bulges
- Pastel or candy fills, very large corner radii, chunky rounded type
- 3D clay-rendered icons and characters (matte, slightly lumpy)
- The failure vs [[skeuomorphism]]'s neumorphism: neumorphism extrudes
  from a background of the *same* colour (low contrast, hard to read);
  clay floats *coloured* objects above the background, so it keeps
  contrast

## Dials

- **puff**: strength of the two inner shadows (highlight + shade). Low
  is a gentle cushion; high is an inflated toy
- **float**: outer shadow offset, blur and tint (tinted with the fill
  colour reads softer than grey)
- **radius**: 24-40px on cards; pill buttons; nothing sharp
- **palette**: pastels or saturated candy on a light ground; keep text
  surfaces light enough for contrast ([[color-roles]])
- **render coherence**: one light direction for every inner shadow,
  outer shadow and 3D icon ([[light-on-flat]])
- **density cost**: each clay surface is heavy; use for cards, buttons
  and hero objects, never for every list row

## Techniques

- **CSS stacked shadows**: `box-shadow: <outer soft shadow>, inset -8px
  -8px 16px <shade>, inset 8px 8px 16px <highlight>` on a solid fill with
  a large `border-radius`. Pressed state: reduce outer float and swap the
  inset emphasis so it squashes ([[squash-and-stretch]]).
- **Tokenize the recipe**: one set of shadow tokens per elevation, so
  every surface agrees.
- **Illustrations and icons**: pre-rendered 3D clay assets (Blender,
  Spline) as images; matching them to the CSS light is the craft.
- **WebGL**: real soft-body or subsurface-lit clay objects
  ([[subsurface-scattering]]) for heroes; a structural addition.

## Starting points

- Claymorphism CSS generators (search "claymorphism generator")
- Spline / Blender for clay 3D icons
- design.how Vault — [Colour depth](https://github.com/arla6ka/design.how/tree/main/vault/color-depth)
  (object-like buttons from gradients and inset shadows; MIT)

## Search queries

- `claymorphism css box-shadow inset`
- `claymorphism generator`
- `3d clay icons pack`
- `clay render blender material tutorial`
- `claymorphism ui design examples`

## Related

[[skeuomorphism]] (its neumorphism sibling), [[inflatable]] (fully
air-filled forms), [[rubber-soft-touch]] (matte soft material),
[[cute-naive]] (the register it often serves), [[elevation]],
[[light-on-flat]], [[shape-language]] (radius), [[relief-emboss]].
