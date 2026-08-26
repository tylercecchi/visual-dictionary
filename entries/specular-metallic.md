---
name: specular-metallic
title: Specular / Metallic
category: surface-and-material
aliases: [metallic, chrome, shiny, reflective, polished, brushed metal, specular highlight, glossy, mirror finish]
media: [css, canvas, webgl]
---

# Specular / Metallic

Surfaces that reflect their environment — from a tight glossy highlight on
plastic to full chrome that is nothing *but* reflection.

## You know it when you see

- A bright hotspot that moves as the light/view moves (specular highlight)
- Chrome/silver surfaces mirroring a distorted environment
- Brushed metal: highlights stretched into streaks along the grain
- "Glossy" vs "matte" — the tightness or absence of the hotspot

## Dials

- **roughness** — mirror (0) → tight gloss → soft sheen → matte (1); *the* material dial
- **metalness** — dielectric (plastic: white highlight over base color) vs metal (reflection *is* the tinted color)
- **environment** — what's being reflected; metals look like their envmap, so the envmap choice is a design decision
- **anisotropy** — directional roughness; stretches highlights (brushed metal, vinyl)
- **fresnel** — reflectivity rising at grazing angles; sells realism on everything

## Techniques

- **CSS gradient fakery** — hard-stop gray gradients (the classic "chrome
  text"), optionally cursor-driven. Right for type and flat UI chrome.
- **Matcap (GLSL/three.js)** — sample a sphere-photo by the surface normal;
  entire material baked into one image, no lights needed. Best
  effort-to-quality for stylized 3D metal.
- **Environment-mapped PBR** — `MeshStandardMaterial`/`MeshPhysicalMaterial`
  with an HDRI envmap; roughness/metalness/anisotropy dials as above. The
  right choice for real 3D scenes (drei `Environment` makes it two lines).
- **Screen-space fakes for UI** — a `conic-gradient` rotating with
  device/cursor input reads as metal on cards and buttons.

## Starting points

- drei `Environment` + polyhaven.com HDRIs — instant convincing metal in R3F
- matcap libraries: `nidorx/matcaps` (GitHub) — hundreds of free matcaps
- Shadertoy: search "matcap", "fresnel metal"

## Search queries

- `react three fiber drei environment metal material`
- `matcap shader glsl normal lookup`
- `css chrome metallic text gradient`
- `anisotropic brushed metal three.js`

## Related

[[iridescence]] (rainbow riding on reflection), [[shimmer-sheen]] (the moving
highlight isolated as a UI gesture), [[glow-bloom]] (hotspots want bloom),
[[elevation]] (gloss implies a lit physical world).
