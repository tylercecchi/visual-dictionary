---
name: material-texture
title: Material Texture (Paper / Fabric / Wood)
category: surface-and-material
aliases: [paper texture, fabric, linen, canvas texture, wood grain, leather, cardboard, tactile, physical material, pbr texture, leather book, old book cover, worn paper]
media: [css, canvas, webgl]
---

# Material Texture

Surfaces that claim to be made of something — paper tooth, woven linen, wood
grain, brushed cardboard. The tactile counterpoint to flat digital color.

## You know it when you see

- Backgrounds with visible paper fiber or weave under the content
- Cards that read as cardstock, kraft, or leather rather than "rectangle"
- Wood/marble/stone grain used as panels or accents
- Print-adjacent digital design (invitations, zines, editorial)

## Dials

- **texture scale** — fiber-fine (believable at reading distance) vs chunky weave (graphic statement); must be resolution-appropriate or it reads as JPEG noise
- **contrast of the texture layer** — barely-perceptible (premium print feel) vs visible grain (craft/rustic); overlay strength is the taste dial
- **lighting response** — flat texture overlay vs texture that shades with light direction (normal-mapped; sells realism instantly)
- **material grammar** — the material must behave: paper folds and tears, fabric drapes, wood has directional grain that should follow the cut
- **palette coupling** — real materials constrain color: kraft browns, paper off-whites; dyeing the texture with [[duotone-gradient-map]] keeps it coherent

## Techniques

- **Tiling texture overlay (CSS)** — a seamless texture image under
  `multiply`/`overlay` blend at low opacity. The standard for paper/linen
  backgrounds; ensure seamless tiling and 2x resolution.
- **Procedural weave/grain (GLSL)** — fabric = two crossed sine/noise
  thread patterns; wood = stretched [[procedural-noise]] rings; paper =
  high-frequency fBm. Right when scale must be infinite or animated.
- **Normal-mapped lighting (WebGL)** — sample a normal map, light it with a
  movable source; texture that responds to cursor-as-light is the premium
  version. Three.js standard materials do this natively; a small custom
  shader does it for 2D.
- **SVG turbulence paper** — `feTurbulence` + `feDiffuseLighting` generates
  lit paper grain with no image asset at all — an underused classic.

## Starting points

- Texture sources: ambientCG / Poly Haven (CC0 PBR sets with normal maps),
  transparenttextures-class tiling packs for CSS
- SVG paper: the `feDiffuseLighting` turbulence recipe (searchable pattern)
- Shadertoy: search "wood grain", "fabric weave", "paper"

## Search queries

- `cc0 seamless paper texture normal map ambientcg`
- `svg feTurbulence feDiffuseLighting paper texture`
- `glsl procedural wood grain rings noise`
- `css texture overlay blend mode multiply subtle`

## Related

[[film-grain]] (the minimal end of this spectrum), [[hatching-sketch]]
(drawn-on-paper wants paper), [[specular-metallic]] (the shiny-material
sibling), [[skeuomorphism]] (materials in service of object-realism),
[[duotone-gradient-map]] (dyeing textures to palette).
