---
name: rubber-soft-touch
title: Rubber / Soft-Touch
category: surface-and-material
aliases: [rubber, silicone, soft touch, matte finish, rubberized, tpu, squishy solid, gasket, grippy, tool grip, matte black hardware]
media: [css, svg, canvas, webgl]
---

# Rubber / Soft-Touch

The engineered matte elastomers — silicone bands, rubberized tool grips,
soft-touch gadget coatings, gaskets and bumpers. The material language of
*grip, protection, and quiet premium*: modern hardware's favorite finish,
and increasingly UI's ("soft-touch buttons").

## You know it when you see

- Deep matte surfaces with one very soft, very broad highlight — never a sharp hotspot
- Molded forms: generous radii, parting lines, molded-in logos and texture (debossed, not printed)
- Dust and fingerprints showing (the soft-touch curse — worn glossy patches where touched)
- Silicone translucency at thin edges; watch-band and phone-case color language
- Chunky protective bumpers ringing devices and cards

## Dials

**Finish**
- **sheen register** — dead matte (industrial rubber) → soft-touch (a whisper of broad sheen — the premium register) → silicone satin (slightly waxy, faint translucency); the highlight is always *broad and dim*, its position obeying [[light-on-flat]]; a tight hotspot instantly re-reads as plastic ([[inflatable]]'s vinyl is the contrast case)
- **micro-texture** — fine matte stipple (sandblasted mold), grip knurls/ribs (functional pattern — parallel ribs, dot grids, [[pcb-circuit]]-adjacent regularity), or smooth; texture shows only in the sheen band, not in the flat fields
- **translucency at thinness** — silicone's tell: thin edges and features glow faintly with transmitted light ([[subsurface-scattering]]'s thickness law, shallow register)

**Form (rubber is molded, and shape carries the material)**
- **molded geometry** — soft uniform radii everywhere ([[shape-language]] at radius-generous), thickness that looks moldable, parting lines and sprue marks for the honest register; sharp creases break the material fiction
- **deboss language** — logos/labels *molded in* (a shallow recessed copy with [[ambient-occlusion]] shading), not printed on; the deboss + matte pair is the silicone-band signature
- **bumper grammar** — protective lips wrapping edges, contrasting-color gaskets, plug/port covers; rubber as the *guard* material in a two-material design (the tool-grip pattern: hard body + rubber grip zones — [[color-roles]]: grip zones often carry the accent)

**Behavior**
- **squish response** — presses *give*: local flatten + slight bulge, slow damped return ([[interaction-feel]]'s resistance with high damping — rubber springs back *without* bounce, unlike [[inflatable]]'s wobble); buttons depress with visible travel
- **wear story** — touched zones go subtly glossy, edges gray, dust clings ([[weathering-patina]]'s exposure map with rubber-specific outcomes: shine where worn instead of wear-through)

## Techniques

- **CSS soft-touch surfaces** — near-flat fills + one *broad low-contrast*
  gradient sheen (a wide soft `linear-gradient` band, not a hotspot) +
  optional stipple [[film-grain]] at whisper level; deboss via paired
  inset shadows (dark below-inner-edge, light above — the reverse of
  emboss ([[skeuomorphism]]'s toolkit inverted))
- **Squishy buttons** — press states: scale 0.97 + inner-shadow deepen +
  a slow-out return transition (no overshoot — damping is the material);
  [[interaction-feel]] spring configs at high damping
- **SVG molded details** — rib/knurl patterns as `<pattern>` strokes
  masked to grip zones; parting lines as hairline paired light/dark
  strokes along form edges
- **GLSL/three.js** — high roughness (0.7-0.9) + slight sheen, normal-
  mapped stipple and knurls; thin-edge translucency via
  [[subsurface-scattering]]'s thickness term at low depth; the
  matte-black-hardware register is roughness + a good [[scene-staging]]
  environment (matte lives or dies by its lighting)
- **Two-material composition** — the product-design pattern in UI: hard
  surface ([[specular-metallic]] or gloss) + rubber zones (matte, radiused,
  accent-colored) reading as grip/protection affordances

## Search queries

- `soft touch matte material css broad sheen`
- `debossed logo css inset shadows`
- `high roughness sheen material three.js matte`
- `squishy button press animation damped`
- `knurled grip texture pattern svg`

## Related

[[inflatable]] (the taut glossy cousin — squish *with* bounce),
[[specular-metallic]] (the finish spectrum's other end),
[[subsurface-scattering]] (thin silicone glow), [[interaction-feel]]
(damped squish), [[skeuomorphism]] (molded physical UI),
[[shape-language]] (molded radii), [[weathering-patina]] (shine-where-worn),
[[ambient-occlusion]] (deboss shading), [[material-texture]] (the family),
[[light-on-flat]] (matte's demanding light contract).
