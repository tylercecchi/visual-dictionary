---
name: calendar-timegrid
title: Calendar / Time Grid
category: layout
aliases: [calendar, month view, week view, day view, agenda, schedule, gantt, timeline chart, time grid, event calendar, booking calendar]
media: [css]
---

# Calendar / Time Grid

**Coordinate:** 2d · *semantic* (position = time) · tiled/layered ·
egalitarian events · scannable · single-or-framed.

Time given geometry — the layout family where an element's position is a
*date or hour* and its size is a *duration*. Four registers share the
contract: month grid, week/day columns, agenda list, gantt rows.

```
Mon Tue Wed Thu Fri     9 ┌────┐
┌──┬──┬──┬──┬──┐       10 │mtg │┌───┐
│1 │2 │3 │4 │5 │       11 └────┘│rev│
│▪ │  │▪▪│  │▪ │       12       └───┘
└──┴──┴──┴──┴──┘        (month)   (week)
```

## You know it when you see

- A month of day-cells with event chips; a week of hour-columns with duration-sized blocks
- "Now" marked by a line crossing today's column
- The failures: month cells drowning in unranked chips, overlapping events rendered illegibly, a gantt where bars can't be traced to their row

## Dials

- **register choice** — *month* (density overview: events as chips, cells cap at 2-3 + "+N more" → day [[popover-menu]]), *week/day columns* (y = time-of-day, events as positioned blocks sized by duration — the working register), *agenda* (a [[timeline-feed]] with date headers — the mobile-truthful register), *gantt* (rows = items, x = time span — project register); products usually need two with shared state
- **event anatomy** — color-coded by calendar/category ([[color-roles]]: a curated categorical set, tinted-bg + strong-text like [[chips-badges-avatars]]), title truncating before hiding time, compact enough that *pattern* reads before detail
- **overlap resolution** (week register) — concurrent events share the column width: side-by-side split, cascading offsets, or cluster + expand; pick one algorithm and keep start-times legible ([[visual-composition]] at scheduling scale)
- **temporal wayfinding** — the *now* indicator (a line at current time, today's column tinted), off-hours/weekends dimmed ([[color-roles]] surface shift), sticky date/day headers both axes ([[table-design]] header discipline)
- **manipulation** — drag to move (snap to grid increments — 15/30min), resize ends to change duration, drag-across-empty to create ([[interaction-feel]] detents as time snapping); every gesture needs a form-based path ([[visible-accessibility]])
- **density honesty** — the month register *summarizes*; fighting to show everything in cells produces the drowned-cell failure — count badges and drill-down beat micro-text

## Content contract

Items with **real temporal coordinates** — start (and usually duration).
Position must be trustworthy: an event drawn at 2pm *is* at 2pm (the
semantic-placement law). All-day/undated items get their own band or the
agenda register, not fake times. Gantt additionally needs dependencies or
at least spans worth comparing.

## Collapse behavior

Month → agenda list (the honest phone register; a mini-month picker may
survive as navigation). Week → single-day columns swiped
([[carousel-filmstrip]] snap). Gantt → per-item date ranges in a list.
The *data and navigation* survive; the grid geometry is a wide-screen
privilege.

## Techniques

- **Week grid** — CSS grid with hour rows; events absolutely positioned
  by `(start − dayStart)` and sized by duration within their day column;
  overlap algorithm assigns column-within-column indices.
- **Month grid** — 7-col grid, cells as capped stacks with overflow
  counts; adjacent-month days muted.
- **Libraries** — FullCalendar-class / Schedule-X-class (verify
  currency) own the overlap/drag/recurrence machinery — the stack rule's
  moderate tier; hand-build only simple read-only registers.
- **Time math** — timezone/DST handled in a date library, never by hand;
  recurring events expand server-side or via rrule tooling.

## Search queries

- `week view overlapping events algorithm`
- `fullcalendar alternatives react`
- `css grid calendar month layout`
- `drag to create event time snapping`

## Related

[[timeline-feed]] (agenda register; time as a list), [[table-design]]
(header/density discipline), [[spatial-canvas]] (free semantic placement;
this is semantic placement *constrained to axes*), [[dashboard-tiles]]
(mini-calendars in tiles), [[chips-badges-avatars]] (event chips),
[[interaction-feel]] (snap-drag), [[carousel-filmstrip]] (day swiping),
[[color-roles]] (categorical calendars), [[animated-numbers]] (countdown
companions).
