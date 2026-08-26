---
name: time-of-day
title: Time of Day / Sky Moods
category: light-and-depth
aliases: [day night cycle, sunset, golden hour, dusk, dawn, night mode scene, blue hour, sky gradient, sun position, moonlight]
media: [css, canvas, webgl]
---

# Time of Day / Sky Moods

The hour as a color-and-light system — golden hour's warm rake, blue hour's
cool hush, night's compressed palette. A scene (or UI) that knows what time
it is, and possibly moves through time.

## You know it when you see

- Sky gradients that name the hour: peach-to-cyan dawn, orange-magenta sunset, deep indigo night
- Long warm shadows (golden hour) vs short neutral ones (noon) vs blue fill (overcast/dusk)
- Scenes or hero sections that shift with the user's local time
- Night scenes that stay *readable*: blue-shifted, not just darkened, with warm artificial-light pools

## Dials

- **sky ramp** — the 2-4 stop vertical [[gradients]] that *is* the hour; horizon color carries most of the signal
- **sun/moon vector** — light direction and length of shadows; elevation drives warmth (low sun = warm key + cool fill, the golden-hour formula)
- **palette compression** — night compresses value range and desaturates toward blue, punctuated by warm emissive pools ([[glow-bloom]] windows/lamps); the day-for-night grading trick
- **atmosphere** — haze amount (distance fading toward sky color) grows at dawn/dusk; [[volumetric-light]] at low sun angles
- **transition behavior** — static hour (a chosen mood), stepped (day/night themes), or continuous cycle (interpolating all dials over time — keyframe the ramps, don't compute a sun simulation unless it's the point)

## Techniques

- **CSS time-theming** — pick a palette by local hour (JS sets a class /
  custom properties); sky ramps as layered gradients. Right for UI moods and
  illustrated scenes; pre-design 3-5 keyframe palettes and interpolate.
- **GLSL sky + sun** — gradient ramp by `uv.y` blended by sun elevation
  uniform, sun disc + [[glow-bloom]], haze mix by depth. The scene-shader
  version; physical sky models (Preetham/Hosek) exist in three.js (`Sky`)
  when accuracy matters.
- **Lighting rig interpolation (three.js)** — lerp light color/intensity/
  position and fog color between hour presets; drei `Sky` + `Environment`
  handle the sky dome.
- **Day-for-night grading** — a [[duotone-gradient-map]]-style pass (cool,
  compressed, desaturated) over an existing scene instead of relighting.

## Starting points

- three.js `Sky` example (Preetham model) and drei `Sky`
- Color scripts from animation studios (searchable: "color script") — the
  reference art form for hour-by-hour palettes
- Golden-hour photography guides for the light-direction vocabulary

## Search queries

- `three.js sky example sun position preetham`
- `css theme by time of day custom properties`
- `day night cycle palette interpolation game`
- `color script animation time of day`

## Related

[[gradients]] (the sky is one), [[weather-effects]] (hour + weather = the
full mood matrix), [[volumetric-light]] + [[glow-bloom]] (low-sun and night
emissives), [[vignette]] + [[film-grain]] (night-cinema stack),
[[color-roles]] (time-theming must preserve the roles), [[scene-staging]]
(hour presets are staging presets).
