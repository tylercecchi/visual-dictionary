---
name: weather-effects
title: Weather Effects
category: motion
aliases: [rain, rain on glass, snow, snowfall, lightning, storm, drizzle, raindrops, snow accumulation, wind, fog bank]
media: [css, canvas, webgl]
---

# Weather Effects

The sky's repertoire rendered on screen — falling rain and snow, droplets
crawling down glass, lightning strobes, drifting fog. Each weather is a small
recipe of particles, distortion, and light.

## You know it when you see

- Streaked rain falling over a scene; droplets beading and running on a "window"
- Snow drifting with flutter, piling on top edges of elements
- Lightning: full-frame flash, then rumble-jitter, with silhouette reveal
- Fog banks sliding through and swallowing depth

## Dials

- **intensity register** — drizzle/flurry (ambient mood) vs storm (event drama); weather is usually *background* — it must not fight content ([[visual-hierarchy]])
- **wind vector** — the shared slant unifying all layers; gusting (noise-driven wind) is what makes it alive
- **depth layering** — 2-3 particle layers differing in size, speed, blur ([[parallax]]); the single biggest realism upgrade
- **surface interaction** — rain: splash rings at ground contact, droplet refraction on "glass"; snow: accumulation caps on element tops; nothing sells weather like the world responding
- **light contract** — rain darkens and adds [[reflections]] wet ground; snow brightens and hushes; lightning inverts for 2 frames ([[glow-bloom]] burst + shadow flip)

## Techniques

- **Particle rain/snow (canvas/WebGL)** — [[particles]] with per-layer
  velocity/size; rain = fast streaks (motion-stretched quads), snow = slow
  flutter (sine + noise wander). The default implementation.
- **Rain-on-glass (GLSL)** — the celebrated droplet shader: cellular grids
  of drop positions, each a refracting lens ([[refraction-displacement]])
  with trails that merge and run; Shadertoy's "Heartfelt" is the canonical
  reference to port.
- **CSS-only registers** — layered `background-image` gradients animating
  (rain streak tiling), or a few dozen animated snow divs; fine for
  lightweight ambient snow, wrong for rain-on-glass.
- **Lightning** — a screen-space flash layer (2-frame white at low alpha +
  [[glow-bloom]]) triggered on a random gate, optional bolt as jittered
  polyline or generated Lichtenberg branch.
- **Fog** — see [[fire-smoke]]'s domain-warped fog; layered here with depth.

## Starting points

- Shadertoy: "Heartfelt" (rain on glass), search "rain", "snow"
- Codrops weather-effect demos for DOM/canvas implementations
- Game-dev weather system write-ups (layering and intensity management port
  directly)

## Search queries

- `shadertoy heartfelt rain glass port webgl`
- `canvas snow particles layers wind`
- `rain streak particle stretched quad`
- `css animated snow background lightweight`

## Related

[[particles]] (the falling matter), [[refraction-displacement]] (droplet
lenses), [[fire-smoke]] (fog), [[reflections]] (wet ground),
[[glow-bloom]] (lightning), [[time-of-day]] (weather and hour compose the
mood together), [[procedural-noise]] (gusts and wander).
