---
name: hover-response
title: Hover Response
category: motion
aliases: [hover effect, zoom on hover, enlarge on hover, hover zoom, image zoom, dock magnification, hover lift, hover reveal, tilt on hover, hover state, grow on hover]
media: [css, canvas, webgl]
---

# Hover Response

How elements answer pointer attention — the *target's* side of the
hover relationship ([[cursor-effects]] owns the cursor's side). Lift,
scale, zoom-within, tilt, magnify, reveal: the vocabulary of "I noticed
you noticing me," and the laws that keep it from breaking touch and
keyboard worlds.

## You know it when you see

- Cards lifting and images swelling slightly under the pointer
- Photos zooming *inside* their frames (the crop breathing) on product grids
- Dock-style magnification: items near the pointer growing, neighbors rippling
- Cards tilting toward the cursor in 3D; hidden actions fading in on row hover
- The failures: hover-revealed controls unreachable on touch, scale changes shoving neighbors around, every element on the page responding (attention inflation)

## Dials

**Response vocabulary**
- **lift** — translate up 1-4px + shadow deepen ([[elevation]]'s beat; the default card response)
- **scale** — whole-element grow (1.02-1.05 subtle; beyond ~1.08 needs [[elevation]] lift too or it reads as layout error)
- **zoom-within** — media scales *inside a fixed frame* (1.05-1.15, slow) — the crop breathes, layout untouched; the product-grid standard ([[image-treatment]] must leave crop room)
- **tilt** — perspective rotate toward/away from the pointer position (±3-8°; [[lenticular]]'s input mapping without the foil); often paired with a moving sheen ([[shimmer-sheen]])
- **reveal** — hidden actions/metadata fading in (row hover toolbars, card overlays); the dangerous one — see the touch law
- **magnify-with-falloff** — the dock effect: scale as a function of pointer distance, neighbors partially responding on a falloff curve; the only response that deliberately *does* reflow (with animated neighbor compensation)

**Physics & timing**
- **response curve** — enter eased-out 150-250ms, exit slightly faster ([[motion-ceremony]] asymmetry at micro scale); tilt/magnify track the pointer *continuously* (lerped, [[interaction-feel]] damping) rather than toggling
- **intent filtering** — brief pointer pass-overs shouldn't trigger heavy responses: tiny delays (50-100ms) or scale-with-dwell on expensive responses; grid sweeps shouldn't ripple every card
- **settle honesty** — responses fully reverse on exit (no residue), and interrupted transitions reverse from *current* state (transitions, not replayed keyframes)

**System laws**
- **attention budget** — hover response is emphasis: primary targets get the full response, secondary get less or none ([[visual-hierarchy]] applied to interactivity); a page where everything swells reads as needy — one register per component class, sized to its rank
- **layout stability** — scale via `transform` only, never width/height; the element may not push neighbors (magnify-with-falloff being the sole, deliberate exception)
- **the touch law** — hover doesn't exist on touch: nothing *essential* may live only behind hover (reveal-on-hover controls must be visible-by-default on touch, reachable via the row's tap, or duplicated in a menu — the [[popover-menu]] tooltip license generalized); hover responses degrade to active/press states
- **the keyboard law** — `:focus-visible` triggers the same response as hover (the response *is* the affordance; keyboard users deserve it), and reveal-on-hover content must be focusable into visibility ([[visible-accessibility]])

## Techniques

- **Token-ized responses** — shared custom properties
  (`--hover-lift`, `--hover-scale`, duration/easing tokens) so every
  component class responds identically; defined once beside
  [[elevation]]'s tokens.
- **Zoom-within** — frame `overflow: hidden` + media
  `transition: transform` scale on `:hover`/`:focus-visible`; pair with
  a slow pan (`transform-origin` biased by pointer position via custom
  properties) for the premium version.
- **Tilt** — pointer position → normalized `--px/--py` → `perspective()
  rotateX/rotateY`; lerp in JS for weight ([[cursor-effects]]' follower
  math applied to rotation); glare layer optional.
- **Dock magnification** — per-item scale from
  `gaussian(distance-to-pointer)`; translate neighbors to conserve
  centering; a render-loop effect, not a CSS toggle.
- **Reveal pattern** — opacity/transform on the revealed cluster keyed
  to `.row:hover`, `.row:focus-within`, and a touch-mode class
  (`@media (hover: none)` shows it always or moves it to a menu).
- **Capability gating** — `@media (hover: hover) and (pointer: fine)`
  wraps all of it; hybrid devices get press states.

## Search queries

- `media hover hover pointer fine capability query`
- `image zoom within frame overflow transform`
- `card tilt pointer rotateX rotateY custom properties`
- `dock magnification effect distance falloff`
- `focus-within reveal row actions accessibility`

## Related

[[cursor-effects]] (the cursor's half — magnetism sits between the two),
[[interaction-feel]] (press/drag: what happens after hover commits),
[[elevation]] (lift's grammar), [[motion-ceremony]] (micro-timing law),
[[card]] (hover ceremony dial resolves here), [[image-treatment]] (crop
room for zoom-within), [[shimmer-sheen]] + [[lenticular]] +
[[specular-metallic]] (tilt's usual passengers), [[visual-hierarchy]]
(attention budget), [[visible-accessibility]] (focus parity, touch law);
on touch, hover responses degrade into [[disclosure]]-style explicit
toggles.
