---
name: firelight-flicker
title: Firelight / Candlelight Flicker
category: light-and-depth
aliases: [candlelight, fireplace glow, campfire light, warm flicker, torch light, cozy glow, dancing light, hearth, lantern light]
media: [css, svg, canvas, webgl]
---

# Firelight / Candlelight Flicker

A living warm light source — the restless glow a flame throws on its
surroundings: breathing intensity, wandering shadows, deep warm-to-dark
falloff. Distinct from [[fire-smoke]] (the flame itself): this is what the
flame *does to the room*. The cozy register's engine.

## You know it when you see

- Surfaces bathed in orange-amber light that breathes and trembles
- Shadows that wander slightly, never resting (cast by a moving source)
- Steep falloff: bright warmth near the source plunging to near-black ([[vignette]] with a heartbeat)
- Cozy scenes: hearths, candles, lanterns, campfires — warmth as emotion

## Dials

- **flicker signature** — the realism core: *not* random jitter but layered slow+fast noise — a slow breathing base (0.5-2 Hz) + small fast tremble + occasional deeper dips (a draft); pure `random()` per frame reads as electrical fault ([[neon-signage]]'s flicker), smoothed noise reads as flame
- **what flickers together** — intensity, radius, position, and color temperature move *in correlation* (brighter = slightly whiter and larger; dimmer = redder and tighter); coupling the channels is what sells one physical source
- **falloff steepness** — candle (intimate meters, everything beyond is void) vs fireplace (room-filling with dark corners) vs torch/campfire (mid); the darkness *around* the light is half the effect ([[time-of-day]] night as the canvas)
- **shadow dance** — cast shadows lengthen/shift subtly with the source's wander; even a 1-2px shadow-offset oscillation on nearby objects reads as firelight
- **ember palette** — the ramp from source outward: near-white core → amber → deep orange-red → cool dark ([[gradients]] warm ramp; the shadows lean blue-purple for the classic warm/cool complement)

## Techniques

- **CSS flicker** — a radial-gradient glow layer animated with keyframed
  opacity/scale at irregular percentages (bake the layered-noise feel into
  the keyframe timing) + `hue-rotate`/brightness micro-shifts; a second
  slower keyframe set on shadow offsets. Right for cozy UI moments and
  hero ambiance.
- **JS-driven light values** — sum 2-3 sine/noise oscillators
  ([[procedural-noise]] 1D) into CSS custom properties (`--flicker-i`,
  `--flicker-x`) consumed by gradients, shadows, and glows; one source of
  truth so everything flickers *together* (the correlation dial).
- **GLSL scene lighting** — a point light whose intensity/position/color
  ride layered noise; per-pixel warm falloff (`smoothstep` distance ramp
  through the ember palette); pair with [[gobo-shadows]]-style flicker on
  a shadow texture for dancing wall shadows.
- **three.js** — `PointLight` with scripted noise on intensity/position +
  warm color lerp; `castShadow` gives the wandering shadows for free;
  add the flame itself from [[fire-smoke]] and [[glow-bloom]] on the core.
- **Ambient-only register** — no visible flame: just the breathing warm
  glow on content edges (cards "lit by an off-screen fire") — the subtlest
  deployment, pure [[light-on-flat]] with a flicker driver.

## Starting points

- The layered-oscillator flicker driver (a 10-line JS pattern; searchable
  as "candle flicker algorithm")
- three.js PointLight + shadow examples
- Game-dev torch-light write-ups (the correlation and falloff craft)

## Search queries

- `candle flicker algorithm noise layers not random`
- `css campfire glow animation keyframes irregular`
- `three.js pointlight flicker intensity noise shadow`
- `warm light falloff shader smoothstep ramp`

## Related

[[fire-smoke]] (the source; this is its light), [[glow-bloom]] (the core's
halo), [[gobo-shadows]] (dancing wall shadows), [[time-of-day]] (night, the
canvas), [[light-on-flat]] (ambient register), [[vignette]] (the darkness
around), [[neon-signage]] (the *wrong* flicker, usefully contrasted),
[[procedural-noise]] (the driver), [[seasonal-theming]] (the December+
deployment), [[motion-ceremony]] (ambient motion budget).
