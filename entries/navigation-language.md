---
name: navigation-language
title: Navigation Language
category: ui-foundations
aliases: [tabs, breadcrumbs, pagination, stepper, wizard, nav menu, menubar, segmented control, navigation patterns, back button, wayfinding]
media: [css]
---

# Navigation Language

The wayfinding system — tabs, breadcrumbs, pagination, steppers, menus —
answering the user's three standing questions: *where am I, where can I
go, how do I get back*. A product's navigation controls are one language;
mixing dialects is how users get lost.

## You know it when you see

- An active tab that's unmistakable; a breadcrumb trail that matches the actual hierarchy
- Pagination that tells you where you are in the set; a wizard that shows how much remains
- Or the failures: two different active-state styles in one app, breadcrumbs that lie about structure, infinite scroll where users needed to return to item 40

## Dials

**Tabs**
- **style register** — underline (editorial, lightest — active = accent underline + label weight), pill/segmented (contained, strongest), enclosed/folder (dense tool UIs, [[border-stroke]] heavy); one register per product
- **the sliding indicator** — the active underline/pill *travels* between tabs ([[motion-ceremony]] micro, FLIP technique) rather than blinking; the single most recognizable nav polish move
- **scope honesty** — tabs swap *views of one thing* (stay on page, preserve state); route-level navigation dressed as tabs must still behave like navigation (URL changes, back works)
- **overflow** — tabs don't wrap: scroll with fade hints ([[carousel-filmstrip]]'s peek) or collapse the tail into a "More" [[popover-menu]]

**Breadcrumbs**
- **truth law** — breadcrumbs mirror the *structural* hierarchy, not the visit history; current page is last, unlinked, and visually quiet
- **truncation** — deep paths collapse the middle (`Home / … / Parent / Current`) with the ellipsis as a [[popover-menu]] of the hidden levels
- **separator & density** — `/` or chevron at muted [[color-roles]]; breadcrumbs are metadata, sized/weighted below content ([[text-block-grammar]] label register)

**Pagination vs. the alternatives**
- **the choice rule** — *pagination* when position and return matter (tables, search results, anything referenced later); *load-more* when browsing continues but footer access matters; *infinite scroll* only for [[timeline-feed]]-contract content (orderless grazing); choosing by engagement metrics instead of content contract is the classic abuse
- **pagination anatomy** — current page emphasized, windowed page list with first/last reachable, prev/next always present; state in the URL (shareable, back-button-honest)

**Steppers & wizards**
- **linearity contract** — a stepper promises a *known, finite sequence*; visited steps are revisitable, future steps visibly locked or free per the flow's rules; showing 5 steps then inserting a surprise 6th breaks the promise ([[loading-language]] honesty law, applied to progress)
- **step anatomy** — number/check + label; current emphasized, completed checked, future muted; connector line as progress bar
- **placement** — horizontal top (short flows, wide screens) vs vertical rail (many steps, doubles as summary); collapses to "Step 3 of 5" text on mobile

**System coherence**
- **one active-state language** — however "you are here" is drawn (accent underline, filled pill, left rail bar), it's drawn the *same way* in tabs, sidebars, and menus product-wide; active-state consistency is the wayfinding equivalent of the [[light-on-flat]] one-light law
- **back behavior** — every drill-in has an explicit way back (breadcrumb, back affordance, or the browser); [[page-transitions]] direction grammar (forward slides left, back slides right) reinforces the mental map

## Techniques

- **ARIA patterns** — tabs (`role="tablist"`, arrow-key traversal),
  breadcrumb `<nav aria-label>`, `aria-current="page"/"step"` as the
  styling hook for active states ([[visible-accessibility]] — style from
  semantics, and the semantics come free).
- **Sliding indicator** — a single absolutely-positioned indicator
  translated to the active item's measured position, or view-transition
  APIs; not per-tab borders toggling.
- **URL as state** — tabs-as-routes, `?page=` params, step in the path;
  navigation that survives refresh and sharing is navigation that's real.
- **Substrate** — shadcn/Radix Tabs, Menubar, NavigationMenu handle the
  keyboard/ARIA layer; restyle per the register dial.

## Search queries

- `tab underline slide animation flip`
- `aria-current page step styling`
- `pagination vs infinite scroll content type`
- `stepper wizard pattern accessibility`

## Related

[[app-shell]] (nav's home structures), [[page-transitions]] (movement
grammar between destinations), [[popover-menu]] (menus, overflow),
[[disclosure]] (nav trees), [[visual-hierarchy]] (active emphasis),
[[color-roles]] + [[border-stroke]] (the active-state ink),
[[carousel-filmstrip]] (tab overflow), [[timeline-feed]] (infinite
scroll's rightful home), [[control-language]] (segmented controls),
[[text-block-grammar]] (label registers), [[command-palette]] (the
keyboard bypass to all of it).
