---
name: broadcast-graphics
title: Broadcast / Sports Graphics
summary: "score bugs, lower thirds, tickers; change as the event"
category: wardrobe
aliases: [lower third, chyron, ticker, news crawl, score bug, scoreboard, on-air graphics, sports graphics, live badge, breaking news banner, team colors, match center, esports overlay, stream overlay, tv graphics, live scores ui]
media: [css, svg, canvas]
---

# Broadcast / Sports Graphics

Television's on-screen graphics language ported to product UI — the
persistent score bug, the lower-third name plate that wipes in, the
crawling ticker, the LIVE dot — built for glanceability over moving
imagery and for *change* as the event.

## You know it when you see

- A compact score/status panel pinned to a corner that never leaves,
  updating in place with a flash
- Name plates and headlines that slide or wipe in on an angle, hold, and
  wipe out — never fade
- A horizontal crawl of headlines or prices along the bottom edge
- Condensed, extended, or italic caps type; a red `LIVE` dot; panels that
  recolor to the team, league, or brand in play
- The failure: broadcast energy on data that isn't live — wipes and
  flashes on values that change once a day

## Dials

- **persistence class** — *bug* (always-on corner status), *lower third*
  (transient plate, seconds), *full-screen* (stat card, lineup),
  *crawl/ticker* (continuous); each has its own duration contract
- **motion grammar** — wipe/mask reveals (clip-path), angled slides with
  overshoot, stacked element stagger; entrances are fast and hard
  ([[motion-ceremony]]'s celebratory budget, applied only to real events)
- **type** — condensed or extended grotesque caps for plates, italic/skew
  for speed, `tabular-nums` for scores; hierarchy by weight and size,
  not color
- **color source** — house palette vs *dynamic* team/brand color pulled
  from data; the panel's accent becomes a variable, with a contrast
  guard ([[color-roles]])
- **change pulse** — how a value announces change: odometer roll +
  flash + brief scale ([[animated-numbers]]); calm for ticks, loud for
  goals
- **layering on media** — scrim strength, edge safe-areas (title-safe
  margins), text stroke/shadow for legibility over video
  ([[image-treatment]], [[media-chrome]])
- **density** — one stat per bug vs the full match center; the bug
  answers one question at a glance

## Techniques

- **Wipes** — `clip-path: inset(0 100% 0 0)` → `inset(0)` with a fast
  ease-out (or a spring with slight overshoot); angled plates via a
  skewed container with un-skewed text.
- **Crawl** — a track with the content duplicated twice, `translateX`
  keyframe over the content width; pause on hover; `prefers-reduced-
  motion` → static list with a "more" control.
- **Dynamic theming** — set `--team-primary` / `--team-on-primary` from
  data, derive the on-color with a contrast check at runtime, and paint
  panels from the variables only.
- **Score change** — [[animated-numbers]] odometer for digits, one
  background flash (`@keyframes` to the accent and back), no re-fire on
  re-render.
- **Legibility over video** — `paint-order: stroke fill` with a thin
  stroke, or a text shadow stack, plus a gradient scrim; keep text out of
  the outer 5% safe margin.
- **Live badge** — red disc with a slow opacity pulse; the *only*
  perpetual animation allowed on the surface.

## Starting points

- Major-league and network broadcast packages (visual reference — the
  register's ceiling is on TV, not the web)
- Esports/stream overlay tools (Streamlabs, StreamElements) — the
  web-native precedent for bugs, alerts, and tickers
- Recent showcases: live-score mobile UIs and Dynamic-Island match
  concepts (recent.design)
- Sports data APIs for real change signals to drive the pulse

## Search queries

- `lower third animation css clip-path wipe`
- `css ticker crawl infinite marquee reduced motion`
- `dynamic team color theming css variables contrast`
- `score bug ui design live sports app`
- `text legibility over video paint-order stroke`

## Related

[[animated-numbers]] (the change pulse), [[kinetic-type]] (plate type
motion), [[media-chrome]] (controls over media — shares the legibility
problem), [[dashboard-tiles]] (the calm cousin: same data, no drama),
[[toast-notification]] (Dynamic-Island-style status pills), [[color-roles]]
(dynamic accents), [[motion-ceremony]] (budget), [[knockout-typography]]
(type over imagery), [[chips-badges-avatars]] (LIVE badge),
[[timeline-feed]] (play-by-play), [[fui]] (where broadcast drifts when it
glows).
