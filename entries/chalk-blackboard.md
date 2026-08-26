---
name: chalk-blackboard
title: Chalk / Blackboard
category: surface-and-material
aliases: [chalkboard, blackboard, chalk drawing, chalk text, cafe menu board, dusty chalk, slate, whiteboard marker, hand lettered board]
media: [css, svg, canvas]
---

# Chalk / Blackboard

Dry pigment dragged across slate — strokes with broken, dusty edges, ghosts
of erased writing, hand-lettered café-menu charm. The warmest of the
hand-made registers: implies a person stood here and wrote this.

## You know it when you see

- White/pastel strokes with ragged, porous edges on near-black green-tinted slate
- Uneven ink density *within* a stroke (heavy where pressed, thin where dragged)
- Erased ghosts: pale smears of former writing behind the current text
- Café-menu composition: mixed lettering sizes, flourishes, chalk "frames" and dividers ([[typographic-voice]] hand-lettered maximalism)

## Dials

- **stroke raggedness** — how broken the edge is: fine tooth (hard chalk, light touch) vs heavy crumble (soft chalk, pressed); uniform smooth edges instantly read as "font colored white" — the failure mode
- **density variation** — per-stroke pressure map: opacity varying along the stroke and heavier at direction changes; plus stray dust specks beside strokes
- **board history** — the slate is never clean: erased-ghost layer (blurred, low-opacity previous marks), overall chalk haze in the well-used areas, eraser arc smears; the history layer is what sells "real board"
- **palette** — white + 2-3 pastel chalks (the classic café set) on green-black or blue-black slate; saturated colors break the pigment physics
- **lettering register** — casual handwriting, practiced menu-lettering (mixed serif/script/caps with flourishes), or diagram chalk (the lecture-hall register: [[chart-voice]] drawn by hand)

## Techniques

- **Chalk fonts + texture (CSS)** — hand-chalk typefaces with a
  `feTurbulence`-based alpha erosion (SVG filter breaking the edges) +
  slate background ([[material-texture]]: dark noise + subtle haze
  gradients). The fast register for menus/heros.
- **SVG stroke erosion** — real lettering paths with a turbulence
  displacement + dissolve filter ([[dissolve-disintegration]]'s mask at
  static low intensity); dashed micro-gaps along strokes.
- **Canvas chalk brush** — the authored register: stamp-based brush (soft
  round stamps at high frequency with per-stamp alpha jitter and grain),
  pressure from velocity; erased ghosts = previous strokes blurred +
  faded, plus a directional smear filter.
- **Draw-on animation** — chalk writes itself: `stroke-dashoffset` reveal
  ([[loading-language]]'s trick) with a chalk-dust [[particles]] puff at
  the writing tip; pair with a hand cursor for full theater.
- **Whiteboard variant** — same system, inverted: white board, saturated
  marker strokes (smooth edges, slight streak within stroke), drop shadow
  none; the explainer-video register.

## Starting points

- Chalk/hand-lettered font families (searchable; many free)
- The SVG turbulence-erosion filter recipe (shared with [[hatching-sketch]]
  wobble craft)
- Café menu boards and lecture-hall photos as composition references

## Search queries

- `chalk texture svg filter turbulence text`
- `canvas chalk brush stamp jitter`
- `chalkboard background css dark slate texture`
- `stroke-dashoffset handwriting draw animation`

## Related

[[hatching-sketch]] (the drawn-by-hand family), [[material-texture]] (the
slate), [[dissolve-disintegration]] (edge erosion machinery),
[[typographic-voice]] (hand-lettering as voice), [[film-grain]] (dust),
[[illustration-style]] (chalk as a register), [[loading-language]]
(draw-on), [[eink-aesthetic]] + [[brutalism]] (fellow low-tech registers).
