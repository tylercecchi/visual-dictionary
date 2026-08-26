---
name: chips-badges-avatars
title: Chips, Badges & Avatars
category: ui-foundations
aliases: [chip, badge, tag, pill, label, status indicator, avatar, initials, presence dot, avatar stack, notification badge, count badge, identity display]
media: [css]
---

# Chips, Badges & Avatars

The small-matter layer — the compact tokens that label, count, and
identify: status badges, filter chips, tags, avatars, presence dots.
Individually trivial, collectively the metadata voice of a product; their
discipline (or chaos) is visible in every list, table, and header.

## You know it when you see

- Status pills whose color instantly reads (green live, amber pending, red failed); tags labeling content; removable filter chips above results
- Avatars falling back gracefully from photo → initials → icon; a stack of overlapping avatars ending in "+4"
- Or the failures: six badge styles across one app, rainbow tags with no semantics, avatars that show a broken-image glyph, a "99999" notification count

## Dials

**The three species (keep them distinct)**
- **badge** — *display-only status or count*; not clickable, not dismissible; small, quiet, semantic
- **chip** — *interactive token*: filters, selections, input tokens (email recipients); pressable, often removable (×), focusable
- **tag** — *metadata label*: category/topic markers; sometimes navigational (click = filter by tag); flatter than chips
- Blurring the species (a "badge" that's secretly a button) breaks learned affordances — decide per instance, style per species

**Badges**
- **status semantics** — status colors come from [[color-roles]] semantic tokens only (success/warn/danger/info + neutral), tinted-background + strong-text recipe (solid fills shout — reserve for counts); with a dot or icon so color isn't the sole channel ([[visible-accessibility]])
- **count badges** — numeric overlays on icons/nav: top-right offset, min-width circle, cap displayed value ("99+"), disappear at zero (a "0" badge is noise); count *changes* may pulse once ([[animated-numbers]], [[motion-ceremony]] micro)
- **dot register** — the smallest badge is a bare dot (unread, attention); position and color carry everything

**Chips**
- **anatomy** — optional leading icon/avatar, label, optional trailing × (removal hit area ≥ the chip's half — dismissal is the point); selected state via fill/border shift ([[control-language]] state faces)
- **chip sets** — wrap in rows with consistent [[spacing-density]] gaps; active-filter sets sit above their results and clear individually + "clear all" ([[table-design]]'s filter feedback)
- **input chips** — tokens inside a field (recipients, tags-as-you-type): backspace deletes the last, arrow keys traverse, overflow wraps the field taller

**Avatars**
- **fallback chain** — image → initials (1-2 letters on a deterministic background color hashed from the name — same person, same color, forever) → generic icon; the chain is the design, broken-image glyphs are the failure
- **shape & sizes** — circle default (squircle/rounded-square for orgs/workspaces to distinguish species — [[shape-language]] semantics); 3-4 sizes on a scale (16 inline → 24 lists → 32-40 headers → 64+ profiles)
- **presence** — status dot at bottom-right, ringed with the background color for separation ([[border-stroke]] gap ring), semantic colors (green online, amber away, hollow offline); presence is *live* data — remove rather than show stale
- **stacks** — overlapping row (each ringed for separation), overlap ~30%, capped at 3-5 + "+N" overflow disc (clickable → [[popover-menu]] full list); order meaningfully (most relevant first), not randomly

**System coherence**
- **one instance per meaning** — a given status renders identically everywhere (the same "Active" badge in table, card, and detail header); this layer is where token discipline is most visible because the elements repeat most

## Techniques

- **Deterministic avatar color** — hash the name/id into a curated
  palette slice (not full HSL rotation — curate 8-12 [[color-roles]]-safe
  hues with contrast-checked text).
- **Presence ring** — `box-shadow: 0 0 0 2px var(--surface)` under the
  dot; survives any background.
- **Stack CSS** — negative `margin-inline-start` + the same ring; flex
  row-reverse so z-order stacks left-over-right naturally.
- **Chip a11y** — removable chips as buttons with `aria-label="Remove
  {label}"`; input-chip fields follow the ARIA combobox/listbox pattern.
- **Badge `aria`** — counts announced meaningfully (`aria-label="4 unread
  notifications"`), decorative dots hidden.

## Search queries

- `avatar fallback initials deterministic color`
- `avatar stack overlap css ring`
- `chip vs badge vs tag semantics`
- `status badge tinted background semantic colors`

## Related

[[color-roles]] (semantic status, the tint recipe), [[control-language]]
(chips are micro-controls), [[table-design]] + [[card]] +
[[timeline-feed]] (where these live), [[animated-numbers]] (count
changes), [[shape-language]] (pill/circle/squircle semantics),
[[border-stroke]] (rings), [[toast-notification]] (badge's louder
sibling), [[stickers-badges]] (the *physical* badge aesthetic — different
entry: that one's about die-cut looks, this one's about UI semantics),
[[visible-accessibility]] (never color-alone).
