---
name: panes-and-tiling
title: Panes & Tiling
summary: "split panes, draggable dividers, docking, collapsible sidebars, snap layouts"
category: behavior
aliases: [split pane, split panes, split view, resizable panels, resizable panes, resizable sidebar, resize handle, draggable divider, splitter, gutter drag, panel layout, docking, dockable panels, dock panels, tiling, window tiling, tiling window manager, snap layouts, window snapping, collapsible sidebar, collapse sidebar, side panel, inspector panel, ide layout, pane focus]
media: [css]
---

# Panes & Tiling

Dividing one window into adjustable regions — dragging the line between
them, collapsing one away, docking panels, or snapping windows into a
tiled grid — and remembering how the user left it.

## You know it when you see

- A thin divider you can grab (cursor turns to ↔) to make the sidebar wider
- A sidebar that snaps shut when dragged narrow, leaving a slim rail or a toggle
- IDE layouts: editor, terminal below, file tree left, inspector right — each resizable, some tabbed
- Dragging a panel's tab to a screen edge and a blue zone previews where it will dock
- Windows snapping into halves/thirds/quarters; a layout picker on hovering the maximize button
- The failures: 1-px hit areas you can't grab, panels shrinking until content breaks, sizes reset on every reload

## What it does

It lets the user allocate screen space between simultaneous views rather
than navigating between them. Dividers redistribute space under direct
manipulation, thresholds turn "too small" into "collapsed", docking and
snapping offer a small set of good arrangements so freeform resizing
isn't required, and persistence makes the layout the user's own.

## When to use

- Work that needs two or more views at once: source + preview, list + detail, editor + console
- Tools used for hours where users tune their workspace (IDEs, design tools, admin consoles, email)
- Wide screens where a fixed split wastes or starves space for different tasks
- Multi-document/multi-window environments (OS shells, trading desks, dashboards)

## When not to use

- Mobile and narrow screens — collapse to stacked navigation or a [[sheet-drawer]], not side-by-side panes
- Two fixed, equal-weight zones in a marketing or editorial page — use a static [[split-screen]] layout
- Rarely needed secondary info — use [[disclosure]] or a [[popover-menu]], not a permanent pane
- Casual/consumer apps with one primary task — a single [[focus-page]] beats a configurable workspace
- Freeform overlapping arrangement of many objects — that's a [[spatial-canvas]], not tiling

## Dials

- **handle hit area** — visual line 1 px, grab zone 6-10 px (larger on touch, ~24 px); hover/active highlight in accent after ~100-150 ms hover delay; cursor `col-resize` / `row-resize`
- **min / max size** — per pane in px or %, e.g. sidebar 200-480 px, main ≥ 360 px; content must stay usable at the min
- **collapse threshold** — dragging below ~50-60% of min snaps to collapsed (0 or a ~48 px icon rail); dragging back past the threshold re-expands to last size
- **collapse animation** — ~150-200 ms ease-out on toggle; *none* while dragging (1:1 tracking, [[interaction-feel]] fidelity)
- **snap points** — optional detents (25 / 33 / 50 / 66%) with ~8-12 px capture radius; double-click handle to reset to default
- **keyboard** — handles focusable (`role="separator"`, `aria-valuenow`), arrows move ~10 px, Shift+arrow ~10%; Home/End collapse/expand; a shortcut toggles each sidebar (e.g. ⌘B)
- **pane focus** — one focused pane at a time, shown by a subtle accent border or header tint; shortcuts and commands target the focused pane; F6/⌘-number cycles focus
- **persistence** — save sizes and collapsed state per layout (localStorage or user settings), restore before first paint to avoid a jump
- **dock zones** — on drag, show drop previews for left/right/top/bottom/center (tab into) with ~40-80 px edge zones; [[drag-and-drop]] rules for feedback
- **tiling grammar** — preset layouts (halves, thirds, 2×2) offered on drag-to-edge or a hover picker; gaps 0-8 px; [[snap-and-guides]] for edge snapping

## Techniques

- **CSS only** — CSS grid with `grid-template-columns` driven by a custom
  property; `resize: horizontal` on a container gives a free (if crude)
  handle; `<details>` or a checkbox for collapse. Fine for a single
  sidebar.
- **Pointer-events splitter** — a separator element with
  `setPointerCapture`, updating a CSS variable per frame; clamp to
  min/max; ~50 lines and fully controllable.
- **react-resizable-panels** — panel groups, min/max, collapsible,
  keyboard and persistence built in (moderate dependency; verify
  currency). Svelte/Vue equivalents exist (paneforge, splitpanes).
- **Docking managers** — Dockview, FlexLayout, Golden Layout-class for
  draggable tabs and dock zones (moderate-to-structural: they own the
  layout model — confirm before adopting).
- **OS-level tiling** — native window snapping (Windows Snap Layouts,
  macOS tiling, tiling WMs) is the reference behaviour for in-app tiling.

## Starting points

- react-resizable-panels docs and examples
- Dockview documentation
- WAI-ARIA APG "Window Splitter" pattern
- Further reading: https://interfacelineage.com/window-tiling,
  https://interfacelineage.com/infinite-canvas

## Search queries

- `react-resizable-panels collapsible persist layout`
- `aria window splitter pattern keyboard`
- `dockview docking layout tabs drag`
- `css grid resizable sidebar pointer capture`
- `split pane min size collapse threshold`

## Related

[[app-shell]] (the frame panes live in), [[split-screen]] (static
two-zone layout), [[sheet-drawer]] (mobile replacement), [[drag-and-drop]]
(dock-by-drag), [[snap-and-guides]] (detents and edge snapping),
[[interaction-feel]] (divider drag fidelity), [[map-list-sync]] (a classic
two-pane pairing), [[overview-navigation]] (master-detail, Miller
columns), [[ai-interaction]] (artifact beside the chat).
