---
name: false-color
title: False Color / Thermal
category: color-and-tone
aliases: [thermal camera, heat map look, infrared, night vision, predator vision, x-ray, ultraviolet, satellite imagery, false colour, sensor look]
media: [css, canvas, webgl]
---

# False Color / Thermal

Imagery wearing a sensor's palette — thermal rainbow, night-vision green,
X-ray inversion. Says "you are seeing through a machine" and instantly
reframes ordinary content as surveillance, science, or sci-fi.

## You know it when you see

- Thermal: luminance mapped onto the iron/rainbow ramp (black→purple→red→yellow→white)
- Night vision: monochrome green, lifted blacks, heavy [[film-grain]], [[vignette]] scope edge
- X-ray: inverted luminance, blue-cyan cast, soft internal glow
- Satellite/NDVI: vegetation reds, terrain false-mapping

## Dials

- **palette ramp** — the entire identity: ironbow (thermal), white-hot/black-hot (military mono), phosphor green (night vision); this is [[duotone-gradient-map]] with a genre-loaded ramp
- **what drives the ramp** — plain luminance (cheap, fine) vs a fake "heat" signal (blurred + biased toward skin-tones/warm hues — reads truer) vs actual data
- **sensor artifacts** — the *believability layer*: heavy grain, low resolution ([[pixelation]] slight), scan-flicker, [[glow-bloom]] on hot spots, reticles/readouts ([[fui]])
- **quantization** — smooth ramp (modern sensor) vs visible banded steps (retro thermal; [[dithering]]'s cousin)
- **edge glow** — X-ray/scan looks want inner-edge emphasis (fresnel/edge detection driving brightness)

## Techniques

- **Gradient-map + artifact stack (GLSL/canvas)** — luminance →
  ramp texture, then grain/vignette/flicker on top. The whole thermal look
  is ~10 lines plus taste.
- **CSS approximation** — grayscale + high contrast + `hue-rotate`/overlay
  blends gets night-vision-ish for DOM content; SVG `feComponentTransfer`
  for real ramp control without canvas.
- **Fake heat signal** — blur the source, boost warm-hue and mid-luminance
  regions, add slow [[procedural-noise]] drift so "heat" breathes.
- **Edge/X-ray** — Sobel edges or fresnel term (3D) added into the ramp
  input; invert for the radiograph read.

## Starting points

- Ironbow/thermal palette references (searchable ramp charts to sample into
  a 256×1 texture)
- Shadertoy: search "thermal", "night vision", "xray"
- SVG filter ramp recipes ([[duotone-gradient-map]] entry's techniques carry
  over directly)

## Search queries

- `ironbow thermal palette colormap values`
- `glsl thermal camera effect gradient map`
- `night vision shader green grain vignette`
- `svg feComponentTransfer false color`

## Related

[[duotone-gradient-map]] (the mechanism), [[film-grain]] + [[vignette]] +
[[pixelation]] (the believability stack), [[fui]] (the interface chrome
around the sensor feed), [[glow-bloom]] (hot spots), [[crt-scanlines]]
(the display it's viewed on).
