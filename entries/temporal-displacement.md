---
name: temporal-displacement
title: Temporal Displacement (Rolling Shutter / Slit-Scan)
summary: "each slice of the frame shows a different moment; motion shears, stillness stays"
category: distortion-and-lens
aliases: [rolling shutter, rolling shutter effect, slit scan, slit-scan, slitscan, time displacement, time slice, time slices, temporal smear, jello effect, wobbly video, bent propeller, time warp scan, stretched in time, scanline lag, stripe lag, delay map, frame delay, motion tearing, tearing into bands, torn bands]
media: [canvas, webgl]
---

# Temporal Displacement (Rolling Shutter / Slit-Scan)

A post-effect where each row, column, or region of the image is sampled
from a slightly different moment, so anything moving shears, stretches,
or tears into bands while anything still stays perfectly intact.

## You know it when you see

- Moving things bend or lean while the background stays straight: the
  "bent propeller" and wobbly-jelly look of a phone camera panning
- Type or shapes tear into horizontal bands that lag behind each other,
  then snap whole again when the motion stops
- Long smeared streaks where an object's path is painted across the frame,
  as in slit-scan photography and the 2001 stargate tunnel
- The tell: stillness is untouched. If static parts glitch too, it's
  [[glitch]], not this

## Dials

- **slice axis & shape**: horizontal rows (rolling shutter), vertical
  columns (slit-scan sweep), radial or arbitrary map (a delay *image*)
- **slice size**: thin (1-4px) gives smooth shear; thick (14-60px) gives
  visible torn bands
- **max delay**: how many frames back the most-lagged slice reads; 1-3
  frames for a tear, 30+ for slit-scan smears
- **delay quantisation**: continuous ramp (smooth lean) vs a few discrete
  taps (hard bands); keep neighbouring slices on different taps for tearing
- **delay pattern**: linear ramp top-to-bottom (true rolling shutter),
  seeded random per slice (torn), or driven by a gradient/noise map
- **trigger**: always-on, only while moving, or on a beat; it only *shows*
  when the source moves, so motion choreography is half the effect

## Techniques

- **Canvas 2D frame ring buffer.** Keep the last N frames in offscreen
  canvases. When compositing, `drawImage` each slice from the frame its
  delay names. Cheap for coarse bands (a few dozen slices) and works for
  DOM-rendered type drawn to canvas.
- **WebGL texture array / atlas.** Push each frame into a ring of textures
  (or layers of a `sampler2DArray`). The fragment shader computes a
  per-pixel delay from `uv.y` or a delay-map texture and samples that
  layer. It's the right choice for per-pixel smooth shear and for video.
- **Slit-scan accumulation.** For long smears, copy a 1px column of the
  live frame into a scrolling output canvas each frame. The output *is*
  time along one axis.
- **Fake it in CSS.** Duplicate the element N times, clip each copy to a
  band (`clip-path: inset()`), and give each a staggered
  `animation-delay`. That's a decent tear for short type loops, with no
  pixels read.
- **Reduced motion**: render one still frame with zero delay.

## Starting points

- design.how Vault — [Shutter type](https://github.com/arla6ka/design.how/tree/main/vault/shutter-type)
  (Canvas 2D post-effect; seeded stripe map, quantised lag taps; MIT; see LIBRARIES.md)
- Golan Levin's "An Informal Catalogue of Slit-Scan Video Artworks": the
  canonical survey of the technique's variants
- Shadertoy: search "slit scan" / "rolling shutter" for texture-ring examples

## Search queries

- `slit scan webgl shader frame buffer`
- `rolling shutter effect canvas javascript`
- `time displacement delay map shader`
- `slitscan video p5js`
- `css clip-path staggered animation delay tear text`

## Related

[[glitch]] (corrupts everything; this only disturbs what moves),
[[motion-blur-trails]] (smears along a path, not by slice),
[[video-feedback]] (frame history fed back into itself),
[[kinetic-type]] (the motion this effect needs as input),
[[frame-rate-aesthetics]] (stepped time as a style),
[[crt-scanlines]] (row structure without delay).
