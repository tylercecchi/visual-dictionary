---
name: stage-lighting
title: Stage / Concert Lighting
category: light-and-depth
aliases: [concert lighting, club lighting, spotlights, light beams, colored gels, moving heads, strobe, disco ball, laser show, theatrical lighting, rave]
media: [css, canvas, webgl]
---

# Stage / Concert Lighting

The theatrical rig as a composed recipe — colored washes, beams sweeping
through haze, strobes, mirror-ball speckle, and the choreography that binds
them to a beat. Requests arrive as "make it feel like a concert/club/
theater"; this entry assembles the parts.

## You know it when you see

- Visible colored beams fanning and sweeping through hazy air ([[volumetric-light]] in saturated colors)
- Two-color stage washes (magenta/cyan, amber/blue) carving subjects out of darkness
- A field of small light dots orbiting the room (mirror ball); pin-sharp laser lines
- Strobe moments: frozen stop-motion flashes
- Passing-light events: headlight sweeps, emergency red-blue alternation — the same machinery off-stage

## Dials

- **rig vocabulary** — which instruments: wash (broad colored flood), spot/followspot (hard circle, [[vignette]] inverted), beam/moving-head (visible haze shafts that *sweep*), strobe, laser (hairline, no falloff), mirror ball (orbiting speckle [[gobo-shadows]] in motion); 2-3 instruments read as a rig, all of them read as chaos
- **gel palette** — stage color is *saturated and paired*: complementary two-wash (the modeling standard: warm key + cool fill at full chroma) or analogous mono-mood; [[color-roles]] discipline at maximum saturation
- **haze density** — beams are invisible without atmosphere; haze amount sets how much the *air* participates (also softens everything toward bloom)
- **choreography & tempo** — the lighting *score*: slow color crossfades (ballad), beat-locked cuts and sweeps ([[audio-reactive]] onset gating), strobe bursts (drop); movement without musical logic reads as screensaver ([[motion-ceremony]] at venue scale)
- **strobe safety** — flash rates near 3-30 Hz risk photosensitive seizures: keep below ~3 flashes/sec, provide reduced-motion opt-outs ([[visible-accessibility]] is non-negotiable here)

## Techniques

- **CSS wash + beam fakes** — washes as huge soft radial/conic gradients in
  screen/plus-lighter blend crossfading colors; beams as long skewed
  triangles (`clip-path`) with gradient falloff + blur, rotated from
  off-screen origins; mirror-ball speckle as a `radial-gradient` dot tile
  drifting on a curved path. Good for hero-section atmosphere.
- **Canvas/GLSL beam field** — beams as additive elongated quads/cones from
  source points with angular sweep driven by LFOs or [[audio-reactive]]
  bands; haze via a soft noise layer the beams multiply against;
  [[glow-bloom]] over everything.
- **three.js rig** — `SpotLight`s (with `penumbra`, colored, animated
  target) + volumetric cones (drei `SpotLight` volumetric helper or
  additive cone geometry) + [[scene-staging]] dark stage; mirror ball =
  a real reflective sphere or an orbiting point-light array projecting
  speckle textures.
- **Light events** — the reusable off-stage kit: a colored gradient sweep
  translating across the scene (headlights), alternating red/blue washes
  (emergency), a one-shot white frame (camera flash); all are one animated
  layer each.

## Starting points

- Stage-lighting vocabulary references (wash/spot/beam/gobo terminology
  guides — theater tech sites)
- drei volumetric spotlight examples
- VJ/TouchDesigner communities for choreography patterns

## Search queries

- `drei volumetric spotlight cone example`
- `css light beam clip-path gradient haze`
- `audio reactive stage lighting webgl beat`
- `mirror ball speckle projection effect`

## Related

[[volumetric-light]] (the beam physics), [[glow-bloom]] (over everything),
[[gobo-shadows]] (patterned projections; mirror ball is a moving gobo),
[[audio-reactive]] (the score's driver), [[time-of-day]] (stage = night
register), [[fui]] + [[neon-signage]] (fellow saturated-light fictions),
[[firelight-flicker]] (the intimate opposite), [[visible-accessibility]]
(strobe limits), [[scene-staging]] (the rig's calm studio sibling).
