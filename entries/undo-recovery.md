---
name: undo-recovery
title: Undo / Recovery
summary: "undo windows, history stacks, soft delete, nondestructive edits; forgiveness over warnings"
category: behavior
aliases: [undo, redo, undo button, undo toast, undo window, grace period, undo history, history stack, version history, soft delete, trash, recycle bin, recently deleted, restore, recover, nondestructive editing, non destructive, adjustment layers, are you sure dialog, confirmation dialog, confirm delete, type to confirm, accidental delete, oops, are you sure, are you sure popups, take back, take it back, seconds to undo, undo delete]
media: [css]
---

# Undo / Recovery

Making actions reversible so the interface can act immediately and let the
user take it back — forgiveness as the default safety net instead of
warnings in front of every move.

## You know it when you see

- "Deleted — Undo" appearing after a delete, with the item already gone from the list
- Cmd/Ctrl+Z working everywhere, including after actions you didn't think of as edits
- A Trash / Recently Deleted area where things wait 30 days before vanishing
- Edits stacked as layers or versions you can toggle, reorder, or roll back
- The failures: "Are you sure?" dialogs on every action (clicked through by reflex), or a delete that is simply gone

## What it does

Every action that changes user data is recorded so it can be reversed:
briefly (a grace window before the commit), throughout the session (an
undo stack), or long-term (trash, versions, nondestructive layers).
Because mistakes are cheap to reverse, the interface can skip the
confirmation dialog and act at full speed; confirmation is reserved for
the few actions that genuinely cannot be reversed.

## When to use

- Deletes, archives, moves, bulk edits — any action a misclick could trigger
- Editors of any kind (text, canvas, spreadsheet): a full undo/redo stack is table stakes
- Sends that can be held a few seconds before leaving (email "undo send", chat messages before delivery)
- Creative tools where users explore: nondestructive layers and versions encourage experimentation
- Replacing confirmation dialogs on frequent, reversible actions

## When not to use

- Truly irreversible effects — money moved, message delivered to another person's device, a deployed release, data shared externally: use an explicit confirmation ([[modal-dialog]]) naming the consequence, with typed confirmation ("type the repo name") for catastrophic scope
- Actions whose side effects fire instantly and can't be held (webhooks, notifications to others): delay the side effect, or confirm instead
- Trivial, self-evidently reversible toggles (a checkbox, a filter): the control's own state is the undo — no toast needed
- Legal/compliance deletion that must be final: say so plainly and confirm; don't fake a trash can

## Dials

- **grace window** — how long a provisional action stays reversible before committing: 5-10s for undo toasts, 5-30s for undo-send; pause the timer on hover/focus; show remaining time (progress ring) when the window is short
- **commit model** — optimistic (apply in UI now, commit to server when the window expires) vs immediate-with-inverse (commit now, undo issues a compensating operation); optimistic is simpler for deletes, inverse is required for collaborative data
- **stack depth & scope** — how many steps back (50-100 typical for editors, unlimited for document history), and per-document vs global; scope must match the user's mental model (undo in a text field undoes text, not the last app action)
- **grouping granularity** — what counts as one undo step: a typing burst (coalesce by pause ~500ms-1s or word boundary), a whole drag, a bulk action as a single step
- **retention period** — trash/soft-delete lifetime (30 days is the convention); show the purge date on items
- **destructiveness ladder** — reversible → act + undo; reversible-but-costly → act + undo + trash; irreversible → confirm with the consequence named; catastrophic → typed confirmation
- **recovery visibility** — where recovery lives after the toast is gone: Edit menu, history panel, trash link, version list; undo must not exist only in a transient toast

## Techniques

- **Native text undo** — inputs and `contenteditable` get the browser's undo stack for free; don't break it by rewriting `value` programmatically (use `document.execCommand('insertText')` or `beforeinput` handling to stay on the stack).
- **Undo toast** — optimistic hide + delayed commit timer; the toast's timer *is* the commit timer ([[toast-notification]]); `aria-live` announcement; Cmd/Ctrl+Z also triggers it.
- **Command pattern stack** — each action is an object with `do`/`undo` (or an inverse patch); push on do, pop on undo, clear redo on new action; works for any editor.
- **Snapshot / patch history** — immutable state with structural sharing (Immer patches, Redux-undo-style past/present/future) when the state is a single tree.
- **Soft delete** — a `deleted_at` column instead of a row delete; a Trash view filters on it; a scheduled job purges after retention.
- **Nondestructive pipeline** — store the source plus an ordered list of edits (adjustment layers, filters, versions) and render on the fly; "undo" becomes toggling or removing an operation.
- **Collaborative undo** — CRDT/OT libraries (Yjs `UndoManager`) undo only the local user's operations, not collaborators'.

## Starting points

- Yjs `UndoManager` — per-user undo over shared documents
- Immer `produceWithPatches` — inverse patches for undo stacks
- Interface Lineage (further reading): https://interfacelineage.com/grace-window-undo, https://interfacelineage.com/undo-as-default-forgiveness, https://interfacelineage.com/two-stage-soft-delete, https://interfacelineage.com/nondestructive-editing, https://interfacelineage.com/undo-absolves-the-warning

## Search queries

- `undo toast optimistic delete delayed commit`
- `command pattern undo redo stack javascript`
- `yjs undomanager collaborative undo`
- `soft delete trash retention pattern`
- `type to confirm destructive action ux`

## Related

[[toast-notification]] (the grace window's usual surface), [[modal-dialog]]
(the confirmation that undo replaces — and keeps for irreversible acts),
[[selection-model]] (bulk actions need single-step undo),
[[drag-and-drop]] (moves should undo), [[form-grammar]] (draft
preservation is recovery for forms), [[loading-language]] (optimistic UI
and its rollback), [[visible-accessibility]] (timed windows need pause).
