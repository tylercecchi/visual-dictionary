---
name: modal-dialog
title: Modal / Dialog
category: layout
aliases: [modal, dialog, popup, confirmation dialog, lightbox, overlay window, alert dialog, dialog box, center overlay]
media: [css]
---

# Modal / Dialog

**Surface contract:** centered · blocking · dismissed · top tier.

The interruption surface — a centered window over a scrimmed page,
demanding resolution before work continues. The most powerful and most
abused surface in UI: its entire design question is whether the
interruption is *earned*.

```
░░░░░░░░░░░░░░░░░░░░░
░░┌───────────────┐░░
░░│ Title       ✕ │░░
░░│ body          │░░
░░│    [cancel][OK]│░░
░░└───────────────┘░░
░░░░░ scrim ░░░░░░░░░
```

## You know it when you see

- A centered surface floating over a dimmed/blurred page, page inert beneath
- Confirmation asks, destructive-action gates, focused single-task forms, lightbox media
- The failures: modals for content that didn't need to interrupt (a page in a box), stacked modals, un-dismissible marketing modals

## Dials

**The interruption decision**
- **earned blocking** — modal only when the task genuinely cannot proceed (destructive confirmation, required decision, focused sub-task whose context must freeze); anything informational or optional belongs in a [[toast-notification]], [[popover-menu]], [[panel-well]], or new page; this dial is a *product* decision the surface merely renders
- **severity register** — routine dialog (neutral chrome) vs destructive confirmation (danger [[color-roles]] on the confirming action — never on cancel; the danger button placement/color contract) vs alert (icon + tightened copy)

**The scrim**
- **scrim recipe** — darkness (30-60% black, or surface-tinted per [[color-roles]]), optional [[frosted-glass]] blur (premium, costs perf), and what it communicates: heavier scrim = harder interruption; the scrim is [[elevation]]'s push-the-page-back move at full strength
- **scrim dismissal** — click-outside closes (low-stakes) vs inert scrim (destructive/required — accidental dismissal costs too much); pair with Escape behavior consistently

**Geometry & anatomy**
- **size discipline** — dialogs are *small* (26-32rem confirmation, 40-48rem forms); a modal wanting more is a page or a [[sheet-drawer]]; height fits content — internal scrolling is a smell (except media lightboxes)
- **anatomy** — title (states the decision, not "Confirm"), body (consequences, brief — [[text-block-grammar]]), action row (affirming action right/primary, cancel quiet, destructive styled per severity; 2 actions ideal, 3 max), optional ✕ (redundant with cancel — include for scanability)
- **lightbox register** — media-viewing modals invert the chrome: near-black scrim, minimal UI, arrows/swipe ([[carousel-filmstrip]] inside a modal), the content *is* the surface

**Motion & focus**
- **entrance/exit ceremony** — scale-up from 96% + fade (the standard 150-250ms), or rise-from-bottom; exit faster than entrance ([[motion-ceremony]] asymmetry); scrim fades slightly ahead of the panel; no bounce on serious dialogs
- **focus contract** — focus moves in on open (first field or least-destructive action), traps while open, returns to the trigger on close; the page behind is inert — [[visible-accessibility]] non-negotiables the `<dialog>` element handles natively

## Content contract

One decision or one tightly-scoped task, resolvable in under a minute,
requiring frozen context. Multi-step flows, browsing, or reference content
break the contract — they want pages or [[sheet-drawer]]s. The title must
name the decision; if it can't, the modal probably shouldn't exist.

## Collapse behavior

Small dialogs stay centered (with margin) on phones; anything larger
becomes a bottom [[sheet-drawer]] (the mobile-native modal) or a
full-screen takeover with a back affordance. The scrim survives; the
centered-window form usually doesn't. Design the mobile form explicitly —
a desktop dialog squeezed to 90vw is the tell of an unfinished component.

## Techniques

- **`<dialog>` + `showModal()`** — native focus trap, inert background,
  Escape handling, and `::backdrop` for the scrim; the default choice —
  polyfill/verify for old targets.
- **Scrim styling** — `::backdrop` with color/blur tokens;
  `backdrop-filter` on it for the frosted register.
- **Entrance** — `@starting-style` + transition (or keyframes) for the
  scale-fade; `overscroll-behavior: contain` and scroll-locking the page.
- **Action row component** — shared with all dialogs: order, spacing,
  destructive variants tokenized once.
- **Route-modals** — modals with URLs (lightboxes, detail-overlays) via
  router integration so back-button closes ([[page-transitions]]
  kinship).

## Search queries

- `dialog element showModal backdrop styling`
- `starting-style dialog entrance transition`
- `destructive confirmation button placement convention`
- `route modal back button pattern`

## Related

[[sheet-drawer]] (the edge-attached alternative and mobile collapse
target), [[toast-notification]] + [[popover-menu]] (the non-interrupting
alternatives — the earned-blocking dial routes there), [[elevation]] +
[[frosted-glass]] (scrim machinery), [[motion-ceremony]] (entrance
asymmetry), [[visible-accessibility]] (focus contract),
[[color-roles]] (severity), [[text-block-grammar]] (dialog copy),
[[carousel-filmstrip]] (lightbox internals), [[page-transitions]]
(route-modals).
