---
name: stickers-badges
title: Stickers / Badges
category: surface-and-material
aliases: [sticker, die-cut, badge, patch, pin, label, tag, sticker sheet, white outline, emoji sticker, laptop sticker]
media: [css, svg, canvas]
---

# Stickers / Badges

Elements styled as physical objects stuck onto the surface — die-cut white
borders, drop shadows, slight rotations, peel corners. Collage energy: the
design equivalent of a laptop lid.

## You know it when you see

- Images/text with a thick white (or colored) contour hugging their silhouette
- Elements scattered at slight random rotations, overlapping like a collage
- Peeling corners, holographic foil patches ([[iridescence]]), embroidered-patch texture
- Pill badges and stamps ("NEW", price tags) with object-like presence

## Dials

- **die-cut border width** — thin keyline vs chunky white margin; the single strongest sticker cue
- **rotation scatter** — ±2-6° random rotation sells "placed by hand"; identical rotations kill it
- **shadow contract** — small offset hard-ish shadow (paper-thin object) — not the soft UI [[elevation]] shadow; peel = stronger shadow + corner curl
- **material** — matte paper, glossy vinyl (a [[shimmer-sheen]] highlight), holo foil ([[iridescence]]), embroidery (stitch texture)
- **collage density** — one accent sticker (playful touch) vs full sticker-sheet composition (identity statement)

## Techniques

- **Die-cut contour (CSS)** — for arbitrary silhouettes: stacked
  `drop-shadow(0 0 0 white)` filters (several, offset in a circle) build the
  contour around alpha; simple shapes just use border + radius. SVG: dilate
  via `feMorphology` — the cleanest true outline.
- **Scatter & stick** — random-seeded rotation/position offsets per item
  (CSS custom properties or JS), tiny hard `box-shadow`; hover "un-stick"
  (lift + straighten) is the natural [[motion-ceremony]] beat.
- **Peel corner** — a pseudo-element gradient triangle + curl shadow at one
  corner; full interactive peel is a canvas/WebGL bend.
- **Badge systems** — pills/stamps as tokens: uppercase micro-type
  ([[typographic-voice]] wide-tracked labels), strong fills from
  [[color-roles]] semantics, optional dashed/ticket borders ([[border-stroke]]).

## Starting points

- `feMorphology` dilate outline pattern (SVG; searchable recipe)
- The stacked drop-shadow contour trick (documented widely; no library)
- Embroidery/patch and foil textures: asset packs or [[material-texture]] recipes

## Search queries

- `css drop-shadow stacked sticker white outline`
- `svg feMorphology dilate outline sticker`
- `sticker peel corner css effect`
- `collage layout random rotation css`

## Related

[[shape-language]] (die-cut = silhouette worship), [[iridescence]] +
[[shimmer-sheen]] (foil and gloss finishes), [[material-texture]] (paper/
vinyl/fabric), [[skeuomorphism]] (the broader object-realism system),
[[elevation]] (note the *different* shadow contract), [[print-artifacts]]
(zine collage kinship).
