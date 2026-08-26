---
name: frosted-glass
title: Frosted Glass
category: surface-and-material
aliases: [glassmorphism, backdrop blur, translucent panel, milky glass, acrylic, vibrancy, blur-behind]
media: [css, webgl]
---

# Frosted Glass

A translucent surface that blurs whatever sits behind it, reading as a pane of
etched or fogged glass floating above the content.

## You know it when you see

- You can see the content behind the panel, but smeared/blurred
- Panels feel like physical layers of glass, not painted rectangles
- Colors from the background softly tint the surface
- Usually paired with a faint border catching "light" on one edge

## Dials

- **blur radius** — how frosted; low = wet glass, high = heavy fog
- **surface tint & opacity** — the milkiness; white tint = iOS-like, dark tint = macOS dark vibrancy
- **saturation boost** — backdrop saturation is often raised (120-180%) so the blur doesn't go muddy
- **border highlight** — 1px semi-transparent light border on top edge sells the pane
- **noise overlay** — faint [[film-grain]] hides banding in the blur

## Techniques

- **CSS `backdrop-filter: blur() saturate()`** — the standard. Right choice
  for almost all UI. Watch: costs compositing performance when stacked or
  animated; needs a fallback background where unsupported.
- **Pre-blurred image layers** — blur the known background asset once and
  reveal it through the panel. Right when the background is static and
  `backdrop-filter` is too slow.
- **WebGL two-pass blur of the scene texture** — render scene to texture,
  blur, sample inside the panel region. Right inside canvas/WebGL apps where
  CSS can't reach, or when the glass must also [[refraction-displacement|refract]].

## Starting points

- Plain CSS is usually sufficient — no library needed
- pmndrs `MeshTransmissionMaterial` (three.js/drei) — physical glass with
  blur + refraction for 3D scenes
- Apple HIG "materials" and Windows "acrylic" docs — canonical dial values

## Search queries

- `css backdrop-filter glassmorphism performance`
- `three.js drei MeshTransmissionMaterial`
- `webgl blur behind panel render to texture`

## Related

[[refraction-displacement]] (add it for "liquid glass" — frost + bend),
[[film-grain]] (the anti-banding overlay), [[elevation]] (glass panes are an
elevation language), [[shimmer-sheen]] (edge light sweep on glass).
