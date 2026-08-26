---
name: knockout-typography
title: Knockout / Masked Typography
category: ui-foundations
aliases: [knockout text, text mask, text as window, image in text, text on path, outline text, hollow text, video in text, cutout letters, text clipping]
media: [css, svg, canvas, webgl]
---

# Knockout / Masked Typography

Type as a container or a hole — letters filled with imagery or video, text
punched out of a surface to reveal what's behind, outlines with nothing
inside, words bending along curves. Typography doing spatial work.

## You know it when you see

- Huge headlines with video/photo/gradient playing *inside* the letterforms
- Text cut out of a solid panel, the page showing through the letter-holes
- Hollow outline type (stroke only) over imagery, often paired with filled siblings
- Words running along circles, arcs, or drawn paths
- Letters overlapping imagery in interleaved z-order (text behind the subject's head)

## Dials

- **fill source** — static image, [[gradients]], video, live canvas ([[mesh-gradient]], [[fire-smoke]] in type is the showpiece register); the fill must read *through* thin strokes — heavy weights only
- **knockout direction** — text-as-window (fill inside letters) vs text-as-hole (surface minus letters); the hole version couples to [[elevation]] (what layer shows through?)
- **weight & tracking for legibility** — masked type demands ultra-heavy weights, tight leading, and busy-fill-vs-legibility negotiation; if the fill fights, add a duplicate solid layer at low alpha behind
- **outline pairing** — hollow + filled words mixed in one headline (the editorial standard); stroke weight obeys [[border-stroke]]
- **path geometry** — arcs/circles (badge energy, [[stickers-badges]]), waves, or drawn curves; letter-spacing needs manual care on tight curves

## Techniques

- **CSS `background-clip: text`** — the workhorse: any background
  (gradient, image, even animated position) clipped to type. Video fills
  need `mask`/SVG instead.
- **CSS `mask-image` / SVG `<mask>`+`<text>`** — text as mask over any
  element including `<video>` and canvas; the hole version uses the mask
  inverted (white surface, black text).
- **`mix-blend-mode` knockout** — white text on black overlay +
  `mix-blend-mode: screen` (or multiply inverse) knocks text through to the
  layer below without SVG; the classic hero-banner trick.
- **Outline type** — `-webkit-text-stroke` (verify targets) or SVG text
  `stroke`; paint-order in SVG for clean stroke-behind-fill.
- **Text on a path** — SVG `<textPath>` (the real tool); CSS can only fake
  it per-letter with transforms.
- **Type in shaders** — MSDF text ([[sdf-rendering]]) filled/displaced in
  GLSL for liquid/burning/particle type; the canvas-native register.

## Starting points

- All core techniques are platform-native — no library
- MSDF text tooling (three.js ecosystems) for the shader register
- Editorial sites (magazine heros) as composition references

## Search queries

- `background-clip text video mask css`
- `svg textpath curved text spacing`
- `mix-blend-mode knockout text hero`
- `msdf text effects webgl displacement`

## Related

[[typographic-voice]] (the base system this decorates), [[gradients]] +
[[mesh-gradient]] (the standard fills), [[border-stroke]] (outline weights),
[[image-treatment]] (fills obey house image rules), [[sdf-rendering]]
(shader type), [[dissolve-disintegration]] + [[fire-smoke]] (type as effect
canvas), [[stickers-badges]] (text-on-arc badges).
