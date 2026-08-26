---
name: dashboard-tiles
title: Dashboard Tile Field
category: layout
aliases: [dashboard layout, widget grid, kpi grid, stat tiles, admin dashboard, monitoring layout, card dashboard, control room]
media: [css]
---

# Dashboard Tile Field

**Coordinate:** 2d · grid · tiled/touching · tiered · scannable · framed.

A working surface of data tiles inside an [[app-shell]] — KPIs, charts,
tables, each in its box, built for *recurring scanning*: the user returns
daily and reads it in seconds. [[bento-grid]]'s utilitarian sibling: same
mosaic, but tuned for glanceability over showmanship.

```
┌────┬────┬────┬────┐
│kpi │kpi │kpi │kpi │
├────┴──┬─┴────┴────┤
│ chart │  chart    │
├───────┴─┬─────────┤
│  table  │  list   │
└─────────┴─────────┘
```

## You know it when you see

- A top row of small stat tiles, larger chart tiles beneath, tables at the base
- Uniform tile chrome (same padding, title style, corner) with heterogeneous content
- The 5-second read: status comprehensible at a glance, detail on demand
- The failure: everything the same size (no reading priority — [[visual-hierarchy]] absent at grid scale), or decoration taxing a daily tool

## Dials

- **scan order architecture** — the tier logic: top-left gets the most-checked number (F-pattern law); KPI strip → trends → detail is the canonical vertical tiering; audit by asking "what's checked hourly vs weekly?"
- **tile grammar** — one chrome for all tiles (title, body, optional footer/action — uniform padding and title [[typographic-voice]]); variation happens *inside* the body ([[chart-voice]] rules there); breaking tile chrome per-widget is the mess vector
- **density register** — ops/monitoring (dense, [[border-stroke]] hairlines, dark [[terminal-aesthetic]]/[[fui]] kinship) vs executive (comfortable, fewer bigger numbers, [[elevation]] cards); pick by visit frequency — daily tools earn density
- **separation mode** — gaps + card surfaces (consumer-soft) vs shared hairline borders, `touching` (terminal-dense; collapse doubles per [[border-stroke]])
- **liveness** — static-on-load vs live-updating tiles; updating values change *calmly* (no [[motion-ceremony]] fanfare per tick — a brief highlight fade at most); sparklines over animated gauges

## Content contract

Metrics and views with a real priority order and stable shapes: KPIs
(number + delta + sparkline), time-series charts, ranked lists, tables.
Requires editorial discipline — a dashboard is what its owner *refuses to
add*; unbounded widget sprawl is a product failure the layout can't fix.
User-customizable grids (drag/resize) are a different, heavier contract —
decide early.

## Collapse behavior

Tiers collapse in scan-priority order: KPI strip becomes a 2-up (or
horizontally scrollable) row and *stays on top*; charts stack full-width by
priority; tables become cards or defer behind links. The 5-second read must
survive on a phone — if it doesn't, the mobile artifact is a different
dashboard, not a reflow.

## Techniques

- **CSS Grid + spans** — [[bento-grid]]'s machinery
  (`repeat(12, 1fr)`, spans per tile size class); `grid-auto-rows` with a
  base row unit so tile heights snap to rhythm.
- **Tile component** — one component, slots for body content; enforce the
  grammar in code, not convention.
- **Live updates** — value changes via a brief background highlight fade;
  numbers in `font-variant-numeric: tabular-nums` so they don't jitter
  ([[typographic-voice]]).
- **Drag/resize grids** — gridstack/react-grid-layout-class libraries when
  customization is real (verify currency); their serialized layout state is
  the user's dashboard.
- **Virtualize tables, not tiles** — the tile field is small; the data
  inside tables is where windowing goes.

## Search queries

- `dashboard grid layout css spans kpi row`
- `react-grid-layout gridstack compare`
- `tabular-nums dashboard numbers`
- `dashboard information hierarchy f pattern`

## Related

[[app-shell]] (the frame), [[bento-grid]] (the marketing sibling),
[[chart-voice]] (inside every tile), [[visual-hierarchy]] (scan order),
[[border-stroke]] + [[elevation]] (separation modes), [[fui]] +
[[terminal-aesthetic]] (the dense registers), [[loading-language]]
(skeleton tiles), [[spacing-density]] (the register decision).
