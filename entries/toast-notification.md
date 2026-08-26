---
name: toast-notification
title: Toast / Notification
category: layout
aliases: [toast, snackbar, notification, alert banner, flash message, status message, undo toast, notification stack, growl]
media: [css]
---

# Toast / Notification

**Surface contract:** edge-corner · non-blocking · transient · high tier.

The system's voice — small surfaces sliding into a corner to report
outcomes ("Saved", "Deleted — Undo", "Connection lost"), then leaving on
their own. The only surface that *speaks unprompted*, which is exactly why
its restraint rules are the strictest in the stack.

```
│ page                    │
│              ┌─────────┐│
│              │ ✓ Saved ││
│              └─────────┘│
│         ┌──────────────┐│
│         │ ⚠ Failed  ↺ ││
└─────────└──────────────┘┘
```

## You know it when you see

- Small messages appearing bottom-left/right (or top-center) after actions, auto-dismissing
- The undo toast: destructive action reported with a recovery window
- Persistent banners pinned to the viewport top for ongoing states (offline, unpaid)
- The failures: toast storms (every keystroke reported), essential errors auto-dismissing before they're read, toasts covering the very control they report on

## Dials

**Voice discipline**
- **speak-when-spoken-to** — toasts confirm *user actions with non-obvious outcomes* (saved to where? sent to whom?) and report *async completions*; obvious outcomes (the UI already shows the item deleted) need no announcement; unsolicited marketing via toast poisons the channel — the system's voice must stay trustworthy
- **severity → surface routing** — success/info: toast (transient); recoverable error: toast with action, longer-lived; blocking error: [[modal-dialog]]; *ongoing condition* (offline, syncing, quota): banner (persistent until the condition ends — a state display, not an event); routing errors to auto-dismissing toasts is the classic data-loss design bug

**Timing & lifecycle**
- **duration by content** — reading-time based: ~4s short confirmations, 6-10s with actions, *no auto-dismiss* for errors requiring acknowledgment; hover/focus pauses the timer ([[visible-accessibility]]: timed disappearance needs pause and needs the message available elsewhere — a log/inbox for what mattered)
- **undo window** — the undo toast is a *transaction UI*: the action is provisionally done, the toast is the rollback handle, its duration is the commitment delay; progress ring on the timer for honesty ([[loading-language]] kinship)

**Stack & position**
- **position contract** — one corner per product (bottom-right desktop convention, top-center mobile), never covering primary actions or the element just acted on; position is part of the voice's identity — moving it per-feature breaks recognition
- **stack behavior** — max 2-3 visible: newest pushes older up (or collapses them into a "+2 more" summary); each animates independently; a queue holds overflow ([[motion-ceremony]]: entries slide+fade from the edge, exits fade faster — asymmetry law; the stack *reflows smoothly* as members leave)
- **coalescing** — repeated identical events merge with a counter ("3 files uploaded") rather than stacking ([[timeline-feed]]'s coalescing law applied to the voice)

**Anatomy & chrome**
- **anatomy** — icon (severity, [[color-roles]] semantic), one-line message (sentence-case, outcome-first — [[text-block-grammar]] at its tersest), optional single action (Undo/Retry/View), optional dismiss ✕; no titles, no paragraphs — that's a banner or dialog
- **chrome register** — high-contrast inverted surface (dark on light products — the classic snackbar: maximum pop for minimum size) vs surface-matched card with semantic edge; [[elevation]] high-tier shadow; compact radius and padding

## Content contract

One sentence about one event, optionally one action. Ephemeral by nature —
anything the user *must* see, keep, or act on belongs in a banner, dialog,
or inbox. The toast is a courtesy, never a system of record.

## Collapse behavior

Mobile: top-center (thumb-safe, notification-shade adjacency), full-width
minus margin, swipe-to-dismiss ([[interaction-feel]] fling); stacks
tighten to 1-2 visible. Banners stay full-width top at every size.
Position flip between desktop/mobile is expected — the voice's *tone*
(chrome, anatomy) is what stays constant.

## Techniques

- **Live-region plumbing** — the toast container is `aria-live="polite"`
  (`assertive`/`role="alert"` only for errors) so screen readers hear the
  voice; render messages into a persistent container, don't create/destroy
  regions per toast ([[visible-accessibility]]).
- **Stack manager** — a small queue store (add/dismiss/pause), rendered
  as a fixed-position flex column; FLIP or `translate` transitions for
  reflow; libraries (sonner-class — verify currency) have solved the
  polish details (swipe, pause, stacking spring) and are usually worth it.
- **Undo transactions** — optimistic apply + delayed commit; the toast's
  timer *is* the commit timer; on undo, rollback and confirm.
- **Banner variant** — a separate component: static position in flow (or
  sticky top), no timer, dismiss only if the condition allows, semantic
  fill ([[panel-well]]'s callout grammar pinned to the viewport).

## Search queries

- `aria-live toast region polite assertive`
- `sonner toast library stacking`
- `undo toast optimistic commit pattern`
- `snackbar duration guidelines reading time`

## Related

[[modal-dialog]] (where blocking errors go), [[panel-well]] (banner
grammar), [[popover-menu]] (fellow light surface, but *solicited*),
[[loading-language]] (async outcomes arrive as toasts; progress-ring
timers), [[motion-ceremony]] (stack choreography, exit asymmetry),
[[color-roles]] (severity), [[interaction-feel]] (swipe dismissal),
[[timeline-feed]] (coalescing; the notification *inbox* that backs the
transient voice), [[visible-accessibility]] (live regions, timing).
