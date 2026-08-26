---
name: loading-language
title: Loading & Progress Language
category: ui-foundations
aliases: [loading state, spinner, skeleton screen, progress bar, loading animation, splash screen, perceived performance, optimistic ui, empty loading]
media: [css, svg, canvas]
---

# Loading & Progress Language

How a product waits — spinners, skeletons, progress bars, staged reveals.
Waiting is a designed experience with its own identity register, and the
strongest lever on *perceived* speed.

## You know it when you see

- Skeleton screens sketching the incoming layout with [[shimmer-sheen]]
- A branded spinner/loader that's become a tiny signature (or a default one that says template)
- Determinate bars with personality: stepped, glowing, or deliberately honest
- Content arriving in a designed stagger rather than popping in at random
- The failures: spinner flash for 80ms loads; skeletons that don't match the real layout (double layout shift)

## Dials

- **waiting vocabulary by duration** — <300ms: show *nothing* (delay the indicator); 300ms-2s: lightweight indicator/skeleton; >2s: determinate progress + words; >10s: narrative (steps, humor, education). Duration picks the tool
- **skeleton fidelity** — how closely placeholders match final layout (must be close, or the swap jars) and their texture: flat pulse vs [[shimmer-sheen]] sweep
- **honesty** — real progress vs eased fake progress (accelerate-then-crawl); fake reads fine until it stalls at 99% — cap the lie
- **arrival choreography** — content fades/rises in with short stagger ([[motion-ceremony]]: brief, one-time) vs pops; the arrival *is* the payoff
- **brand register** — where personality lives: a signature mark animation (logo draw, mascot), themed skeleton tint, or austere neutrality

## Techniques

- **Indicator delay** — CSS `animation-delay` trick or a 300ms timer before
  any indicator mounts; the single highest-value rule in this entry.
- **Skeletons** — real layout components with placeholder blocks
  (`aria-busy`, dimensions from the actual design tokens); shimmer via the
  [[shimmer-sheen]] gradient sweep.
- **SVG mark animation** — logo path draw (`stroke-dashoffset`) or morphing
  mark ([[morphing]]) for the branded loader.
- **Determinate progress** — drive from real signals where possible
  (bytes, steps); smooth with easing toward targets, never backward.
- **Staged data + optimistic UI** — render what's known immediately, fill
  in the rest; the best loading state is less loading.

## Starting points

- Component libraries ship skeleton primitives — theme rather than rebuild
- Nielsen Norman response-time thresholds (0.1s/1s/10s) — the duration
  vocabulary's source
- Lottie for complex branded loader animations (verify weight is justified)

## Search queries

- `skeleton screen best practices layout shift`
- `delay loading spinner 300ms flash`
- `svg logo draw animation stroke-dashoffset`
- `fake progress bar easing honesty`

## Related

[[shimmer-sheen]] (the skeleton texture), [[motion-ceremony]] (arrival
stagger budget), [[illustration-style]] (long-wait narratives lean on it),
[[morphing]] (loader-to-content continuity), [[visual-hierarchy]] (skeletons
must sketch the real hierarchy), [[page-transitions]] (transitions often
*are* loading cover).
