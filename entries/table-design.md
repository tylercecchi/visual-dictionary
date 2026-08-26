---
name: table-design
title: Table Design
category: ui-foundations
aliases: [data table, tables, grid view, spreadsheet ui, data grid, table density, zebra stripes, sortable table, sticky header, rows and columns]
media: [css]
---

# Table Design

The craft of dense truth — rows and columns engineered for scanning,
comparing, and acting on records. Tables are the hardest-working surface
in product UI and the most-botched: every dictionary system (density,
alignment, borders, hierarchy) shows up here at maximum pressure.

## You know it when you see

- Columns whose alignment makes numbers comparable at a glance; headers that stay put while data scrolls
- Row hover revealing actions; a bulk bar appearing on selection
- Or the failures: everything centered, zebra + full grid rules + heavy borders all at once, numbers in proportional fonts wobbling column-width, tables that become soup on mobile

## Dials

**Alignment & typography (the laws)**
- **the alignment law** — text left, numbers right (with `tabular-nums` — non-negotiable for comparability), dates consistently one format, headers align with their column's data; center alignment only for narrow status/icon columns
- **number presentation** — consistent precision per column, units in the header not the cells, negative values signed or colored per [[color-roles]] semantics ([[chart-voice]] discipline in table form)

**Density & separation**
- **density register** — compact (~32px rows, ops tools), comfortable (~44-48px, the default), spacious (~56px+, content-forward); user-selectable density is a power-tool courtesy ([[spacing-density]] modes)
- **separation strategy** — pick the *minimum*: whitespace only (calmest), horizontal rules only (the default), zebra (long unruled scans), full grid (dense numeric matrices only); stacking strategies is the #1 table crime ([[border-stroke]]'s over-fencing law)

**Structure**
- **header discipline** — sticky under scroll, visually distinct but quiet (weight/case shift, muted ink — not a heavy band), sort affordance on sortable columns with active sort clearly marked (arrow + emphasized header, `aria-sort`)
- **column width grammar** — content-sized with min/max constraints; one flexible column absorbs slack (usually the name/title column); truncate with ellipsis + full value on hover/focus ([[popover-menu]] tooltip license — truncated ≠ hidden)
- **row anatomy** — the leading identity cell (name, maybe [[chips-badges-avatars]] avatar) is the row's anchor and usually its link; status as [[chips-badges-avatars]] badges; trailing action zone
- **row actions** — hover-revealed icon cluster ([[hover-response]] reveal, with the touch law: visible or behind an overflow ⋯ menu on touch), destructive actions in the overflow never bare

**Behavior**
- **selection & bulk** — leading checkbox column (header = select-all with indeterminate), selected rows tinted (accent at whisper opacity), bulk-action bar slides in ([[toast-notification]] positioning logic) showing count + actions
- **states** — [[loading-language]] skeleton *rows matching the real column layout*; designed empty state ([[illustration-style]] license); inline row-level loading/error for async row ops
- **sorting/filtering feedback** — active filters visible as removable [[chips-badges-avatars]] chips above the table; result count stated; sort state in the URL where the table is a destination

**Responsive collapse**
- **the priority-column decision** — tables don't shrink, they *choose*: keep 2-3 priority columns and move the rest behind row expansion ([[disclosure]]), or reflow each row into a card ([[card]] list anatomy); horizontal scroll with a pinned identity column is legitimate for genuinely tabular work ([[app-shell]] register); pick deliberately, per table

## Techniques

- **`<table>` semantics first** — real `thead/th scope/tbody`; screen
  readers navigate real tables well and div-grids poorly
  ([[visible-accessibility]]).
- **Sticky headers** — `th { position: sticky; top: 0 }` with an opaque
  background and a scroll-elevation shadow ([[elevation]] cue that data
  is passing under).
- **Virtualization** — beyond a few hundred rows (TanStack Virtual-class;
  verify currency); pair with TanStack Table / shadcn Data Table for
  sort/filter/selection state.
- **`tabular-nums`** — `font-variant-numeric: tabular-nums` on every
  numeric column; the one-line fix for wobble.
- **Container queries** — the card-collapse driven by the table's own
  width, not the viewport.

## Search queries

- `data table design density alignment best practices`
- `tanstack table shadcn data table`
- `sticky table header css shadow`
- `responsive table priority columns pattern`

## Related

[[spacing-density]] + [[border-stroke]] (the two systems under maximum
load), [[chart-voice]] (numeric discipline; tables and charts share
data-ink law), [[dashboard-tiles]] (tables inside tiles),
[[chips-badges-avatars]] (status and identity cells), [[hover-response]]
(row actions), [[card]] (the collapse target), [[disclosure]] (row
expansion), [[loading-language]] (skeleton rows), [[timeline-feed]]
(the chronological alternative), [[typographic-voice]] (tabular-nums),
[[visible-accessibility]] (table semantics), [[terminal-aesthetic]]
(the densest register).
