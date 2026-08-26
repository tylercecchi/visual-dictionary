---
name: newspaper-editorial
title: Newspaper Editorial
category: ui-foundations
aliases: [newspaper style, broadsheet, masthead, nameplate, front page, tabloid, newsprint layout, column rules, dateline, extra extra, daily paper look]
media: [css]
---

# Newspaper Editorial

The daily-paper wardrobe — nameplate gothic or blackletter up top, dense
multi-column text divided by hairline rules, decked headlines, datelines,
bylines. Two centuries of conventions so strong that borrowing three of
them makes anything read as "news."

## You know it when you see

- A centered nameplate (often blackletter — [[historical-ornate]] type on loan) over a rules-and-folios header band (date, edition, price)
- 5-6 tight text columns separated by hairline rules; headlines spanning several, with decks and kickers stepping down
- Bylines, datelines ("LONDON —"), continued-on jumps, classified-ad density
- **Tabloid register**: one screaming headline, red accents, full-page photo

## Dials

- **nameplate lockup** — the identity moment: display face (blackletter for heritage, sharp gothic for modern) centered over the folio line (date · edition · price in small caps between rules — [[border-stroke]] double-rule discipline)
- **column engine** — 5-6 narrow columns ([[grid-systems]] at maximum count), justified with hyphenation ([[text-block-grammar]]'s justified caveats fully engaged), hairline column rules; density is the aesthetic — newspaper whitespace reads as a printing error
- **headline hierarchy** — the deck system: kicker (small, above) → headline (condensed bold, spanning columns by importance) → deck/standfirst (lighter subhead) → byline; story importance = column span × position ([[visual-hierarchy]] as physical real estate)
- **furniture** — datelines, section slugs, pull stats, "continued on A7" jumps, hairline story dividers; captions bold-led under [[hatching-sketch]]/[[woodcut-linocut]]-era engraving or duotone photos ([[duotone-gradient-map]] newsprint gray)
- **register** — broadsheet (dense, measured, hierarchy by span) vs tabloid (one story shouting: 120pt condensed caps, red [[color-roles]] accent, photo-led) vs digital-heritage (NYT-web register: the conventions translated — rules and serifs kept, density relaxed)
- **material truth** — newsprint ground ([[material-texture]] warm gray-cream), ink at 90% black not pure, [[halftone]] dots on photos, slight [[print-artifacts]] impression; skip for the digital-heritage register

## Techniques

- **CSS columns** — `column-count` + `column-rule: 1px solid` for
  running text (the rare legitimate use); headlines outside the column
  flow spanning via grid.
- **Nameplate** — blackletter/display webfont + letterspaced small-caps
  folio line between double borders; a component, built once.
- **Newsprint pass** — cream ground + grain + duotone images +
  soft-black ink tokens.
- **Deployment** — full costume for news products, editorial heroes,
  "extra!" campaign moments; the *deck system* alone (kicker/head/deck/
  byline) upgrades any article template without the costume.

## Search queries

- `newspaper css column rules layout`
- `nameplate masthead design blackletter`
- `headline deck kicker hierarchy`
- `newsprint texture duotone photo`

## Related

[[magazine-spread]] (the art-directed sibling), [[grid-systems]] +
[[text-block-grammar]] (the engine), [[historical-ornate]] (nameplate
blackletter), [[halftone]] + [[duotone-gradient-map]] +
[[print-artifacts]] + [[material-texture]] (newsprint truth),
[[typographic-voice]] (condensed gothics), [[timeline-feed]] (the
digital descendant of the front page).
