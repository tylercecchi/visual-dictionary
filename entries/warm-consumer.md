---
name: warm-consumer
title: Warm Consumer (One Glowing Action)
summary: "warm, light consumer/fintech app: warm greys, pill controls, one glowing lime action"
category: wardrobe
aliases: [lime, lime design system, design.how lime, warm consumer, warm and light, consumer app look, friendly fintech, money app look, banking app look, one glowing action, glowing primary button, glowing cta, acid lime accent, neobank style, warm grey ui]
media: [css, svg]
---

# Warm Consumer

The warm, light register for consumer apps — especially money and
everyday-task apps: a white page, warm-grey surfaces, near-black text,
generous rounding, and a single acid-lime button that *glows* as the one
next step. Calm and friendly, never cute; trust comes from plain words and
a way back. Captures design.how's Lime system as an aesthetic + behaviour
bundle.

## You know it when you see

- White page, cards and fields on soft warm greys (`#f6f5f2`), ink-black text
- One bright lime button per screen with a soft lit gradient and halo — the eye goes straight to it
- Rounded everything: pill buttons, 12 px fields, 16 px cards, 24 px sheets
- Phone-first single column, the main action pinned to the bottom of the screen
- Amounts in tabular figures with real cents; after an action, a toast that says what moved and offers Undo
- No blue, no second brand colour, no gradients behind content, no letter-spaced labels

## Dials

- **[[color-roles]]** — page `#ffffff`, surfaces `#f6f5f2` / `#efeeea` / `#e6e4df`, text `#0f0f0d` with `#4a4943` and `#6b6a63` tiers, lines `#e6e4df`. Accent lime `#e4f222` (hover `#d6e41a`, active `#c4d211`), a pale lime wash `#f5f9c4` for selected rows, and an olive line step `#7c8700` for rings, strokes and icons (lime itself is ~1.2:1 on white). Text on lime is always ink, never white. Status: success `#1e8e4a`, warn `#c27a00`, danger `#d93636`, each with a tint and paired with a word or icon; there is no info blue.
- **glow budget** — glow on the primary and destructive buttons, the balance chip and one featured card per view, nowhere else; it is the only gradient and the only coloured light allowed
- **[[typographic-voice]]** — one warm grotesque (Hanken Grotesk) for everything; seven sizes 12 / 14 / 16 / 18 / 22 / 28 / 36; weights 600 headings, 500 controls and labels, 400 the rest, never 700; tight tracking only at 22 px and up; tabular figures for every changing number; prose capped at 65 ch; inputs stay 16 px on touch to stop iOS zoom
- **[[shape-language]]** — radius sm 6, md 10, field 12, panel 16, sheet 24, controls fully round
- **[[elevation]]** — warm-tinted soft shadows by level only for what floats (card `0 1px 2px` at 6 %, menu `0 8px 24px -6px` at 16 %, overlay `0 24px 48px -12px` at 24 %); never a shadow and a hairline on the same edge; a 1 px line ring replaces shadows in dark mode
- **[[spacing-density]]** — relaxed: group with space before boxes; one-task screens at `max-w-md`, home/settings at `max-w-2xl`; sections 32 px apart; a card only around one thing the person acts on
- **[[iconography-style]]** — one icon set; icons align to the first line of wrapped text; no icons as heading decoration
- **[[motion-ceremony]]** — quick and answering; see Behaviors

## Behaviors

