---
name: book-design
title: Book Design
category: ui-foundations
aliases: [book layout, book typography, chapter opener, classic book style, novel layout, folio, running head, title page, colophon, penguin classics, reads like a book, poetry layout, verse setting, poem line breaks]
media: [css]
---

# Book Design

The long-form wardrobe — five centuries of book interior conventions:
the canonical text page, chapter openers with drop caps, running heads
and folios, title-page lockups. "Make it read like a book" loads a
complete, deeply settled system whose entire purpose is disappearing
into hours of reading.

## You know it when you see

- A single measured text column with generous, *asymmetric* margins; justified, hyphenated, quietly perfect
- Chapter openers: number + title with air above, a drop cap or small-caps lead-in
- Running heads (book/chapter title) and folios (page numbers) in the margins; section breaks as blank lines or fleurons (❦)
- Title pages: centered lockups in tiered sizes; the colophon's tiny self-description

## Dials

- **the page canon** — classical margin proportions (inner < top < outer < bottom; the Van de Graaf/Tschichold constructions) sizing the text block against its page; on screen: a centered measure ([[text-block-grammar]] 60-70ch) with deliberate vertical margins — the *proportions*, not print nostalgia, are what read as bookish
- **text texture** — justified + hyphenated ([[text-block-grammar]] fully engaged), first-line indents with no paragraph spacing (the book convention — the *opposite* of web default), old-style figures and true small caps ([[typographic-voice]] detail tells), a book serif (Garamond/Caslon/Jenson class)
- **chapter ceremony** — the opener's fixed grammar: sink (whitespace above ≈ ⅓ page), chapter number (small, spaced) + title, then the entry ritual — drop cap ([[magazine-spread]]'s technique) *or* small-caps first line, never both; openers are the book's only display moments
- **navigation furniture** — running heads + folios ([[app-shell]]'s wayfinding at print scale), section breaks (blank line → fleuron → asterism by strength), footnotes/endnotes; digital register: sticky chapter heads, progress-as-folio ([[navigation-language]] translated)
- **front-matter lockups** — title pages as centered tiered stacks ([[type-composition]] centered-totem at its most formal), half-titles, epigraphs (small, centered, air); the colophon as the closing bow
- **register** — classical (the invisible servant: Penguin-classics restraint) vs literary-modern (asymmetric margins, sans folios — Tschichold's later work) vs illustrated/gift ([[historical-ornate]] borders, [[ornament-traditions]] endpapers)

## Techniques

- **The page component** — a `.book-page`/`.prose-book` scope: measure,
  justified+hyphens (with `lang` set), indent-not-space paragraphs,
  `font-variant-numeric: oldstyle-nums`, `hanging-punctuation` where
  supported.
- **Drop caps** — `initial-letter` with `::first-letter` fallback;
  small-caps lead via `::first-line` + `font-variant-caps`.
- **Digital reading chrome** — [[eink-aesthetic]]'s pagination kinship;
  serif + cream tokens; footnotes as [[popover-menu]] sidenotes (the
  Tufte move — see [[academic-paper]]).
- **Deployment** — reading products, long-form content, about-pages
  wanting gravitas; the chapter-opener grammar alone elevates any
  article series.

## Search queries

- `van de graaf canon page construction`
- `initial-letter drop cap css support`
- `book typography justified hyphens css`
- `title page typography lockup classic`

## Related

[[text-block-grammar]] + [[typographic-voice]] (the laws this system
perfected first), [[magazine-spread]] (the art-directed cousin),
[[academic-paper]] (the scholarly sibling), [[eink-aesthetic]]
(digital reading), [[type-composition]] (title lockups),
[[historical-ornate]] + [[ornament-traditions]] (gift registers),
[[material-texture]] (paper, cloth covers), [[focus-page]]
(the title page is one).
