---
name: block-editor
title: Block Editor
summary: "notion-style blocks, slash menu, zoomable outlines, live embeds, views as queries"
category: behavior
aliases: [block editor, block based editor, blocks, notion style, notion like, notion editor, slash menu, slash command menu, drag handle, block handle, outliner, outline editor, zoomable outline, zoom into bullet, bullet journal, transclusion, synced blocks, embed by reference, block references, live embed, reactive document, reactive notebook, computed values, database views, saved views, table view, board view, calendar view, rich text editor]
media: [css]
---

# Block Editor

A document built from discrete blocks — each paragraph, heading, list,
image, or embed an object you can drag, retype, nest, reference, and view
in different ways.

## You know it when you see

- A ⋮⋮ handle appearing left of a paragraph on hover; drag it to move the block
- Typing `/` on an empty line opens a menu of block types (heading, to-do, table, image)
- Bullets you can click into, making that bullet the whole page with a breadcrumb back out
- A block shown in two places that updates in both when edited (synced block, block reference)
- A number in the text that recalculates when an input above changes
- The same set of records shown as a table, a kanban board, and a calendar via view tabs
- The failures: losing the text cursor when crossing block boundaries, drag that drops in the wrong nesting level, a slash menu that steals legitimate `/` typing

## What it does

It replaces one continuous text stream with a tree of typed blocks, so
structure can be changed by direct manipulation (drag, indent, convert)
instead of formatting. Because every block has an identity, it can be
focused into (zoomable outline), referenced elsewhere and kept live
(transclusion), computed from other blocks (reactive document), or treated
as a database row whose views are just saved queries.

## When to use

- Mixed-media docs, wikis, and notes where text sits beside tasks, tables, and embeds
- Outlining and thinking tools with deep nesting where focus matters
- Knowledge bases where the same fact must appear in several places without copying
- Notebooks and calculators where prose and live values interleave
- Lightweight databases users configure themselves (CRMs, trackers, content calendars)

## When not to use

- Long-form linear prose (books, articles) — a continuous rich-text editor or Markdown with [[book-design]] typography reads better; block chrome interrupts flow
- Structured data with fixed schema and validation — use a real form ([[form-grammar]]) and [[table-design]]
- Single-field inputs (comments, captions) — a plain `<textarea>` with [[autocomplete-typeahead]] mentions is enough
- Pixel-precise layout of content — use a [[spatial-canvas]] or design tool, not blocks
- Heavy computation — a spreadsheet or notebook runtime, not inline reactive values

## Dials

- **handle reveal** — show the drag handle and `+` on block hover after ~0-100 ms, at the left gutter (~24 px); always visible on touch via a long-press or toolbar
- **drop indicator** — a 2 px accent line at the insertion point; horizontal offset indicates nesting depth; auto-scroll near edges ([[drag-and-drop]])
- **slash trigger** — `/` opens only at line start or after whitespace; filters as you type; Esc or a space-with-no-match closes and leaves the literal `/`; ~6-8 visible items, recently used first ([[inline-commands]])
- **block conversion** — Markdown shortcuts (`# `, `- `, `[] `, `> `) convert on space; Backspace at block start reverts to paragraph
- **selection granularity** — text selection within a block; dragging across blocks or Esc switches to block selection (highlighted whole blocks) for move/delete/duplicate ([[selection-model]])
- **zoom focus** — clicking a bullet makes it the root with breadcrumb; transition ~200 ms; children only, siblings hidden
- **reference liveness** — live (edits propagate everywhere, show a subtle source indicator and "edit original" link) vs snapshot copy; show backlink count on referenced blocks
- **recompute timing** — reactive values update on input change within one frame for local data, debounced ~300 ms for remote; flash the changed value briefly (~400 ms) ([[live-feedback]])
- **view as data** — each view stores filter + sort + group + layout (table / board / calendar / gallery) over one source; switching views never changes the records

## Techniques

- **Native `contenteditable` per block** — each block its own editable
  element plus a JSON model; workable for small editors but caret
  movement across blocks and IME are hard. HTML drag-and-drop or pointer
  events for handles.
- **ProseMirror / Tiptap** — schema-driven document model with node views
  for custom blocks, drag handle and slash-menu extensions; the most
  flexible base.
- **BlockNote** — Notion-style block editor on ProseMirror with slash menu,
  handles, and side menu out of the box; fastest route to the look.
- **Lexical** — Meta's editor framework; nodes, plugins, strong
  collaboration and performance.
- **Editor.js** — JSON block output, simpler and less extensible.
- These own the document model — structural; confirm before adopting.
  Add Yjs bindings for co-editing ([[presence-collaboration]]); reactive
  values via a small signals/dataflow graph keyed by block id.

## Starting points

- Tiptap, BlockNote, Lexical, Editor.js docs (verify currency)
- ProseMirror guide (document model, node views)
- Further reading: https://interfacelineage.com/block-editor-zoomable-outline,
  https://interfacelineage.com/embed-by-reference,
  https://interfacelineage.com/reactive-document,
  https://interfacelineage.com/treat-views-as-data

## Search queries

- `blocknote slash menu drag handle custom block`
- `tiptap drag handle extension node view`
- `lexical block editor plugin slash command`
- `synced block transclusion editor implementation`
- `outliner zoom into bullet breadcrumb`

## Related

[[inline-commands]] (the slash menu), [[drag-and-drop]] (block moves),
[[selection-model]] (text vs block selection), [[presence-collaboration]]
(co-editing), [[ai-interaction]] (in-place AI edit), [[text-block-grammar]]
(spacing between block types), [[board-kanban]] + [[calendar-timegrid]] +
[[table-design]] (the views over block data), [[disclosure]] (toggle
blocks), [[undo-recovery]] (block-level undo), [[live-feedback]]
(recomputed values).
