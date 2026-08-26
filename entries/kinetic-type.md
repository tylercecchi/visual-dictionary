---
name: kinetic-type
title: Kinetic Type
category: motion
aliases: [animated text, text animation, text reveal, split text, staggered letters, typewriter effect, scrolling text, marquee, variable font animation, word by word, lyric video, typing effect, text typing itself out, typing animation]
media: [css, svg, canvas, webgl]
---

# Kinetic Type

Typography in motion — staggered character reveals, words arriving on beat,
weight breathing under a cursor, marquees, scroll-driven headlines. Motion
applied *to* the letterform layer, with its own grammar of units, triggers,
and restraint.

## You know it when you see

- Headlines assembling letter-by-letter or word-by-word with stagger
- Text sliding up from behind an invisible mask line (the reveal), or typing on with a cursor
- Type whose weight/width/slant animates (variable-font breathing, hover swells)
- Marquee rows, scroll-scrubbed headline transforms, lyric-video word choreography
- The failure: body text animating (reading blocked by theater), or every heading on a page doing the same reveal

## Dials

**Unit & choreography**
- **animation unit** — character (showy, max stagger cost), word (rhythmic, the lyric register), line (calm, editorial), or block (one move); smaller units = more spectacle and more risk; body text animates at *block* or never
- **stagger timing** — per-unit delay (20-50ms characters, 60-120ms words) and its curve: linear cascade, eased bunching (accelerating arrival), center-out, or random-order (glitchy [[glitch]] energy); total sequence caps at ~600-800ms ([[motion-ceremony]] duration law)
- **arrival vocabulary** — how units enter: fade, rise-from-mask (the clip reveal — most editorial), slide/skew with settle, scale-pop, blur-in ([[depth-of-field]] borrowed), flip/rotate per unit, typewriter append (with or without cursor), decode-scramble (characters cycling before resolving — [[terminal-aesthetic]]/[[fui]] register)
- **exit symmetry** — exits faster and simpler than entrances ([[motion-ceremony]] asymmetry); looping sequences (lyric walls) need designed exits, one-shot reveals can simply stay

**Continuous & responsive motion**
- **variable-font animation** — weight/width/slant/optical axes in motion: hover swells, breathing idle loops, scroll-driven weight gain, per-character axis waves ([[typographic-voice]]'s variable-font wing set moving); axis animation is transform-cheap in modern engines but verify per target
- **input coupling** — what drives it: time (autonomous — use once), entrance ([[scroll-choreography]] trigger register), scroll-scrub (headline transforms tied to progress), cursor proximity (per-character repulsion/swell — [[cursor-effects]] on letters), audio ([[audio-reactive]] lyric sync)
- **path & distortion motion** — text on animated paths ([[knockout-typography]] textPath with animated offset), wavy baselines (per-character `translateY` sine), liquid/flag distortion (canvas/WebGL — [[liquid-ripple]] applied to rendered text), marquee loops (constant velocity, seamless duplicate)

**Restraint & system**
- **ceremony budget** — one kinetic moment per view (the hero); everything else static or block-fade ([[motion-ceremony]] budget applied to type specifically); repeated page-wide reveals are the template tell
- **legibility floor** — motion never blocks reading: reveals complete before a reader would naturally reach the text ([[scroll-choreography]] fallback law), scrambles resolve within ~1s, nothing re-animates on every scroll pass (once per session)
- **reduced-motion contract** — full static fallback with content present (`prefers-reduced-motion`: reveals become visible-by-default, marquees stop, scrubs jump to final state) — [[visible-accessibility]] non-negotiable
- **layout stability** — animating units must not reflow neighbors: transforms only, `display: inline-block` on units, container reserves final size (no CLS from type theater)

## Techniques

- **Split + stagger (CSS)** — text split into span units (JS or manual),
  each `inline-block`, shared keyframes with `animation-delay:
  calc(var(--i) * 40ms)`; the mask-reveal via parent `overflow: hidden`
  and child `translateY(100%)` → 0. The 80% technique.
- **Splitting libraries** — GSAP SplitText-class / split-type (verify
  currency) handle line-splitting (which manual spans can't survive
  reflow) and screen-reader safety (`aria-label` on the container,
  `aria-hidden` units — do this even hand-rolled).
- **Variable axes** — `font-variation-settings` (or registered axes via
  `font-weight` etc.) in transitions/keyframes; per-character waves via
  the same `--i` delay pattern.
- **Scroll-scrubbed type** — `animation-timeline: view()`/`scroll()` or
  ScrollTrigger scrub on transform/axis properties
  ([[scroll-choreography]]'s machinery aimed at a headline).
- **Canvas/WebGL text motion** — MSDF text ([[sdf-rendering]]) for
  per-character 3D, distortion, and particle handoffs
  ([[dissolve-disintegration]] on type); the showpiece register.
- **Decode/typewriter** — interval-driven character swaps from a scramble
  set resolving left-to-right; monospace ([[terminal-aesthetic]]) hides
  width jitter, or reserve final width.

## Search queries

- `split text stagger animation css custom property delay`
- `text reveal mask translateY overflow hidden`
- `variable font animation font-variation-settings performance`
- `gsap splittext accessibility aria`
- `scroll driven headline animation timeline view`

## Related

[[typographic-voice]] (what's being animated), [[type-composition]] (the
static composition this activates), [[knockout-typography]] (masks and
paths), [[motion-ceremony]] (budget, duration, asymmetry laws),
[[scroll-choreography]] (triggers and scrubs), [[cursor-effects]] +
[[audio-reactive]] (drivers), [[loading-language]] (typewriter/decode as
waiting states), [[glitch]] + [[terminal-aesthetic]] + [[fui]] (scramble
registers), [[dissolve-disintegration]] + [[liquid-ripple]] (type as
effect canvas), [[visible-accessibility]] (the reduced-motion contract).
