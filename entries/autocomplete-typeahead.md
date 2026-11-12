---
name: autocomplete-typeahead
title: Autocomplete / Typeahead
summary: "suggestions as you type; combobox, ghost text, fuzzy match, empty states"
category: behavior
aliases: [autocomplete, auto-complete, autosuggest, auto suggest, typeahead, type ahead, search suggestions, suggestions dropdown, combobox, combo box, ghost text, inline completion, tab to complete, fuzzy match, fuzzy search, did you mean, predictive search, search as you type, select search, recent searches]
media: [css]
---

# Autocomplete / Typeahead

Suggestions that appear while a value is being typed — a dropdown of
matches under a field (combobox), or the likely completion drawn inline as
ghost text. It turns recall into recognition and spelling into picking.

## You know it when you see

- A list dropping under the search box after a couple of letters, the typed part bolded or highlighted in each row
- Gray ghost text finishing the word ahead of the cursor; Tab or → accepts it
- Recent and popular searches shown the moment the empty field is focused
- "No results for 'xyz' — did you mean xyz?" instead of an empty box
- The failures: a list that reshuffles under the pointer, suggestions arriving after Enter was pressed, ghost text that won't go away

## What it does

Predicts the value from a partial input and offers candidates the user can
accept with one key or tap. A combobox keeps focus in the input while a
listbox of candidates updates; inline completion proposes the single best
continuation in place. Both must never commit without an explicit accept,
and must always let free text through when free text is valid.

## When to use

- Picking from a large known set (countries, people, products, tags, files) — >~15 options
- Search fields where queries repeat or have popular forms
- Inputs with costly spelling (names, addresses, SKUs) — address autocomplete especially
- Repeated text entry where history predicts well (URLs, commands, code)

## When not to use

- Fewer than ~7-10 options — use a plain `<select>`, radio group, or segmented control ([[control-language]])
- Open-ended prose — no dropdown; at most ghost-text completion, else plain field
- Commands inside rich text triggered by `/` `@` `#` — use [[inline-commands]]
- App-wide action launcher — use [[command-palette]]
- Browsing/refining a result set by attributes — use [[faceted-browse]]

## Dials

**Timing**
- **min chars** — 0 (show recents on focus) for small/local sets; 1-2 for remote; 3 for very large corpora
- **debounce** — local filter: none (synchronous); remote: ~150-250ms after last keystroke; cancel in-flight requests (AbortController) and discard stale responses by request ID
- **latency budget** — results within ~100ms feel attached to typing; past ~400ms show an inline spinner in the field, never a blocking state ([[loading-language]])

**Matching**
- **match mode** — prefix (fast, predictable; names, codes) → word-start → substring → fuzzy subsequence (commands, files); typo tolerance ~1 edit per ~4-5 chars
- **highlight** — bold or tint the *matched* characters; for fuzzy, highlight each matched char; for search suggestions, convention is to bold the *completion* (the untyped part)
- **ranking** — exact > prefix > word-start > fuzzy, then frecency/popularity; keep order stable while typing extends a match (no reshuffle jitter)

**List**
- **size** — ~5-8 visible rows, ~10 max; group headers (Recent / Suggestions / People) when mixed types
- **empty field** — recents (with per-item remove) + popular; never a blank dropdown
- **no results** — say so in the list, echo the query, offer "did you mean", "search all for 'x'", or "create 'x'"
- **auto-select first** — yes for pickers where a value is required; *no* for free-text search (Enter must submit what was typed)

**Inline completion**
- **ghost text** — muted ~50-60% contrast, only when confidence is high; accept with Tab/→ at end of line; any other key continues typing over it; Escape clears

**Keyboard**
- **contract** — ↓/↑ move active option (wrap optional), Enter accepts, Escape closes then clears, Tab accepts or moves on (pick one per product), Home/End stay in the input

## Techniques

- **`<input list>` + `<datalist>`** — zero-JS native suggestions; limited
  styling and matching, fine for internal tools and simple forms.
- **`autocomplete` attribute** — `autocomplete="email" | "street-address"
  | "one-time-code"` unlocks browser/OS autofill; the cheapest win.
- **ARIA combobox (1.2 pattern)** — `role="combobox"` input,
  `aria-expanded`, `aria-controls` listbox, `aria-activedescendant`;
  render the list with the Popover API + anchor positioning; announce
  result counts via a polite live region ([[visible-accessibility]]).
- **Headless libraries** — Downshift (`useCombobox`), React Aria
  `useComboBox`, Headless UI Combobox, Ariakit, Radix-adjacent cmdk for
  list filtering.
- **Matching engines** — match-sorter (ranked tiers), Fuse.js /
  uFuzzy / fzf-for-js (fuzzy); server: Algolia, Meilisearch, Typesense,
  Postgres `pg_trgm` for typo tolerance.
- **Ghost text** — overlay a mirrored, muted span behind a transparent
  input or a contenteditable decoration; editors: CodeMirror/Monaco inline
  suggestions.

## Starting points

- WAI-ARIA Authoring Practices "Combobox" pattern and examples
- Downshift and React Aria combobox docs
- https://interfacelineage.com/autocomplete,
  /fuzzy-command-launcher — further reading

## Search queries

- `aria combobox pattern autocomplete listbox example`
- `downshift useCombobox async debounce`
- `fuzzy search javascript library ufuzzy fuse`
- `datalist input autocomplete browser support`
- `search suggestions highlight matched text`

## Related

[[inline-commands]] (caret-triggered pickers share these rules),
[[command-palette]] (fuzzy matching at the app level),
[[faceted-browse]] (after the search), [[form-grammar]] (field context),
[[popover-menu]] (listbox surface), [[live-feedback]] (interpretation
preview of what was typed), [[loading-language]] (inline async state),
[[interaction-principles]] (recognition over recall, Hick's law),
[[chips-badges-avatars]] (multi-select tokens).
