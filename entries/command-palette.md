---
name: command-palette
title: Command Palette
category: layout
aliases: [cmd-k, cmdk, command menu, omnibox, quick switcher, spotlight search, action menu, launcher, fuzzy finder, keyboard palette]
media: [css]
---

# Command Palette

**Surface contract:** centered (top-third) · lightly blocking · ephemeral ·
top tier — the keyboard-first surface: invoked by shortcut, driven by a
query, dismissed by escape or a chosen action.

The power user's front door — ⌘K opens a floating input, typing filters
every action and destination in the product, Enter executes. Spotlight,
VS Code's palette, Linear/Raycast/Superhuman's whole interaction model.

```
░░░░░░░░░░░░░░░░░░░░░░░
░┌───────────────────┐░
░│ 🔍 type a command…│░
░├───────────────────┤░
░│ ▸ Go to Settings  │░
░│   New project   ⌘N│░
░│   Toggle theme    │░
░└───────────────────┘░
```

## You know it when you see

- A ⌘K/Ctrl-K floating search that filters *actions*, not just content
- Fuzzy matching, keyboard-only traversal, shortcut hints trailing each row
- Nested pages ("Assign to…" opens a people list inside the palette)
- The failure modes: a palette that's just site search wearing palette chrome, or one missing half the app's actions (trust dies on the first miss)

## Dials

- **corpus scope** — what's findable: actions (verbs), navigation (nouns), content search, or all three mixed; mixed corpora need visible **type grouping** or ranking that interleaves honestly. The palette's value is *completeness* — an action reachable by UI but not by palette breaks the contract
- **invocation & placement** — ⌘K (the convention; don't be clever), optional `/` or button affordance for discoverability; panel floats at the top third (not center — results grow downward), width ~34-40rem
- **matching & ranking** — fuzzy match with subsequence highlighting; rank by frecency (recent + frequent) above static order; empty-query state shows recents/suggestions, never a blank void
- **row anatomy** — icon slot, label, optional context ("in Settings"), trailing shortcut hint ([[typographic-voice]] mono/tabular for keys); selected row uses accent per [[color-roles]]; density is the tightest in the product ([[spacing-density]] compact register — this is a tool, not a menu)
- **nested pages** — drill-in for parameterized commands (pick assignee, choose color) with a breadcrumb/back affordance; one level deep is comfortable, two is the ceiling ([[disclosure]]'s depth logic)
- **ceremony** — enter: scale-fade at ~120-150ms from top ([[motion-ceremony]] micro register, faster than a modal — it's a reflex surface); exit instant; no scrim animation theatrics; result-list changes swap without animation (filtering must feel synchronous)

## Content contract

A product with enough *commands* to be worth indexing — many actions,
destinations, or objects (roughly: if the app has keyboard shortcuts or
deep navigation, it qualifies). Every command needs a verb-first label,
searchable synonyms, and a stable home; the corpus must be maintained as
features ship or the palette silently rots into distrust. Products with
five actions don't need one — that's a [[popover-menu]].

## Collapse behavior

Touch has no ⌘K: on mobile the palette becomes a full-screen search
[[sheet-drawer]] (input pinned top, keyboard up, results below) reached
by a search affordance — the *corpus and ranking* carry over, the
floating-panel form does not. Shortcut hints hide; rows grow to touch
height.

## Techniques

- **cmdk** — the de-facto React primitive (powers shadcn/ui's Command,
  Vercel/Linear-style palettes): filtering, keyboard traversal, nested
  pages, ARIA wiring. Default choice; verify currency.
- **shadcn/ui `Command` + `CommandDialog`** — cmdk pre-styled inside a
  dialog; the fastest correct start in a shadcn project.
- **Semantics** — ARIA combobox/listbox pattern (input controls a
  listbox; arrow keys move `aria-activedescendant`; focus never leaves
  the input) — [[visible-accessibility]]: this surface is *born*
  keyboard-first, so its a11y is mostly free if the pattern is followed.
- **Corpus registry** — commands registered centrally (id, label,
  keywords, shortcut, handler, context predicate); the palette renders
  the registry, so completeness is enforced at registration, not by
  remembering to update the palette.
- **Frecency** — a small local store of use counts + recency decay for
  ranking; empty-query state = top of frecency.

## Search queries

- `cmdk react command palette`
- `shadcn command dialog example`
- `aria combobox pattern activedescendant`
- `command palette frecency ranking`

## Related

[[modal-dialog]] (its heavier centered cousin — palette is lighter,
faster, non-committal), [[popover-menu]] (the small-corpus alternative;
shares light-dismiss and keyboard law), [[sheet-drawer]] (mobile
collapse target), [[disclosure]] (nested pages), [[terminal-aesthetic]]
(the palette's ancestor register — many palettes wear it),
[[spacing-density]] (tightest register), [[motion-ceremony]] (reflex
timing), [[visible-accessibility]] (combobox semantics),
[[loading-language]] (async results need inline states).
