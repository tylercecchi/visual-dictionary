---
name: pointer-intent
title: Pointer Intent
summary: "hover delays, submenu safe triangles, hover-to-reveal, forgiving hit targets, quasimodes"
category: behavior
aliases: [hover intent, hover delay, open delay, close delay, menu closes too fast, submenu closes, submenu disappears, safe triangle, safe area, menu aim, diagonal mouse, hover to reveal, reveal on hover, press to reveal, hidden actions, hit target, hit area, tap target, touch target, target size, fitts law, hard to click, too small to click, quasimode, hold to reveal, hold key, spring loaded, spring loaded mode]
media: [css, svg]
---

# Pointer Intent

Inferring what the user *means* from imprecise pointer movement — when a
hover is deliberate, where the pointer is heading, how far a target
should reach — and letting held inputs create temporary modes.

## You know it when you see

- Menus and tooltips that wait a beat before opening and don't vanish the moment the pointer slips off
- Moving diagonally from a menu item to its submenu without the submenu closing on the way
- Row actions or a toolbar appearing as you hover, buttons whose clickable area is bigger than they look
- Holding a key (Space, Alt, Cmd) to temporarily pan, show shortcuts, or switch tools — release and it's back
- The failures: flicker as the pointer crosses a grid of tooltips, submenus that collapse mid-reach, 16px icons that need surgical precision

## What it does

Pointer paths are noisy: users overshoot, cut corners, and pass over
things on the way somewhere else. Pointer-intent mechanisms filter that
noise — delaying opens until a hover is deliberate, delaying closes
while the pointer is plausibly heading toward its target, enlarging the
area that counts as a hit — and use held keys or buttons as quasimodes
whose temporary state can't be forgotten, because it ends when the hold
ends.

## When to use

- Hover-opened surfaces: tooltips, hover cards, nested menus, mega menus ([[popover-menu]])
- Dense UIs with small controls (toolbars, table row actions, icon buttons)
- Secondary actions that would clutter every row if always shown
- Expert tools where a held modifier gives a quick temporary mode (pan, zoom, eyedropper, snap bypass)

## When not to use

- Touch and keyboard contexts: hover doesn't exist — show controls by default, reveal on tap or focus, or move them into an overflow menu ([[hover-response]] touch law)
- Essential or frequent actions: make them always visible rather than hover-revealed
- Long-lived modes users need to stay in: use a toggle with visible state (toolbar tool selection), not a hold
- Click-to-open menus in apps where precision is low (mobile web, kiosks): use click/tap to open and explicit close instead of hover timing

## Dials

- **open delay** — hover dwell before opening: tooltips 300-700ms, hover cards ~400-600ms, submenus 100-200ms, mega menus 150-300ms; once one tooltip is open, siblings open instantly (warm-up / skip-delay window ~300-500ms)
- **close grace** — delay before closing after the pointer leaves: 100-300ms (menus), 300-500ms (hover cards with interactive content); cancelled if the pointer returns or enters the surface
- **aim tolerance** — the safe triangle from the pointer to the submenu's near edge; while the pointer moves inside it, the parent item doesn't switch; give up after ~300-500ms of no progress
- **hit-area expansion** — invisible padding so the target is ≥24×24px (pointer, WCAG 2.2 minimum) and ≥44×44px (touch); expansions shouldn't overlap neighbors; edge/corner targets are effectively infinite (Fitts) — use them
- **reveal policy** — hover reveal on `(hover: hover)` devices only; also reveal on `:focus-within`; on touch, always visible or behind a ⋯ menu; reserve the space so revealing doesn't shift layout
- **quasimode feedback** — while held, show the temporary state unmistakably (cursor change, overlay, shortcut hints after ~500ms hold); release restores exactly the prior mode; tap-vs-hold threshold ~200-300ms when the same key does both

## Techniques

- **CSS-only delays** — `transition-delay` on visibility/opacity for open delay and close grace (`:hover` gets the open delay, base state the close delay); cheapest hover intent for simple menus and reveals.
- **Hit-area expansion** — padding with negative margin, or an `::after` pseudo-element with `inset: -8px`; `@media (pointer: coarse)` to grow further on touch.
- **Popover API + interest invokers** — native `popover` (light dismiss) with `interestfor`/hover-trigger proposals for built-in hover delays; verify current support.
- **Safe triangle** — on pointer move, test whether the pointer is inside the triangle (last position, submenu's top-near and bottom-near corners); or an invisible SVG/`clip-path: polygon()` bridge element between item and submenu.
- **Libraries** — Floating UI `safePolygon()` + `useHover({ delay, restMs })`; Radix/React Aria menus and tooltips ship delay groups and submenu aim.
- **Quasimodes** — `keydown`/`keyup` (ignore `repeat`), also clear on `blur`/`visibilitychange` so a lost keyup can't strand the mode.

## Starting points

- Floating UI `safePolygon` and `FloatingDelayGroup`
- WCAG 2.2 SC 2.5.8 Target Size (Minimum)
- Interface Lineage (further reading): https://interfacelineage.com/hover-intent, https://interfacelineage.com/safe-triangle, https://interfacelineage.com/hover-press-to-reveal, https://interfacelineage.com/forgiving-hit-target, https://interfacelineage.com/quasimodes-hold-themselves

## Search queries

- `floating ui safePolygon submenu hover`
- `css transition-delay hover intent menu`
- `submenu safe triangle mouse aim`
- `expand hit area pseudo element touch target`
- `tooltip delay group skip delay`

## Related

[[popover-menu]] (the surfaces these timings govern), [[hover-response]]
(how targets answer once hover is accepted), [[cursor-effects]] (the
cursor as quasimode signal), [[menu-design]] (nested menu structure),
[[visible-accessibility]] (target size, focus parity), [[snap-and-guides]]
(modifier bypass as quasimode), [[continuous-controls]] (fine-adjust
hold), [[spatial-canvas]] (space-to-pan).
