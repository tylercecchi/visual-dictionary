---
name: crt-scanlines
title: CRT / Scanlines
category: color-and-tone
aliases: [crt, scanlines, retro monitor, vhs, old tv, terminal glow, phosphor, screen curvature, rolling static, arcade monitor, burn-in, old monitor, old tv screen]
media: [css, canvas, webgl]
---

# CRT / Scanlines

The look of a cathode-ray display: horizontal scanlines, phosphor glow,
curved glass, and analog misbehavior — flicker, rolling bands, static.

## You know it when you see

- Fine dark horizontal lines across the whole image
- Green/amber terminal text that glows and slightly blooms
- Bulging screen edges (barrel curvature) with darkened corners
- Rolling brightness bands, jitter, static, ghosting — "old TV" artifacts

## Dials

The CRT look is a *stack* — pick which layers to include:

- **scanline density & darkness** — subtle texture vs heavy venetian blinds; must relate to content resolution or it moirés
- **phosphor mask** — RGB triad/aperture-grille sub-pixel pattern (close-up authenticity)
- **curvature** — barrel-distorted UVs + corner [[vignette]]; the glass
- **glow** — [[glow-bloom]] on bright content; phosphor bleed
- **misbehavior** — flicker amplitude, rolling sync band, [[chromatic-aberration]], horizontal jitter, static ([[film-grain]] cranked up); dial these by era and drama

## Techniques

- **CSS scanline overlay** — `repeating-linear-gradient` at 2-4px pitch over
  the content, optional flicker keyframes. Right for lightweight terminal/
  retro UI chrome; no curvature or true glow.
- **Full GLSL CRT pass** — barrel-distort UVs, sample content texture, apply
  mask/scanlines/glow/noise layers. The right choice for authenticity; the
  emulation community has refined these shaders for decades.
- **Canvas hybrid** — render UI to canvas, run the shader over it; how
  "CRT terminal" web apps do it.

## Starting points

- libretro/RetroArch shader repository (github: libretro/glsl-shaders) — the
  canonical, deeply-tuned CRT shaders (crt-lottes, crt-easymode) to port from
- `cool-retro-term` (GitHub) — reference for terminal-specific CRT styling
- Shadertoy: search "CRT" — many compact single-pass versions

## Search queries

- `libretro glsl crt shader lottes easymode`
- `css scanlines repeating-linear-gradient flicker`
- `webgl crt barrel distortion phosphor mask`
- `vhs glitch shader shadertoy`

## Related

[[pixelation]] + [[dithering]] (what's on the screen), [[glow-bloom]]
(phosphor), [[chromatic-aberration]] + [[film-grain]] (the VHS wing),
[[vignette]] (the glass corners), [[liquid-ripple]] (sync-roll wobble).
