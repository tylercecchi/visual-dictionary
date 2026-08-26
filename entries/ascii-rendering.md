---
name: ascii-rendering
title: ASCII Rendering
category: color-and-tone
aliases: [ascii art, text mode, character rendering, terminal art, ansi art, matrix rain, typographic image]
media: [canvas, webgl]
---

# ASCII Rendering

Imagery rebuilt out of text characters — each cell of the image replaced by a
glyph whose density (or shape) matches what was there.

## You know it when you see

- A photo, video, or 3D scene made entirely of letters and symbols
- Terminal/hacker aesthetic; Matrix-style character rain
- Up close it's text; at distance it's the image
- Sometimes colored per-cell (ANSI art), sometimes mono green-on-black

## Dials

- **charset & ramp** — which glyphs stand in for dark→light (` .:-=+*#%@` is the classic); shorter ramps are more graphic, longer are more photographic
- **cell size** — resolution of the effect (this is [[pixelation]] with glyphs)
- **color mode** — monochrome (purist), per-cell foreground color (ANSI), or full-color glyphs (subtle, almost photographic)
- **shape matching** — advanced: pick glyphs by *edge orientation* (slashes on diagonals) not just brightness; reads dramatically better
- **live vs static** — one-shot conversion vs real-time on video/3D

## Techniques

- **Canvas 2D sampling** — sample luminance per cell, `fillText` the mapped
  glyph. Simple and fine for static images and modest live use.
- **GLSL glyph atlas** — render source to texture, then per-cell look up a
  glyph from a font-atlas texture by luminance bucket. The right choice for
  full-frame real-time (video, 3D scenes).
- **three.js `AsciiEffect`** — ships with three.js examples; DOM-based, fine
  for demos, heavy for large sizes.
- **DOM/text** — a `<pre>` updated per frame; charming for small widgets,
  doesn't scale.

## Starting points

- three.js `AsciiEffect` example — quickest 3D demo
- Shadertoy: search "ascii" — the glyph-atlas bucket technique in ~30 lines
- ANSI/petscii art communities (16colo.rs) — reference for the colored style

## Search queries

- `glsl ascii shader font atlas luminance`
- `three.js AsciiEffect example`
- `canvas ascii art video luminance filltext`
- `ascii shader edge direction glyph matching`

## Related

[[pixelation]] (same cell quantization, blocks instead of glyphs),
[[dithering]] (the other brightness-to-pattern mapping), [[crt-scanlines]]
(the natural display chrome around it), [[typographic-voice]] (monospace as
identity).
