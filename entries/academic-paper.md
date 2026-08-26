---
name: academic-paper
title: Academic Paper
category: ui-foundations
aliases: [latex style, journal article, tufte style, sidenotes, two column paper, research paper layout, citations, footnotes, arxiv style, scientific paper look, monograph]
media: [css]
---

# Academic Paper

The scholarly wardrobe — the journal-article conventions (LaTeX's
Computer Modern voice, two-column density, numbered everything) and
their elegant reformation (Tufte's sidenotes and integrated figures).
"Make it look like a paper" signals *rigor*; products borrow it to
claim seriousness.

## You know it when you see

- **Journal register**: two justified columns, Computer-Modern-class serifs, numbered sections/figures/equations, superscript citations, a references block
- **Tufte register**: one text column with a wide margin holding sidenotes and small figures; no footnote-jumping
- Abstract blocks, author/affiliation lines, "Figure 3:" bold-led captions
- The failure: paper cosplay with broken cross-references — numbering that cites nothing

## Dials

- **register pick** — journal (dense, twin-column [[grid-systems]], authority-by-convention) vs Tufte (readable reformation: main measure + margin column — [[app-shell]]'s inspector logic at text scale) vs preprint/arXiv (single column, utilitarian — the software world's default)
- **the numbering system** — sections (1.2.3), figures, tables, equations all numbered and *cross-referenced* ("see §3.1", "Fig. 4") with working links in digital form ([[navigation-language]] as scholarly plumbing); the numbering is the register's honesty — decorative numbering that references nothing is the cosplay tell
- **citation chrome** — superscript or [Author, 2024] markers → hover previews ([[popover-menu]] hover-card license: citations are its most legitimate scholarly use) → a hanging-indent references block ([[text-block-grammar]] inverted-indent register)
- **sidenote grammar** (Tufte) — notes and small figures in the margin *beside* their reference, numbered small; collapses to tap-toggled inline notes ([[disclosure]]) on narrow screens; kills the footnote round-trip
- **figure discipline** — figures/tables as numbered blocks with bold-led captions below ([[chart-voice]] data-ink austerity native here; [[table-design]] rules-only register), placed near first reference; equations centered with right-margin numbers
- **voice** — Computer Modern/Latin Modern class serifs (the "LaTeX look" is largely the font), `tabular-nums` everywhere, restrained near-monochrome ([[color-roles]]: one link/accent color); the abstract as a distinct measure-narrowed block

## Techniques

- **Tufte scaffold** — a two-track grid (measure + margin), sidenotes
  absolutely aligned to their reference marks (anchor + measured
  offset); tufte-css as the canonical reference implementation.
- **Numbering & refs** — CSS counters for sections/figures; digital
  cross-refs as real anchors with [[popover-menu]] previews.
- **Journal columns** — CSS `column-count: 2` for body with grid-based
  figure spans; or honest single-column (screens aren't A4 — the
  two-column register is costume on screen, say so).
- **Deployment** — docs/research products, data journalism, changelogs
  wanting rigor; the sidenote grammar and citation previews transfer
  anywhere long-form meets evidence.

## Search queries

- `tufte css sidenotes margin notes`
- `css counters section figure numbering`
- `latex computer modern webfont`
- `citation hover preview popover`

## Related

[[book-design]] (the long-form parent), [[text-block-grammar]] +
[[grid-systems]] (the engine), [[popover-menu]] (citation previews),
[[disclosure]] (collapsed sidenotes), [[chart-voice]] +
[[table-design]] (figure discipline), [[navigation-language]]
(cross-reference plumbing), [[terminal-aesthetic]] (the preprint
register's neighbor), [[blueprint]] (fellow rigor-signaling wardrobe),
[[typographic-voice]] (the Computer Modern voice).
