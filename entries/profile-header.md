---
name: profile-header
title: Profile / Entity Header
category: layout
aliases: [profile page, user profile, cover photo, profile header, entity page, account page, repo page, company page, channel page, bio header]
media: [css]
---

# Profile / Entity Header

**Coordinate:** vertical (a layered header band over a tabbed body) ·
grid + layered (the avatar overlap) · hero (the identity) ·
scannable · single-surface.

The who-is-this compound — a cover band, an avatar breaking its edge, an
identity block with stats and actions, then tabs into the entity's
content. Users, repos, companies, channels, playlists: any *entity with a
face and a body of work* wears this.

```
┌───────── cover ─────────┐
│      (image/color)      │
├───◉──────────────┬──────┤
│  ╱ ╲  Name ✓     │[Follow]
│ Avatar @handle   │ [...]│
│  bio line        │      │
│  12 posts · 84 followers│
├─ Posts │ About │ Media ─┤
```

## You know it when you see

- A wide cover with an avatar overlapping its bottom edge; name, handle, verification, bio
- A stats row (posts/followers/stars) and one primary action (Follow/Subscribe/Star)
- Tabs carrying the rest; the header condensing as you scroll
- The failures: covers crushing legibility under text, the avatar overlap misaligned across breakpoints, five equally-loud action buttons

## Dials

- **cover band** — image, [[gradients]]/[[mesh-gradient]], or brand color; aspect shallow (~3:1 to 4:1); user-supplied covers get a legibility scrim only where text overlaps ([[image-treatment]] discipline); the cover is *ground*, not content — [[visual-hierarchy]] keeps it behind the identity block
- **the avatar overlap** — the signature move: the [[chips-badges-avatars]] avatar (largest size in the product) straddles the cover's bottom edge with a surface-colored ring ([[border-stroke]] gap ring at scale); overlap ≈ 40-50% of avatar height; entity species may swap circle→squircle per [[shape-language]] semantics
- **identity block** — name + verification badge, handle/secondary line, bio at [[text-block-grammar]] measure, metadata row (location, link, joined) at label register; one primary action ([[control-language]] rank law: Follow *or* Edit profile depending on viewer — the owner/visitor state swap is part of the design), overflow into a ⋯ [[popover-menu]]
- **stats row** — 2-4 counts as tappable links into their tabs ([[animated-numbers]] on live changes; formatted 12.4K); stats are navigation wearing numbers
- **the tab handoff** — [[navigation-language]] tabs carry everything below (posts/about/media); the header owns identity, tabs own content — headers that keep absorbing sections become [[centered-stack]] pages that lost their way
- **scroll condensation** — on scroll the header collapses to a compact sticky bar (small avatar + name + primary action — [[app-shell]] topbar logic), often with the cover doing a [[parallax]]/fade exit; identity stays reachable without the full band re-scrolling

## Content contract

An entity with identity assets (avatar mandatory, cover optional-but-
designed-for), a describable self (bio), countable output, and a
followable/actionable relationship to the viewer. Both viewer states
(owner vs visitor) must be designed — the same header serves both with
swapped actions. Entities without bodies of work (a settings account
page) don't need the pageantry: that's an [[app-shell]] form page.

## Collapse behavior

Gracefully native: cover shallows, avatar and identity stack centered or
stay left per brand, stats row compresses (horizontal scroll before
wrapping), tabs go edge-to-edge with [[carousel-filmstrip]] overflow.
The condensation bar matters *more* on mobile — the primary action rides
it.

## Techniques

- **The overlap** — avatar absolutely positioned against the cover's
  bottom (or negative margin in flow), ring via `box-shadow: 0 0 0 4px
  var(--surface)`; a container query keeps the overlap ratio stable.
- **Condensation** — IntersectionObserver on a header sentinel toggles
  the compact bar; cover fade tied to scroll progress
  ([[scroll-choreography]] scrub register, whisper-level).
- **Cover handling** — `object-fit: cover` with a stated focal point;
  owner-side reposition affordance; fallback gradient generated from
  the avatar's palette (the [[chips-badges-avatars]] deterministic-color
  trick at band scale).
- **State swap** — one header component, `viewer` prop swapping the
  action cluster; never two divergent headers.

## Search queries

- `profile header avatar overlap cover css`
- `sticky condensed header scroll profile`
- `cover image focal point object-position`
- `profile stats abbreviated number format`

## Related

[[chips-badges-avatars]] (the avatar at maximum size),
[[navigation-language]] (the tab handoff), [[app-shell]] (condensation
bars), [[image-treatment]] (cover discipline), [[card]] (the compact
profile-card cousin), [[animated-numbers]] (live stats),
[[scroll-choreography]] (condensation scrub), [[mesh-gradient]]
(generated covers), [[timeline-feed]] + [[masonry]] (what the tabs
hold), [[visual-hierarchy]] (identity over cover).
