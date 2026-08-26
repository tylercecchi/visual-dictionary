---
name: ceramic-glaze
title: Ceramic / Glaze
category: surface-and-material
aliases: [porcelain, ceramic, glazed pottery, china, enamel, kintsugi, crackle glaze, celadon, terracotta, pottery, glossy white ceramic]
media: [css, svg, canvas, webgl]
---

# Ceramic / Glaze

Fired clay under glass — porcelain's cool white depth, glaze's liquid gloss
pooling in recesses, crackle networks, kintsugi's gold-mended fractures.
The material of care and craft-luxury: harder than [[inflatable]]'s vinyl,
warmer than glass, more precious than plastic.

## You know it when you see

- White or celadon forms with a *wet-looking* gloss that sits on top of a soft body color
- Glaze pooling: color deepening in grooves and recesses, thinning to pale on edges and ridges
- Crackle: fine irregular crack networks *in the glaze layer*, sometimes ink-darkened
- Kintsugi: fracture lines rejoined in gold — damage as ornament
- Blue-on-white painted decoration (delftware/porcelain tradition); terracotta's matte unglazed warmth

## Dials

**The two-layer optics (the core physics)**
- **body + glaze split** — ceramic reads as *two* surfaces: a soft matte body color under a clear glossy film; the highlight belongs to the film (tight, bright — near [[specular-metallic]] gloss), the color to the body beneath (slightly diffused, [[subsurface-scattering]]-warm in porcelain's thin spots); single-layer rendering reads as plastic
- **glaze pooling** — glaze thickness varies with form: thick in recesses (color deepens, saturates) and thin on edges/ridges (pales toward the body or bisque) — the celadon signature; this is [[ambient-occlusion]]'s map recolored as *saturation*, and it's the number-one ceramic tell
- **gloss register** — high-fire gloss (wet, tight hotspot), satin (softened), matte/bisque (unglazed terracotta — no film at all, pure body); mixed registers on one form (glazed face, bisque foot) read as authentic pottery

**Surface incident**
- **crackle** — fine crack networks in the film only: shallow, non-structural, often stained (tea-crackle amber, ink black); cell scale and irregularity per [[voronoi-cellular]] edge networks at fine scale, gently *following form*
- **kintsugi** — bold fracture paths (real break topology: radiating from an impact, [[voronoi-cellular]] shard logic at large scale) filled with metallic gold ([[specular-metallic]] veins with their own highlight) standing *slightly proud* of the surface; the repair-as-ornament register — celebrated damage, the anti-[[weathering-patina]]
- **painted decoration** — underglaze painting (blue-on-white tradition): brush-stroked motifs *under* the gloss film (decoration gets the glaze's highlight over it, slightly softened); [[illustration-style]] discipline applies to the motifs

**Form & context**
- **thrown geometry** — soft, slightly imperfect rounds; subtle throwing rings (fine concentric ridges catching the sheen); [[shape-language]] at organic-precise
- **register** — gallery porcelain (white on white, [[scene-staging]] soft studio), rustic pottery (terracotta + glaze pools + [[material-texture]] grog speckle), heritage china (painted + gilt edges), design-object (solid bold glazes, the museum-shop palette)

## Techniques

- **CSS ceramic panels** — body color + a gloss film layer: a tight
  white highlight ellipse *plus* a broad soft sheen (two-layer highlight
  structure), edge-paling via a lighter inner rim, recess-deepening via
  saturated inset shadows in the body hue; the two-layer highlight is
  what separates it from [[inflatable]]'s single hotspot
- **SVG crackle & kintsugi** — crackle as a fine Voronoi-edge path
  network at low opacity (stained variant: darker, warm); kintsugi as
  bold shard-boundary paths stroked in gold gradient with a hairline
  highlight offset ([[border-stroke]] as ornament); both clipped to the
  form
- **GLSL/three.js ceramic** — `MeshPhysicalMaterial` with **clearcoat**
  (the glaze film — clearcoat + clearcoatRoughness over a soft-rough
  body) + slight [[subsurface-scattering]] thickness for porcelain;
  pooling via an AO/cavity map driving body saturation and clearcoat
  thickness; crackle/kintsugi as normal+albedo detail maps
  ([[voronoi-cellular]] generated)
- **Throwing rings** — fine concentric normal ripples (radial sine in
  the normal map, or `repeating-radial-gradient` sheen modulation in CSS)
- **Kintsugi as UI metaphor** — gold-seam borders mending split panels
  (a [[page-transitions]]/[[morphing]] moment: break → gold rejoin);
  handle with restraint — one seam, celebrated

## Search queries

- `clearcoat material three.js ceramic glaze`
- `celadon glaze pooling recesses reference`
- `voronoi crackle glaze texture generate`
- `kintsugi effect gold cracks svg`
- `porcelain subsurface clearcoat render`

## Related

[[specular-metallic]] (the film's gloss; kintsugi's gold),
[[subsurface-scattering]] (porcelain's inner light), [[inflatable]] (the
single-layer gloss to contrast against), [[voronoi-cellular]] (crackle and
shards), [[ambient-occlusion]] (the pooling map), [[weathering-patina]]
(damage hidden vs kintsugi's damage celebrated), [[material-texture]]
(bisque/terracotta wing), [[stained-glass]] (fellow glassy-craft),
[[mosaic-tile]] (glazed tile kin), [[illustration-style]] (underglaze
painting), [[shape-language]] (thrown forms).
