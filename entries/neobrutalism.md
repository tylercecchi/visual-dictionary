---
name: neobrutalism
title: Neobrutalism (Neo-Brutalist UI)
summary: "thick black borders, hard offset shadows, loud flat fills; friendly-aggressive UI"
category: wardrobe
aliases: [neobrutalism, neo-brutalism, neo brutalism, neubrutalism, neu-brutalism, neobrutalist, neo-brutalist, neubrutalist, gumroad style, hard shadow, hard shadows, offset shadow, solid shadow, thick borders, black outlines, chunky borders, flat bright ui, brutalist ui kit, retro pop ui, loud flat design]
media: [css]
---

# Neobrutalism (Neo-Brutalist UI)

The commercial, product-UI branch of brutalism: thick black outlines,
hard offset shadows with zero blur, saturated flat fills, chunky type,
and buttons that press into their shadow. It looks raw but is a tightly
designed, highly consistent system, friendly and loud, and very common in
creator tools, SaaS marketing and indie products.

## You know it when you see

- Every card, button and input outlined in 2-4px solid black
- Shadows as solid offset shapes (`6px 6px 0 #000`), no blur, all
  pointing the same way
- Bright flat fills: yellow, pink, mint, lilac, orange on a cream or
  white ground
- Buttons that move down-right into their shadow on press
- Bold grotesk or rounded display type, often oversized
- The failure: inconsistent shadow offsets or border weights. The style
  depends on every element obeying the same two numbers

## Dials

- **border weight**: one value for everything (2px light, 3px standard,
  4px heavy); thinner on small controls only if it's tokenized
- **shadow offset & direction**: one offset (4-8px), one direction, zero
  blur, solid black (or a dark tone of the ink)
- **fill palette**: 3-5 saturated flats plus cream/white ground; each fill
  has a role ([[color-roles]]: primary action, highlight, warning), not
  random rainbow
- **radius**: 0 (harder) or one consistent small-to-pill radius (softer);
  never mixed
- **press physics**: hover lifts (shadow grows), active translates by the
  shadow offset so the shadow disappears; instant or 80-120ms
  ([[ui-state-transitions]])
- **type**: chunky grotesk, often uppercase labels; big scale jumps
  ([[typographic-voice]])
- **ornament**: stickers, stars, squiggles, marquee strips as accents
  ([[stickers-badges]]); budget them

## Techniques

- **Tokens first**: `--nb-border: 3px solid #000`, `--nb-shadow: 6px 6px
  0 #000`, a fill palette, one radius. Apply them to every surface and
  control so consistency is automatic.
- **Press interaction**: `:hover { transform: translate(-2px,-2px);
  box-shadow: 8px 8px 0 #000 }`, `:active { transform: translate(6px,6px);
  box-shadow: 0 0 0 #000 }`.
- **Focus**: a visible focus ring that isn't confused with the border
  (an outline offset in a contrasting fill colour).
- **Accessibility check**: bright fills under black text usually pass;
  white text on mid-saturation fills often doesn't.
- **UI kits**: neobrutalism component kits exist for Tailwind/shadcn;
  check they tokenize border and shadow rather than hardcoding them.

## Starting points

- neobrutalism.dev and similar shadcn/Tailwind neo-brutalist component kits
- Gumroad's 2021-era redesign as the register's reference point

## Search queries

- `neobrutalism css border box-shadow offset solid`
- `neubrutalism tailwind components`
- `neo brutalist ui kit shadcn`
- `hard shadow button press css`
- `neobrutalism color palette`

## Related

[[brutalism]] (the raw, anti-commercial parent), [[clean-girl-brutalism]]
(the soft, neutral hybrid), [[border-stroke]] and [[elevation]] (border and
shadow with the softness removed), [[memphis-style]] (shared loud
geometry), [[stickers-badges]], [[kidcore]], [[shape-language]].
