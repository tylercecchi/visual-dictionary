---
name: underwater
title: Underwater
category: light-and-depth
aliases: [under the sea, submerged, deep sea, ocean scene, aquarium, diving, sunken, beneath the surface, murky depths]
media: [canvas, webgl]
---

# Underwater

The composed recipe for "we are below the surface" — a scene register built
from ingredients this dictionary already has, in fixed proportions. Worth its
own entry because requests come as "make it underwater," not as the parts.

## You know it when you see

- Everything tinted toward the water column (teal/blue), losing warmth with depth
- [[caustics]] webs dancing on every upward-facing surface
- Light shafts from a wobbling surface above ([[volumetric-light]])
- Drifting particulate ("marine snow"), bubbles rising, gentle global sway
- Distance dissolving fast into murk (dense fog, short visibility)

## Dials

- **depth register** — snorkel-bright (turquoise, strong caustics, visible surface) → mid-water (blue, shafts, murk) → abyss (near-black, bioluminescent accents [[glow-bloom]]); depth picks every other dial
- **murk density** — underwater fog is *dense and colored*: distance fades to the water color within meters; the strongest single "submerged" cue
- **absorption curve** — water eats red first: warm colors desaturate/die with distance and depth (grade reds down; the physics the eye knows)
- **surface presence** — visible wobbling ceiling ([[liquid-ripple]] seen from below, bright, refracting sky) vs implied only by shafts
- **sway** — a global slow oscillation ([[procedural-noise]]-driven) on everything loose: plants, particles, camera; amplitude sets calm vs current

## Techniques

- **The stack (WebGL/three.js)** — colored exponential fog + caustics
  projected on surfaces + god-ray shafts + particle drift + slight
  [[refraction-displacement]] full-screen wobble. Each piece is its own
  entry; underwater = tuning them to one register.
- **2D/canvas version** — teal gradient field + scrolling caustic texture
  overlay (screen blend) + drifting bubble/snow [[particles]] + sway on
  elements; convincing for illustration/UI scenes without 3D.
- **Post-only treatment** — grade existing content (teal [[duotone-gradient-map]],
  crushed warm channel) + wobble + vignette; "underwater-izes" any scene
  cheaply.
- **Surface ceiling** — an inverted [[liquid-ripple]] plane with sky-bright
  refraction; Evan Wallace's WebGL water demo shows the full above/below kit.

## Starting points

- Evan Wallace WebGL water — the canonical surface+caustics reference
- Shadertoy: search "underwater", "ocean floor"
- three.js fog + drei `Caustics` + the [[volumetric-light]] entry's god-rays

## Search queries

- `three.js underwater scene fog caustics god rays`
- `underwater color grading red absorption`
- `evan wallace webgl water above below surface`
- `marine snow particles drift webgl`

## Related

The recipe composes [[caustics]], [[volumetric-light]], [[liquid-ripple]],
[[particles]], [[refraction-displacement]], [[glow-bloom]] (bioluminescence),
[[procedural-noise]] (sway); graded via [[duotone-gradient-map]]; kin to
[[time-of-day]] and [[weather-effects]] as a composed scene register.
