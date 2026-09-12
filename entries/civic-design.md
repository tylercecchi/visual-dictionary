---
name: civic-design
title: Civic / Public-Service Design
summary: "GOV.UK/USWDS register; one typeface, one action color, one question per page"
category: wardrobe
aliases: [gov.uk style, uswds, government website, public sector design, civic ui, service design look, plain language design, official forms online, accessible by default, boring on purpose, no-frills official, one thing per page, design system for government]
media: [css]
---

# Civic / Public-Service Design

The wardrobe of the modern government service — one typeface, black on
white, one action color, plain words, one question per page. It looks
unstyled to a casual eye; it is in fact the most *rule-bound* register in
the dictionary, where every choice is justified by the widest possible
audience.

## You know it when you see

- Large left-aligned labels above inputs, hint text beneath, a bold error
  summary at the top of the page that links to each field
- A single big green or blue "Start now" / "Continue" button and
  underlined blue links — nothing else competes
- One question per screen, a back link, a progress sense without a
  progress bar
- A crown, seal, or `.gov` strip as the only brand; a `BETA` phase banner
  under the header
- The failure: decoration creeping in (cards, gradients, icons for their
  own sake) — the register's authority comes from restraint

## Dials

- **formality register** — national service (GOV.UK austerity) → agency /
  municipal (a little warmth, still restrained) → civic-tech startup
  (borrows the trust cues with a softer palette)
- **typeface strategy** — one humanist sans everywhere (GDS Transport,
  Public Sans, Source Sans); no display face; body 19px+; line length
  capped ~65-75ch ([[typographic-voice]] at its most self-effacing)
- **color budget** — black/white + one action color + status set
  (error red, success green, info blue); links underlined, visited
  distinct; focus style is *loud* (yellow fill + black outline)
  ([[visible-accessibility]] as identity)
- **question granularity** — one-thing-per-page vs grouped sections;
  the former for high-stakes transactions, the latter for review pages
- **plain-language contract** — labels are questions in the user's
  words; no jargon, no "please"; content is the interface
- **component canon** — notification banner, summary list, task list,
  panel (confirmation), phase banner, back link, skip link; adopt them
  by name rather than inventing equivalents
- **trust furniture** — seal/crown, `.gov` header, "This is a new
  service" banner, footer with licence and accessibility statement

## Techniques

- **Adopt the system** — GOV.UK Frontend or USWDS *are* the technique:
  accessibility, focus styles, and form patterns are already correct;
  theme within their tokens rather than rebuilding.
- **Form grammar** — `<label>` above input, `aria-describedby` hint and
  error, error summary with anchor links at the top on submit
  ([[form-grammar]]), inputs sized to expected content width.
- **Focus & links** — `:focus-visible` yellow/black block style, all
  links underlined with `text-underline-offset`, visited color kept.
- **Typography** — one family, 19px body, 1.3-1.5 line height, `max-width:
  ~66ch`, headings as size steps only; no small caps, no letterspacing.
- **Progressive enhancement** — every journey completes without JS; JS
  adds conveniences only. Print stylesheets are first-class.

## Starting points

- design-system.service.gov.uk — GOV.UK Design System (patterns +
  research behind them)
- designsystem.digital.gov — USWDS
- Public Sans (USWDS's open typeface); GDS Transport is licensed to
  government only — use a humanist sans stand-in elsewhere
- Other national systems (Canada, Australia, Netherlands) for the range
  of the register

## Search queries

- `gov.uk design system patterns one question per page`
- `uswds components form patterns`
- `error summary pattern accessible forms`
- `public sans font government`
- `focus visible yellow black government style`

## Related

[[visible-accessibility]] (the register's engine), [[form-grammar]]
(its core surface), [[focus-page]] (one-job pages), [[typographic-voice]]
+ [[text-block-grammar]] (single-voice type), [[color-roles]] (minimal
budget), [[border-stroke]] (loud focus rings, hairline rules),
[[table-design]] (summary lists), [[instructional-manual]] (procedural
kin), [[brutalism]] (looks alike, opposite in intent: this is maximal
restraint, not raw defaults), [[engineering-datasheet]] (the other
"verbosity as trust" register).
