---
name: iridescence
title: Iridescence / Holographic
category: surface-and-material
aliases: [holographic, oil slick, soap bubble, pearlescent, thin film, rainbow sheen, foil, opalescent, y2k chrome]
media: [css, canvas, webgl]
---

# Iridescence / Holographic

Color that shifts across the surface and with viewing angle — soap-bubble,
oil-slick, holographic-foil rainbows rather than a single fixed hue.

## You know it when you see

- Rainbow gradients that sweep across a surface as it (or the cursor) moves
- Oil-on-water or soap-film color bands
- Holographic trading-card / foil-sticker shine
- Pearl or opal: soft multi-hue shimmer inside a pale surface

## Dials

- **hue range** — full rainbow (holo foil) vs narrow band (pearl: pink-green-blue)
- **band frequency** — wide slow sweeps vs tight oil-slick striations
- **angle dependence** — how strongly color tracks view/normal angle (or its stand-ins: cursor position, scroll, gyroscope)
- **base layer** — iridescence over dark (oil slick, chrome) vs over light (pearl)
- **saturation** — candy holo vs subtle sheen

## Techniques

- **CSS animated/interactive gradients** — a multi-hue `linear-gradient`
  moved by cursor position (custom properties) with `background-blend-mode`
  over a texture. The pokemon-card-foil approach; right for cards and UI.
- **GLSL hue-by-angle** — map a rainbow ramp (or thin-film interference
  approximation) to `dot(normal, viewDir)` plus a noise term. Right for
  canvas/3D and for "true" angle behavior.
- **three.js physical materials** — `MeshPhysicalMaterial.iridescence`
  implements actual thin-film interference; drei environments make it pop.
- **Matcap textures** — bake the rainbow into a matcap; cheapest convincing
  3D holo.

## Starting points

- three.js `MeshPhysicalMaterial` iridescence docs
- The pokemon-cards-css project (GitHub) — the canonical CSS holo-foil
  reference, worth reading even for non-card UI
- Shadertoy: search "thin film interference", "iridescent"

## Search queries

- `css holographic foil card effect pointer`
- `three.js MeshPhysicalMaterial iridescence thin film`
- `glsl thin film interference shader`
- `matcap holographic texture`

## Related

[[specular-metallic]] (iridescence usually rides on a reflective base),
[[shimmer-sheen]] (the moving highlight without the rainbow),
[[procedural-noise]] (breaks up the bands organically).
