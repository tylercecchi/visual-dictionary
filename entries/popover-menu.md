---
name: popover-menu
title: Popover / Menu
category: layout
aliases: [popover, dropdown, tooltip, context menu, select menu, combobox, flyout, hover card, anchored overlay, menu placement]
media: [css]
---

# Popover / Menu

**Surface contract:** anchored · non-blocking · ephemeral · mid tier.

The anchored ephemerals — dropdowns, tooltips, context menus, hover cards,
select lists. Surfaces that *belong to a trigger*: they appear beside it,
point back at it, and evaporate at the first sign of disinterest. The
placement math family.

```
      [ trigger ▾]
      ┌──────────┐
      │ item     │
      │ item     │
      │ ──────── │
      │ item   ▸ │
      └──────────┘
```

## You know it when you see

- Menus dropping from buttons, flipping above when space runs out
- Tooltips with (or without) arrows pointing at their anchors
- Right-click context menus at the cursor; hover cards previewing links
- The failures: overlays clipped by scrolling containers, menus detaching from their anchors on scroll, tooltips hiding essential information

## Dials

**Anchoring (the family's defining math)**
- **placement & flip** — preferred side (below-start for menus, above-center for tooltips) with automatic flip/shift when the viewport intervenes; offset from anchor (4-8px); the anchor relationship must survive scroll and resize (reposition or dismiss — never drift)
- **arrow presence** — pointed arrow (tooltips, hover cards: strengthens attachment across a gap) vs arrowless (menus flush to triggers: attachment via proximity); arrow inherits border and shadow correctly (the classic implementation snag)
- **origin ceremony** — enter by scaling from the *anchor's* corner (`transform-origin` at the attachment point — [[motion-ceremony]] micro register, 100-150ms) so the surface visibly comes *from* its trigger; exit instant or faster

**Ephemerality**
- **dismissal triggers** — outside-click, Escape, anchor re-click, scroll-away, focus departure; "light dismiss" is the family signature — the surface never demands anything ([[modal-dialog]]'s opposite)
- **hover intent** (tooltips, hover cards) — open delay (300-500ms — instant tooltips are flicker noise), close grace period (leaving through the popover's own bridge area doesn't kill it), and the invisible hover bridge between anchor and card
- **information license** — tooltips carry *supplements only* (labels for icons, shortcuts, clarifications — never essential or interactive content: touch has no hover, [[visible-accessibility]]); interactive content promotes the surface to hover card or popover proper

**Menu grammar**
- **item anatomy** — icon slot + label + trailing (shortcut/chevron/check); groups with separators + optional group labels ([[text-block-grammar]] label register); destructive items last, danger-colored ([[color-roles]]), separated
- **depth budget** — submenus one level max (hover-open with a diagonal safe-triangle toward the submenu — the classic pointer-path problem); beyond that, a [[modal-dialog]] or [[sheet-drawer]] carries the hierarchy
- **width & scroll** — menus size to content (min-width of the trigger for selects), cap at ~20 items before internal scroll + type-ahead; long option sets want a combobox with filtering instead

**Surface styling**
- **chrome** — the mid-tier [[elevation]] shadow + hairline [[border-stroke]] (both — popovers float close, needing the crisper edge), tight radius ([[shape-language]] one step below cards), dense padding ([[spacing-density]]: menus are the densest surfaces in UI)

Radial/pie menus are this surface's contract wearing [[radial-orbital]]'s
placement system — see that entry for the geometry, this one for
dismissal, semantics, and keyboard law.

## Content contract

Small, immediate, optional content: a list of actions (menus), a
supplement (tooltips), a preview (hover cards), choices (selects).
Nothing essential, nothing long, no multi-step tasks. If the user must
read or complete it, the content has outgrown ephemerality — promote it
up the surface stack.

## Collapse behavior

Touch reshapes the family: tooltips largely *disappear* (their content
must live elsewhere — the audit this forces is healthy); context menus
become long-press [[sheet-drawer]]s; large menus and selects become
bottom sheets (native pickers where possible); simple short menus survive
as-is. The anchored form is a pointer-world privilege.

## Techniques

- **Popover API + anchor positioning** — native `popover` attribute
  (light dismiss, top-layer rendering — escapes clipping containers for
  free) + CSS anchor positioning (`anchor()`, `position-try` for flips);
  the emerging standard — verify current support, fall back to
  Floating UI.
- **Floating UI** — the placement library (flip, shift, offset, arrow,
  size middleware); the default engine wherever native anchoring isn't
  ready.
- **Menu semantics** — `role="menu"`/`menuitem` with full arrow-key
  navigation, type-ahead, and focus return ([[visible-accessibility]] —
  menus are keyboard-first surfaces); comboboxes follow the ARIA combobox
  pattern; component libraries earn their keep here.
- **Safe-triangle submenus** — track pointer vector toward the submenu
  and delay close inside the triangle.
- **Hover cards** — open/close timers + a `polygon()` bridge element;
  content prefetch on intent ([[loading-language]]: never a spinner in a
  hover card).

## Search queries

- `popover api anchor positioning css support`
- `floating ui flip shift arrow middleware`
- `aria menu keyboard navigation pattern`
- `submenu safe triangle hover intent`
- `tooltip touch alternative audit`

## Related

[[modal-dialog]] + [[sheet-drawer]] (the promotions when content
outgrows ephemerality; the mobile collapse targets), [[card]] (hover
cards are ephemeral cards), [[elevation]] + [[border-stroke]] (mid-tier
chrome), [[motion-ceremony]] (origin ceremony), [[spacing-density]]
(menu density), [[text-block-grammar]] (item and group labels),
[[visible-accessibility]] (keyboard-first law, tooltip limits),
[[cursor-effects]] (the pointer world these live in).
