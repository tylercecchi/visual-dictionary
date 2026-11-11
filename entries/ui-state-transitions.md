---
name: ui-state-transitions
title: UI State Transitions (Open/Close, Swap, Feedback)
summary: "per-element transition grammar: open/close asymmetry, swaps, small moves, token scale"
category: motion
aliases: [ui transitions, state transitions, micro transitions, microinteractions, micro interactions, open close animation, open and close, enter exit, enter and exit, exit animation, modal animation, dropdown animation, tooltip animation, icon swap, text swap, text morph, label change animation, button state change, success animation, error shake, shake on error, motion tokens, duration tokens, easing tokens, transition feels slow, animation feels sluggish, janky transitions, abrupt, pops in, snaps open]
media: [css]
---

# UI State Transitions (Open/Close, Swap, Feedback)

The small transitions that carry an element from one state to the next:
a menu opening, a label changing, a check landing, a field rejecting
input. [[motion-ceremony]] sets the product's overall motion
personality. This entry is the per-element grammar beneath it: which
transition fits which change, and the narrow value ranges that make
them feel crisp instead of slow.

## You know it when you see

- Menus that grow out of their trigger and close faster than they open
- Labels that change in place ("Copy" → "Copied") without the button
  jumping width
- A checkmark that draws itself; a field that gives one short shake
- The failures: overlays that pop in with no transition, menus that bounce
  on close, everything at 300ms `ease`, `transition: all` animating layout,
  long slides (40px+) that make small things feel heavy

## Dials

- **open/close asymmetry**: closes are faster and quieter than opens.
  Reference: dropdown/modal open 250ms → close 150ms; panel open 400ms →
  close 350ms. Symmetric (same both ways) for things that *move between*
  places rather than appear: tabs indicator, page slide, accordion, icon swap
  (250ms), text swap (150ms)
- **travel distance**: small. 4px text swap, 6-8px shakes and slides, 12px
  text reveal, ~30px only for a celebratory badge. Past ~40px on anything
  smaller than a full panel or drawer, it reads sluggish
- **scale floor**: overlays scale from just under 1, never from 0. Modal
  0.96, dropdown 0.97, tooltip 0.98, dropdown close 0.99
- **blur**: a 2-3px blur on cross-fades hides the double image of two
  states (icon swap, text swap, panel reveal); up to 8px for a success moment
- **easing**: one smooth ease-out (≈ `cubic-bezier(.22,1,.36,1)`) for most
  opens, closes, slides and resizes; ease-in-out for in-place swaps;
  linear only for loops (shimmer, spinners); overshoot **only on
  entrances** (badge pop, number pop-in), never on a close
- **hover in vs out**: in is quick and direct (≤250ms); out may be softer
  and springier so it settles instead of snapping. Never delay a hover-out
- **stagger**: ~40ms per item (80ms for a few large ones), with the total
  under ~300ms; shrink the offset or cap the count for long lists
- **intent delay**: ~80ms before a tooltip or a sequenced second step, to
  filter accidental triggers; if motion feels late, trim the *duration*
  before adding delay. Never delay a close
- **origin**: anchored surfaces grow from their trigger
  (`transform-origin` at the anchor side); centred surfaces (modals) from
  centre

## Techniques

- **Pick the transition by what changed** (match the visible element first,
  then the verb):
  - surface grows from a trigger → origin-aware dropdown; centred, no
    anchor → modal scale + fade; slides into a region → panel reveal
  - label changes and old/new share letters ("Follow" → "Following") →
    **text morph** (keep the shared letters, cross-blur only the change,
    ease the width)
  - label changes and shares nothing ("Processing" → "Done") → **state
    swap** (short blurred rise/fall)
  - values change because the data under a view changed (period, unit,
    currency) → **soft swap** in place with no movement
  - a number changes: quiet and frequent → cross-fade the changed digits;
    should be noticed → pop-in on a drum; an *event* (points, milestone) →
    spinning counter ([[animated-numbers]])
  - two icons in one slot → scale + blur icon swap
  - done → success check (fade + rotate + stroke-draw); wrong → a short
    segmented shake with the error message at the field ([[live-feedback]])
- **CSS first**: `transition` on `opacity`, `transform`, `filter` only
  (never `all`); `@starting-style` + `transition-behavior: allow-discrete`
  for enter/exit of `display`/popover/dialog; `interpolate-size` or
  grid-rows for height; stroke-dashoffset for drawn checks.
- **Tokenize**: define durations, easings, distances, scales and blurs as
  custom properties once and reference them everywhere; hardcoded `0.3s`
  scattered through components is the drift this entry exists to stop.
- **Reduced motion**: keep opacity changes, drop travel, scale and blur
  (`@media (prefers-reduced-motion: reduce)`).
- **Audit**: scan for un-transitioned overlays, `transition: all`, off-scale
  durations and missing reduced-motion guards (the transitions.dev Motion
  Agent automates this; see LIBRARIES.md).

## Starting points

- transitions.dev — 44 transitions on one token scale, with decision rules
  by element (free + Pro; link, don't copy: see LIBRARIES.md for licence).
  The reference values in Dials follow its scale
- transitions.dev Motion Agent — `npx transitions-agent` motion score and
  findings (MIT tooling)
- MDN: `@starting-style`, `transition-behavior`, `interpolate-size`

## Search queries

- `css @starting-style dialog popover enter exit transition`
- `text morph animation shared letters button label`
- `origin aware dropdown animation transform-origin`
- `motion design tokens duration easing scale`
- `prefers-reduced-motion transition fallback`

## Related

[[motion-ceremony]] (the personality these values express),
[[popover-menu]], [[modal-dialog]], [[toast-notification]],
[[disclosure]], [[sheet-drawer]] (the surfaces that open and close),
[[animated-numbers]] (number change registers), [[hover-response]]
(hover in/out), [[live-feedback]] (success and error moments),
[[layout-motion]] (size and position changes), [[page-transitions]]
(screen-level), [[pointer-intent]] (tooltip delays), [[loading-language]]
(skeleton reveals).
