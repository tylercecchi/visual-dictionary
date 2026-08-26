---
name: coach-marks
title: Coach Marks / Onboarding Overlay
category: layout
aliases: [product tour, onboarding tour, spotlight overlay, feature callout, walkthrough, first-run experience, tooltip tour, feature discovery, whats new popup, guide new users, guided tour, new user onboarding, show users how to use]
media: [css]
---

# Coach Marks / Onboarding Overlay

**Surface contract:** anchored + scrimmed · semi-blocking · dismissed ·
top tier — the *inverse modal*: instead of a surface floating above a
dimmed page, the page dims *except* a spotlit target, and an anchored
callout explains it.

The teaching surface — first-run tours, "what's new" callouts, feature
discovery. The last member of the surface family, and the one with the
strictest trust budget: every coach mark spends user patience.

```
░░░░░░░░░░░░░░░░░░░░░░
░░░┌─────────┐░░░░░░░░
░░░│ ⊙ target│░░░░░░░░  ← spotlight cutout
░░░└────┬────┘░░░░░░░░
░░┌─────┴───────┐░░░░░
░░│ This is X.  │░░░░░
░░│ (2/4) [Next]│░░░░░
░░└─────────────┘░░░░░
```

## You know it when you see

- A dimmed page with one element cut out bright, a small card pointing at it
- Step counters ("2 of 4"), Next/Back, and a Skip that's always present
- The failures: a five-step tour before the user has done anything, marks that reappear every session, a spotlight on something scrolled off-screen

## Dials

- **the alternatives ladder (use the smallest)** — before a tour: would a designed empty state ([[illustration-style]]) teach it in place? A one-off pulse dot ([[chips-badges-avatars]] dot + [[motion-ceremony]] ambient pulse)? A single contextual callout at first encounter? Full tours are the *last* rung, for genuinely non-discoverable multi-step value; most "onboarding" requests resolve lower on the ladder
- **spotlight anatomy** — scrim at [[modal-dialog]] recipe with a cutout (rounded rect, small padding halo) around the target; the target stays *interactive* when the step asks for action ("click here to…" — the do-it register beats the watch-me register); callout as a [[popover-menu]]-placed card with arrow, flipping per viewport
- **sequencing** — 3-5 steps maximum; count visible ("2 of 4" — [[navigation-language]] stepper honesty); Back supported; each step one idea, verb-first copy ([[control-language]] label grammar)
- **the skip law** — Skip/dismiss visible on *every* step, exits the whole tour, and is remembered forever; re-showing a skipped tour is the fastest trust burn in UI ([[toast-notification]]'s voice-trust law, applied to teaching)
- **timing & frequency** — first-run tours fire once, *after* the user's first meaningful action beats before-anything (context makes teaching stick); feature-launch marks fire once per feature; contextual marks fire at first encounter of the target; a per-user ledger of shown/dismissed marks is part of the design, not an afterthought
- **motion** — scrim + spotlight fade in ~200ms; between steps the cutout *travels* to the next target ([[motion-ceremony]] standard register — the movement teaches the spatial relationship); the callout re-anchors after the spotlight lands

## Content contract

Features that are genuinely non-discoverable and valuable enough to
interrupt for — each step must name what the user *gains*, not what the
UI *has*. If the interface needs many tours, the finding is about the
interface ([[visual-hierarchy]]/[[navigation-language]] audit), not a
tour-tooling need. Targets must exist and be visible when their step
fires (scroll them into view first, or skip the step gracefully).

## Collapse behavior

On mobile the anchored-callout form gives way to a bottom-[[sheet-drawer]]
card per step (thumb-reachable, keyboard-free) with the spotlight cutout
retained; tours shorten further (2-3 steps) — small screens tolerate less
teaching chrome.

## Techniques

- **The cutout** — one SVG scrim with a `<mask>` (page-size rect minus
  rounded target rect) — animatable, clean corners; or four positioned
  scrim panels for the dependency-free version. `clip-path` on a scrim
  div also works but corner-radius animation is harder.
- **Anchoring** — the callout uses [[popover-menu]] machinery (Floating
  UI / anchor positioning) against the target; reposition on
  scroll/resize; scroll target into view before revealing the step.
- **Focus & semantics** — focus moves into the callout per step
  (`role="dialog"`, labelled by its heading); Escape = skip; the ledger
  respects `prefers-reduced-motion` by cross-fading instead of
  traveling ([[visible-accessibility]]).
- **Substrate** — driver.js-class / react-joyride-class libraries own
  the cutout+anchor+sequence plumbing (verify currency); the trust
  dials (skip ledger, timing) remain product code either way.

## Search queries

- `driver.js product tour spotlight`
- `svg mask spotlight overlay cutout`
- `onboarding tour best practices skip`
- `feature discovery pulse dot pattern`

## Related

[[modal-dialog]] (the inverse relationship; shared scrim recipe),
[[popover-menu]] (callout anchoring), [[sheet-drawer]] (mobile step
cards), [[navigation-language]] (step honesty), [[motion-ceremony]]
(traveling spotlight), [[illustration-style]] (empty states — the lower
ladder rung), [[chips-badges-avatars]] (pulse dots),
[[toast-notification]] (fellow trust-budget surface),
[[visible-accessibility]] (focus, reduced motion).
