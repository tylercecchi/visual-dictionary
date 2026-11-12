---
name: feed-pagination
title: Feed Pagination
summary: "infinite scroll vs pages vs load-more; caught-up endings, new-items pill"
category: behavior
aliases: [infinite scroll, infinite scrolling, endless scroll, endless feed, doomscroll, doomscrolling, pagination, paginated, page numbers, load more, load more button, show more, all caught up, caught up, new posts pill, new items pill, scroll restoration, scroll position, virtual list, virtualized list, virtualization, windowing, lazy loading, story reel, auto advance, cursor pagination]
media: [css]
---

# Feed Pagination

How a long or endless list delivers its next batch — and how it lets the
reader stop, come back, and find their place.

## You know it when you see

- Scrolling that never ends: more items appear as you near the bottom
- A "Load more" button, or numbered pages with Prev / Next
- "You're all caught up" — a deliberate end to the stream
- A floating "↑ 12 new posts" pill instead of the list jumping under you
- Hitting Back and landing exactly where you were (or, the failure, back at the top)
- The failures: a footer you can never reach, a list that gets slower the longer you scroll, auto-advancing reels that move before you finish reading

## What it does

It splits an unbounded collection into fetched chunks and decides who
triggers the next one: the scroll position (infinite), an explicit tap
(load-more), or navigation (pages). Around that it guards the reader's
place — preserving scroll on return, holding new arrivals behind a pill,
virtualizing off-screen rows so length costs nothing — and decides
whether the stream has an honest end.

## When to use

- **Infinite**: low-intent browsing of homogeneous items (social, photos, discovery) where any item is as good as the next
- **Load-more**: browsing with a footer that matters, or mobile lists where you want a pause point
- **Pages**: goal-directed search, comparison, and anything users cite or return to ("it was on page 3")
- **Bounded / caught-up**: followed-only feeds and inboxes where "done" is a real state worth reaching
- **Auto-advancing reels**: short, ephemeral, full-screen items (visual side in [[stories-format]])

## When not to use

- Search results and catalogs users compare across — use numbered pages or [[faceted-browse]], not infinite scroll
- Pages whose footer holds needed links (help, legal, contact) — use load-more, not infinite
- Ordered work queues (tickets, reviews) — use a [[table-design]] with pagination and counts
- Small collections (< ~50 items) — render everything; no pagination at all
- Text-heavy items users must read fully — don't auto-advance; use a manual [[carousel-filmstrip]]

## Dials

- **trigger distance** — prefetch when the sentinel is ~1-2 viewports from the bottom (IntersectionObserver `rootMargin: "1500px"`); too close shows the spinner, too far wastes data
- **batch size** — ~20-30 items per fetch for cards, 50-100 for dense rows; cursor-based (`after=id`), never offset-based, so inserts don't duplicate or skip items
- **end condition** — none (infinite), soft cap (switch to load-more after ~3 auto-loads so the footer is reachable), or bounded ("You're all caught up" + optional "older posts" link)
- **new-items policy** — hold arrivals behind a pill ("↑ 12 new") when the reader is scrolled down; insert silently only when at the very top; never shift content under the reader
- **scroll restoration** — on Back, restore both the loaded set and the offset; cache the list state ~5-10 min; keep the URL in sync (`?page=3` or a cursor) so links and refresh land in place
- **virtualization threshold** — window the list beyond ~200-500 DOM rows; overscan ~3-5 items; measure variable heights rather than guessing
- **loading/failure state** — skeleton rows for the pending batch ([[loading-language]]), an inline "Couldn't load — Retry" row on failure (never a silent stall)
- **reel timing** — ~5-7 s per image item, video length for video; hold on press, tap-left/right to step, progress segments always visible; pause when the tab is hidden

## Techniques

- **Native first** — `<a>` pagination with query params is the most
  robust and SEO-friendly; `content-visibility: auto` +
  `contain-intrinsic-size` makes long rendered lists cheap without a
  library; browser `history.scrollRestoration` handles simple cases.
- **IntersectionObserver sentinel** — a sentinel element at the list end
  triggers fetch; disconnect at the end condition. The core of every
  infinite/load-more implementation; `aria-busy` while loading and a
  focusable load-more for keyboard users.
- **Data-fetching caches** — TanStack Query `useInfiniteQuery` / SWR
  infinite keep pages cached for back-navigation restore.
- **Virtualization** — TanStack Virtual, react-window, Virtuoso (variable
  heights, reverse/chat lists); moderate dependency — add only past the
  threshold dial.
- **Reels** — a timer per item driven by `requestAnimationFrame` with
  segment progress bars; Page Visibility API for pause.

## Starting points

- TanStack Virtual and TanStack Query infinite-query docs
- web.dev on `content-visibility`
- Further reading: https://interfacelineage.com/endless-immersive-scroll,
  https://interfacelineage.com/bounded-card-stream,
  https://interfacelineage.com/ephemeral-story-reel

## Search queries

- `intersectionobserver infinite scroll sentinel rootMargin`
- `tanstack virtual dynamic height list`
- `scroll restoration back button infinite list`
- `cursor based pagination vs offset`
- `new posts pill scroll position preserve`

## Related

[[timeline-feed]] (the list being paged; live-edge rules),
[[stories-format]] (reel visuals), [[loading-language]] (skeleton rows,
failure states), [[masonry]] (infinite browse grids), [[faceted-browse]]
(paged search), [[table-design]] (paged data), [[conversation-layout]]
(reverse/upward loading), [[overview-navigation]] (scrubbers for jumping
within long lists), [[status-signals]] (new-item counts).
