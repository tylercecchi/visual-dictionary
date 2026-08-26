---
name: velvet-plush
title: Velvet / Plush
category: surface-and-material
aliases: [velvet, plush, fur, suede, felt, velour, soft pile, fuzzy, brushed fabric, teddy, luxury fabric, nap]
media: [css, svg, canvas, webgl]
---

# Velvet / Plush

Pile fabrics — surfaces made of countless tiny fibers standing up, whose
color and sheen change with the direction you (or the light) stroke them.
The luxury-and-comfort register: velvet's deep directional shimmer, felt's
matte softness, plush's huggable depth.

## You know it when you see

- Deep saturated fabric whose brightness *shifts in patches* — light and dark pools where the nap lies in different directions (crushed velvet)
- Edges that glow: pile catches light at silhouettes, giving fabric a soft [[rim-light]] halo
- Felt's flat matte with tiny fiber fuzz at edges; suede's soft directional stroke marks
- Fur/plush: visible strand clumps, deep shadow between tufts

## Dials

**Pile behavior (the physics that sells it)**
- **anisotropic sheen** — brightness depends on nap direction vs light: stroked-toward-light pools dark, stroked-away pools bright (the counterintuitive velvet law); rendered as a direction *field* modulating luminance ([[specular-metallic]]'s anisotropy dial, fabric edition)
- **nap field structure** — uniform nap (formal velvet, one direction), crushed (patchy direction field — [[procedural-noise]] driving direction = the crushed-velvet generator), stroked marks (finger-drag trails in suede — an *interactive* register: [[cursor-effects]] writing into the nap field)
- **edge glow** — pile scatters light at grazing angles: silhouettes brighten (fresnel-like — velvet is the fabric that *glows at its edges* while staying deep in the middle; the exact inverse of gloss); this is velvet's single strongest tell
- **depth of color** — pile traps light: blacks go *very* black, saturated hues go deep and rich ([[color-roles]]: velvet earns higher saturation than flat surfaces at the same luminance)

**Texture & register**
- **pile length** — micro (suede/felt: texture only) → short (velvet: sheen behavior) → long (plush/fur: visible strands, clumping, real geometry); length picks the technique tier
- **fiber evidence** — edge fuzz (tiny irregular silhouette), sparse catch-light fibers, tuft shadowing ([[ambient-occlusion]] between clumps); crisp vector edges kill plush instantly
- **register** — luxury (deep jewel velvet + [[rim-light]] + dark staging), cozy (warm plush, soft [[light-on-flat]]), toy (bright teddy fur — [[inflatable]]'s palette warmth), heritage (worn velvet: [[weathering-patina]] crushed-flat patches where touched)

## Techniques

- **CSS velvet approximation** — a deep saturated base + large soft
  radial "nap pools" (2-3 gradients, slight hue-consistent luminance
  shifts) + a bright *inner* edge glow (`inset box-shadow` in a lighter
  tint at low blur — the edge-glow tell) + fine [[film-grain]]; reads
  convincingly at panel scale
- **SVG felt/fuzz** — matte fill + `feTurbulence`-displaced outline for
  edge fuzz; suede stroke-marks as soft directional gradient sweeps
- **GLSL velvet shading** — the real edge law:
  `velvet = pow(1 - abs(dot(N, V)), k)` added as a sheen term (inverse
  fresnel) + anisotropic luminance from a nap-direction field texture;
  crushed velvet = noise-warped direction field; interactive stroking =
  writing the pointer's drag vector into that field ([[liquid-ripple]]'s
  buffer machinery storing directions instead of heights)
- **three.js** — `MeshPhysicalMaterial.sheen`/`sheenColor`/`sheenRoughness`
  (built for exactly this — velvet/fabric sheen); fur/plush via shell
  rendering or strand systems for the long-pile register (heavy; verify
  current approaches)
- **Photographic route** — real velvet/plush texture graded to token
  color ([[image-treatment]]), with the CSS edge-glow layered on top so
  the material responds to the layout's [[light-on-flat]]

## Search queries

- `velvet shader inverse fresnel sheen glsl`
- `three.js meshphysicalmaterial sheen fabric`
- `crushed velvet noise direction field`
- `fur shell rendering webgl technique`
- `css inset glow fabric edge soft`

## Related

[[material-texture]] (the flat-weave family this extends),
[[specular-metallic]] (anisotropy machinery), [[rim-light]] (the edge glow's
light logic), [[subsurface-scattering]] (pile scattering kinship),
[[inflatable]] (plush toys = pile + puff), [[cursor-effects]] (stroke-the-
nap interactivity), [[weathering-patina]] (worn velvet), [[embroidery]]
(thread kin), [[color-roles]] (depth-of-color license), [[light-on-flat]]
(the light it responds to).
