---
name: inline-commands
title: Inline Commands & Shortcuts
summary: "slash commands, @mentions, #tags, keyboard shortcuts; typed accelerators"
category: behavior
aliases: [slash command, slash commands, slash menu, at mention, at-mention, mention, mentions, hashtag, hashtags, tag picker, emoji picker, emoji shortcode, colon emoji, trigger character, keyboard shortcut, keyboard shortcuts, hotkey, hotkeys, accelerator, accelerators, shortcut hint, chorded keys, key chord, chord, mention picker]
media: [css]
---

# Inline Commands & Shortcuts

Typed accelerators — a prefix character inside a text field (`/`, `@`,
`#`, `:`) that opens a picker at the caret, and learned key codes that
fire commands without touching a menu. The full-screen launcher is
[[command-palette]]; this entry is the *in-flow* version and the shortcut
layer underneath every menu.

## You know it when you see

- Typing `/` in an editor and a small menu of block types appears right under the cursor
- Typing `@ja` and a list of people narrows; Enter drops a colored name chip into the text
- `:smi` suggesting emoji; `#` suggesting tags or issues
- Grayed key hints at the right edge of menu items (`⌘B`, `G then I`)
- The failures: `/` triggering inside a URL, a picker that covers the line being typed, shortcuts that collide with the browser's

## What it does

Lets a user issue a command or insert a structured reference without
leaving the keyboard or the line. A trigger character opens a caret-anchored
picker filtered by what follows; choosing commits a *token* (an atomic chip
the cursor steps over) or runs an action. Shortcuts are the memorized tier:
menus show them so recognition slowly turns into recall.

## When to use

- Rich text, chat, comments, and docs where references (people, issues, files) appear mid-sentence
- Block editors where structure is chosen while writing ([[block-editor]])
- Tools used daily by the same people — shortcuts repay learning only with repetition
- Any command already in a menu: give it a shortcut and show the hint there

## When not to use

- Plain single-value fields (search, email) — use [[autocomplete-typeahead]]
- Global "do anything" from anywhere — use [[command-palette]]
- Occasional or first-time users as the *only* path — keep a visible toolbar or [[popover-menu]]; triggers are invisible until learned
- Code or URL fields where `/`, `@`, `#` are literal content — disable triggers or require a preceding space

## Dials

**Trigger**
- **trigger rule** — fire only at line start or after whitespace/punctuation (`/` mid-word is a slash, not a command); Escape leaves the literal character
- **query grammar** — spaces allowed in people queries (`@Ana Li`) but close the picker after ~2 non-matching words or a newline
- **dismissal** — Escape, caret leaving the token range, or ~3 more chars with zero results closes the picker and keeps plain text

**Picker**
- **anchor** — at the caret's rect, below the line (flip above near viewport bottom); never cover the text being typed; width ~16-22rem, ~6-8 rows visible
- **first item pre-selected** — Enter/Tab accepts immediately; arrows move; filtering synchronous (<~50ms) for local lists, debounced ~150ms for remote
- **grouping & ranking** — recents and in-context people first (thread participants for `@`); avatar/icon + secondary line to disambiguate

**Token**
- **atomicity** — inserted mention/tag is a non-editable chip ([[chips-badges-avatars]]); Backspace once selects it, twice deletes it
- **serialization** — store an ID, render the display name, so renames propagate

**Shortcuts**
- **key grammar** — single modifier + letter for the top ~10 actions; two-key sequences (`G` then `I`, ~1s window) for navigation; single unmodified keys only when focus is outside text fields
- **hints** — trailing mono key labels in menus and tooltips ([[typographic-voice]]); a `?` cheat-sheet overlay; platform-correct glyphs (⌘ on Mac, Ctrl elsewhere)
- **collision check** — never override browser/OS essentials (close tab, new tab, address bar, tab switching); allow remapping once there are more than ~20

## Techniques

- **Native keyboard events** — `keydown` with `event.key` and
  `metaKey`/`ctrlKey`; `aria-keyshortcuts` to advertise; skip events
  where `event.isComposing` (IME input).
- **Caret positioning** — the selection range's `getBoundingClientRect()`
  in contenteditable (mirror-div technique for `<textarea>`), placed with
  the Popover API + CSS anchor positioning or a Floating UI virtual element.
- **Combobox semantics** — editor keeps focus; `aria-activedescendant`
  points into a listbox ([[visible-accessibility]]).
- **Editor plugins** — Tiptap/ProseMirror `@tiptap/suggestion` + Mention
  extension, Lexical typeahead menu plugin, Slate mentions example;
  react-mentions for plain textareas.
- **Shortcut libraries** — tinykeys (tiny, supports sequences),
  hotkeys-js, react-hotkeys-hook.

## Starting points

- Tiptap Suggestion utility and Mention extension docs
- Lexical playground typeahead/mentions plugin
- https://interfacelineage.com/prefix-triggered-inline-command,
  /at-mention, /learned-input-code — further reading

## Search queries

- `tiptap suggestion slash command menu`
- `contenteditable caret position popup`
- `lexical mentions typeahead plugin`
- `tinykeys keyboard shortcut sequences`
- `browser reserved keyboard shortcuts conflicts`

## Related

[[command-palette]] (the full-screen launcher), [[autocomplete-typeahead]]
(the picker's matching/ranking rules), [[block-editor]] (slash menu's
home), [[chips-badges-avatars]] (token rendering), [[popover-menu]]
(picker surface; menus that carry shortcut hints), [[menu-design]],
[[presence-collaboration]] (mentions notify), [[interaction-principles]]
(recognition over recall), [[conversation-layout]] (chat composers).
