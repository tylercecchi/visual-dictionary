---
name: outdoor-expedition
title: Outdoor / Expedition
summary: "WPA posters, topo contours, patch badges, field-notes kraft"
category: wardrobe
aliases: [national park style, wpa poster, parks poster, topographic, contour lines, topo map background, expedition, field notes, patch badge, ranger badge, trail map, outdoorsy, camping aesthetic, adventure brand, gorpcore, surf badge, vintage outdoor, heritage badge]
media: [css, svg, canvas]
---

# Outdoor / Expedition

The wardrobe of parks, trails, and gear — WPA-poster flat planes on
screen-print grain, topographic contours as texture, circular patch
badges with arched type, field-notes kraft paper — earth palette,
condensed caps, and a promise of having been somewhere.

## You know it when you see

- Flat, posterized landscapes in four or five earth tones with visible
  print grain (the 1930s National Park poster)
- Contour lines wandering behind content; a compass rose or elevation
  figure as ornament
- Round badges: arched text top and bottom, a mountain/pine/wave in the
  middle, a stitched or merrowed edge
- Kraft and off-white paper, rubber-stamped dates, a ruled notebook grid
- Condensed grotesque caps paired with a script or slab; pine, rust,
  ochre, sand, sky
- The failure: the badge and the topo on a product that never leaves a
  desk — the register needs a *place* to point at

## Dials

- **register** — *WPA poster* (flat illustration, limited palette),
  *heritage badge* (patches, laurels, "EST."), *field notes* (kraft,
  ruled paper, stamps → [[paper-ephemera]]), *technical outdoor*
  (gorpcore: spec labels, safety-orange accents → [[engineering-datasheet]]),
  *trail map* (→ [[cartographic-style]])
- **palette** — earth tones (pine, rust, ochre, cream, slate) vs heritage
  two-tone vs technical neutrals with a neon safety accent
- **texture** — screen-print grain ([[film-grain]]), kraft/canvas
  ([[material-texture]]), thread ([[embroidery]]); how much the surface
  admits to being printed or sewn
- **badge grammar** — shape (circle, shield, rocker), arched type, inner
  rings, central pictogram; stitched edge or clean vector
- **topo usage** — faint full-bleed background vs accent lines vs a real
  elevation figure; contour density and line weight
- **type pairing** — condensed sans caps + script (heritage) or +
  slab (poster); tracking wide for the arched badge text

## Techniques

- **Topo contours** — generate from 2D noise ([[procedural-noise]]) with
  marching squares into SVG polylines ([[generative-art]] plotter
  register), or a `repeating-radial-gradient` for a cheap ring texture;
  keep contrast low.
- **WPA poster** — flat SVG shapes, limited palette via
  [[duotone-gradient-map]] on photos or hand-built vector, then a grain
  overlay with `mix-blend-mode: multiply`.
- **Badge** — SVG `<textPath>` on two arcs for the arched type,
  concentric circles for rings, a stitched edge via `stroke-dasharray`
  on a thick outer stroke, optional [[embroidery]] texture fill.
- **Field notes paper** — kraft [[material-texture]] base, ruled lines
  via `repeating-linear-gradient`, rubber stamp from
  [[paper-ephemera]].
- **Heritage type** — condensed grotesque caps with `letter-spacing:
  0.08-0.15em`; script sparingly as the one flourish.

## Starting points

- Library of Congress WPA poster collection; NPS "Parkitecture" and the
  Parks Project / Fifty-Nine Parks poster series — the poster register's
  canon
- Field Notes (brand) — the notebook register in its purest form
- Patagonia, Cotopaxi, Snow Peak — heritage vs technical outdoor
  branding at both ends of the dial
- Recent showcases: vintage outdoor/surf badge sticker sets,
  embroidered-patch collections (recent.design, builtbydesigners)

## Search queries

- `topographic contour lines svg generator noise marching squares`
- `wpa national park poster style illustration palette`
- `svg textpath arched badge text`
- `heritage badge logo condensed type est`
- `kraft paper texture css ruled lines`

## Related

[[cartographic-style]] (real maps), [[material-texture]] + [[embroidery]]
(paper and patches), [[stickers-badges]] (die-cut badges),
[[paper-ephemera]] (stamps, tags, field notes), [[film-grain]] +
[[print-artifacts]] (screen-print texture), [[duotone-gradient-map]]
(posterizing photos), [[generative-art]] + [[procedural-noise]]
(contours), [[mid-century-modern]] (poster lineage), [[weathering-patina]]
(worn gear), [[illustration-style]] (flat landscape systems),
[[seasonal-theming]] (the register's natural calendar).
