---
name: lenticular
title: Lenticular / Holographic Print
category: distortion-and-lens
aliases: [lenticular print, tilt card, flip image, holographic card, prismatic foil, 3d postcard, wiggle stereo, motion print, security hologram]
media: [css, canvas, webgl]
---

# Lenticular / Holographic Print

Print that changes with viewing angle — flip images that swap between frames
as a card tilts, prismatic foil rainbows sliding across surfaces, security-
hologram shimmer. On screen: tilt/cursor/gyro standing in for the viewing
angle. The physical ancestor of every "tilt the card" interaction.

## You know it when you see

- An image that *flips* between two or three frames as the card/cursor angle changes (not crossfades — hard swaps with a striped transition zone)
- Vertical banding briefly visible mid-transition (the lenticule ridges)
- Rainbow foil patches sliding across a card as it tilts ([[iridescence]]'s print cousin, but *pattern-stamped*: dots, guilloché curves, starbursts)
- Depth cards: layers shifting against each other with tilt (parallax baked into print)
- Trading-card energy: the whole grammar says collectible

## Dials

- **effect type** — flip (2-3 discrete frames), animation (frame sequence = tilt-scrubbed motion), depth (continuous [[parallax]] layers), or foil (angular color sweep); real cards combine foil + one other
- **input mapping** — what stands in for tilt: cursor position (desktop), device gyro (mobile — the honest one), scroll, or autonomous slow sweep (ambient); mapping *must* be bidirectional and immediate — lenticular feel dies with lag ([[interaction-feel]]: zero-spring, direct)
- **transition texture** — the stripe interlace during flips: band width (fine = smooth flip, coarse = chunky retro), and whether bands are visible as texture (authenticity) or subpixel (clean)
- **foil pattern language** — the stamped micro-pattern that the rainbow rides: linear rainbow sweep, radial starbursts, dot grids, guilloché ([[moire]]-adjacent engraved curves), or full "holo" noise; pattern + sweep angle = the card's signature
- **wear register** — pristine mint vs handled: micro-scratches that catch the sweep, edge whitening ([[stickers-badges]]/[[film-stock]] wear logic on a collectible)

## Techniques

- **CSS tilt-card foil** — the pokemon-cards-css lineage ([[iridescence]]'s
  entry): cursor → CSS custom properties → gradient position/rotation on
  foil layers with `background-blend-mode`; add a stamped pattern layer
  (repeating gradients or an SVG tile) under the rainbow sweep.
- **Interlaced flip (CSS/canvas)** — the authentic mechanism reproduced:
  slice 2-3 frames into alternating vertical strips (repeating-gradient
  masks or canvas draw), shift which strip-set shows with the tilt input;
  the striped mid-state appears for free, exactly like the print.
- **Depth-layer cards** — 3-5 image layers translating at different rates
  with tilt ([[parallax]] with gyro input), inside a card frame with
  [[light-on-flat]] sheen; masks per layer from authored art or
  segmentation.
- **GLSL holo material** — view-angle (or fake-tilt uniform) driving: hue
  rotation through a pattern mask, normal-mapped micro-scratch glints,
  frame-flip by thresholding tilt into discrete states. The premium
  card-in-WebGL register ([[scene-staging]] a single collectible is a
  genre of its own).
- **Gyro plumbing** — `DeviceOrientationEvent` (permission-gated on iOS);
  always provide the cursor fallback.

## Starting points

- pokemon-cards-css (GitHub) — the canonical foil/tilt implementation study
- Real lenticular/security-print references (banknote foils, trading cards
  under a loupe)
- Shadertoy: search "holographic foil", "card"

## Search queries

- `pokemon cards css holo effect breakdown`
- `lenticular flip effect css striped mask`
- `deviceorientation gyro card tilt permission ios`
- `holographic foil shader hue angle pattern`

## Related

[[iridescence]] (the color physics; this entry adds print structure),
[[parallax]] (depth cards), [[moire]] (guilloché and interlace artifacts),
[[interaction-feel]] (direct zero-lag mapping), [[specular-metallic]]
(foil base), [[stickers-badges]] + [[film-stock]] (wear registers),
[[cursor-effects]] (the desktop input), [[period-looks]] (90s holo
nostalgia wing).
