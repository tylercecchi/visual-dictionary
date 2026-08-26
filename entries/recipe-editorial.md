---
name: recipe-editorial
title: Recipe Editorial
category: ui-foundations
aliases: [recipe layout, recipe card, cookbook style, ingredients list, cooking steps, food blog recipe, recipe page, mise en place, cook mode]
media: [css]
---

# Recipe Editorial

The kitchen document — recipe design's settled two-zone contract:
ingredients (a scannable manifest) and method (numbered steps), plus the
meta-band of times and servings. A form users operate *while cooking*,
which makes it the rare editorial style with a hands-are-dirty usability
contract.

## You know it when you see

- The two zones: an ingredients list (quantity-first lines) beside or above numbered method steps
- The meta-band: prep/cook/total time, servings, difficulty as icon-led [[chips-badges-avatars]] stats
- Hero food photography up top; step photos or none; a "jump to recipe" escape past the blog essay
- **Cook mode**: big type, screen-awake, one step at a time

## Dials

- **the two-zone contract** — ingredients and method as visually distinct zones (side-by-side on wide screens — [[split-screen]] logic, ~35/65; stacked ingredients-first on mobile); the zones cross-reference: ingredients bolded on first use in steps (the premium linking move)
- **ingredient line grammar** — quantity-first ("2 tbsp olive oil"), quantities `tabular-nums` and aligned-ish, grouped by component ("For the sauce:" — [[text-block-grammar]] groups), checkboxes for shopping/mise-en-place ([[control-language]] checkbox semantics: declared choice)
- **method step grammar** — [[instructional-manual]]'s one-action law relaxed to one *phase* per step (2-3 bound actions fine: "whisk eggs and sugar until pale"); imperative voice; embedded times/temps emphasized (the scannable numbers — bold or accent); doneness cues in words, not just minutes ("until golden at the edges")
- **the scaling dial** — servings adjustment recomputing quantities ([[animated-numbers]] crossfade register; fractions handled gracefully — "1½", never "1.5 eggs"); unit toggle (metric/imperial) as a [[control-language]] segmented control
- **cook-mode register** — the hands-dirty adaptation: step-at-a-time at [[focus-page]] chrome-removal, huge type (readable at arm's length), wake-lock, voice/tap-anywhere advance, inline timers per step ([[animated-numbers]] countdown); this register is the product moat of recipe apps
- **the jump-to-recipe truce** — food-blog reality: essay up top (SEO/story), recipe card below; the "jump to recipe" button is a user right ([[navigation-language]] anchor honesty), and the card itself stays self-contained (printable, schema-marked)

## Techniques

- **Recipe card component** — the two zones + meta-band as one
  self-contained, print-styled, `Recipe` schema.org-marked block
  ([[book-design]] print parity; structured data is table stakes for
  the vertical).
- **Ingredient↔step linking** — ingredients as data with IDs; steps
  reference them (hover highlights the ingredient line — the
  [[map-list-sync]] sync contract at kitchen scale).
- **Scaling** — quantities as numbers + units in data, formatted per
  locale with vulgar fractions; scale factor recomputes, never
  string-mangles.
- **Cook mode** — wake lock API, step pagination ([[stories-format]]'s
  tap-advance grammar, minus the timer), per-step timers with
  [[toast-notification]] alarms.

## Search queries

- `recipe schema markup structured data`
- `recipe card design two column ingredients`
- `cook mode ui wake lock step`
- `vulgar fractions unicode formatting`

## Related

[[instructional-manual]] (the procedure parent; recipes relax its
one-action law), [[text-block-grammar]] (line and group grammar),
[[split-screen]] (the two zones), [[focus-page]] (cook-mode chrome
removal), [[stories-format]] (step-advance grammar),
[[animated-numbers]] (scaling, timers), [[chips-badges-avatars]]
(meta stats), [[control-language]] (checkboxes, unit toggles),
[[soft-aesthetics]] + [[chalk-blackboard]] (the vertical's favorite
wardrobes), [[map-list-sync]] (the linking contract).
