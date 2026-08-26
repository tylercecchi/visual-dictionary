---
name: cutaway-xray
title: Cutaway / X-Ray Views
category: light-and-depth
aliases: [cutaway, cross section, see through, transparent view, ghosted view, exploded interior, x-ray view, section view, internal view, product teardown]
media: [css, svg, canvas, webgl]
---

# Cutaway / X-Ray Views

Showing the inside without losing the outside — walls sliced open, shells
turned translucent, interiors revealed in place. The technical-illustration
register for "here's how it works," distinct from [[false-color]]'s x-ray
*grading*: this is structural revelation.

## You know it when you see

- A product/building with a wedge or wall removed, interior rendered in full detail
- Ghosted shells: the outer body at 10-20% opacity, mechanism solid inside
- Section planes: the cut face marked with [[hatching-sketch]] section fill or a solid cut color
- Magic-lens interactions: a movable circle/plane revealing the layer beneath ([[cursor-effects]] with revelation duty)
- Layer-peel diagrams: anatomy-textbook style stacked systems

## Dials

- **reveal strategy** — cutaway (material removed, cut faces shown), ghost (shell translucent), section (one clean slicing plane), lens (local portal), peel (layers separated — [[long-shadow-isometric]] exploded kin); each answers a different question — cutaway shows *placement*, section shows *profile*, ghost shows *everything at once* (and risks mush)
- **cut-face honesty** — technical convention: cut surfaces get a distinct treatment (hatch fill, solid accent color, or thick [[border-stroke]] outline) so "cut" is distinguishable from "surface"; skipping this is why amateur cutaways confuse
- **interior hierarchy** — the point of the view: the featured mechanism saturated/lit, secondary structure grayed ([[visual-hierarchy]] applied to anatomy); ghosting everything equally shows nothing
- **edge retention** — ghosted shells keep their edges (fresnel-bright rims or drawn contours [[toon-outline]]) so the outer form stays readable at low opacity
- **interactivity** — static illustration, scrubbed reveal ([[scroll-choreography]]: the cut deepens as you scroll — the product-page showpiece), or draggable lens/plane

## Techniques

- **SVG layered illustration** — interior and shell as separate layers;
  cutaway = shell path with the wedge cut out (boolean in the vector tool),
  cut-edge stroke + hatch `<pattern>` on cut faces. The authored register.
- **CSS lens/portal** — a `clip-path: circle()` window on the interior
  layer positioned by cursor ([[cursor-effects]] machinery); or
  `mask-image` radial for soft-edged lenses. Cheap and delightful.
- **three.js clipping planes** — `material.clippingPlanes` slices geometry
  live; cap the cut with a stencil-based cut-face fill (documented
  three.js pattern); animate the plane for scrubbed sections.
- **Fresnel ghost (GLSL)** — shell opacity from `1 - abs(dot(N, V))`:
  faces edge-bright, centers transparent — the hologram-adjacent ghost
  ([[fui]]'s material doing engineering work); depth-sorted transparency
  caveats apply.
- **Scroll-driven teardown** — [[scroll-choreography]] scrubbing either
  the clip plane, an explode ([[blueprint]]'s exploded view), or a
  crossfade through prepared layer states.

## Starting points

- Technical illustration references: Stephen Biesty cutaway books, patent
  and repair-manual sections
- three.js clipping + stencil cap examples (official examples cover it)
- Product-marketing teardowns (device sites) for the modern register

## Search queries

- `three.js clipping plane stencil cap cross section`
- `css clip-path circle reveal lens cursor`
- `fresnel transparent shell shader ghost`
- `stephen biesty cutaway illustration style`

## Related

[[blueprint]] (the drafting sibling; exploded views), [[hatching-sketch]]
(cut-face fills), [[false-color]] (x-ray as *grading* vs this structure),
[[fui]] (ghost material), [[toon-outline]] (edge retention),
[[scroll-choreography]] (scrubbed reveals), [[cursor-effects]] (lenses),
[[visual-hierarchy]] (interior emphasis), [[long-shadow-isometric]]
(peel/explode projection).
