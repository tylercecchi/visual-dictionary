---
name: weathering-patina
title: Weathering / Patina
category: surface-and-material
aliases: [rust, patina, verdigris, tarnish, aged metal, worn, distressed, oxidized, weathered, corroded, sun faded, worn edges, antique finish]
media: [css, svg, canvas, webgl]
---

# Weathering / Patina

Time made visible on a surface — rust blooming through paint, copper going
green, brass darkening in crevices, edges worn bright by handling. Aging as
a *story system*: every mark implies a history, and wrong placement breaks
the fiction faster than wrong color.

## You know it when you see

- Orange-brown rust spreading from edges, seams, and scratches
- Verdigris: copper/bronze turned blue-green, pooled in recesses
- Worn-through edges: paint gone where hands and corners rub, bright metal showing
- Tarnish gradients on silver/brass — dark in crevices, bright where polished by touch
- Sun-fade: colors bleached unevenly, shadows of removed stickers/objects left behind

## Dials

**Where (the placement logic — the realism core)**
- **exposure map** — weathering follows physics: rust starts at edges, seams, fasteners, and water paths (streaks *run downward* from sources); wear concentrates where touch happens (handles, corners, centers of buttons); fade where light hits; grime where [[ambient-occlusion]] lives — weathering and AO share a map, inverted for wear
- **gravity coherence** — drips, streaks, and runs all obey one down; rotate the element, not the streaks

**What (the vocabulary)**
- **process mix** — rust (iron: orange-brown, pitting, expansion), verdigris (copper: teal-green, powdery), tarnish (silver/brass: darkening film), chipping (paint layers revealing undercoats — each chip shows the *layer stack*), fade (UV: hue-selective — reds die first), grime (deposits in recesses); pick 1-3 processes consistent with the claimed material
- **layer stack honesty** — worn surfaces reveal *what's underneath*: topcoat → primer → base metal; chips and wear expose the stack in order

**How much (the register)**
- **age intensity** — kissed-by-time (subtle edge wear, premium vintage) → well-used (honest wear patterns) → derelict (structural rust, [[brutalism]]-adjacent decay); intensity is a *mood* register, not a slider to max
- **contrast with pristine** — weathering reads strongest against surviving finish (a polished center with worn edges beats uniform distress); uniform aging reads as a texture swatch, not a history

**Finish interplay**
- **specular damage** — weathering kills gloss locally: rust is matte, wear-throughs are bright ([[specular-metallic]] roughness varying *by the weathering map* — the single biggest realism lever in 3D)
- **edge highlighting** — worn edges catch light ([[rim-light]] logic via physical wear); the bright-edge/dark-crevice pair is the antique-finish signature

## Techniques

- **CSS layered overlays** — rust/grime as masked texture layers
  (`multiply` for deposits, lighter metal texture revealed via
  `mask-image` at edges); edge-wear via inset borders/gradients brighter
  than the face ([[border-stroke]] inverted to wear)
- **SVG turbulence maps** — `feTurbulence` thresholded into rust blotches
  and chip masks; displacement for eaten edges
  ([[dissolve-disintegration]]'s erosion at static settings)
- **Procedural weathering (GLSL)** — the exposure map computed: curvature/
  edge distance (SDF or baked) + a down-vector streak term + noise
  breakup, driving color ramps (rust ramp, verdigris ramp) *and* roughness;
  [[procedural-noise]] multi-octave for blotch structure
- **PBR weathering (three.js)** — the standard pipeline: albedo +
  roughness + metalness maps painted/generated with matched weathering
  (Substance-class tools or smart-material logic); vertex AO/curvature
  as placement masks
- **Sticker-shadow fade** — sun-fade register for UI nostalgia: a
  lighter ghost rectangle where something "used to be" ([[period-looks]]
  storytelling detail)

## Search queries

- `procedural rust shader curvature edge mask`
- `svg feTurbulence rust texture overlay`
- `pbr weathering roughness map workflow`
- `worn edge highlight metal css`
- `verdigris copper patina color values`

## Related

[[specular-metallic]] (the finish being destroyed), [[material-texture]]
(the substrate), [[ambient-occlusion]] (shares the placement map),
[[film-stock]] + [[print-artifacts]] (aging for photos and print — this is
aging for *objects*), [[dissolve-disintegration]] (erosion machinery),
[[stickers-badges]] (wear registers on collectibles), [[brutalism]]
(derelict register), [[skeuomorphism]] (aged physical UI), [[rim-light]]
(worn-edge light), [[period-looks]] (instant history).
