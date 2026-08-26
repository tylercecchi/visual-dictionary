---
name: lens-flare
title: Lens Flare
category: light-and-depth
aliases: [flare, sun flare, anamorphic streak, light streak, starburst, ghosting artifacts, jj abrams flare]
media: [css, svg, canvas, webgl]
---

# Lens Flare

The lens confessing to the light — ghost discs marching across the frame,
starburst spikes, and the horizontal cyan streak of anamorphic glass. Says
"camera" louder than any other artifact.

## You know it when you see

- A chain of translucent circles/polygons along a line through the bright source
- Star spikes radiating from lights (diffraction starburst)
- A wide horizontal blue-cyan streak across bright points (anamorphic/cinematic)
- A washy veil of light when the source is just off-frame

## Dials

- **element recipe** — which artifacts and how many: ghosts, halo ring, starburst, streak, veil; restraint separates cinematic from video-game-2005
- **ghost placement** — ghosts sit along the source→center line, mirrored past center; spacing/scale per ghost
- **chromatic edges** — each ghost fringed with [[chromatic-aberration]] reads as real glass
- **occlusion response** — the flare must dim/vanish when the source hides behind content, and swell when revealed; this behavior *is* the realism
- **anamorphic ratio** — how stretched the streak is; color locked near cyan by convention

## Techniques

- **Billboard sprites along an axis (canvas/WebGL/DOM)** — compute the
  source→center vector, place ghost sprites at fractions along it, opacity
  driven by source visibility. The classic technique; works even in DOM for
  UI suns.
- **Screen-space GLSL flare** — threshold bright pixels, sample at scaled/
  mirrored UVs for ghosts, blur directionally for streaks. Right when flares
  must come from arbitrary scene content, not one known light.
- **Occlusion testing** — raycast (three.js `Raycaster`) or depth-sample at
  the source position to drive visibility; don't skip it.
- **CSS/SVG static flare** — gradients + a starburst SVG for a fixed
  decorative flare in hero art; no behavior, purely compositional.

## Starting points

- drei `Lensflare` / three.js lensflare examples — sprite-chain, ready-made
- Shadertoy: search "lens flare" (musk's pseudo lens flare is the famous
  screen-space reference)
- `postprocessing` (pmndrs) has flare/light-streak effects — verify currency

## Search queries

- `three.js drei lensflare occlusion`
- `shadertoy pseudo lens flare ghosts`
- `anamorphic streak shader horizontal blur`
- `starburst diffraction spikes shader`

## Related

[[glow-bloom]] (the base layer flares sit on), [[chromatic-aberration]]
(ghost fringing), [[volumetric-light]] (shafts from the same source),
[[depth-of-field]] (the other "camera was here" artifact — they travel
together), [[specular-metallic]] (glints spawn micro-flares).
