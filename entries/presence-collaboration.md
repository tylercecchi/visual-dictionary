---
name: presence-collaboration
title: Presence & Collaboration
summary: "live cursors, facepiles, follow mode, comment threads, sync and conflict state"
category: behavior
aliases: [multiplayer, multiplayer cursors, live cursors, presence cursors, presence indicators, collaborators, real time collaboration, realtime collaboration, co-editing, coediting, facepile, facepiles, avatar stack, who is online, follow mode, comment threads, resolve comments, share link, share dialog, sharing permissions, local first, offline sync, sync status, merge conflicts, reactions, emoji reactions]
media: [css, svg, canvas]
---

# Presence & Collaboration

The machinery that makes a shared document feel *inhabited* — showing who
else is here, where they are, what they touched, and whether everyone's
copy agrees.

## You know it when you see

- Other people's cursors gliding around with name tags in their own colour
- A row of overlapping avatars top-right, each with a coloured ring; click one to jump to them
- Someone else's selection tinted in their colour; a block outlined while they type in it
- Comment pins that open into threads, with "Resolve" folding them away
- A cloud/check icon saying "Saved", "Offline — changes will sync", or a "conflicting edit" prompt
- The failures: cursor confetti (twenty jittering cursors), stale avatars of people long gone, edits silently lost on reconnect

## What it does

It streams lightweight, ephemeral *awareness* state (cursor, selection,
viewport, status) separately from the durable document, and renders it as
colour-coded overlays so collaborators can coordinate without talking.
Discussion is pulled out of the content into anchored threads that can be
resolved, and a sync layer reconciles concurrent and offline edits so the
document converges without anyone pressing save.

## When to use

- Multi-user editing of the same artifact (docs, canvases, boards, spreadsheets)
- Review workflows where feedback must anchor to a specific spot and close out
- Apps that must keep working offline or on flaky networks (local-first)
- Pairing/teaching: follow mode lets one person drive and others watch

## When not to use

- Single-user tools with occasional handoff — use a share link plus [[toast-notification]] "updated by X" instead of live cursors
- Async, sequential workflows (approvals, submissions) — use a status/assignee field on [[board-kanban]] rather than presence
- Very large audiences (hundreds viewing) — show an aggregate count ("214 viewing") via [[chips-badges-avatars]], not per-person cursors
- Records where last-writer-wins would be dangerous (finance, inventory) — use explicit locking/check-out and [[modal-dialog]] confirmation, not silent merge

## Dials

**Awareness**
- **cursor broadcast rate** — 20-30 Hz sent, interpolated client-side (spring/lerp ~80-120 ms) so remote cursors glide rather than teleport; throttle harder (5-10 Hz) on mobile or >10 peers
- **cursor label** — name chip on the cursor, shown on move and faded after ~2-3 s idle; idle cursors fade to ~40% after ~30 s, removed after ~60 s of no heartbeat
- **colour assignment** — stable per user per document from a 8-12 hue palette with AA contrast for label text; the same colour drives cursor, selection tint (~20-30% alpha), avatar ring, and block outline
- **roster cap** — facepile shows 3-5 avatars then "+N"; order by recency of activity; availability dot (active / idle / away) per [[chips-badges-avatars]]
- **follow mode** — click an avatar to lock your viewport to theirs; a coloured frame around the viewport signals "following"; any manual pan/scroll breaks follow

**Discussion**
- **anchor fidelity** — threads pin to a range/object id, not pixels; on anchor deletion keep the thread as "orphaned" rather than dropping it
- **thread lifecycle** — open → resolved (hidden, filterable, reopenable); resolving collapses the pin; @mentions notify
- **reaction weight** — one-tap emoji stamps for acknowledgement that don't open a thread; coalesce counts ("👍 4")

**Sharing & sync**
- **link permission ladder** — restricted / anyone-with-link / public; roles view < comment < edit; the share dialog states the current level in one sentence
- **sync state surface** — saved · saving… · offline (n pending) · conflict; quiet icon when healthy, a persistent banner only for offline/conflict ([[toast-notification]] routing)
- **merge policy** — CRDT auto-merge (text, lists), last-writer-wins per field (simple props), or surfaced conflict (both versions shown, user picks); pair any auto-merge with history so [[undo-recovery]] stays local to *your* edits

## Techniques

- **Presence over plain WebSocket/BroadcastChannel** — a tiny awareness
  channel (`{userId, x, y, selection, ts}`) with heartbeat; render
  cursors as absolutely positioned SVG arrows + label chips; world
  coordinates on canvases, range anchors in text. Fine for a few peers.
- **CSS selection overlays** — remote selections drawn from
  `Range.getClientRects()` as tinted boxes; the CSS Custom Highlight API
  (`::highlight()`) avoids DOM wrapping where supported.
- **CRDT sync (Yjs / Automerge)** — shared types for the document plus
  the awareness protocol for presence; providers for WebSocket/WebRTC and
  IndexedDB persistence give offline-first for free. Structural: it owns
  the data model — confirm before adopting.
- **Hosted presence/rooms (Liveblocks, PartyKit-class)** — rooms,
  presence, comments and threads as ready components; fastest path when a
  backend dependency is acceptable (verify currency and pricing).
- **Editor bindings** — y-prosemirror / Tiptap collaboration, tldraw /
  Excalidraw multiplayer, CodeMirror/Monaco Yjs bindings ship remote
  carets and selections ([[block-editor]]).

## Starting points

- Yjs docs (awareness protocol, y-indexeddb), Automerge docs
- Liveblocks presence, comments and threads docs
- Ink & Switch "Local-first software" essay
- Further reading: https://interfacelineage.com/live-presence-cursors,
  https://interfacelineage.com/availability-roster,
  https://interfacelineage.com/lightweight-reaction-stamp,
  https://interfacelineage.com/threads-contain-the-explosion,
  https://interfacelineage.com/shareable-link,
  https://interfacelineage.com/local-first-sync,
  https://interfacelineage.com/shared-spatial-workspace

## Search queries

- `yjs awareness cursor presence react`
- `liveblocks presence cursors comments threads`
- `css custom highlight api remote selection`
- `local-first crdt offline sync indexeddb`
- `facepile avatar stack overflow count component`

## Related

[[chips-badges-avatars]] (facepiles, availability dots), [[cursor-effects]]
(cursor rendering), [[spatial-canvas]] (where multiplayer cursors live
most), [[block-editor]] (co-edited documents), [[toast-notification]]
(sync banners, "X joined"), [[undo-recovery]] (per-user undo under merge),
[[status-signals]] (saved/offline indicators), [[selection-model]]
(remote selections), [[color-roles]] (identity hues).
