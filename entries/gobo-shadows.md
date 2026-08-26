---
name: gobo-shadows
title: Gobo / Dappled Light
category: light-and-depth
aliases: [window light, blinds shadow, foliage shadow, dappled sunlight, light through leaves, venetian blind light, shadow pattern, gobo lighting, komorebi, lattice shadow]
media: [css, svg, canvas, webgl]
---

# Gobo / Dappled Light

Patterned light and shadow cast across a scene — sun through venetian blinds,
leaf-dapple on a wall, a window frame stretched across a floor. The
photographer's *gobo* (goes-between): instant atmosphere, time-of-day, and
place, projected onto any surface.

## You know it when you see

- Diagonal bands of light/shadow (blinds) raking across a hero image or wall
- Soft organic leaf-shaped light patches trembling on a surface (komorebi)
- A window's cross-frame projected and skewed across a floor or portrait
- Product/editorial shots where the *shadow pattern* is doing the art direction

## Dials

- **pattern vocabulary** — blinds (parallel bands: noir, afternoon), window frame (cross grid: domestic, morning), foliage (organic blobs: garden, calm), lattice/ornament (place-specific); the pattern names the off-screen world
- **projection skew** — the pattern arrives *stretched and sheared* (light comes from an angle): long diagonal elongation reads late-day sun; straight-on projection reads flat and fake — the skew *is* the realism
- **edge softness & contact** — shadow edges sharpen where the casting object is near, soften with distance (real penumbra behavior); uniform crisp edges betray the fake; overall softness sets sun (crisp) vs overcast-diffused (barely there)
- **warmth split** — lit areas warm, shadowed areas cooler and *not just darker* ([[time-of-day]] physics at pattern scale); the two-temperature split is what makes it feel like sunlight rather than a multiply layer
- **motion** — static (a moment), slow drift (passing time — clouds shifting the pattern), or foliage tremble (small [[procedural-noise]] wobble on the organic patterns; the beloved living detail)

## Techniques

- **Blend-mode overlay (CSS)** — the pattern as a layer over content:
  shadow shape in a cool dark at `multiply` + optional warm light layer at
  `soft-light`; skewed via `transform`. Blinds are pure
  `repeating-linear-gradient`; window frames a simple SVG; foliage a
  blurred blob PNG/SVG or [[procedural-noise]] thresholded.
- **SVG gobo kit** — authored shapes (frames, leaves, lattice) blurred with
  `feGaussianBlur` (variable per distance: two blur layers, near-crisp +
  far-soft), skewed, blended; recolorable to the scene.
- **GLSL projection** — sample a gobo texture in a skewed/projected UV,
  multiply (shadow) and add warm (light) with the temperature split;
  animate UV drift + noise wobble. Right for scenes and video; in three.js,
  a real `SpotLight` with a texture (light `map`) projects true gobos with
  correct penumbra.
- **Depth-aware fake (advanced 2D)** — warp the pattern by a depth/normal
  map of the underlying image so bands bend over the subject's form
  ([[refraction-displacement]] machinery pointed at shadows); the detail
  that makes 2D compositing look photographed.

## Starting points

- Photography gobo/cucoloris references for the pattern vocabulary
- three.js SpotLight `map` (projector light) examples
- The CSS blinds-gradient recipe (searchable; no library)

## Search queries

- `css sunlight through blinds overlay multiply`
- `three.js spotlight texture projector gobo`
- `dappled light foliage shadow overlay design`
- `shadow pattern skew depth map warp`

## Related

[[time-of-day]] (the hour the pattern implies), [[light-on-flat]] (the
scene's light contract), [[volumetric-light]] (add haze and the pattern's
beams become visible in air), [[vignette]] (framing partner),
[[procedural-noise]] (foliage tremble), [[image-treatment]] (gobo as a house
photo treatment), [[film-stock]] (the nostalgic composite),
[[weather-effects]] (cloud-drift modulation).
