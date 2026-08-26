---
name: control-language
title: Control Language
category: ui-foundations
aliases: [buttons, inputs, form controls, toggle, switch, slider, checkbox, text field, button styles, input styles, button hierarchy, cta design]
media: [css]
---

# Control Language

The design system of the elements people *operate* — buttons, text inputs,
toggles, checkboxes, sliders — as one coherent language rather than
per-screen improvisations. Controls are where a product's [[shape-language]],
[[color-roles]], and [[interaction-feel]] meet the user's hands.

## You know it when you see

- Buttons whose visual weight instantly signals their rank; inputs that clearly invite typing
- Every control sharing one family resemblance (radius, height, focus ring, state behavior)
- Or the failures: three primary-looking buttons in one view, inputs indistinguishable from cards, a toggle that behaves like a checkbox

## Dials

**Buttons**
- **hierarchy ranks** — primary (filled accent, one per view — [[visual-hierarchy]]'s accent budget made law), secondary (outline/tonal), tertiary (ghost/text), destructive (danger [[color-roles]], never default-focused); every button in the product maps to exactly one rank
- **size scale & hit area** — 2-3 sizes on the spacing scale; visual size may shrink but hit area stays ≥44px ([[visible-accessibility]])
- **state faces** — rest / hover ([[hover-response]] micro) / active (pressed: darken + optional 1px travel, [[interaction-feel]]) / focus-visible (the ring, [[border-stroke]]) / disabled (reduced opacity — prefer keeping enabled + explaining, disabled buttons explain nothing) / loading (spinner replaces label, width locked so the button doesn't jump — [[loading-language]])
- **label grammar** — verb-first, specific ("Save changes", not "OK"/"Submit"); icon-only buttons require tooltips and labels ([[popover-menu]] license)

**Text inputs**
- **container style** — outlined (border, the flexible default), filled (tinted field, [[panel-well]] sunken logic), underline-only (editorial, weakest affordance); one style product-wide
- **label placement** — top-aligned (fastest scanning, the default — see [[form-grammar]]), floating (compact but crowds the value), never placeholder-as-label (vanishes on type — the classic sin)
- **affordance strength** — the field must read "type here" at rest: visible container, cursor change, generous padding on the [[spacing-density]] scale
- **state faces** — rest / focus (ring + border shift) / filled / error+success (see [[form-grammar]] for when) / disabled / read-only (distinct from disabled: legible, uneditable)

**Selection & range controls**
- **toggle semantics** — switch = *instant effect* (flips now, no submit); checkbox = *declared choice* (takes effect on submit); using a switch in a form or a checkbox for live settings breaks the contract users carry between products
- **switch anatomy** — track + thumb with travel ([[motion-ceremony]] micro, ~150ms); on-state uses accent; never rely on color alone — position is the signal ([[visible-accessibility]])
- **slider grammar** — track/fill/thumb; live value display near the thumb; detents for meaningful stops ([[interaction-feel]]); steppers or direct input beside it when precision matters (sliders are for *about this much*)
- **radio vs select vs segmented** — ≤5 visible options: radio or segmented control; more: select/[[popover-menu]] combobox; segmented = radio wearing button clothes for 2-4 peer modes

**System coherence**
- **one control DNA** — shared height rhythm, radius ([[shape-language]] with the nested-radius law), focus-ring token, and transition timing across every control; a new control should look *inevitable* next to the others

## Techniques

- **Substrate + restyle** — shadcn/ui / Radix primitives supply semantics,
  keyboard behavior, and states (see LIBRARIES.md); the dictionary's
  tokens restyle them — never rebuild a select or slider's a11y from
  scratch when a maintained primitive exists.
- **State styling via attributes** — `data-state`, `:focus-visible`,
  `:user-invalid`, `:disabled` — style states from the platform's truth,
  not parallel class bookkeeping.
- **Control tokens** — `--control-height-{s,m,l}`, `--control-radius`,
  `--focus-ring`, shared transition tokens; the DNA enforced in one place.
- **Loading buttons** — lock `min-width` before swapping label for
  spinner; announce with `aria-busy`.

## Search queries

- `button hierarchy primary secondary tertiary design system`
- `input label placement top vs float research`
- `radix shadcn restyle tokens`
- `switch vs checkbox semantics instant effect`

## Related

[[form-grammar]] (controls assembled into forms), [[visual-hierarchy]]
(button ranks are hierarchy), [[color-roles]] (accent/danger budgets),
[[shape-language]] + [[spacing-density]] (the DNA), [[border-stroke]] +
[[visible-accessibility]] (focus rings), [[interaction-feel]] (press
physics), [[hover-response]] (hover faces), [[loading-language]] (async
states), [[popover-menu]] (selects, comboboxes), [[skeuomorphism]]
(physical-control register), [[chips-badges-avatars]] (the display-only
siblings).
