---
name: moire
title: Moiré / Interference
category: pattern-and-texture
aliases: [moire pattern, interference pattern, op art, line interference, wave interference, ripple interference, vibrating pattern, bridget riley]
media: [css, svg, canvas, webgl]
---

# Moiré / Interference

Two regular patterns overlaid slightly out of step, breeding a third,
larger pattern that neither contains — shimmering, vibrating, hypnotic. Op
art's engine, and print's accidental curse turned deliberate.

## You know it when you see

- Two line/dot grids overlapping into large rolling waves or curves
- Patterns that seem to vibrate, shimmer, or move as you scroll or as layers shift
- Op-art (Bridget Riley register): pure black-white geometry inducing motion illusions
- Concentric-circle pairs breeding hyperbolic fringe curves
- The accidental version: screen photos of screens, [[halftone]] scans at wrong angles

## Dials

- **base pattern & pitch** — lines, concentric rings, dot grids; finer pitch = finer, more shimmering interference
- **offset parameter** — the small angle (2-10°), scale delta, or displacement between layers; *this is the instrument* — animating it slowly plays the moiré
- **contrast & color** — black/white maximizes the optical vibration (and eye strain — dose it); two colors interfere into blends; on-screen, pattern pitch near pixel pitch adds a third interferer (control or exploit)
- **curvature** — straight grids breed straight fringes; warping one layer ([[procedural-noise]], lens distortion) breeds organic flowing fringes
- **motion coupling** — offset driven by scroll ([[scroll-choreography]]), cursor, or time: near-static layers producing large slow fringe motion is the magic trick

## Techniques

- **Layered CSS gradients** — two `repeating-linear-gradient` /
  `repeating-radial-gradient` layers, one transformed slightly; animate the
  transform. Moiré for free in pure CSS.
- **SVG pattern pairs** — two `<pattern>` fills overlaid; precise pitch
  control, crisp at any zoom, animatable via `patternTransform`.
- **Canvas/GLSL** — draw or compute both patterns per frame; GLSL gets
  interference from summed `sin()` fields directly (the same math as
  [[liquid-ripple]] wave interference — moiré *is* interference)
- **Anti-moiré** (the reverse craft) — when it's a bug: match pattern pitch
  to device pixels, add blur/[[film-grain]], or rotate [[halftone]] screens
  to safe angles (the print solution).

## Starting points

- Bridget Riley / op-art archives for the compositional register
- Shadertoy: search "moire", "interference"
- The CSS two-gradient recipe needs no library

## Search queries

- `css repeating-linear-gradient moire two layers`
- `op art bridget riley technique lines`
- `interference pattern sin waves shader`
- `svg patternTransform animate moire`

## Related

[[halftone]] (screen-angle moiré is its native hazard), [[crt-scanlines]]
(scanline-content interference), [[kaleidoscope]] (the other
pattern-from-pattern engine), [[liquid-ripple]] (wave interference kin),
[[generative-art]] (op-art register), [[dithering]] (pattern-pitch pixel
interactions).
