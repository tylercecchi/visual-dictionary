---
name: motion-blur-trails
title: Motion Blur / Trails
category: motion
aliases: [motion blur, trails, ghosting, speed lines, smear, afterimage, streaks, feedback loop, echo]
media: [css, canvas, webgl]
---

# Motion Blur / Trails

Movement leaving evidence behind it — the smear of a fast object, fading
afterimages, or persistent light streaks. Speed made visible.

## You know it when you see

- Fast-moving elements smear along their direction of travel
- Objects leave fading copies of themselves (trails/echo)
- Light sources draw persistent glowing streaks (long-exposure look)
- Comic-style speed lines radiating behind motion

## Dials

- **persistence / decay** — how slowly the trail fades; short = blur, long = light-painting
- **directionality** — blur along velocity (true motion blur) vs uniform afterimage
- **sample count / shutter** — how smooth the smear is; low counts show discrete ghosts (which can itself be the look — "echo")
- **what trails** — the whole object, just its highlights ([[glow-bloom]] streaks), or an outline
- **per-object vs full-frame** — one hero element smearing vs the whole scene (camera motion blur)

## Techniques

- **Canvas feedback (translucent clear)** — clear with low-alpha fill
  instead of full clear; everything drawn accumulates fading trails. Two
  lines; the classic and usually the right first choice.
- **WebGL feedback / ping-pong accumulation** — blend the previous frame
  into the current at <1 opacity; same idea, shader-side, composable with
  everything else. Beware: additive feedback + bloom escalates fast (which
  the light-painting look exploits).
- **Velocity-based blur (GLSL)** — sample along a velocity vector per pixel
  (from a velocity buffer or a known direction). Real motion blur; right for
  3D scenes and hero smears.
- **CSS approximations** — stagger a few fading copies (`transition-delay`
  on clones), or animated `filter: blur()` gated to the motion — crude but
  serviceable for micro-interactions. Discrete-ghost echoes work better in
  CSS than true smears.

## Starting points

- `postprocessing` (pmndrs) motion-blur / afterimage effects; three.js
  `AfterimagePass` example
- Shadertoy: search "motion blur velocity", "feedback"
- Canvas trail pattern needs no library

## Search queries

- `canvas trail effect translucent clear fillRect alpha`
- `three.js AfterimagePass example`
- `glsl per object motion blur velocity buffer`
- `webgl feedback loop previous frame texture`

## Related

[[particles]] (trails are a particle rendering mode), [[glow-bloom]]
(streaking light wants bloom), [[motion-ceremony]] (smear amount is a
personality dial), [[liquid-ripple]] (feedback buffers power both).
