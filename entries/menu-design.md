---
name: menu-design
title: Menu Design
category: ui-foundations
aliases: [restaurant menu, cafe menu, menu layout, dot leaders, price list, wine list, food menu, bistro menu, menu typography, prix fixe]
media: [css]
---

# Menu Design

The restaurant wardrobe — a document form with its own deep craft:
section grammar, price psychology, dot leaders, and a register system
running from chalkboard bistro to tasting-menu austerity. A massive
product vertical (every restaurant site and food app) with conventions
diners read fluently.

## You know it when you see

- Dishes as name + description + price triplets, grouped under section heads (Starters / Mains / Desserts)
- Dot leaders stitching names to right-aligned prices — or, in the premium register, prices sitting quietly *without* leaders or currency signs
- One register held perfectly: rustic chalk, trattoria serif, diner boldness, or fine-dining whitespace
- The failures: prices shouting in a column that turns dining into accounting, descriptions written like legal text, six fonts

## Dials

- **item anatomy** — name (the hero, [[typographic-voice]] distinct weight/case), description (short, sensory, comma-cadence — 8-15 words; [[text-block-grammar]] attachment: tight under its name), price, optional badges (V/GF as quiet [[chips-badges-avatars]] dots or supers)
- **price psychology (the famous dial)** — the craft's research-backed core: currency signs off ($ primes spending pain), prices *nested* at the description's end or set quietly right — but the accounting-column effect (all prices flush-right with leaders, inviting top-to-bottom price scanning) is deliberately chosen or deliberately avoided by register: leaders = honest diner/bistro; nested = fine dining
- **dot leaders** — when used: real leaders (periods spaced, not underscores), aligned prices `tabular-nums`; the diner/classic register's signature ([[table-design]]'s alignment law in document form)
- **section grammar** — courses as [[text-block-grammar]] groups (heads in the register's display voice, generous before-space), chef's specials as framed [[panel-well]] callouts ([[border-stroke]] per register: double-rule classic, hand-drawn chalk), prix-fixe as a distinct column/panel
- **register wardrobe** — bistro/chalk ([[chalk-blackboard]] whole-cloth), trattoria (cream [[material-texture]], serif, [[historical-ornate]] Victorian-label flourishes), diner (bold slab, leaders, red accents), fine dining ([[fashion-editorial]]'s austerity: huge whitespace, no leaders, lowercase), café-modern (friendly sans, [[soft-aesthetics]] warmth)
- **digital behaviors** — sticky section [[navigation-language]] tabs, dietary filter [[chips-badges-avatars]], photos-or-not (a register decision: photos read casual — fine dining abstains), ordering integration without breaking the document feel

## Techniques

- **Dot leaders** — the classic CSS problem: flex row with a
  `border-bottom: dotted` filler span (baseline-aligned), or
  `overflow: hidden` dot-fill span; prices `tabular-nums`
  right-aligned.
- **Menu component** — one item component with register-tokened
  variants; sections as mapped groups — the menu as data, the register
  as theming ([[color-roles]]/[[typographic-voice]] tokens doing the
  wardrobe).
- **Print/PDF parity** — menus uniquely still print: print styles are
  first-class ([[book-design]] page discipline for the PDF).

## Search queries

- `css dot leaders menu price`
- `menu psychology currency sign research`
- `restaurant menu typography register`
- `tabular-nums price alignment`

## Related

[[text-block-grammar]] (attachment and grouping), [[chalk-blackboard]] +
[[historical-ornate]] + [[fashion-editorial]] + [[soft-aesthetics]]
(the register wardrobes), [[chips-badges-avatars]] (dietary marks),
[[table-design]] (alignment law), [[panel-well]] (specials),
[[navigation-language]] (digital sections), [[typographic-voice]]
(the item voice), [[comparison-columns]] (prix-fixe kinship).
