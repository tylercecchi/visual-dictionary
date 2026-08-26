---
name: graffiti-street
title: Graffiti / Street
category: ui-foundations
aliases: [graffiti, street art, spray paint, tag lettering, wildstyle, throw-up, stencil art, wheat paste, urban style, drips, bubble letters, banksy style, mural]
media: [css, svg, canvas]
---

# Graffiti / Street

The street wardrobe — spray-paint letterform culture and its wall
ecosystem: tags, throw-ups, wildstyle burners, stencils, paste-ups,
drips. A style with its own strict craft hierarchy that outsiders read
as chaos — which is why fake graffiti is so instantly detectable.

## You know it when you see

- Letterforms built for the can: fat interlocking bubble letters (throw-ups), arrow-spiked wildstyle, one-line marker tags
- Spray physics: soft-edged fills, overspray halos, deliberate drips, fades between cap sizes
- The wall ecosystem: layered pieces over old tags, stencils, wheat-pasted posters peeling, stickers ([[stickers-badges]] street register)
- The failure: a clean vector font with a "spray" filter — no letter-structure knowledge, no can physics

## Dials

- **letterform hierarchy (the craft ladder)** — tag (fast one-line signature: marker/thin-cap, gestural — [[hatching-sketch]] speed logic), throw-up (2-color bubble letters: fill + outline, speed-optimized), piece (multi-color, 3D blocks, highlights), wildstyle (interlocked, arrowed, deliberately hard to read — [[type-composition]]'s legibility sacrifice with street rules); each rung has different letter construction — mixing rungs in one word is the fake tell
- **can physics** — soft edges everywhere (spray never cuts hard except stencils), overspray halos around strokes ([[glow-bloom]] logic in paint), drips from over-saturation (gravity-honest: verticals only, from wet points), fades via cap distance; flat hard-edged "graffiti" reads as sticker, not paint
- **color grammar** — fill + outline + 3D-block + highlight + background glow: the piece's canonical five layers; palettes loud but few (2-4 per piece); chrome-and-black is the classic throw-up scheme ([[specular-metallic]] as flat paint illusion)
- **the wall** — context is half the style: brick/concrete grounds ([[concrete-plaster]], [[material-texture]]), layered history (old tags ghosting under new work — [[weathering-patina]] as palimpsest), buffed patches, paste-ups and stickers accumulating ([[collage-scatter]] laws)
- **stencil register** — the Banksy wing: hard-edged single/multi-layer cutouts with bridge-gaps (the stencil's structural tell), often monochrome + one accent; politically-flavored placement
- **deployment dose** — full walls for street/music/sport brands and backdrops; the dose register is one tagged accent or sticker cluster over clean UI ([[cute-naive]] dose logic); corporate graffiti reads as cringe faster than any other borrowed style — sincerity check mandatory

## Techniques

- **Spray strokes (canvas)** — soft round brush stamps at high
  frequency + density falloff, overspray as low-alpha wide scatter,
  drips as gravity particles from saturation points
  ([[chalk-blackboard]]'s stamp machinery, wet register).
- **SVG letterforms** — real graffiti letter construction (study
  actual throw-up/wildstyle structure — bar-and-bubble skeletons,
  arrow grafts), then soft-edge via blur-eroded strokes; outline/fill/
  3D/highlight as separate layers per the five-layer grammar.
- **Stencils** — hard `clip-path`/mask cutouts *with bridges*; slight
  edge-bleed underneath for the sprayed-through read.
- **The wall pass** — texture ground + layered ghost tags at low
  opacity + paste-up/sticker clusters; the ecosystem sells it more
  than any single piece.

## Search queries

- `graffiti letter structure throw up anatomy`
- `spray paint brush canvas soft edges`
- `stencil art bridges vector`
- `wildstyle construction arrows`

## Related

[[type-composition]] (legibility-sacrifice kinship), [[stickers-badges]]
+ [[collage-scatter]] (the wall ecosystem), [[concrete-plaster]] +
[[material-texture]] + [[weathering-patina]] (walls and history),
[[chalk-blackboard]] (fellow pigment-on-surface craft),
[[brutalism]] + [[print-artifacts]] (punk kin), [[cute-naive]]
(dose logic), [[glow-bloom]] (overspray halos), [[period-looks]]
(90s street wing).
