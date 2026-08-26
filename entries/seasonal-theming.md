---
name: seasonal-theming
title: Seasonal / Event Theming
category: ui-foundations
aliases: [holiday theme, christmas mode, halloween theme, seasonal skin, event skin, easter egg theme, anniversary theme, limited time look]
media: [css, svg, canvas]
---

# Seasonal / Event Theming

The product wearing a costume without changing its body — snow on the logo,
a pumpkin accent, an anniversary gold wash. Temporary identity layers with
rules for what may change and what must not.

## You know it when you see

- A logo with a santa hat / falling [[weather-effects]] snow on the header
- Accent colors and illustrations shifted for an event (lunar new year reds, pride gradients, halloween oranges)
- Limited-time loading animations, empty states, or confetti [[particles]]
- The failures: theming that breaks usability (red/green semantic collisions at christmas), or lingering décor weeks after the event

## Dials

- **depth of costume** — décor layer only (particles, logo hat, one accent) → palette shift → full skin (illustrations, sounds, copy); deeper = more delight and more risk; most products should stop at layer one or two
- **what's frozen** — semantic [[color-roles]] (error must stay error-colored), legibility contrast, layout, and interaction physics never change; write the frozen list before the fun list
- **intensity & interruption budget** — ambient decoration (falling snow at low density, [[visual-hierarchy]]-respecting) vs event moments (a one-time confetti [[motion-ceremony]] burst); decoration must be dismissible/reduced-motion-aware
- **cultural scope** — which events, for which audiences, defaulting how; regional/audience targeting and an opt-out beat global imposition
- **calendar discipline** — activation and *removal* dates shipped with the theme; décor after the event reads as neglect

## Techniques

- **Token-swap theming** — the same machinery as dark mode: a
  `[data-theme="holiday"]` scope overriding accent/illustration tokens;
  if [[color-roles]] tokens are clean, a seasonal skin is a small file.
- **Décor layer** — a dedicated overlay component (canvas [[particles]]
  snow/confetti/leaves, SVG garlands positioned at chrome edges) mounted by
  a feature flag + date check; pointer-events none, `prefers-reduced-motion`
  respected, density capped.
- **Asset swaps** — logo variants, [[illustration-style]] seasonal editions
  of the same characters (drawn under the same style guide), themed
  [[loading-language]] states — the highest-delight-per-risk slot.
- **Scheduling** — server-driven flags (not client clocks) with start *and
  end*; ship removal with launch.

## Starting points

- Google Doodles — the reference practice for costume-on-stable-identity
- Big-product seasonal retrospectives (game UIs do this best: searchable
  "event theming" postmortems)
- No library; it's flags + tokens + one décor component

## Search queries

- `seasonal theme css custom properties toggle`
- `canvas snow overlay lightweight prefers-reduced-motion`
- `feature flag scheduled theme rollout`
- `google doodle design process`

## Related

[[color-roles]] (the token machinery and the frozen semantics),
[[weather-effects]] + [[particles]] (the décor staples),
[[illustration-style]] (seasonal editions), [[loading-language]] (the
delight slot), [[motion-ceremony]] (event burst budget), [[time-of-day]]
(the daily cousin of the yearly cycle), [[period-looks]] (costume theory,
permanent version).
