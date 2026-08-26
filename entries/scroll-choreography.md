---
name: scroll-choreography
title: Scroll Choreography
category: motion
aliases: [scrollytelling, reveal on scroll, scroll animation, scroll-driven, pinned sections, scrub animation, fade in on scroll, apple product page scroll]
media: [css, canvas, webgl]
---

# Scroll Choreography

Scroll position as a timeline — content revealing as it enters, sections
pinning while a story plays out, video scrubbing under your thumb. The system
governing *everything* scroll-driven, where [[parallax]] is one instrument.

## You know it when you see

- Elements fading/rising into place as they enter the viewport
- A section that pins while text steps through a changing visual (scrollytelling)
- Apple-style product pages: scroll scrubbing a 3D turntable or video
- Progress indicators, shrinking headers, scroll-linked counters
- The failure: content hidden until scroll "arrives" — readers who scroll fast see blank page

## Dials

- **trigger vs scrub** — entering the viewport *fires* an animation (plays on its own clock) vs scroll position *is* the playhead (scrubbing); the fundamental choice per effect
- **reveal distance & stagger** — how far elements travel into place (short = polish, long = theatrical) and cascade timing between siblings
- **pin length** — how much scroll a pinned story consumes; expensive attention — every pinned viewport-height must earn itself
- **scroll hijacking line** — never alter scroll *speed/position*; scrub and pin respond to it. Crossing this line is the cardinal sin
- **fallback state** — everything must be readable with animations off (`prefers-reduced-motion`, JS failure): reveal = start visible, scrub = show final frame

## Techniques

- **CSS scroll-driven animations** — `animation-timeline: view()` (enter/
  exit progress) and `scroll()` (page progress); zero-JS scrubbing — verify
  current browser support and provide the no-support state.
- **IntersectionObserver reveals** — the trigger register: observe, add a
  class, CSS does the rest. Cheap, robust, the right default for fade-ins.
- **GSAP ScrollTrigger** — the scrub-and-pin workhorse: pinning, scrub
  smoothing, per-section timelines. framer-motion `useScroll` for the React-
  native equivalent.
- **Canvas/video scrub** — pre-rendered image sequences (or `currentTime`
  on a prepared video) driven by scroll progress; the Apple technique.
  Image-sequence-on-canvas outperforms video seeking — encode accordingly.
- **Scrollytelling frameworks** — scrollama-class libraries for step-based
  editorial stories (steps trigger, graphic updates).

## Starting points

- GSAP ScrollTrigger docs — the canonical mental model (trigger/scrub/pin)
- CSS scroll-driven animations spec examples (scroll-driven-animations.style)
- scrollama (npm) for editorial step-stories
- Apple product pages — decompose one; they are the reference implementations

## Search queries

- `css animation-timeline view() scroll() support`
- `gsap scrolltrigger pin scrub example`
- `scroll image sequence canvas apple technique`
- `scrollama scrollytelling steps`

## Related

[[parallax]] (one instrument in this orchestra), [[motion-ceremony]] (reveal
distance/stagger personality), [[page-transitions]] (navigation's equivalent
system), [[visual-hierarchy]] (reveals re-sequence reading order — respect
it), [[progressive-blur]] (edges of pinned regions).
