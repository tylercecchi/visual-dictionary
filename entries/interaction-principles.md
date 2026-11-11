---
name: interaction-principles
title: Interaction Principles
summary: "Fitts, Hick, memory limits, response-time bands, modes, undo; checks for UX"
category: behavior
aliases: [ux laws, laws of ux, usability heuristics, usability principles, interaction design principles, fitts law, fitts's law, hicks law, hick's law, choice overload, too many options, working memory, cognitive load, chunking, recognition over recall, doherty threshold, response time, response times, mode error, mode errors, undo vs confirm, affordance, affordances, mapping, consistency, feedback loop, hard to use, clunky, confusing]
media: [css]
---

# Interaction Principles

The small set of laws used to *diagnose* behavior problems — each phrased
as a check an agent can run against a real UI. This is the behavior
counterpart of [[visual-hierarchy]]: the place to go when the complaint is
"clunky", "confusing", or "slow" and nothing more specific is named.

## You know it when you see

- Tiny, far-away targets for the most frequent action; a 30-item flat menu
- Users re-typing things the screen just showed them; codes they must remember
- A click that seems to do nothing for half a second
- Keystrokes doing something unexpected because a hidden mode was on
- "Are you sure?" on every action, clicked through without reading

## What it does

Turns vague usability complaints into named, measurable violations with a
standard fix. Each law below is a check: measure the UI, compare to the
threshold, apply the remedy. They also arbitrate between other behavior
entries (confirm vs undo, menu vs palette, gesture vs button).

## When to use

- Diagnosing vague behavior critique ("clunky", "confusing", "slow", "fiddly")
- Reviewing a flow before shipping — run every check once
- Settling a design argument with a principle instead of taste

## When not to use

- Visual complaints ("busy", "flat", "cheap") — use [[visual-hierarchy]], [[spacing-density]], [[color-roles]]
- Choosing a specific mechanism — go to the mechanism's entry ([[undo-recovery]], [[autocomplete-typeahead]], [[touch-gestures]]) once the check names the problem
- As a substitute for watching real users — the laws predict, testing confirms

## Dials

**Pointing & choosing**
- **Fitts's law** — time grows with distance and shrinks with target size. *Check:* primary/frequent targets ≥44×44px touch, ≥24×24px pointer (hit area, not glyph); related actions sit near where the pointer already is; screen edges and corners are infinite-depth targets on desktop; destructive targets are *not* adjacent to frequent ones
- **Hick's law** — decision time grows with the number of equally weighted choices. *Check:* >~7 peer options at one level → group, rank (defaults first), or progressively disclose ([[disclosure]]); long but *ordered* lists (alphabetical, searchable) are exempt — use [[autocomplete-typeahead]]

**Memory**
- **working memory is small** — about 4 (±1) chunks. *Check:* nothing the user needs on step N must be memorized from step N-1 — carry it forward visibly; codes and numbers chunked (`4821 9930`, not `48219930`)
- **recognition over recall** — *Check:* every command reachable by a visible menu; recents and suggestions offered instead of empty fields; shortcuts shown next to menu items ([[inline-commands]])

**Time**
- **response-time bands** — ≤100ms feels instant (direct manipulation, typing, hover); ≤1s keeps flow (navigation; no indicator needed under ~300ms); ≤10s holds attention (show progress); >10s user leaves (background it, notify on completion). *Check:* time every action against its band ([[loading-language]])
- **Doherty threshold** — under ~400ms system response, people stay engaged and work faster. *Check:* interactive round-trips under 400ms, or acknowledge input instantly and finish later ([[live-feedback]] optimistic UI)

**Modes**
- **modes and mode errors** — the same input means different things in different states. *Check:* every mode visibly indicated at the point of input (cursor, toolbar state, colored frame); prefer quasi-modes held by a key (spring-loaded) over latched modes; Escape always exits; no mode silently persists across sessions

**Safety**
- **undo absolves the warning** — confirmations get habituated and clicked through. *Check:* reversible actions run immediately with an undo ([[undo-recovery]]); confirm dialogs only for truly irreversible or high-cost actions, and they name the consequence ("Delete 12 files permanently") with a specific verb on the button ([[modal-dialog]])

**The classic four**
- **consistency** — same action, same name, same place, same key across the product and with platform convention. *Check:* grep labels for synonyms of one action
- **affordance & signifiers** — controls look operable; non-controls don't. *Check:* every clickable thing has a hover/focus state ([[hover-response]]); nothing static looks like a button ([[control-language]])
- **feedback** — every action produces a visible response within the ≤100ms band at the point of action. *Check:* click each control and watch the spot you clicked
- **mapping** — control layout mirrors effect layout (left arrow moves left, slider up = more). *Check:* directions and orders agree between control and result ([[touch-gestures]] direction maps)

## Techniques

- **Audit pass** — walk the flow once per law; log violations as
  "law → element → measured value → threshold → fix".
- **Measure targets** — DevTools element boxes or a CSS outline overlay
  (`* { outline: 1px solid }` scoped to the region); check hit areas
  include padding.
- **Measure time** — Performance panel / `PerformanceObserver` for
  `event` timing (INP ≤200ms is the web's instant-feedback budget);
  throttle CPU/network to test bands honestly.
- **Count choices** — per screen: peer options at the top level; anything
  over ~7 gets grouped or ranked.
- **Mode inventory** — list every state that changes what a key or click
  does; each needs a visible indicator and an exit.

## Starting points

- Nielsen's 10 usability heuristics; NN/g response-time limits
- Laws of UX (lawsofux.com) — quick reference cards
- https://interfacelineage.com/working-memory-is-small,
  /undo-absolves-the-warning — further reading

## Search queries

- `fitts law touch target size guidelines 44px 24px`
- `hick's law menu design number of choices`
- `response time limits 0.1 1 10 seconds`
- `doherty threshold 400ms`
- `mode errors interface design quasimode`

## Related

[[visual-hierarchy]] (the visual diagnosis counterpart),
[[undo-recovery]] (undo absolves the warning), [[loading-language]]
(response-time bands in practice), [[live-feedback]] (feedback at the
trigger), [[pointer-intent]] (Fitts in motion), [[disclosure]] (Hick's
remedy), [[inline-commands]] (recall tier), [[touch-gestures]] (mapping,
discoverability), [[control-language]] (affordance),
[[visible-accessibility]] (target size and timing overlap),
[[modal-dialog]] (when confirms are earned).
