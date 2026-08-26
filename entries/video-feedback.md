---
name: video-feedback
title: Video Feedback
category: distortion-and-lens
aliases: [feedback loop, infinity tunnel, camera pointed at screen, droste effect, recursive video, feedback tunnel, echo tunnel, analog feedback]
media: [canvas, webgl]
---

# Video Feedback

The output fed back as input — a camera pointed at its own monitor — spawning
recursive tunnels, echo corridors, and self-organizing psychedelia. One cheap
loop, endless structure.

## You know it when you see

- Infinite tunnels of the frame inside itself, receding and rotating
- Motion leaving recursive echoes that spiral inward/outward
- The Droste effect: a picture containing itself containing itself
- Analog synth visuals: blooming, smearing self-organizing patterns from almost nothing

## Dials

- **transform per iteration** — the tunnel's DNA: scale (in = tunnel deepens away, out = blooms toward viewer) + rotation (spiral) + translation (drifting corridor); tiny changes, radically different structures
- **decay/gain** — feedback opacity: <1 fades history (echo), ≥1 blooms toward white (gate it or it saturates); per-channel gain drifts the hue each pass
- **injection** — what seeds the loop: live drawing, a logo, [[particles]], camera input; the seed is a minority of pixels — the loop does the rest
- **per-pass treatment** — any effect applied inside the loop compounds: slight blur = dreamy melt, [[chromatic-aberration]] = rainbow drift, [[refraction-displacement]] = organic writhing, hue-rotate = the psychedelic classic
- **recursion legibility** — crisp nested frames (Droste, needs clean edges) vs fully dissolved abstraction (heavy per-pass treatment)

## Techniques

- **Canvas feedback** — draw the canvas onto itself each frame with a
  transform (`drawImage(canvas, ...)` scaled/rotated about center) at <1
  alpha, then draw the seed on top. Ten lines; the whole effect.
- **WebGL ping-pong** — two framebuffers alternating read/write (same
  machinery as [[liquid-ripple]] simulation); per-pass shader treatment
  composes freely. The high-quality register — canvas version blurs
  progressively from resampling (which can be the aesthetic).
- **Droste (GLSL)** — the log-polar/complex-log mapping for the true
  conformal spiral (escher-style); distinct from naive scale-feedback and
  worth the fancier math when the *picture-in-picture spiral* is the ask.
- **CSS approximation** — nested iframes/element copies scale poorly;
  feedback belongs on canvas.

## Starting points

- Shadertoy: search "feedback" (buffer-based), "droste"
- Analog video-synth community (Vidiot, LZX) reference footage for the
  organic register worth imitating
- The canvas ten-liner needs no library

## Search queries

- `canvas drawimage self feedback loop tunnel`
- `webgl ping pong feedback texture effect`
- `droste effect shader log polar`
- `analog video feedback emulation`

## Related

[[motion-blur-trails]] (feedback at echo strength), [[liquid-ripple]]
(shares ping-pong machinery), [[kaleidoscope]] (fold + feedback = deep
psychedelia), [[chromatic-aberration]] + [[glow-bloom]] (per-pass compounding
favorites), [[crt-scanlines]] (the original medium — camera at CRT),
[[audio-reactive]] (feedback transforms wired to sound is the VJ classic).
