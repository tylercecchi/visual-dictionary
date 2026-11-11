---
name: ransom-note-type
title: Ransom-Note Typography
summary: "every letter a different cut-out scrap; mismatched faces, papers, tilts"
category: pattern-and-texture
aliases: [ransom note, ransom note text, ransom note font, ransom letters, cut out letters, cutout letters, magazine letters, mismatched letters, mixed fonts, every letter different font, collage type, collage typography, cut and paste type, punk type, punk zine, zine lettering, anonymous letter, scrap letters, paper scraps]
media: [css, svg, canvas]
---

# Ransom-Note Typography

A word or line spelled from letters that each look cut from a different
source, with different face, case, paper colour and tilt, so the text
reads as hand-assembled from scraps.

## You know it when you see

- Each letter on its own little paper rectangle in a different colour,
  slightly rotated, unevenly spaced
- Serif next to grotesque next to mono, upper and lower case mixed
- Punk flyers, zines, "anonymous letter" jokes, playful brand headlines
- The failure: random fonts with no scrap backing and no tilt. It reads
  as a font bug, not collage

## Dials

- **variety pools**: how many faces, papers and inks to draw from. 6-10
  of each feels collected; 2-3 feels designed
- **jitter**: rotation (±3-8°), baseline shift, scale and gap variation.
  This is the messiness dial
- **scrap shape**: clean rectangle, rough torn edge, die-cut to the
  letter outline; padding around the glyph
- **paper/ink pairing**: always pick an ink that contrasts its paper;
  legibility lives here
- **case & style mix**: probability of uppercase, italic, outline letters
- **determinism**: seed from the text so each word always assembles the
  same way (stable on re-render) vs re-roll on each appearance
- **entrance**: letters rising/dropping in one by one, held, lifted away
  ([[kinetic-type]])

## Techniques

- **DOM spans + CSS**: split the text into one `<span>` per letter. Each
  gets a background colour, padding, `font-family` from a pool, `rotate`,
  and `translate` from a seeded hash of the string. Keep the real text
  accessible (`aria-label` on the wrapper, spans `aria-hidden`). Cheapest,
  crisp, and selectable.
- **Torn edges**: `clip-path: polygon()` with jittered points, or an SVG
  mask with a rough path per scrap.
- **Paper texture**: a subtle noise/fibre background-image per scrap
  ([[material-texture]]) and a tiny drop shadow so scraps sit *on* the page.
- **Canvas**: draw scraps for generated posters or OG images; the same
  seeded generator applies.
- **Restraint in product UI**: one headline or a sticker-like label, never
  body text, since letter-by-letter variety destroys reading speed.

## Starting points

- design.how Vault — [Ransom note](https://github.com/arla6ka/design.how/tree/main/vault/ransom-note)
  (DOM-only, phrase-seeded paper/ink/face picks, jitter knobs; MIT; see LIBRARIES.md)
- Search for "ransom note generator" for quick visual references

## Search queries

- `ransom note text effect css`
- `random font per letter css split text`
- `cut out letters collage typography generator`
- `clip-path torn paper edge css`
- `seeded random per letter style javascript`

## Related

[[collage-scatter]] (the layout cousin: scattered scraps),
[[paper-ephemera]] (paper material and found print),
[[graffiti-street]] and [[print-artifacts]] (zine and punk print
registers), [[stickers-badges]] (die-cut scraps as UI), [[kinetic-type]]
(letter-by-letter entrances), [[typographic-voice]] (why mixing faces is
loud), [[type-composition]].
