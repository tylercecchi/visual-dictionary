---
name: film-stock
title: Film Stock / Analog Photo
category: color-and-tone
aliases: [halation, light leak, polaroid, film look, kodachrome, lomo, expired film, 35mm look, disposable camera, film border, super 8]
media: [css, canvas, webgl]
---

# Film Stock / Analog Photo

The chemistry of film as a look — halation's red-orange halo around
highlights, light leaks flaring from the canister edge, Polaroid's milky
frame, expired film's color drift. Finer-grained than "vintage": each artifact
has a name and a recipe.

## You know it when you see

- **Halation** — a soft warm (red-orange) halo bleeding around bright lights against dark; the signature film-not-digital tell
- **Light leaks** — warm gradient flares intruding from frame edges, often animated in scans
- **Polaroid/instant** — the white frame (thick bottom), lifted matte blacks, soft cyan-green cast
- **Stock character** — faded reds / teal shadows / crushed grain combos that name a decade or a stock
- Frame furniture: sprocket holes, scan borders, date stamps, dust and scratches

## Dials

- **halation strength & tint** — a [[glow-bloom]] variant: threshold high, tint locked warm (red-orange), radius tight; only around *bright-on-dark*
- **grade recipe** — per-stock curves: lifted blacks (matte), channel crossover (teal shadows/warm highlights), saturation era; implemented as a LUT/[[duotone-gradient-map]] ramp
- **grain character** — [[film-grain]] tuned: chunkier and more visible in shadows and mids, monochrome, boiling per frame
- **artifact density** — leaks, dust, scratches, gate weave (slight frame wobble): one or two, occasionally; constant artifacts read as a filter app
- **frame furniture** — border style (Polaroid, 35mm scan, Super-8 rounded gate), which instantly names the format

## Techniques

- **Halation (GLSL)** — extract highlights, blur wide, tint red-orange,
  screen-blend back; the one artifact worth doing properly. (CSS
  approximation: warm-tinted `drop-shadow` on bright elements.)
- **Stock grade** — a LUT (`postprocessing` `LUT3DEffect`, or `.cube` files
  emulating real stocks) or hand-built curves via [[gradients]] ramp
  textures; CSS `filter` chains approximate the simpler grades.
- **Light leaks** — animated warm [[gradients]] blended `screen` from frame
  edges; pre-rendered leak scans as blend-mode overlays are legitimate and
  common.
- **Frame + furniture (CSS/SVG)** — borders, sprockets, and stamps as
  DOM/SVG chrome; date stamp in a 7-segment-ish face, slightly misaligned.
- **Gate weave** — 0.5-1px random translate/rotate at low frequency on the
  whole frame; subtle, sells "projected."

## Starting points

- Filmbox/stock-emulation LUT collections (searchable `.cube` packs)
- Shadertoy: search "halation", "film emulation"
- Real stock references: Kodachrome/Portra/CineStill 800T (its halation is
  the famous one) sample gallery searches

## Search queries

- `glsl halation shader highlight bleed red`
- `film emulation lut cube free`
- `cinestill 800t halation look`
- `light leak overlay blend screen css`

## Related

[[film-grain]] (the base layer), [[glow-bloom]] (halation's engine),
[[duotone-gradient-map]] + [[gradients]] (grades), [[vignette]] (lens edge),
[[crt-scanlines]] (the video sibling — VHS vs film), [[print-artifacts]]
(the print sibling), [[image-treatment]] (film as a house image treatment),
[[time-of-day]] (golden hour + film stock is the nostalgia formula).
