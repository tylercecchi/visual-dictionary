---
name: subsurface-scattering
title: Subsurface Scattering
category: light-and-depth
aliases: [sss, skin glow, wax glow, translucency, light through skin, backlit leaves, jade, candle wax, glowing from within, translucent material]
media: [css, svg, canvas, webgl]
---

# Subsurface Scattering

Light entering a translucent material, bouncing inside, and exiting elsewhere
— the red glow through a backlit ear, wax luminous around a flame, leaves lit
from behind, jade's inner depth. The difference between *solid* and *alive*.

## You know it when you see

- Thin parts of a backlit object glowing in the material's inner color (ears, fingers, petals, wax edges)
- Soft light "bleeding" past hard shadow boundaries on skin — shadows never fully black, edges warm
- Materials with inner depth: jade, marble ([[stone-veining]] polished register), milk, gummy candy
- Grapes/gummies: dark body, luminous rim where thin ([[rim-light]]'s translucent twin)

## Dials

- **thickness response** — the defining dial: glow intensity inversely tracks thickness — thin edges blaze, thick cores stay dense; anything glowing uniformly reads as [[glow-bloom]], not SSS
- **scatter color** — the material's *interior* hue, often different from its surface: skin scatters red-orange, wax warm amber, leaves yellow-green, jade blue-green; the exit light wears the inside's color
- **shadow softening** — scattering erodes hard shadow terminators: boundaries blur and warm instead of cutting ([[toon-outline]]'s banding inverted); on faces this is most of what "soft/waxy render" means
- **depth of penetration** — shallow (skin: millimeter warmth at edges) vs deep (gummy/jade: the whole volume participates); deep + saturated = the candy register
- **light position leverage** — SSS is mostly invisible front-lit and maximal backlit; interactive versions that let light swing behind the subject deliver the payoff ([[cursor-effects]] as the light)

## Techniques

- **CSS gummy/wax fakes** — layered gradients: a saturated inner
  radial glow positioned opposite the light + darker core + bright thin-edge
  ring; combined with [[inflatable]]'s hotspot recipe it makes convincing
  gummy buttons/blobs.
- **SVG translucent illustration** — per-shape: base fill + an inner-glow
  gradient (scatter color) strongest along the backlit edge +
  `feGaussianBlur`ed light bleed past the silhouette on that side.
- **Thickness-map SSS (GLSL/three.js)** — the standard real-time fake:
  a baked thickness (or SDF-distance) map; light from behind ×
  thinness × scatter color added to the surface —
  `pow(saturate(dot(V, -L + N*distort)), power) * thinness`. three.js
  `MeshPhysicalMaterial` ships `transmission`/`thickness`/`attenuationColor`
  for the physical version; drei helpers exist.
- **2D SDF thickness** — for flat shapes: distance-from-edge
  ([[sdf-rendering]]) as the thickness map — edges thin, centers thick; the
  same formula gives glowing-edged gummy type in a fragment shader.
- **Shadow-edge treatment** — in any medium: blur + warm-shift the
  shadow terminator specifically (not the whole shadow); the cheapest
  single move toward "skin."

## Starting points

- The fast-SSS approximation (Frostbite/Colin Barré-Brisebois
  "approximating translucency" — the formula everyone implements)
- three.js `MeshPhysicalMaterial` transmission/thickness docs
- Shadertoy: search "subsurface", "sss fake"

## Search queries

- `fast subsurface scattering approximation thickness map`
- `three.js meshphysicalmaterial transmission thickness attenuation`
- `glsl sss backlit translucency shader`
- `gummy jelly material webgl`

## Related

[[rim-light]] (light around vs through — they compose on backlit subjects),
[[glow-bloom]] (uniform emission vs thickness-driven), [[stone-veining]]
(backlit onyx is SSS), [[stained-glass]] (full transmission, no scatter),
[[inflatable]] (gummy = inflatable + SSS), [[caustics]] (what exits the
other side), [[frosted-glass]] (scattering at a surface vs in a volume),
[[sdf-rendering]] (2D thickness), [[scene-staging]] (backlight rigs).
