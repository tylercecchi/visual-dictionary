---
name: relief-emboss
title: Relief / Emboss / Deboss
summary: "shapes pressed into or raised from a surface, lit along their bevel"
category: surface-and-material
aliases: [emboss, embossed, embossing, deboss, debossed, debossing, letterpress, letterpress effect, pressed in, pressed into, raised, raised letters, relief, bas relief, bevel, bevel and emboss, carved, carved text, stamped, stamp effect, blind emboss, inset text, engraved, height map, bump map, normal map]
media: [css, svg, canvas, webgl]
---

# Relief / Emboss / Deboss

Shapes or type raised from (emboss) or pressed into (deboss) a surface,
made legible by light catching one side of the bevel and shadow on the
other, with no colour change needed.

## You know it when you see

- Logos pressed into leather, plaster or paper: same colour as the ground,
  readable only from the edge lighting
- Letterpress: type bitten into thick card with a dark inner edge
- Raised UI: a button or badge that looks moulded out of the surface
- The failure: highlight and shadow lit from different directions, or a
  drop shadow pretending to be a bevel. It reads as stuck on, not pressed

## Dials

- **direction**: raised (light on top-left edge, shadow bottom-right) vs
  pressed (inverted). One light angle for the whole page ([[light-on-flat]])
- **depth**: height of the relief, which sets the contrast of the lit and
  shadowed sides
- **bevel width & profile**: hard chisel (narrow, sharp) vs soft pillow
  (wide, rounded); the blur radius of the height field *is* this dial
- **light angle & intensity**: the angle is shared with every other shadow
  on the page; intensity sets how loud the edges get
- **surface**: plain, paper fibre, plaster, leather. Grain in the
  material is what sells "pressed", not "drawn"
- **tint**: blind (same colour) vs foil/ink-filled recess

## Techniques

- **CSS text/box shadows**: a light 1px offset one way and a dark one the
  other way (`text-shadow: 0 1px 0 rgba(255,255,255,.6), 0 -1px 0
  rgba(0,0,0,.3)`), plus `inset` box-shadows for pressed panels. Free,
  crisp, and fine for subtle letterpress UI.
- **SVG lighting filters**: `feGaussianBlur` (alpha → height) →
  `feSpecularLighting` / `feDiffuseLighting` with `feDistantLight` →
  composite. A true height-field bevel on any shape or text, no JS; mind
  the cost on large areas.
- **Canvas 2D height field**: draw the content white, blur it to the bevel
  width, take the gradient (Sobel) as normals, and shade with a dot product
  against the light. A good fit for static assets, baked once.
- **WebGL normal-from-height shader**: pack crisp and blurred masks into
  one texture, derive normals per pixel, light with diffuse + specular, and
  add grain. Use it when the light moves (pointer- or tilt-driven).
- **Reduced motion**: a static light angle needs nothing; freeze a moving
  light at its rest angle.

## Starting points

- design.how Vault — [Realistic emboss](https://github.com/arla6ka/design.how/tree/main/vault/emboss)
  (WebGL height field from crisp + blurred masks, plaster grain; MIT; see
  LIBRARIES.md); [Folder embroidery](https://github.com/arla6ka/design.how/tree/main/vault/folder-embroidery)
  for stitched relief
- MDN: `feSpecularLighting`, `feDiffuseLighting`
- Shadertoy: "normal from height map", "emboss"

## Search queries

- `svg filter emboss feSpecularLighting text`
- `css letterpress text-shadow effect`
- `webgl height map to normal map shader emboss`
- `deboss effect css inset shadow`
- `canvas sobel normal map lighting`

## Related

[[light-on-flat]] (one light source for the page), [[skeuomorphism]]
(the register built on it), [[concrete-plaster]] and [[material-texture]]
(the surfaces it's pressed into), [[rubber-soft-touch]] (soft moulded
relief), [[embroidery]] (stitched relief), [[elevation]] (shadows that
lift rather than carve), [[specular-metallic]] (foil-stamped variants).
