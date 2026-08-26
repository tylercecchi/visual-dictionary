---
name: hatching-sketch
title: Hatching / Sketch
category: pattern-and-texture
aliases: [crosshatch, sketch, hand-drawn, pencil, ink drawing, engraving, etching, doodle, wobbly lines, napkin sketch, pointillism stipple]
media: [css, svg, canvas, webgl]
---

# Hatching / Sketch

Tone built from drawn strokes — parallel hatch lines, crosshatch, pencil
grain — and the wobble of a human hand. The rendered-by-a-person look.

## You know it when you see

- Shading made of visible parallel or crossing strokes, not smooth gradients
- Engraving/banknote style: tone from line density and thickness
- UI or diagrams that look drawn on a napkin (wobbly rectangles, imperfect lines)
- Pencil texture: strokes with grain, direction, and pressure variation

## Dials

- **stroke density ramp** — how tone maps to layers of hatching (light = sparse single-direction, dark = multi-angle crosshatch)
- **stroke character** — ruled (engraving), loose (pencil), scratchy (ink); width variation along the stroke
- **wobble amplitude** — the hand-drawn imperfection; per-redraw re-randomizing ("boiling") makes it feel alive in animation
- **direction** — strokes following form (curved hatching = volume) vs fixed screen angle (graphic)
- **paper** — [[film-grain]] texture and slightly off-white ground complete it

## Techniques

- **Rough/sketchy vector rendering** — libraries that redraw shapes/charts
  with wobble and hatch fills (the rough.js family; excalidraw's aesthetic).
  The right choice for hand-drawn UI, diagrams, annotations.
- **SVG hatch patterns** — `<pattern>` of lines at angles, layered by
  luminance bands; turbulence-displaced for wobble.
- **GLSL hatching (TAM-style)** — select among hatch-stroke textures by
  luminance (tonal art maps), oriented to screen or UV. Right for real-time
  3D sketch shading; a classic NPR paper implemented widely.
- **Image-to-sketch (canvas/GLSL)** — edge detection ([[toon-outline]])
  for contours + luminance-banded hatch overlay for tone.

## Starting points

- rough.js (npm) — the standard sketchy-shape renderer; roughViz for charts
- excalidraw — reference for the hand-drawn UI system as a whole
- "Real-Time Hatching" (Praun et al.) — the TAM paper the GLSL versions copy
- Shadertoy: search "hatching", "pencil"

## Search queries

- `rough.js sketchy svg shapes`
- `glsl hatching tonal art maps shader`
- `svg pattern crosshatch fill luminance`
- `hand drawn wobble line boiling animation`

## Related

[[toon-outline]] (contours to hatching's tone), [[halftone]] (mechanical
cousin — dots vs strokes), [[film-grain]] (the paper), [[shape-language]]
(wobble is a shape-language stance), [[typographic-voice]] (pairs with
handwritten/humanist type).
