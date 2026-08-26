---
name: rim-light
title: Rim Light / Backlight
category: light-and-depth
aliases: [rim lighting, edge light, backlight, silhouette glow, kicker, hair light, fresnel glow, edge highlight, outline glow, contre-jour]
media: [css, svg, canvas, webgl]
---

# Rim Light / Backlight

Light wrapping around a subject's edge from behind — a bright contour tracing
the silhouette while the front stays dark or neutral. Photography's separation
trick and the single fastest way to make anything read as *dramatic* and
*dimensional*.

## You know it when you see

- A glowing edge hugging one side (or all) of a subject's outline
- Subjects "popping" off dark backgrounds without any border
- Portrait hair-light: a bright fringe on hair/shoulders against darkness
- Product shots where a colored line of light defines the form's edge
- Contre-jour: the subject nearly silhouetted, edges burning

## Dials

- **coverage** — full-surround halo (backlit from directly behind) vs one-sided kicker (light offset to a side — the standard drama) vs top-only hair light; sidedness must agree with the scene's [[light-on-flat]] contract
- **width & falloff** — hairline (crisp, product-precise) vs wide wrap (soft, cinematic); falloff into the surface (fresnel-style: strongest at grazing edges, dying quickly inward)
- **color contract** — white (neutral), warm-vs-cool split lighting (warm key + cool rim, the cinematic default), or brand-color rims (the premium dark-UI move: cyan/violet edges on cards); rim color is a free accent slot in [[color-roles]]
- **intensity vs bloom** — a clean bright line vs an overdriven edge spilling [[glow-bloom]]; blooming rims read as "light source behind," clean rims as "studio kicker"
- **what gets rimmed** — everything (a lighting *system*) vs only heroes ([[visual-hierarchy]]: rim = emphasis; rimming everything emphasizes nothing)

## Techniques

- **CSS edge glow** — for cards/buttons: a 1px light `border-top`/gradient
  border on the lit side + a soft outer `box-shadow` in the rim color on
  that side only; the dark-UI "lit from above-behind" card recipe.
- **Drop-shadow rim (alpha shapes)** — for images/logos with transparency:
  `filter: drop-shadow()` in a light color offset *opposite* the light,
  stacked 2-3 times; hugs the silhouette exactly.
- **SVG contour rim** — duplicate the shape, offset/inset slightly, clip to
  the original, fill with a gradient; precise one-sided rims on vector art.
- **Fresnel rim (GLSL/three.js)** — the real thing:
  `rim = pow(1 - dot(N, V), k)` added in the rim color; `k` sets width.
  Two lines in any 3D material; on 2D content, fake the normal from an SDF
  ([[inflatable]]'s gradient-normal trick) for puffy rims.
- **Backlit compositing** — for photos: a bright background gradient
  behind the subject + a light inner edge painted via a feathered inverted
  mask ([[image-treatment]] pipeline territory).

## Starting points

- The fresnel rim term (universal; any three.js/GLSL material tutorial)
- Portrait-lighting guides (kicker/hair light) for the vocabulary
- The stacked drop-shadow contour trick (shared with [[stickers-badges]])

## Search queries

- `fresnel rim light shader pow dot normal view`
- `css drop-shadow colored rim silhouette`
- `dark ui card edge light border gradient`
- `kicker light photography setup diagram`

## Related

[[light-on-flat]] (the contract rims must obey), [[glow-bloom]] (overdriven
rims), [[toon-outline]] (rim's graphic cousin — ink vs light on the same
edge), [[cutaway-xray]] (ghost shells are all rim), [[scene-staging]] (the
three-point rig's third light), [[subsurface-scattering]] (backlight *through*
instead of around), [[elevation]] + [[frosted-glass]] (edge-light kinship),
[[visual-hierarchy]] (rim as emphasis budget).
