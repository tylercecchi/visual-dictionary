---
name: disclosure
title: Disclosure
category: layout
aliases: [accordion, expand collapse, collapsible, details summary, tree view, show more, expandable section, faq accordion, toggle section, progressive disclosure]
media: [css]
---

# Disclosure

**Surface contract:** inline · non-blocking · persistent · tier 0 — with
the axis no other surface has: **revealed/concealed state**.

Content hidden *in place* behind its own header — accordions, expandable
sections, tree views, show-more truncation. Where sheets and popovers
reveal content elsewhere, disclosure reveals it here, pushing the layout
apart. Progressive disclosure as a surface.

```
▸ Section one
▾ Section two
│  revealed content
│  pushes the layout
▸ Section three
```

## You know it when you see

- FAQ accordions; settings sections that expand; "Show 12 more" truncation
- Tree views: nested disclosure (file explorers, nav hierarchies)
- Chevrons rotating as sections open, content sliding into existence
- The failures: essential content buried two disclosures deep, accordions used to hide what everyone needs (support-page pathology), janky height animations

## Dials

**State model**
- **exclusivity** — independent panels (any combination open — the honest default) vs exclusive accordion (opening one closes others — use only when panels are *alternatives* or space is scarce; auto-closing what a user opened is a small betrayal); initial state (all closed, first open, or remembered)
- **hide-or-summarize** — concealed state shows just the header (accordion) vs a preview (truncated text + "show more", collapsed tree showing counts); previews earn clicks better than blind headers
- **deep-link honesty** — disclosed content must be findable: in-page search (`hidden="until-found"`), URL anchors that auto-open their section, and open-state surviving navigation where it matters

**Affordance grammar**
- **indicator convention** — chevron (rotating 90° or 180° on open — pick one convention product-wide), +/− (denser, technical), or triangle (`▸/▾`, the [[terminal-aesthetic]]/tree register); indicator placement leading (tree/nav convention) vs trailing (FAQ/settings convention) — one choice per context
- **header as target** — the entire header row is the click target ([[card]]'s whole-surface law), styled as interactive (hover state, [[visible-accessibility]] focus ring); headers are buttons semantically, never bare headings
- **state legibility** — open sections visibly differ beyond the indicator: header weight/tint shift, revealed region on a subtly different surface ([[panel-well]] flush register), or a connecting [[border-stroke]] rail (the tree's indent guides)

**Reveal behavior**
- **height animation** — the family's classic pain: animate `grid-template-rows: 0fr → 1fr` (the modern clean trick) or measured max-height; 200-300ms ease-out, *no bounce* ([[motion-ceremony]]: disclosure is utility, not ceremony); content fades in slightly after the height starts
- **push honesty** — revealing pushes subsequent content down; anticipate scroll: opening a tall section scrolls its *header* to stay in view, never dumps the user mid-content; closing returns the scroll debt
- **nesting & indent** (trees) — indent per level on a token step ([[spacing-density]]), guide rails optional, depth budget ~4 visible levels before a different navigation model ([[app-shell]] pane or breadcrumb drill-in) serves better

## Content contract

Secondary content whose *headers can carry the scanning* — FAQs, optional
detail, dense reference, hierarchies. The header must summarize honestly
(a vague header + hidden content = invisible content). Content everyone
needs doesn't get disclosed; content nobody needs gets deleted, not
hidden. Truncation variants need the cut placed mid-thought, not
mid-sentence.

## Collapse behavior

Disclosure *thrives* on mobile — it's a space-compression device, so
narrow viewports use it more: wide-screen always-visible sections
(tabs, side panels) legitimately *become* accordions on phones (the
reverse of most surfaces' collapse). Tree indents tighten; deep trees
switch to drill-in navigation ([[page-transitions]] per level).

## Techniques

- **`<details>/<summary>`** — native state, semantics, and
  `hidden="until-found"` searchability; style the marker away and add
  the chevron; the `name` attribute gives native exclusive accordions.
  Default choice; custom only when animation demands it.
- **Grid-rows animation** — wrapper `display: grid;
  grid-template-rows: 0fr; transition` → `1fr`, inner `min-height: 0;
  overflow: hidden` — clean height animation without measuring.
- **ARIA pattern** — custom versions: header `<button
  aria-expanded aria-controls>`, region labeled by its header; arrow-key
  patterns for trees (`role="tree"` — heavyweight, use a maintained
  component).
- **Scroll stewardship** — on open, `scrollIntoView({block:
  "nearest"})` the header if displaced; on exclusive-close, compensate
  scroll position.

## Search queries

- `details summary accordion name exclusive`
- `grid-template-rows 0fr 1fr height animation`
- `hidden until-found in page search`
- `aria accordion pattern button expanded`
- `tree view aria keyboard navigation`

## Related

[[sheet-drawer]] + [[popover-menu]] (reveal *elsewhere*; disclosure
reveals in place), [[panel-well]] (the revealed region's surface),
[[card]] (whole-target law), [[motion-ceremony]] (utility register),
[[spacing-density]] (indent steps), [[text-block-grammar]] (header
honesty), [[app-shell]] (nav trees), [[loading-language]] (lazy-loading
revealed content), [[visible-accessibility]] (button semantics,
until-found), [[hover-response]] (header hover states).
