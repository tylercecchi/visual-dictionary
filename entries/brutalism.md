---
name: brutalism
title: Brutalism / Anti-Design
category: ui-foundations
aliases: [brutalist, neo-brutalism, neubrutalism, anti-design, raw web, default styling, ugly on purpose, punk web, web 1.0 revival]
media: [css]
---

# Brutalism / Anti-Design

Design that refuses to be smooth — raw structure exposed, defaults embraced,
rules broken *visibly*. Spans true brutalism (unstyled honesty) to
neo-brutalism (the commercial flavor: thick borders, hard shadows, loud flats).

## You know it when you see

- **Neo-brutalism**: thick black borders, hard offset un-blurred shadows, saturated flat fills, chunky type — playful-aggressive
- **True brutalism**: system fonts, default blue links, visible table/grid bones, no decoration — anti-commercial honesty
- Deliberate collisions: overlapping elements, marquee energy, cursor chaos, exposed seams
- The tell either way: nothing is soft — no blur, no subtle gradient, no 8px-radius politeness

## Dials

- **rawness register** — styled-to-look-raw (neo, actually very designed) vs actually-raw (defaults, structure-first); dishonesty between the two is the common failure
- **border weight & shadow hardness** — neo's signature: 2-4px solid borders, shadows as *solid offset shapes* (zero blur) — [[border-stroke]] and [[elevation]] with the softness deleted
- **color violence** — full-saturation flats, clashing pairs welcome; the [[color-roles]] accent-budget rule deliberately violated — but usually against a calm paper/black ground
- **typographic aggression** — enormous scale jumps, all-caps, mono or ultra-bold grotesks; [[typographic-voice]] at maximum commitment
- **rule-break budget** — brutalism still needs [[visual-hierarchy]] and usability; choose *which* conventions break (decoration, politeness) and which hold (navigation, legibility)

## Techniques

- **Neo-brutalist kit (CSS)** — `border: 3px solid #000`,
  `box-shadow: 6px 6px 0 #000` (the un-blurred offset), hover = translate
  into the shadow (press physics), flat fills from a loud token set,
  `border-radius: 0` (or one defiant pill).
- **True-brutalist restraint** — semantic HTML styled barely: system font
  stack, default link behavior, visible structure; the craft is in *what you
  don't do* and ruthless content hierarchy.
- **Collision layouts** — CSS grid with deliberate overlaps
  (negative margins, stacked grid areas), rotation, and z-index play;
  keep interactive targets un-collided.
- **Motion register** — instant or stepped ([[motion-ceremony]] cuts, no
  easing politeness); marquees and cursor effects ([[cursor-effects]]) as
  punk ornament.

## Starting points

- brutalistwebsites.com — the ongoing archive of the true register
- Gumroad-era neo-brutalism and current design-tool marketing sites as the
  commercial register's references
- No library — both registers are token discipline (or its refusal)

## Search queries

- `neobrutalism css border box-shadow offset solid`
- `brutalist web design examples archive`
- `neubrutalism ui kit tokens`
- `anti-design trend web`

## Related

[[border-stroke]] + [[elevation]] (the softness it deletes),
[[typographic-voice]] (max commitment), [[print-artifacts]] +
[[stickers-badges]] (zine/punk kin), [[shape-language]] (radius zero as a
stance), [[crt-scanlines]] + [[ascii-rendering]] (retro-terminal wing),
[[visual-hierarchy]] (the rule it secretly keeps).
