---
name: neon-signage
title: Neon Signage
category: light-and-depth
aliases: [neon sign, neon tube, neon text, open sign, neon flicker, storefront sign, cyberpunk neon, neon glow sign, tube lighting]
media: [css, svg, canvas, webgl]
---

# Neon Signage

The composed recipe for a *sign*, not just a glow — glass tubes bent into
letterforms and outlines, mounted on a wall, humming, occasionally flickering.
[[glow-bloom]] is the light; this entry is the object.

## You know it when you see

- Letterforms drawn as continuous rounded tubes (one stroke, visible bends and gaps where the tube routes)
- A bright core with the tube's own color haloing outward, staining the wall behind
- Flicker: a letter stuttering, a segment dead (the broken-sign trope), the whole sign buzzing on
- Night context: dark wall, [[reflections]] on wet pavement, moths of [[film-grain]]

## Dials

- **tube anatomy** — near-white hot core → saturated inner halo → wide dim outer glow (3 layers minimum); stroke must be *rounded, uniform width, single-line* — filled outline fonts break the illusion ([[typographic-voice]]: script and single-stroke faces are native)
- **routing honesty** — real tubes are one bent glass run: small gaps where strokes would cross, connector loops between letters, visible dark tube in "off" segments; these details separate sign from glowing text
- **wall stain** — the glow cast on the mounting surface (a soft colored [[gradients]] pool behind the sign, doubling near the wall) plus faint hardware shadows; the sign must live *somewhere*
- **flicker score** — the temporal personality: steady hum, occasional single-letter stutter (randomized, sparse — [[glitch]]'s trigger-rhythm law), ignition sequence on entry (flicker-flicker-on, the beloved [[motion-ceremony]] beat), or one dead letter as a permanent joke
- **era & palette** — classic storefront (red/warm white, script), miami (pink/cyan), cyberpunk (saturated multi-color density + [[weather-effects]] rain + [[reflections]]); palette names the fiction

## Techniques

- **CSS/SVG layered text-shadow** — the standard: single-stroke font (or
  SVG paths), 4-6 stacked `text-shadow`/`drop-shadow` layers stepping radius
  and saturation; `animation` steps() for flicker. Right for headline signs.
- **SVG tube paths** — letterforms as actual `<path>` strokes
  (round caps, no fill): routing gaps, connector wires, and per-segment
  flicker become trivial; the honest register.
- **Ignition sequence** — keyframed opacity with `steps()` and irregular
  timing per letter (randomized delays); the off-state shows the dark tube
  (low-opacity desaturated stroke), never nothing.
- **GLSL/three.js** — emissive tube geometry (TubeGeometry along text
  paths) + [[glow-bloom]] post; the register where the sign lights a 3D
  scene ([[scene-staging]] night preset, volumetric haze).

## Starting points

- Single-stroke / monoline script fonts (searchable: "neon font monoline")
- The layered text-shadow recipe (widely documented; no library)
- Reference photography: vintage sign archives, Hong Kong neon documentation
  projects

## Search queries

- `css neon sign text-shadow layers flicker animation`
- `svg stroke path neon tube round caps`
- `neon ignition flicker steps animation`
- `three.js tube geometry emissive bloom text`

## Related

[[glow-bloom]] (the light physics), [[reflections]] (wet-street double),
[[glitch]] (flicker rhythm law), [[typographic-voice]] (single-stroke
faces), [[scene-staging]] + [[time-of-day]] (night context),
[[weather-effects]] (rain completes cyberpunk), [[period-looks]] (miami/
80s registers), [[fui]] (neon's fictional-interface cousin).
