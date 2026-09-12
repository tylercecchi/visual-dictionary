---
name: wayfinding-signage
title: Wayfinding / Transit Signage
summary: "panel colors as category, pictograms, arrow grammar, route discs"
category: wardrobe
aliases: [signage system, wayfinding, airport signage, transit signage, metro map style, subway signage, station signs, pictograms, directional arrows, sign typography, frutiger airport, helvetica subway, line color coding, route disc, tube map, environmental graphics, exit sign style]
media: [css, svg]
---

# Wayfinding / Transit Signage

The graphic language of airports, metros, and motorways — enormous type
on solid color panels, a fixed pictogram set, an arrow grammar where
position means direction, routes coded by color and lettered discs —
built to be read at distance, in motion, by anyone.

## You know it when you see

- Big humanist sans on a saturated panel: yellow Schiphol boards, black
  NYC subway signs, white-on-blue motorway type
- Pictograms from one consistent family (the AIGA/DOT set) doing the
  work of words
- Arrows placed *where they point* — left arrows at the left edge, right
  arrows at the right, up arrows above
- Numbered or lettered discs in line colors; diagrammatic maps with only
  45° and 90° angles
- The failure: signage styling without signage logic — arrows floating
  wherever, colors that don't encode anything

## Dials

- **system** — airport (Frutiger, yellow/black directions), subway
  (Helvetica/Vignelli black panels, colored discs), road (Transport /
  Clearview, blue/green/brown by road class), hospital / campus
  (softer, more pictograms)
- **panel color logic** — background color = *category* (directions vs
  information vs warning); the logic must be stated once and never
  broken ([[color-roles]] at signage scale)
- **type** — one humanist grotesque (Frutiger, Transport, Rail Alphabet,
  Clearview, Helvetica), mixed case for names, caps sparingly; sized by
  viewing distance, tight leading, `tabular-nums` for gates and platforms
- **pictogram consistency** — one set, one stroke logic
  ([[iconography-style]]); pictogram-first with words as backup
- **arrow grammar** — the arrow's position relative to text encodes
  direction; arrow weight matches type weight; no diagonal cuteness
- **route coding** — color + letter/number disc as the unit; discs align
  on a baseline; color contrast checked against the panel
- **map register** — Beck-style diagram (45°/90°, evenly spaced
  stations) vs geographic ([[cartographic-style]])

## Techniques

- **Panel component** — solid background token, fixed padding scale,
  hairline dividers between rows, type size stepped from a viewing-
  distance scale rather than the app's type ramp.
- **Arrow placement rule** — a flex row with the arrow slotted by
  direction class (`.dir-left` puts the arrow first, `.dir-right` last,
  `.dir-up` above); one SVG arrow rotated, never four glyphs.
- **Pictograms** — the AIGA/DOT Symbol Signs are public domain SVG;
  size to the panel's cap-height, monochrome, no outlines.
- **Route discs** — a circle with the line color, letter/number centered
  in the panel's face, on-color from a contrast check; render as a
  [[chips-badges-avatars]] variant.
- **Diagrammatic map** — SVG polylines with `stroke-linecap: round`,
  angles constrained to 45°/90°, stations as ticks or rings; interchange
  as a white-filled ring.
- **Legibility floor** — contrast ≥ 7:1 on panels, no light weights,
  generous letter-spacing at large sizes only if the face needs it.

## Starting points

- AIGA / DOT Symbol Signs (public domain) — the pictogram set
- NYC Transit Authority Graphics Standards Manual (Vignelli/Noorda) and
  TfL design standards — the two canonical systems
- Bureau Mijksenaar (Schiphol) and Clearview (US highways) — airport and
  road registers
- Frutiger, Transport, Rail Alphabet — the faces and their licensing

## Search queries

- `aiga dot symbol signs svg download`
- `transit map svg 45 degree diagram`
- `wayfinding signage arrow placement rules`
- `nyc subway graphics standards manual`
- `frutiger airport signage typeface`

## Related

[[navigation-language]] (app wayfinding — this is its physical parent),
[[iconography-style]] (pictogram discipline), [[cartographic-style]]
(maps), [[typographic-voice]] (one humanist voice), [[color-roles]]
(color as category), [[bauhaus-swiss]] (the modernist lineage),
[[mid-century-modern]] (Vignelli era), [[chips-badges-avatars]] (route
discs), [[visible-accessibility]] (contrast and distance),
[[instructional-manual]] (pictogram kin), [[grid-systems]] (panel
proportions), [[engineering-datasheet]] (the other "everything has a
code" register).
