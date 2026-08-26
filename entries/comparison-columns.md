---
name: comparison-columns
title: Comparison Columns
category: layout
aliases: [pricing table, pricing page, plan comparison, tier comparison, feature matrix, versus layout, compare plans, pricing cards]
media: [css]
---

# Comparison Columns

**Coordinate:** horizontal peers · grid · tiled · hero (one recommended) ·
scannable · single-surface.

Columns as competitors — plans, tiers, or options side by side, engineered
for one decision: *which one am I?* The pricing table is its famous form;
the same layout serves any pick-one-of-N comparison.

```
┌──────┐╔══════╗┌──────┐
│ Free │║ Pro ★║│ Team │
│  $0  │║ $12  ║│ $49  │
│ ✓ a  │║ ✓ a  ║│ ✓ a  │
│ ✗ b  │║ ✓ b  ║│ ✓ b  │
│[Start]│║[Buy]║│[Talk]│
└──────┘╚══════╝└──────┘
```

## You know it when you see

- 3-ish plan cards, one visually elevated and labeled "Popular"
- A feature matrix beneath: rows of capabilities, checks per column
- The failures: four plans all shouting, feature rows nobody can trace across, prices whose billing period is ambiguous

## Dials

- **column count** — 3 is the working default (good/better/best with the middle recommended — the anchoring structure); 2 reads as upsell, 4 is the ceiling before a [[table-design]] matrix serves better; enterprise gets a "talk to us" column, not fake numbers
- **the one-hero law** — exactly one recommended column, emphasized by *one strong move plus supports*: scale-up or [[elevation]] lift, accent [[border-stroke]], a "Most popular" [[chips-badges-avatars]] badge; emphasizing two plans cancels both ([[visual-hierarchy]] accent budget)
- **price presentation** — the number is each column's focal point ([[typographic-voice]] display scale, `tabular-nums`); period explicit ("/mo, billed annually"); the monthly/annual toggle animates values via [[animated-numbers]] (odometer register) with savings badged; strikethrough anchoring used honestly
- **feature communication** — *card register*: 4-6 headline features per plan as scannable bullets (differences, not the shared basics); *matrix register*: full rows × columns with row group headings, checks/values center-aligned, row hover-highlight for traceability ([[table-design]] alignment + zebra laws), plan headers sticky under scroll
- **CTA rank** — every column gets a CTA; [[control-language]] primary on the hero only (or equal-rank across all — pick a policy); labels verb-specific per plan ("Start free", "Upgrade", "Contact sales")
- **progression legibility** — columns ordered by price ascending; each tier visibly *contains* the previous ("Everything in Free, plus…") so the matrix reads as a ladder, not a lottery

## Content contract

2-4 genuinely comparable offerings with a shared feature vocabulary and a
defensible recommendation. Feature rows must be phrased identically across
plans (the comparison *is* the rows); a plan needing different row wording
doesn't belong in the matrix. If there's no recommended option, the layout
still works but converts as a spec sheet, not a decision aid.

## Collapse behavior

Columns stack as full-width cards, hero first (breaking price order for
emphasis — deliberately), each with its headline features; the matrix
becomes per-plan [[disclosure]] accordions or a horizontally scrollable
table with sticky row labels. The toggle and CTAs survive untouched; a
sticky compare-bar summarizing the chosen plan is the premium mobile move.

## Techniques

- **Grid** — one CSS grid across all columns *and* matrix rows so
  feature rows align by construction (`subgrid` where available), not by
  coincidence of padding.
- **Hero emphasis** — `transform: scale(1.04)` + elevated shadow token
  + accent border; z-index above neighbors; equal heights via the grid.
- **Toggle machinery** — a [[control-language]] segmented control
  swapping a price dataset; animate with [[animated-numbers]]; annual
  savings computed, not hardcoded twice.
- **Matrix semantics** — a real `<table>` with `th scope="row"` per
  feature ([[visible-accessibility]]); checks as icons with text
  alternatives, never color-only.

## Search queries

- `pricing table design 3 tiers recommended`
- `css subgrid align pricing feature rows`
- `pricing toggle monthly annual animation`
- `feature comparison matrix accessibility`

## Related

[[table-design]] (the matrix register's laws), [[card]] (columns are
cards), [[visual-hierarchy]] (the one-hero law), [[animated-numbers]]
(price toggles), [[control-language]] (CTA ranks, the toggle),
[[chips-badges-avatars]] (popular badges), [[centered-stack]] (the page
it lives in), [[split-screen]] (the two-option variant),
[[disclosure]] (mobile matrix).
