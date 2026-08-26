---
name: sheet-drawer
title: Sheet / Drawer
category: layout
aliases: [bottom sheet, side drawer, slide over, panel drawer, detail drawer, tray, pull up sheet, off canvas, detents, half sheet]
media: [css]
---

# Sheet / Drawer

**Surface contract:** edge-attached · blocking or non · dismissed · high
tier.

Surfaces that slide from a viewport edge — bottom sheets rising under a
thumb, side drawers carrying detail views, trays and slide-overs. The
modal's flexible sibling: same overlay family, but edge attachment brings
partial states, gestures, and the option to *not* block.

```
│ page          │┌──────┐      ░░░░░░░░░░
│               ││drawer│      ░░░░░░░░░░
│               ││      │      ┌── ─ ──┐
│               ││      │      │ sheet │
│               │└──────┘      └───────┘
   (side drawer, right)      (bottom sheet)
```

## You know it when you see

- Detail panels sliding in from the right (inspect-without-leaving patterns)
- Bottom sheets with a grab handle, resting at partial heights, draggable
- Nav drawers on mobile; filter trays; cart slide-overs
- The failures: drawers wide enough to be pages (context peek lost), sheets fighting scroll gestures, no gesture dismissal on a surface that begs for it

## Dials

**Edge & size**
- **edge choice** — bottom (mobile-native, thumb territory, gestures), right (detail/inspector on wide screens — reading direction: detail follows content), left (navigation by convention), top (rare: notification shades); edge encodes role
- **peek discipline** — the drawer's width (or sheet's height) leaves meaningful context visible (30%+ of the page); full-coverage means it should be a page; the visible page strip *is* the feature (context retained, click-to-return)

**States & gestures**
- **detent system** (bottom sheets) — resting heights: peek (handle + summary), half, full; velocity-aware transitions between them ([[interaction-feel]]'s detent machinery verbatim — a fast short fling beats a slow long drag); 2-3 detents max
- **gesture grammar** — drag-to-move via the handle (or anywhere on the header), rubber-band past limits, downward-fling dismisses; scroll-vs-drag arbitration (sheet content scrolls only at full detent, else drags — the hard interaction problem; get it wrong and the sheet is unusable)
- **handle affordance** — the pill-bar (bottom sheets: mandatory — it's the gesture's signpost), drawer edge grips optional; [[visible-accessibility]]: every gesture has a button equivalent

**Blocking & chrome**
- **modal vs modeless** — scrimmed + inert page (a modal wearing a sheet's body — mobile forms) vs modeless (page live beside a drawer — inspector/cart patterns, no scrim or a whisper one); the choice follows [[modal-dialog]]'s earned-blocking law
- **surface treatment** — top-radius on bottom sheets ([[shape-language]]: radius only on the detached corners), [[elevation]] shadow toward the page, optional [[frosted-glass]]; the page behind may scale/darken slightly (the stacked-card depth cue — [[elevation]] theater)
- **internal anatomy** — header (title + dismiss + handle), scrollable body, optional pinned footer actions; headers stay pinned during body scroll

## Content contract

Secondary-but-substantial content that benefits from retained context:
detail views, filters, forms, carts, pickers. More than a [[popover-menu]]
carries, less than a page deserves. Bottom sheets specifically want
*progressive* content (summary at peek → full at expansion). If the user
never needs the page behind, it's a page.

## Collapse behavior

Sheets/drawers *are* the collapse target — [[modal-dialog]]s and side
panels become bottom sheets on phones. Side drawers on mobile go
full-width-minus-strip or convert to bottom sheets (thumb reach beats
edge fidelity). On wide screens, a bottom sheet often converts to a right
drawer or inline [[panel-well]] — the surface is the *most* re-formable
in the family; design its cross-breakpoint identity (same content, same
header) so users track it.

## Techniques

- **Transform slide** — `translate` transitions from the edge
  (`translateY(100%)` → 0), never animating layout properties; scrim as
  a sibling fade.
- **Drag machinery** — pointer capture on the handle, position following
  with [[interaction-feel]] springs, detent snap by position+velocity
  projection; libraries own the arbitration edge-cases (vaul-class for
  bottom sheets — verify currency) and are usually worth it.
- **Scroll arbitration** — at non-full detents, body `overflow: hidden`
  (drag moves the sheet); at full, body scrolls and a downward drag at
  scrollTop 0 re-grabs the sheet.
- **Modeless drawers** — no focus trap, page interactive; Escape still
  closes; width via `min(28rem, 85vw)`.
- **`<dialog>` reuse** — modal sheets ride the same element/backdrop
  machinery as [[modal-dialog]], restyled to the edge.

## Search queries

- `bottom sheet detents drag velocity web`
- `vaul bottom sheet react`
- `drawer slide over pattern accessibility`
- `sheet scroll drag arbitration`

## Related

[[modal-dialog]] (the blocking sibling; collapse source),
[[interaction-feel]] (detents, rubber-band, fling — the entry's physics),
[[panel-well]] (the inline destination on wide screens), [[app-shell]]
(permanent drawers are shell panes), [[elevation]] + [[shape-language]]
(surface treatment), [[popover-menu]] (the lighter anchored sibling),
[[motion-ceremony]] (slide timing), [[visible-accessibility]] (gesture
equivalents).
