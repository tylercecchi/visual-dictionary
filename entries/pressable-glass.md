---
name: pressable-glass
title: Pressable Glass (Glass Only on What You Press)
summary: "compact ink-and-paper AI product; glass only on the one action you press"
category: wardrobe
aliases: [glaze, glaze design system, design.how glaze, pressable glass, glass button, glass buttons, glassy and compact, glass only on what you press, glass primary button, ink and paper, black and white ai product, compact ai app, pill controls, shell card]
media: [css, svg]
---

# Pressable Glass

The compact black-and-white register for AI products: ink on paper, every
grey made from ink at an alpha, colour reserved for status, and *glass*
used as a single signal — it appears only on the one action a group leads
with, so "glassy" means "press me". Depth is drawn inside shapes, never
cast. Captures design.how's Glaze system as an aesthetic + behaviour bundle.

## You know it when you see

- A near-white page, white panels inside pale grey "shells", black text softened to 80 % ink
- One dark, glossy pill button per group — sheen on top, darker core, a rim — while every neighbour stays flat
- Every one-line control is a pill: buttons, fields, selects, chips, segmented controls
- No shadows at all: menus are white with a thin ring; dialogs are a shell with a panel inside
- Pressing the glass gives a tiny, fast sink (0.99) and a slower return; nothing bounces
- Green / amber / coral appear only as status with a word

## Dials

- **[[color-roles]]** — page `#fbfbfa`, paper `#ffffff`, shell `#f1f1f0`, ink `#050505`; text tiers are ink at 80 / 60 / 45 % (45 % only for placeholders and icons beside a label — 60 % is the reading floor); lines are ink at 6–15 %, focus line 32 %. No brand accent. Status only: ok `#2c9a59`, warn `#d98a0b`, fail `#e35e49` (coral), with tints and text steps, never as decoration, chart series or link colour. Focus stays ink — a coral ring would read as an error.
- **glass budget** — glass fills: ink `rgb(0 0 0 / 0.66)`, coral `rgb(150 34 18 / 0.88)`, green `rgb(6 86 40 / 0.88)`, white text at 90 %, layered sheen (12 %, 16 % on hover), dark core (32 %, 44 % held), rim and gloss, a 6 px blur — on at most one primary per card, footer or dialog. Never on cards, headers, badges, fields or menus.
- **[[typographic-voice]]** — one neutral sans (Geist-class) for every word; title 28, heading 20, body 14/1.5, labels 12–14 at 500; a single regular cut, with 600 kept for a short strong phrase and never on headings. Mono only for things copied, scaled to 0.8 of the surrounding sans (its letters run ~26 % wider); code blocks 12/20. Sentence case; no capitals or tracking.
- **[[shape-language]]** — pills (999 px) for one-line controls; shell 14 px around an 11 px panel; overlays 10 px; tags 6 px
- **[[elevation]]** — zero cast shadows; depth inside the shape (glass layers on pressables, shell around panel). Menus/popovers: paper plus a 1 px ring a step darker than the page; dialog scrim ink 24 % light / black 64 % dark. If an overlay gets lost, strengthen the ring, never add a shadow.
- **[[border-stroke]]** — one hairline weight; field lines darken on focus
- **[[spacing-density]]** — compact: 4 px grid, 32 px controls, 36 px rows; card footers put meta first then small buttons, flat secondaries before the one primary
- **[[iconography-style]]** — Phosphor-class regular weight, 14 px in controls
- **[[motion-ceremony]]** — press-centred; see Behaviors

## Behaviors

