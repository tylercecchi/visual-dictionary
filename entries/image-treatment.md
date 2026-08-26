---
name: image-treatment
title: Image Treatment
category: ui-foundations
aliases: [photo style, image style, photo grading, image masking, photo crop, editorial images, image consistency, photography direction]
media: [css, svg, canvas]
---

# Image Treatment

The house rules for photographs and imagery — how they're cropped, toned,
masked, and framed so that any image dropped into the product comes out
looking like *its* image. Identity applied to content you don't control.

## You know it when you see

- Every photo on a site shares a tonal family despite different sources
- A consistent mask language: all circles, all arches, all torn edges
- Duotone/tinted imagery locked to brand colors
- The failure: raw stock photos in clashing color temperatures side by side

## Dials

- **tonal treatment** — untouched, unified grade (contrast/warmth nudge), tinted wash, full [[duotone-gradient-map]], or B&W; the strongest single consistency lever
- **crop discipline** — fixed aspect ratios per slot, subject placement rules (headroom, thirds), zoom register (context-wide vs detail-tight)
- **mask/frame shape** — rectangles per [[shape-language]] radius, or a signature shape (arch, blob, circle); plus edge treatment: hard, [[border-stroke]] keyline, or [[progressive-blur]] fade
- **overlay contract** — the standing scrim/tint recipe when text sits on images ([[gradients]] eased scrim + contrast floor)
- **texture/artifact layer** — [[film-grain]], [[halftone]], or paper ([[material-texture]]) unifying disparate sources by dirtying them equally

## Techniques

- **CSS filter recipe** — a shared `filter: contrast() saturate()
  sepia/hue-rotate()` chain as one class/token applied to all imagery; the
  one-line house grade.
- **Blend-mode tinting** — a brand-color layer under `multiply`/`soft-light`,
  or full SVG duotone for the committed version.
- **`object-fit`/`aspect-ratio` + focal point** — enforce crops in the
  layout, `object-position` (or CMS focal-point data) for subject placement.
- **Mask language** — `border-radius`/`clip-path`/`mask-image` shape tokens;
  SVG masks for signature shapes.
- **Build-time processing** — sharp/imgproxy pipelines baking the grade,
  crop, and format into delivered assets; right at scale (no runtime filters,
  consistent even in emails/social cards).

## Starting points

- No single library — this is a system recipe
- Editorial sites (news magazines, brand sites you admire) as treatment
  references to reverse-engineer
- sharp (npm) / image CDN transform docs for the build-time route

## Search queries

- `css filter recipe consistent photo treatment`
- `svg duotone image brand colors`
- `object-position focal point responsive crop`
- `sharp image pipeline tint resize`

## Related

[[duotone-gradient-map]] (the strongest grade), [[film-grain]] +
[[halftone]] + [[material-texture]] (unifying textures), [[shape-language]]
(mask shapes), [[gradients]] (text-on-image scrims), [[color-roles]] (images
must land inside the palette), [[vignette]] (the classic photo-edge move).
