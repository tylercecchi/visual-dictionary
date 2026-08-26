---
name: pixel-art-technique
title: Pixel Art Technique
category: pattern-and-texture
aliases: [sprites, sprite art, pixel perfect, 8-bit art, 16-bit, dot art, low-res art, pixel animation, sub-pixel animation, hd-2d, retro game style, video game graphics]
media: [css, canvas, webgl]
---

# Pixel Art Technique

Drawing *in* pixels as a craft — sprite discipline, cluster control, limited
palettes, and pixel-faithful animation. Distinct from [[pixelation]] (which
degrades high-res content): this is art authored at low resolution.

## You know it when you see

- Hand-placed pixels: clean single-pixel outlines, deliberate stair-stepped curves, no accidental noise
- Sprites animated frame-by-frame with squash, anticipation, held frames
- Limited palettes with hue-shifted ramps (shadows lean blue/purple, not just darker)
- "HD-2D": authored pixel sprites staged in modern lighting ([[scene-staging]], bloom, DoF)

## Dials

- **resolution & grid honesty** — the canvas size (16/32/64px sprites) and the law: every pixel on the grid, uniform pixel size, no mixed resolutions or off-grid rotation (the two instant amateur tells)
- **palette size & ramp hue-shift** — 4-16 colors; ramps that shift hue as they darken are the craft's signature ([[color-roles]] at pixel scale)
- **cluster & dither discipline** — pixels grouped in deliberate shapes; [[dithering]] by hand, sparingly, for texture and banding
- **outline convention** — black outline (readable, cartoon), colored/selective outline (softer), or no outline (painterly); pick per project
- **animation grammar** — low frame counts with strong poses beat many tweened frames; sub-pixel animation (rendering movement at pixel fidelity while positions interpolate) for modern-smooth motion

## Techniques

- **Authoring** — Aseprite is the standard tool (palettes, onion-skinning,
  export pipelines); art direction lives there, not in code.
- **Crisp display** — render small, scale by *integers*,
  `image-rendering: pixelated` (CSS) / `NearestFilter` (three.js),
  `imageSmoothingEnabled = false` (canvas); letterbox rather than fractional-
  scale. Off-by-half-pixel camera positions cause shimmer — snap the camera.
- **Sprite pipelines** — spritesheets + `steps()` CSS animation for DOM,
  or canvas/WebGL batchers; texture atlases with nearest filtering.
- **HD-2D staging** — pixel sprites as textured quads in three.js with
  [[glow-bloom]], [[depth-of-field]], tilted ground — the Octopath register;
  keep sprite resolution honest while lighting goes modern.
- **Palette enforcement (GLSL)** — snap output to the palette
  ([[dithering]] entry's ordered-dither + palette technique) when mixing
  authored art with dynamic effects.

## Starting points

- Aseprite (+ its community tutorials)
- Lospec — palettes and the pixel-art tutorial canon
- "The Pixel Art Tutorial" (Derek Yu / classic writeups) for cluster/ramp craft
- Octopath Traveler analyses for the HD-2D recipe

## Search queries

- `aseprite spritesheet export pipeline web`
- `lospec palette list pixel art`
- `pixel perfect camera snapping shimmer`
- `hd-2d effect three.js pixel sprites`

## Related

[[pixelation]] (degradation vs authorship), [[dithering]] (the hand-placed
version), [[crt-scanlines]] (period-correct display), [[color-roles]]
(hue-shifted ramps), [[scene-staging]] + [[glow-bloom]] (HD-2D),
[[motion-ceremony]] (held-frame timing is its own ceremony).
