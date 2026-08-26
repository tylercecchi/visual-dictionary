---
name: text-block-grammar
title: Text-Block Grammar
category: ui-foundations
aliases: [text alignment, rag, paragraph spacing, heading spacing, caption placement, indentation, text layout rules, micro typography, proximity, label placement, orphans widows]
media: [css]
---

# Text-Block Grammar

The placement rules governing how text blocks relate to each other and to
what they describe — alignment systems, proximity logic, paragraph
articulation, caption attachment. The layer where layouts most often
quietly fail: every block individually fine, the *relationships* wrong.

## You know it when you see

- Headings that unambiguously belong to the text below them
- A calm left edge everything hangs from; ragged right edges that don't distract
- Captions, labels, and metadata visibly *attached* to their subjects
- Or the failures: a heading floating equidistant between sections, centered body paragraphs, a caption closer to the wrong image, lists whose wrap-lines break their own indent

## Dials

**Alignment**
- **alignment system** — flush-left/rag-right (the reading default: a stable left axis), centered (display and short lines *only* — centered body text is unscannable), flush-right (labels against a right edge, RTL, numeric columns), justified (needs `hyphens: auto` and adequate measure or it rivers); one primary axis per region ([[grid-systems]] hangs everything on it)
- **rag quality** — the ragged edge's shape: no single-word lines against long lines, no shapes (stairs, bellies); tuned via `text-wrap: balance` (headings) and `text-wrap: pretty` (body — verify support), or manual breaks in display type
- **optical alignment** — quotes, bullets, and punctuation hanging outside the text axis (`hanging-punctuation` where supported; negative text-indent fallbacks); large initial glyphs optically, not mechanically, aligned

**Proximity & attachment**
- **the proximity law** — space-above-heading > space-below-heading (a heading binds to what follows); the ratio (~2-3:1) is the single most violated rule in generated layouts; same law binds captions to images, labels to fields, metadata to titles
- **attachment distance** — a caption/label sits closer to its subject than to *anything else* (Gestalt proximity as measurable spec); when two subjects compete, attachment must be unambiguous or bordered/grouped ([[spacing-density]] within < between)
- **run-in vs stacked labels** — metadata inline with content (dense, [[dashboard-tiles]] register) vs stacked above (airy, forms); pick per density register and hold it

**Paragraph & flow articulation**
- **space vs indent** — paragraphs separated by space (screen default) *or* first-line indent (print/editorial register, no space) — never both; indent skips the first paragraph after any heading
- **block quotes & asides** — indentation depth + optional [[border-stroke]] rule or size shift; the indent must exceed the list indent or hierarchies confuse
- **list discipline** — markers outside the text axis (wrap lines align to text, not marker: `list-style-position: outside` + padding); nested indents on a consistent step; numbered lists with aligned numerals (`tabular-nums`)
- **widow/orphan control** — no lone short last lines at column/page breaks (`orphans`/`widows` in paged contexts; `text-wrap: pretty` and manual `&nbsp;` joins for the last-two-words widow)

**Measure & vertical rhythm**
- **measure enforcement** — 45-75ch body ([[typographic-voice]]); side content (captions, margin notes) at 25-40ch; the grammar breaks when any prose block escapes its measure
- **rhythm participation** — block spacing in the baseline unit ([[grid-systems]]): heading margins, paragraph spaces, list gaps all multiples; ad-hoc margins are where rhythm dies
- **vertical alignment across columns** — side-by-side text blocks share first-baseline alignment, not box-top alignment (`align-items: baseline` / first-baseline features where available)

## Techniques

- **Spacing tokens with direction** — heading components own their
  *above* space (`margin-block-start` large, `-end` small) so the
  proximity law is structural; never symmetric margins on headings.
- **`:has()` and adjacency rules** — `h2 + p` tightening, `figure:has(figcaption)`
  gap control; the grammar encoded as CSS relationships rather than
  per-instance spacing.
- **Prose class** — one `.prose` scope carrying the entire grammar
  (measure, paragraph articulation, list/quote indents, heading
  proximity) so long-form content is correct by default
  (Tailwind-typography-class plugins are prebuilt versions; theme rather
  than accept defaults).
- **Modern wrap properties** — `text-wrap: balance` on headings,
  `pretty` on body, `hyphens: auto` (with `lang` set!) for justified;
  verify current support per target.
- **The proximity audit** — screenshot, measure every heading's above/below
  gap and every caption's two nearest distances; violations are exact,
  not aesthetic ([[spacing-density]]'s audit specialized to text).

## Search queries

- `text-wrap balance pretty browser support`
- `heading spacing above below ratio typography`
- `hanging-punctuation css support fallback`
- `list-style-position outside indent wrap`
- `first baseline alignment css columns`

## Related

[[typographic-voice]] (identity; this is placement), [[spacing-density]]
(the units and the within/between law), [[grid-systems]] (baseline rhythm,
the axes), [[visual-hierarchy]] (proximity is hierarchy's spatial half),
[[magazine-spread]] + [[centered-stack]] (where the grammar deploys),
[[type-composition]] (display's rule-breaking sibling — which still keeps
an anchor obeying this grammar), [[visible-accessibility]] (200% zoom is
the grammar's stress test), [[chart-voice]] + [[cartographic-style]]
(label attachment in data contexts).
