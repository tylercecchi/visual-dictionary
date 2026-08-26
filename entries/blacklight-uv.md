---
name: blacklight-uv
title: Blacklight / UV Fluorescence
category: light-and-depth
aliases: [blacklight, uv light, fluorescent glow, neon reactive, glow in the dark, uv poster, club lighting uv, security ink, highlighter glow, phosphorescent]
media: [css, svg, canvas, webgl]
---

# Blacklight / UV Fluorescence

The world under ultraviolet — a deep violet darkness where ordinary color
dies and *fluorescent* pigments blaze impossibly bright: highlighter inks,
white fabric, security markings, club-poster art. A register with a hard
rule: almost nothing glows, and what glows, *burns*.

## You know it when you see

- A scene crushed to near-black violet-blue, with select elements radiating saturated neon (green, orange, pink, cyan)
- Whites glowing blue-white (optical brighteners — the glowing-teeth-and-lint effect)
- UV poster art: fluorescent inks on black, often [[kaleidoscope]]/psychedelic composition
- Hidden-ink reveals: markings invisible in normal light appearing under the lamp
- Glow-in-the-dark's afterglow cousin: phosphorescent green persisting after lights-out

## Dials

- **the reactive split** — the register's core: a *binary* palette decision — everything is either dead (crushed toward dark violet, desaturated) or reactive (fluorescent, brighter than anything else on screen, [[glow-bloom]]ed); mid-brightness survivors break the fiction
- **fluorescent palette** — reactive colors are a fixed family: highlighter yellow-green, safety orange, hot pink, electric cyan/blue, blazing white; they read *over-saturated* — in shader terms, emissive values above 1.0 feeding bloom ([[color-roles]] replaced wholesale by this palette while active)
- **ambient violet** — the darkness isn't black: a deep violet-blue wash (the lamp's visible spill) tinting everything dead, strongest near the "lamp"; plus optional lamp-source glow in frame
- **what reacts** — the storytelling dial: whites and pale blues react (physics), chosen brand/UI elements react (design), hidden layers react (the *reveal* mechanic — invisible ink, secret annotations appearing under a UV [[cursor-effects]] flashlight)
- **afterglow** (phosphorescence) — the sibling behavior: reactive elements keep emitting after the light leaves, decaying over seconds (green-white, [[motion-blur-trails]]-like persistence per element); glow-in-the-dark stars as UI décor

## Techniques

- **CSS UV mode** — a theme transformation: dead layer =
  `filter: brightness(.3) saturate(.4) hue-rotate()` toward violet (or a
  violet multiply overlay); reactive elements exempted and given the
  fluorescent palette + layered glow shadows ([[neon-signage]]'s halo
  recipe in UV colors). Works as a literal alternate theme
  (`[data-theme="uv"]` — [[seasonal-theming]] machinery for a party mode).
- **UV flashlight reveal** — the interactive register: a [[cursor-effects]]
  radial mask (the lamp's pool) inside which the UV treatment applies and
  hidden reactive content becomes visible (`mask-image` on a hidden layer);
  the treasure-hunt mechanic.
- **GLSL** — luminance/mask-based split: reactive mask (authored or
  by-color) → emissive boost + bloom; everything else → violet-crushed
  grade ([[duotone-gradient-map]] with a UV ramp); lamp proximity as a
  spatial falloff term.
- **Afterglow** — per-element charge/decay state: exposure to the "lamp"
  charges, absence decays (`opacity`/emissive following an exponential);
  a few lines of JS driving custom properties.
- **Print-real register** — actual fluorescent inks exist ([[print-artifacts]]
  spot-color logic: design in the fluorescent Pantone family); flag when
  the deliverable is physical.

## Starting points

- UV/blacklight poster art and club-flyer references for the palette
- The reactive-split logic needs no library — it's a grading + exemption
  system
- Shadertoy: search "blacklight", "uv glow"

## Search queries

- `blacklight uv effect css theme violet glow`
- `uv flashlight reveal hidden content mask cursor`
- `fluorescent emissive bloom shader threshold`
- `glow in the dark decay charge javascript`

## Related

[[glow-bloom]] (reactive elements' engine), [[neon-signage]] (fellow
saturated-on-dark, but neon *is* the source — UV *reveals*),
[[stage-lighting]] (the club rig it belongs to), [[duotone-gradient-map]]
(the dead layer's grade), [[cursor-effects]] (the flashlight),
[[false-color]] (fellow "world under a different light" register),
[[seasonal-theming]] (party-mode deployment), [[period-looks]]
(psychedelic/rave wings), [[print-artifacts]] (fluorescent inks).