- **Motion budget** — animate only to answer a press or report a change. One house curve, `cubic-bezier(0.16, 1, 0.3, 1)` (fast landing, long settle), and `cubic-bezier(0.4, 0, 1, 1)` only for leaving. Durations: 80 ms hover/press colour, 140 ms small state change (switch, chip, checkbox, closing), 200 ms popover/menu/tab underline/panel height, 280 ms dialog or sheet opening; leaving is always faster than arriving. Popups enter from 0.97 scale with opacity. The spinner (900 ms per turn) is the only loop.
- **Press / hover / focus** — pressed controls settle to 0.98 scale; the glowing button brightens its gradient and halo when lit and darkens on press. Focus is a 2 px olive ring on every control, never removed.
- **State signalling** — a pending button keeps its label and shows the spinner (no label swap — width and accessible name stay put); selected = lime wash with ink text; status always word + colour. Sticky headers gain a bottom line only once content scrolls under them.
- **Money and trust** — before the assistant moves money: an approval card (amount, one reason, Approve / Edit / Decline). After: a receipt listing what was done with Undo. When the person pays: a review step, then "Payment done" with Undo. Autonomy limits are written as one sentence with the limit typed into it.
- **AI turns** — the assistant speaks in single noticed facts (one sentence, the number behind it, a tiny sparkline); streamed answers arrive as-is — no blinking cursor, no shimmer, no per-word fade.
- **Copy voice** — sentence case, verb + object, plain facts; no emoji, no em dash, no title case; no hype or invented urgency ("instant", "secure", "Only 2 hours left"); believable data with real cents and nearby dates.
- **Reduced motion** — every duration zeroed except the spinner; the press scale is skipped.

## Bans (anti-slop, in brief)

Lime-filled pages, cards or banners · white text on lime · more than one glowing thing competing · gradients, blobs, textures, grid/dot backgrounds, glass blur · coloured shadows · blue or a second brand hue · eyebrow labels and small grey section labels (use a real h2) · equal stat cards (show one balance, a list or a sentence) · card in a card · icon tiles · edge rails · small grey prose for fees and limits · capitals and tracking · weight 700 · emoji · stream effects · scroll-reveal · a screen flattened to grey with no glowing action.

## Structural pressure

Wants a narrow single column ([[centered-stack]] / [[focus-page]] at phone width), a sticky bottom action bar, bottom tab navigation, and lists over tables. Resists dense [[table-design]] and [[dashboard-tiles]] (no chart library beyond sparklines), multi-column admin layouts, and anything that needs more than one primary action per view.

## Techniques

- **The glow key** — a vertical gradient between two lime stops (`#dbec1c` → `#f6ff7c`), a white inner edge highlight, a soft white bloom and an olive-tinted cast shadow below; brighter stops on hover, darker on press. Build it once as a button variant so it can't spread.
- **Warm shadow ink** — shadows as `rgb(40 36 20 / α)` rather than black, so they read warm on warm greys.
- **Role tokens** — `--accent`, `--accent-wash`, `--accent-line`, `--on-accent` separate the fill, the selection, the stroke and the text-on-fill, which is what keeps a high-key accent accessible.
- **Amount formatting** — one formatter for every sum (sign, separators, cents, tabular figures); never hand-built strings.
- **Undo after, approval before** — pair [[toast-notification]] with an undo window ([[undo-recovery]]) for reversible actions; a review step for irreversible ones.

Effects it reaches for: [[glow-bloom]] (strictly on the one action), [[animated-numbers]] for balances, [[rubber-soft-touch]]-adjacent press feel. Never: [[frosted-glass]], [[mesh-gradient]], [[material-texture]], [[shimmer-sheen]] on text, [[particles]] / confetti.

## Starting points

- design.how Lime docs — https://design.how/systems/lime (foundations incl. `/foundations/anti-slop.md`, `/foundations/motion.md`, `/foundations/color.md`)
- Source: https://github.com/arla6ka/design.how/tree/main/systems/lime — by Arlan Marat, MIT licensed; credit design.how when borrowing
- Install: `npx shadcn@latest add https://design.how/r/lime/theme.json`
- Font: Hanken Grotesk (open-licensed)

## Search queries

- `design.how lime design system`
- `glowing primary button css gradient bloom`
- `fintech app ui approval undo payment flow`
- `high contrast accent color text on accent token`
- `font-variant-numeric tabular-nums currency`

## Related

[[pressable-glass]] (the ink-and-paper AI-product sibling with one glass
action), [[calm-console]] (the cold operator counterpart), [[soft-aesthetics]]
(warmer and textured; this stays crisp), [[cute-naive]] (what this must not
slide into), [[glow-bloom]], [[color-roles]], [[visual-hierarchy]]
(one-accent budget), [[toast-notification]], [[undo-recovery]],
[[ai-interaction]], [[status-signals]], [[live-feedback]], [[sheet-drawer]],
[[form-grammar]].