- **Motion budget** — everything on one ease-out, `cubic-bezier(0.2, 0.8, 0.2, 1)`; `cubic-bezier(0.4, 0, 1, 1)` for leaving. State changes 160 ms, overlays in 200 ms and out on 160 ms, selection marks (segmented thumb, pill tab) slide 200 ms while labels crossfade. No springs, bounce or overshoot.
- **The press (signature)** — glass sinks to 0.99 in 50 ms, its sheen drops and its core darkens, then returns over 200 ms; flat controls settle to 0.97 in 120 ms; held secondaries barely move (0.99).
- **Overlays come from their trigger** — anchored menus/popovers fade in while sliding 4 px from the side of the control that opened them; dialogs settle from 0.97; each leaves the way it came, faster.
- **Focus** — 2 px ink ring on every control; fields show focus by darkening their line.
- **State signalling** — status is a glyph + word, never a dot; the only loops are the pending arc (800 ms per turn) and an indeterminate progress sweep (1.4 s). Loads wait 150 ms before showing a skeleton and hold it 400 ms; reloading content dims to 60 %. A check mark wipes in from its start edge.
- **AI turns** — prompt input with a send key that becomes stop while streaming; reasoning and tool calls disclosed, one live "what it's doing now" line; follow-up suggestions after the answer; action receipts and autonomy rules for what the agent did and may do. Streamed text arrives plain — no cursor, shimmer or per-word fade.
- **Copy voice** — sentence case, verb + object, no emoji, no em dash, no hype; believable data.
- **Reduced motion** — durations and press scales zeroed; the arc stays as a still mark.

## Bans (anti-slop, in brief)

Glass sprawl (glass cards, headers, badges, inputs) · two glass buttons side by side · any shadow, including as a fix · gradients, blobs, textures, grid/dot backgrounds, glows, backdrop blur on surfaces · brand accent colours · squared one-line controls · equal stat cards · icon tiles · edge rails · status dots · eyebrow labels · capitals · mono to look technical, or mono at full sans size · emoji · stream effects · scroll-reveal · `transition: all`.

## Structural pressure

Wants small, self-contained cards (shell + panel + footer) and phone-width moments sized to content, with the one action inline in the card. Resists [[bento-grid]] / [[dashboard-tiles]] of equal cards, card-in-card nesting, and heavy [[elevation]]-based layering; pill fields fit awkwardly into dense [[table-design]] filter rows.

## Techniques

- **Layered glass key** — stack a translucent dark base, a top sheen gradient, a darker radial core and a 1 px rim (inset shadows count as *drawing inside the shape*, not cast elevation); animate the sheen/core opacities and `scale` on `:active` with separate press and release durations.
- **Greys as ink alphas** — derive every grey from one ink colour at fixed alphas so panels, shells and dark mode stay coherent.
- **Mono scale variable** — `--mono-scale: 0.8` multiplied into code roles keeps inline IDs from reading a size larger.
- **Trigger-aware overlays** — read the popper's placement side (Floating UI / Radix data-side) to set the 4 px entry offset.

Effects it reaches for: a narrow, local slice of [[specular-metallic]]-style sheen and [[frosted-glass]] blur *on buttons only*. Never: [[frosted-glass]] as a surface treatment, [[glow-bloom]], [[mesh-gradient]], [[shimmer-sheen]] on text, [[refraction-displacement]] liquid glass, [[ai-orb]] as decoration.

## Starting points

- design.how Glaze docs — https://design.how/systems/glaze (foundations incl. `/foundations/anti-slop.md`, `/foundations/motion.md`, `/foundations/elevation.md`)
- Source: https://github.com/arla6ka/design.how/tree/main/systems/glaze — by Arlan Marat, MIT licensed; credit design.how when borrowing
- Install: `npx shadcn@latest add https://design.how/r/glaze/theme.json`

## Search queries

- `design.how glaze design system`
- `css glass button sheen inset highlight active scale`
- `ai chat ui prompt input send stop button`
- `floating ui placement side animation offset`
- `design system no shadows ring overlays`

## Related

[[frosted-glass]] (the surface-wide glass this deliberately confines),
[[calm-console]] (same ink-and-paper base, kind hues instead of glass),
[[warm-consumer]] (one glowing action instead of one glass action),
[[mono-infra]], [[skeuomorphism]] (where button gloss came from),
[[interaction-feel]] (press physics), [[hover-response]], [[control-language]],
[[conversation-layout]], [[ai-interaction]], [[status-signals]],
[[live-feedback]], [[loading-language]], [[popover-menu]], [[modal-dialog]].
