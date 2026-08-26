---
name: glitch
title: Glitch
category: distortion-and-lens
aliases: [glitch art, datamosh, corruption, digital artifact, slice glitch, signal loss, broken tv, error aesthetic, jpeg artifacts]
media: [css, canvas, webgl]
---

# Glitch

Deliberate digital failure — slicing, block corruption, channel tearing, and
compression artifacts used as aesthetic. Distinct from the analog wing
([[crt-scanlines]] VHS misbehavior): glitch is *digital* breakage.

## You know it when you see

- Horizontal slices of an image shifted sideways for a frame
- Blocks of the image replaced with wrong/corrupted content (datamosh, JPEG blocks)
- Text stuttering between characters or ghosting in offset colors
- Momentary violent breakage that snaps back to clean — the *snap back* is the aesthetic

## Dials

- **trigger & rhythm** — constant low simmer vs event-driven bursts (hover, beat, error); glitch reads best gated to sparse random windows, not looping
- **vocabulary mix** — slice offsets, block corruption, [[chromatic-aberration]], scan-jitter, character scramble; pick 2-3, not all
- **violence** — few-pixel shivers vs full-frame tears
- **randomness quality** — clean `random()` looks synthetic; time-quantized steps ("hold" a corruption for 80ms) reads authentically digital
- **recovery** — glitches must *end* crisply; the return to clean is the emphasis ([[motion-ceremony]])

## Techniques

- **CSS text glitch** — pseudo-element copies, `clip-path` slice animations,
  keyframed offsets, steps() timing. The standard for glitch type/logos.
- **Canvas slice shifting** — draw the image in horizontal bands with random
  x-offsets on trigger frames; add channel tint for tearing.
- **GLSL glitch pass** — quantized-random UV slice offsets + block UV
  swaps + channel splits, all gated by a time-hashed trigger. Right for
  imagery/video/3D; `postprocessing` ships a `GlitchEffect`.
- **True datamosh** — real codec abuse (removing I-frames) is offline video
  work; live approximations fake it with feedback buffers ([[motion-blur-trails]])
  and block displacement.

## Starting points

- `postprocessing` (pmndrs) `GlitchEffect` for three.js
- CSS glitch-text patterns are well-documented (no library needed)
- Shadertoy: search "glitch" — study the trigger-gating, not just the displacement

## Search queries

- `glsl glitch shader uv slice block displacement`
- `css glitch text clip-path steps animation`
- `three.js postprocessing GlitchEffect`
- `datamosh effect webgl feedback approximation`

## Related

[[chromatic-aberration]] (one word in glitch's vocabulary),
[[crt-scanlines]] (the analog sibling — VHS vs datamosh),
[[pixelation]] (corruption blocks), [[film-grain]] (static),
[[motion-ceremony]] (trigger rhythm is everything).
