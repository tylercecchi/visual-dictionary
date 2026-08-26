---
name: light-on-flat
title: Light on Flat UI
category: light-and-depth
aliases: [fake lighting, studio light on ui, lit interface, light source ui, gradient lighting, sheen lighting, ambient light ui, lighting direction]
media: [css, svg, webgl]
---

# Light on Flat UI

Photographic lighting applied to interfaces that have no 3D scene — a
consistent imaginary light source expressed through gradients, sheens, and
shadows, making flat panels read as *lit* rather than colored. The unifying
theory behind several other entries.

## You know it when you see

- Surfaces subtly brighter on top (or toward one corner) as if lit from there
- A UI that feels dimensional and "premium" though nothing is skeuomorphic
- Consistent world-building: highlights, shadows, and glows all agreeing on where the light is
- Dark UIs where panels emerge from black via edge light rather than borders
- The failure: a top-lit button beside a bottom-lit card — nothing you can point at, but the scene feels wrong

## Dials

- **light position & angle** — top (neutral standard), top-left (print heritage), or a dramatic side/corner key; *one* choice, global — this dial is the entry's whole law
- **light temperature** — warm key + cool shadow (classic, alive) vs neutral (clinical); tints borrowed into [[color-roles]] surface tokens
- **intensity gradient span** — how much brighter the lit edge is (2-4% luminance = subliminal premium; 10%+ = visible gloss trending [[skeuomorphism]])
- **falloff across the page** — does light attenuate with distance (hero bright, footer dim — a page-scale [[gradients]] ramp) or stay uniform?
- **responsiveness** — static light vs cursor-as-light ([[cursor-effects]] spotlight, normal-mapped surfaces) vs time-of-day-driven ([[time-of-day]] tinting the UI)

## Techniques

- **Surface gradients** — every panel gets a barely-there vertical
  `linear-gradient` (lighter at the lit edge) instead of flat fill; one
  token-ized gradient reused everywhere *is* the light source.
- **Edge lighting** — the 1px lighter top border (inset `box-shadow` white
  at low alpha) on raised surfaces + darker bottom edge: the compressed
  highlight/shadow pair; already the practice in [[elevation]] and
  [[frosted-glass]] — here it's systematized.
- **Consistent shadow vector** — all `box-shadow` offsets obey the light
  angle (top light = `0 Npx` shadows; corner key = diagonal offsets);
  audit for violators.
- **Specular accents** — [[shimmer-sheen]] bands and gloss dots placed
  *where the light would hit*, not decoratively.
- **Real lighting math on DOM (advanced)** — cursor-lit cards with a
  normal-map ([[material-texture]]) in a small WebGL layer, or CSS
  `radial-gradient` positioned by pointer as a cheap Lambert term.

## Starting points

- No library — this is a system discipline
- Josh Comeau's shadow/lighting CSS articles (the light-source mental model)
- Game UI lighting breakdowns (searchable) for the dramatic register

## Search queries

- `consistent light source ui design shadows highlights`
- `css subtle surface gradient panel lighting`
- `cursor light normal map card webgl`
- `dark ui edge highlight instead of border`

## Related

The theory unifying [[elevation]] (shadows), [[skeuomorphism]] (its maximal
form), [[frosted-glass]] (edge light), [[shimmer-sheen]] +
[[specular-metallic]] (speculars), [[glow-bloom]] (emissive sources in dark
UI), [[scene-staging]] (the real-3D version), [[time-of-day]] (animated key
light), [[gradients]] (the medium).
