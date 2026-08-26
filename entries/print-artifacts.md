---
name: print-artifacts
title: Print Artifacts (Riso / Photocopy / Misregistration)
category: color-and-tone
aliases: [risograph, photocopy, xerox, zine, misregistration, ink bleed, offset print, screen print texture, overprint, punk flyer, grunge, punk collage, distressed texture]
media: [css, svg, canvas, webgl]
---

# Print Artifacts

The beautiful failures of physical printing — inks out of register, photocopy
crunch, riso's grainy overlapping spot colors, ink bleeding into paper. The
zine/DIY/editorial-craft aesthetic, distinct from clean [[halftone]] dots.

## You know it when you see

- Two or three flat ink colors slightly out of alignment, overlapping into darker blends
- Photocopy look: crushed blacks, blown whites, edge noise, slight skew
- Grainy, imperfect flat-color prints (riso's signature)
- Ink spreading at stroke edges; paper showing through solids

## Dials

- **misregistration offset** — how far the ink layers miss each other; 1-2px (craft) vs dramatic (punk)
- **ink palette** — riso works in *spot colors* (2-3 inks, classic set: fluorescent pink, blue, green, black); every element must be built from them + their overprints
- **overprint blend** — `multiply` where inks overlap: the overlap colors are the aesthetic's payoff
- **coverage noise** — inks print imperfectly: grain inside solids ([[film-grain]] cranked, per-ink), roller streaks
- **generation loss** (photocopy) — contrast crush + noise + slight rotation/scale wobble, compounding per "copy"

## Techniques

- **Layered blend modes (CSS/SVG)** — each ink = a layer in its spot color,
  `mix-blend-mode: multiply`, offset a few px, `feTurbulence`-grained.
  The whole riso recipe is compositing discipline.
- **Channel separation (canvas/GLSL)** — split source imagery into 2-3 ink
  plates by luminance/color ([[duotone-gradient-map]] per plate), add per-
  plate grain and offset, multiply together. Right for processing photos
  into riso.
- **Photocopy pass (GLSL/canvas)** — hard levels curve (crush/blow),
  high-frequency noise, slight rotation; repeat the pass for generations.
- **Threshold + texture** — pure black plate from thresholded imagery
  ([[dithering]]'s 1-bit cousin) over paper [[material-texture]].

## Starting points

- Risograph color libraries (official riso ink hex charts, searchable) for
  authentic palettes
- Spot-color/overprint tutorials from the riso-print community
- Shadertoy: search "photocopy", "print misregistration" (sparser; the CSS/
  canvas recipes above are the mainline)

## Search queries

- `risograph effect css mix-blend-mode multiply grain`
- `riso ink colors hex chart`
- `photocopy effect levels noise canvas`
- `spot color separation image processing`

## Related

[[halftone]] (the dot structure inside real print), [[film-grain]] (per-ink
coverage noise), [[material-texture]] (the paper it lives on),
[[duotone-gradient-map]] (plate separation), [[hatching-sketch]] (the drawn
sibling of DIY), [[chromatic-aberration]] (misregistration's screen-native
cousin), [[typographic-voice]] (pairs with brutalist/mono type).
