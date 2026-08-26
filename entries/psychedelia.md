---
name: psychedelia
title: Psychedelia
category: ui-foundations
aliases: [psychedelic, 60s poster, concert poster, liquid lettering, trippy, vibrating colors, fillmore poster, groovy, tie dye, hippie aesthetic, melting text]
media: [css, svg, canvas, webgl]
---

# Psychedelia

The perception-bending wardrobe — 1966-71 concert-poster language:
liquid lettering filling every space, vibrating complementary colors,
swirling contours, and legibility deliberately sacrificed to vibe. The
rare style whose *rule is breaking readability rules on purpose*.

## You know it when you see

- Lettering that melts, bulges, and flows to fill its container like liquid ([[knockout-typography]] pushed to abstraction)
- Color pairs that vibrate — full-chroma complements (orange/blue, magenta/green) butted directly with no neutral between
- Concentric contour lines, swirls, and waves filling all space; near-zero whitespace
- Op-art moiré passages; halos and auras around figures

## Dials

- **liquid lettering** — type warped to fill organic containers (bulge/wave distortions, letterforms sharing edges with neighbors); legibility runs 50-80% by design — the *shape* reads first, words second ([[type-composition]]'s texture register at maximum); modern deployment keeps one legible anchor ([[type-composition]] anchor law still applies)
- **the vibration law** — the palette's engine: complementary pairs at *equal high chroma and similar value*, direct-butted — the equiluminance makes edges shimmer ([[color-roles]] deliberately violated; [[visible-accessibility]] warning: vibrating pairs are genuinely hard to read — dose, never body text)
- **horror vacui** — space-filling as composition: contour lines echo every shape outward until surfaces are full ([[visual-composition]]'s negative-space law inverted knowingly); density *is* the trip
- **motion register** — slow swirl/warp ([[liquid-ripple]] at dream tempo), breathing scale, [[kaleidoscope]] folds, [[video-feedback]] trails; the animated wing is where shaders earn it ([[procedural-noise]] domain-warp driving both form and hue rotation)
- **era sub-registers** — Fillmore poster (hand-lettered, two-color vibration), tie-dye ([[procedural-noise]] radial fold patterns), late-60s op ([[moire]]), 70s airbrush drift (roadmap: airbrush)

## Techniques

- **Liquid type** — SVG letterform paths warped (turbulence
  displacement, envelope distortion in vector tools), or [[sdf-rendering]]
  text with domain-warped sampling for the live version; variable fonts
  stretched past taste on purpose.
- **Vibrating pairs** — pick complements, match their CSS `oklch`
  lightness within ~5 points, butt them; the shimmer is free
  ([[gradients]] OKLCH tooling used for evil).
- **Contour fills** — offset-path echoes of a silhouette (repeated SVG
  path offsets or a distance-field's contour bands — [[sdf-rendering]]
  ready-made).
- **Animated register** — hue-rotation + domain-warp in a fragment
  shader; [[audio-reactive]] drive for the full light-show
  ([[stage-lighting]]'s liquid-projection ancestor).

## Search queries

- `psychedelic liquid lettering svg warp`
- `vibrating complementary colors equiluminant`
- `60s concert poster style analysis`
- `sdf contour lines offset fill`

## Related

[[period-looks]] (wardrobe pattern), [[kaleidoscope]] + [[moire]] +
[[video-feedback]] (the op/motion machinery), [[liquid-ripple]] +
[[procedural-noise]] (the warp), [[type-composition]] +
[[knockout-typography]] (type as shape), [[color-roles]] (the system
being knowingly violated), [[blacklight-uv]] (the poster's native
lighting), [[stage-lighting]] (liquid light shows), [[art-nouveau]]
(its acknowledged ancestor — the whiplash line reborn louder).
