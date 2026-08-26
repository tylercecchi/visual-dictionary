---
name: ambient-occlusion
title: Ambient Occlusion / Contact Shadows
category: light-and-depth
aliases: [ao, contact shadow, crevice shadow, corner darkening, grounding shadow, soft shadow pooling, ssao, dirt shading, proximity shadow]
media: [css, svg, canvas, webgl]
---

# Ambient Occlusion / Contact Shadows

The soft darkening where surfaces approach each other — crevices, corners,
and the tight pool of shade under a resting object. Not cast by any one light
but by *blocked ambience*; the quiet layer that makes things look grounded
and real rather than pasted.

## You know it when you see

- A small, dark, tight shadow hugging the base of an object (distinct from its longer directional shadow)
- Corners and seams of a room/panel subtly darker than open surfaces
- 3D renders that feel "anchored" vs floating cutouts — AO is usually the difference
- UI cards whose meeting edges show a whisper of pooled shade

## Dials

- **radius** — how far occlusion reaches: tight (millimeters — contact realism) vs wide (soft global corner-darkening, almost [[vignette]] at room scale)
- **intensity & tint** — AO is *never black*: low-opacity, and tinted like shadow ambience (cool, or the surface hue darkened — [[color-roles]] shadow-token logic); crushed-black AO is the amateur tell
- **two-shadow structure** — real grounding = contact AO (tight, dark, directionless) + directional soft shadow (offset by the light, [[light-on-flat]]/[[elevation]] contract); one without the other floats or smears
- **crevice bias** — which geometry darkens: contact points only (objects on ground) vs all concavities (seams, panel gaps, corner joins — the "worn/realist" register that [[skeuomorphism]] leans on)
- **dirtiness** — pushed far, AO becomes grime shading (occlusion + brown tint = accumulated dirt in cracks; the weathering register bordering rust/patina territory)

## Techniques

- **CSS contact shadow** — the two-shadow recipe: one tight dark
  `box-shadow`/ellipse right at the contact edge (`0 1px 2px`, higher
  opacity) + the soft directional elevation shadow; for standing objects, a
  separate blurred ellipse `::after` under the base, squashed (`scaleY`),
  is the classic grounding pad.
- **Gradient crevices** — inner corners/seams get short dark
  gradient strips (inset shadows at panel junctions); the systemized
  version is a token like `--crevice` applied where components meet
  ([[border-stroke]]'s shadow-sibling).
- **SVG/illustration AO** — a multiplied soft-brush layer in concavities;
  in flat illustration ([[illustration-style]]) a single AO pass under
  characters/objects is the fastest realism upgrade.
- **Baked AO (3D pipelines)** — AO baked to texture at build (Blender et
  al.) and multiplied — right for static geometry; runtime **SSAO/GTAO**
  via `postprocessing` (N8AO et al. — verify current best) for dynamic
  scenes; drei `ContactShadows` for the floor-pad case specifically.
- **SDF proximity (2D canvas)** — darken by inverse distance between
  shapes ([[sdf-rendering]] distance fields make 2D contact shadows
  computable, not just painted).

## Starting points

- drei `ContactShadows` / `AccumulativeShadows` — the R3F grounding kit
- `postprocessing`/N8AO for runtime SSAO (check currency)
- Josh Comeau shadow articles (the two-shadow layering logic)

## Search queries

- `css contact shadow ellipse ground element`
- `drei contactshadows accumulativeshadows`
- `n8ao ssao three.js compare`
- `baked ambient occlusion texture blender export`

## Related

[[elevation]] (the directional half of the two-shadow structure),
[[light-on-flat]] (the contract AO operates under), [[vignette]] (AO at
frame scale), [[skeuomorphism]] (crevice bias sells physicality),
[[scene-staging]] (grounding the hero), [[stickers-badges]] (their tight
shadow is contact AO), [[sdf-rendering]] (computable 2D proximity),
[[material-texture]] (grime register neighbor).
