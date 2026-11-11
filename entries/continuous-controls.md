---
name: continuous-controls
title: Continuous Controls
summary: "sliders, range sliders, XY pads, knobs, number scrubbing, fine-adjust modifiers"
category: behavior
aliases: [slider, sliders, range slider, dual slider, range input, track and thumb, thumb, xy pad, two axis control, 2d slider, color picker square, knob, knobs, rotary knob, dial, dials, number scrubbing, scrubbable number, drag to change value, drag label, value scrubber, fine adjust, stepper, increments, value readout, volume slider, price range]
media: [css, svg, canvas]
---

# Continuous Controls

Controls that set a value along a continuum by direct manipulation —
sliders, range sliders, two-axis pads, knobs, and scrubbable numbers —
with the feedback and precision aids that make them usable.

## You know it when you see

- A thumb dragged along a track, the filled portion showing the value; two thumbs for a min-max range
- A square pad where one drag sets two values (saturation × brightness, X × Y)
- A rotary knob that turns as you drag up or down
- A number field whose label turns into a ↔ cursor; dragging it scrubs the value
- The failures: a slider you can't set to an exact number, a knob you must drag in a circle, a thumb too small to grab on touch

## What it does

Maps continuous pointer motion to a value so users can explore a range
and see the effect live, rather than guessing a number. Good continuous
controls pair the gesture with a readout, a way to type an exact value,
stepping for keyboards, and a fine-adjust mode for precision — so speed
of exploration doesn't cost precision.

## When to use

- Values judged by eye or ear in real time: volume, opacity, blur, color, zoom, brush size
- Ranges where the relative position matters more than the exact number (price filters, time spans)
- Two coupled parameters explored together: XY pads (color fields, filter cutoff × resonance)
- Dense pro-tool panels where many numbers need quick tweaks: scrubbable labels and knobs save space

## When not to use

- Exact values that users already know (age, quantity, dates): use a text/number input or stepper ([[form-grammar]])
- Few discrete options (3-5 choices): use a segmented control or radio group
- Very large or unbounded ranges with precision needs (prices to the cent across 0-100k): numeric input, or a log-scaled slider *plus* input
- Knobs on touch-first or general-audience UIs: use a linear slider — knobs are a pro-audio/skeuomorphic convention ([[skeuomorphism]])

## Dials

- **mapping curve** — linear vs logarithmic/exponential (frequency, zoom, price) so equal travel feels like equal change
- **step & snap** — continuous vs stepped (`step`), detents at meaningful values (0, default, 100%) with a small capture zone (~4-6px), double-click to reset to default
- **fine-adjust modifier** — hold Shift (or Alt) to slow the mapping 5-10x; on touch, dragging vertically away from the track can reduce sensitivity
- **knob drag mapping** — vertical (or vertical+horizontal) linear drag, ~150-250px for full range; never require circular motion; scroll wheel adjusts while hovered
- **scrub sensitivity** — number scrubbing at ~1 unit per 1-4px, with pointer lock or wrap so long scrubs don't hit screen edges
- **readout** — always-visible value (beside or in the thumb), live while dragging, editable on click/double-click; units shown
- **thumb & track size** — thumb hit area ≥24px desktop, ≥44px touch even if drawn smaller; track at least 4px; filled portion in accent ([[color-roles]])
- **commit timing** — live update during drag vs commit on release (`input` vs `change`); throttle expensive updates, but keep the thumb at 60fps
- **keyboard stepping** — arrows = 1 step, PageUp/PageDown or Shift+arrow = 10 steps, Home/End = min/max

## Techniques

- **`<input type="range">`** — free keyboard, touch, and accessibility; style with `appearance: none` and `::-webkit-slider-thumb` / `::-moz-range-thumb`; fill via a `--value` custom property gradient on the track.
- **Range slider** — two overlaid range inputs (pointer-events only on thumbs), or a custom pair with `role="slider"` each, `aria-valuemin/max/now/text`.
- **Custom slider/knob/XY pad** — pointer events + `setPointerCapture`; compute value from delta (knobs/scrub) or absolute position (sliders/pads); `role="slider"` with `aria-valuetext` ("50%, -6 dB"); XY pads expose two sliders to assistive tech.
- **Number scrubbing** — `pointerdown` on the label, `requestPointerLock()` for unbounded drags, `movementX` × sensitivity, Shift for fine; the input itself remains typeable.
- **Libraries** — Radix/React Aria Slider (headless, accessible, range support); Tweakpane / Leva / lil-gui for dev and creative panels with scrubbing; verify currency.

## Starting points

- WAI-ARIA Authoring Practices: Slider and Multi-Thumb Slider patterns
- React Aria `useSlider`, Radix Slider; Leva, Tweakpane — verify currency
- Interface Lineage (further reading): https://interfacelineage.com/track-and-thumb-slider, https://interfacelineage.com/two-axis-control, https://interfacelineage.com/rotary-control-tuning-dial

## Search queries

- `style input range thumb track fill css`
- `accessible range slider two thumbs aria`
- `rotary knob vertical drag javascript`
- `number input drag to scrub pointer lock`
- `logarithmic slider mapping`

## Related

[[control-language]] (the visual dress of controls), [[form-grammar]]
(when a typed field is better), [[interaction-feel]] (drag feel and
detents), [[snap-and-guides]] (stepping as snapping),
[[pointer-intent]] (fine-adjust as a held quasimode), [[skeuomorphism]]
(knob and fader looks), [[visible-accessibility]] (slider semantics and
keyboard stepping), [[chart-voice]] (brushes and range selectors on
charts).
