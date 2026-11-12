---
name: status-signals
title: Status Signals
summary: "unsaved dots, sync state, unread badges, gauges, inboxes; persistent state at a glance"
category: behavior
aliases: [status indicator, my changes, changes went through, status indicators, unsaved indicator, unsaved changes, dirty indicator, dirty dot, sync status, online status, offline indicator, connection status, unread badge, unread count, notification badge, notification dot, badge count, red dot, quota meter, usage meter, storage meter, battery indicator, status ticker, live status, notification center, inbox, activity feed, save state, storage left, space left, storage, quota, usage limit, how much is left]
media: [css, svg]
---

# Status Signals

Small, persistent indicators that tell the user the *current state* of
something without being asked — a dot on an unsaved tab, "Saved" next to
the title, an unread count, a quota bar, a live ticker. Where
[[toast-notification]] reports *events* and then leaves, status signals
display *conditions* and stay as long as the condition holds.

## You know it when you see

- A filled dot replacing the close ✕ on an editor tab with unsaved changes
- "Saving…" → "Saved" → "Offline — changes will sync" quietly next to a document title
- A red count on an icon; a plain dot when the exact number doesn't matter
- A thin meter: "7.2 of 15 GB used"; a battery glyph that changes color as it drains
- A bell that opens a list of everything you missed, with unread items marked
- The failures: badge counts that never clear, a "Saved" that lies, a spinner that has said "Syncing" for an hour

## What it does

Keeps background state glanceable so the user never has to check. Each
signal binds one condition to one compact mark in a stable place; the mark
changes when the condition does and disappears when it ends. Transient
events that the user must be able to revisit roll up into a notification
center: an inbox with read/unread state that backs the toasts.

## When to use

- Work that can be lost or diverge: unsaved edits, pending sync, offline queue
- Things waiting for the user: unread messages, mentions, review requests
- Finite resources: storage, credits, seats, rate limits, battery
- Ongoing processes the user monitors without watching (builds, deliveries, live scores)

## When not to use

- One-off outcomes ("Copied", "Sent") — use [[toast-notification]]
- Blocking problems that need action now — use a banner or [[modal-dialog]]
- Progress of a wait the user is actively watching — use [[loading-language]]
- Counts that never reach zero or don't drive action (total likes) — show as plain data in the content, not a badge ([[chips-badges-avatars]])
- Field-level validity — use [[live-feedback]]

## Dials

**Signal grammar**
- **mark weight ladder** — dot (something changed) → count (how many need you) → label ("3 conflicts") → banner (blocking); pick the lightest mark that still drives the right action
- **placement** — on the object it describes (the tab, the doc title, the inbox icon), always the same spot; corner badge offset ~-25% of icon size, overlapping its top-right
- **count cap** — show exact to 99, then "99+"; for mentions vs. general activity, count mentions and dot the rest
- **color budget** — red/accent only for "needs you" ([[color-roles]]); neutral gray for informational state; never rely on color alone — pair with shape or text ([[visible-accessibility]])

**Save & sync**
- **state set** — Unsaved / Saving… / Saved (with time on hover) / Offline — queued / Sync error — retry; each state has one glyph and one label
- **debounce** — show "Saving…" only if the save exceeds ~500ms; hold "Saved" ~2s then fade to a quiet timestamp
- **honesty** — "Saved" only after the server confirms; a sync spinner older than ~30s becomes an error with an action

**Connectivity**
- **offline signal** — persistent quiet banner or title-bar glyph within ~2s of losing connection; restore with a brief "Back online" then disappear

**Gauges**
- **thresholds** — neutral below ~75%, warning ~75-90%, critical >~90% (or by time-to-exhaustion); label with absolute numbers, not percent alone
- **cadence** — update no faster than the eye can read (~1/s for live tickers); animate value changes ([[animated-numbers]]) only when the change itself matters

**Inbox / notification center**
- **read state** — opening the item marks it read; "mark all read" always available; the badge clears when the user has *seen*, not just received
- **retention** — everything toasted that mattered is also logged here; group by object, newest first ([[timeline-feed]])

## Techniques

- **Native elements** — `<meter>` (gauges with `low`/`high`/`optimum`),
  `<progress>`, `<output>`; `navigator.onLine` + `online`/`offline`
  events; `beforeunload` guard for unsaved state.
- **CSS badges** — absolutely positioned pseudo-elements or a small span;
  `:has()` to style containers with unread children; `tabular-nums` for
  counts.
- **Live regions** — `role="status"` (polite) for save/sync text; don't
  announce every tick of a ticker ([[visible-accessibility]]).
- **Platform surfaces** — Badging API (`navigator.setAppBadge`) for PWAs,
  favicon/title badges (`(3) Inbox`), Notifications API for out-of-app.
- **Sync state** — derive from your data layer (TanStack Query
  `isFetching`/`isPaused`, Replicache/Yjs sync providers) rather than
  hand-set flags, so the signal can't drift from reality.
- **Notification feeds** — Knock, Novu, MagicBell-class inbox components
  (verify currency) when building a full notification center.

## Starting points

- MDN: `<meter>`, Badging API, `navigator.onLine`
- https://interfacelineage.com/one-pixel-state-signal,
  /ambient-glanceable-gauge, /live-status-ticker, /notification-surface
  — further reading

## Search queries

- `unsaved changes indicator dot tab editor`
- `save status indicator saving saved offline pattern`
- `notification badge count design guidelines 99+`
- `html meter element low high optimum styling`
- `notification center inbox component react`

## Related

[[toast-notification]] (the transient voice these signals outlast),
[[chips-badges-avatars]] (badge anatomy), [[timeline-feed]] (the inbox
list), [[live-feedback]] (pending markers on optimistic items),
[[loading-language]] (active waits), [[presence-collaboration]] (who's
here, who's typing), [[dashboard-tiles]] (gauges at larger scale),
[[animated-numbers]], [[app-shell]] (where persistent signals live),
[[interaction-principles]] (visibility of system status).
