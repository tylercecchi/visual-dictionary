---
name: app-shell
title: App Shell
category: layout
aliases: [application layout, sidebar layout, holy grail, admin layout, nav shell, chrome, three pane, docs layout, master detail]
media: [css]
---

# App Shell

**Coordinate:** framed panes wrapping another coordinate; the shell itself is
`grid` + `tiled`.

The fixed chrome a product lives in — sidebar, topbar, content region,
optional inspector/TOC — each pane scrolling independently. The shell isn't
a page layout; it's the frame that *hosts* page layouts.

```
┌──────┬──────────────────┬─────┐
│ nav  │ topbar           │     │
│      ├──────────────────┤ ins-│
│      │                  │ pec-│
│      │  content         │ tor │
│      │  (own scroll)    │     │
└──────┴──────────────────┴─────┘
```

## You know it when you see

- Persistent nav that never scrolls away; content scrolling inside its own region
- The docs triptych: nav / article / table-of-contents
- Master-detail: a list pane driving a detail pane
- The failure: page-scroll and pane-scroll fighting (scrolling the wrong region), or chrome eating content space on small screens

## Dials

- **pane count & roles** — sidebar+content (the default), +topbar, +inspector/TOC (the triptych), master-detail (list drives detail); every pane must earn its pixels ([[spacing-density]]: framed shells justify themselves with density)
- **sidebar weight** — full nav rail (labels+icons, ~240px), collapsed icon rail (~64px, expandable), or overlay drawer; collapsibility is a *state*, design both
- **scroll ownership** — which panes scroll independently and which are fixed; sticky section headers inside panes; the shell itself never scrolls
- **chrome separation** — how panes divide: [[border-stroke]] hairlines (dense/technical), background shifts ([[elevation]] surface levels, softer), or pure [[spacing-density]] gaps (airy, rare in shells)
- **content max-width** — whether the content pane caps line length ([[typographic-voice]] measure) or fills (dashboards); the reading-vs-working register

## Content contract

Requires persistent navigation structure worth pinning (≥2 levels or
frequent switching) and content sessions long enough to amortize the chrome.
Marketing/one-shot pages don't qualify — they want `single-surface`.

## Collapse behavior

Sidebar → overlay drawer behind a menu button; inspector/TOC → dropdown or
bottom sheet; master-detail → list *navigates to* detail (two screens, back
button). The shell's mobile form is navigation *events* replacing
navigation *presence*. Topbar survives; everything else yields to content.

## Techniques

- **CSS Grid shell** — `grid-template-areas` naming the panes;
  `height: 100dvh` + `overflow: auto` per scrolling pane (`min-height: 0`
  on grid children — the classic trap); the whole shell is ~20 lines.
- **Collapsible rail** — width toggled via a custom property + transition;
  icon-only state keeps tooltips/labels accessible.
- **Sticky internals** — `position: sticky` for in-pane headers and the
  TOC; the TOC highlights the visible section via IntersectionObserver
  ([[scroll-choreography]]'s trigger register).
- **Component-library shells** — most design systems ship one; theme it
  rather than rebuild unless the layout is the product.

## Search queries

- `css grid app shell template areas dvh`
- `min-height 0 grid overflow scroll trap`
- `collapsible sidebar rail pattern`
- `master detail responsive pattern`

## Related

Wraps [[dashboard-tiles]], [[timeline-feed]], [[centered-stack]] and others;
[[border-stroke]] + [[elevation]] (pane separation), [[spacing-density]]
(the density obligation), [[terminal-aesthetic]] (TUI shells are this),
[[grid-systems]] (the page-level skeleton it frames).
