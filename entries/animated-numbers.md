---
name: animated-numbers
title: Animated Numbers
category: motion
aliases: [count up, countup, odometer, rolling numbers, number ticker, animated counter, stat animation, number transition, digit roll, live values]
media: [css, canvas]
---

# Animated Numbers

Values in motion — stats counting up on scroll, odometer digits rolling on
update, live dashboard numbers breathing. Numbers have their own motion
grammar, distinct from [[kinetic-type]]: digits are *quantities*, and
animating them makes change legible — or fakes precision, when done wrong.

## You know it when you see

- Hero stats counting from 0 to 12,847 as they scroll into view
- A price or follower count where only the changed digits roll, upward for increases
- Currency totals ticking smoothly in a dashboard
- The failures: numbers that animate every render, decimals blurring through fake precision, a 10-minute-old value re-counting from zero on tab return

## Dials

- **transition style** — *count-up* (interpolate the whole value; the marketing-stat register), *odometer roll* (per-digit vertical roll, only changed digits move; the live-value register), *slot/scramble* (digits spin before settling; playful, [[terminal-aesthetic]]/[[fui]] adjacent), *crossfade* (old fades to new; the quietest, for values where trajectory doesn't matter)
- **duration & easing** — ease-out, always (fast start, landing readable); duration by *occasion*, not magnitude — count-ups cap at ~1.5-2s regardless of delta (per-unit timing makes big numbers absurd); live updates 300-500ms; the final value must rest long before anyone reads it
- **direction semantics** — odometer digits roll *up* for increases, *down* for decreases — the roll direction is data; paired delta indicators (▲ +12%) follow [[color-roles]] semantics (and [[chart-voice]]'s good/bad-vs-up/down caution)
- **trigger discipline** — *on-view, once* (scroll-triggered stats: [[scroll-choreography]] trigger register, never re-fire per pass), *on-update* (live values: animate only actual changes, [[dashboard-tiles]]' calm law — no fanfare per tick), never on mere re-render
- **layout stability** — `tabular-nums` mandatory; reserve width for the final value (count-ups) so nothing reflows mid-count ([[kinetic-type]]'s CLS law); separators and units present *throughout* the animation, formatted per locale — not appended at the end
- **honesty limits** — the value mid-animation is *false*; never animate numbers someone might act on mid-motion (checkout totals settle instantly, then may pulse once), don't animate to imply liveness the data lacks, and `prefers-reduced-motion` = instant swap with the same emphasis ([[visible-accessibility]])

## Techniques

- **Count-up** — `requestAnimationFrame` interpolation through an
  eased progress, formatted every frame via `Intl.NumberFormat`
  (locale separators/currency for free); render only on integer-step
  changes to avoid churn.
- **Odometer** — each digit a vertical strip of 0-9 in an
  `overflow:hidden` cell, translated to the target digit; changed
  digits only; CSS transitions do the rolling.
- **CSS `@property` counters** — registered custom property +
  `counter()` display for dependency-free count-ups; verify support.
- **number-flow** — the current best-in-class web component/React
  library for odometer-style transitions with formatting and
  reduced-motion built in (verify currency); React Bits CountUp for the
  simple register.
- **Announce once** — `aria-live` regions get the *final* value only;
  screen readers must never hear the interpolation.

## Search queries

- `number-flow react animated number`
- `odometer digit roll css translate`
- `intl numberformat animate count up`
- `css @property counter animation`

## Related

[[kinetic-type]] (letters' motion grammar; this is digits'),
[[dashboard-tiles]] (the calm-update law's home), [[chart-voice]]
(delta semantics), [[chips-badges-avatars]] (count-badge pulses),
[[scroll-choreography]] (on-view triggers), [[motion-ceremony]]
(duration budgets), [[typographic-voice]] (tabular-nums),
[[loading-language]] (skeleton-to-value arrival), [[audio-reactive]] +
[[fui]] (readout registers), [[visible-accessibility]] (reduced motion,
live regions).
