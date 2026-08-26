---
name: product-detail
title: Product Detail
category: layout
aliases: [pdp, product page, product detail page, buy box, product gallery, add to cart layout, ecommerce detail, variant selector, listing detail]
media: [css]
---

# Product Detail

**Coordinate:** horizontal at the top (gallery + buy box) · grid · tiled ·
hero (the purchase decision) · linear-then-scannable · single-surface.

The decision compound — a media gallery answering *what is it*, a sticky
buy box answering *how do I get it*, and a long tail of evidence
(details, reviews) below. E-commerce's home layout, and the template for
any acquire-this-thing page (courses, bookings, listings).

```
┌ ┌───────┐ ┬ Product name    ┐
│ │ hero  │ │ ★★★★☆ (214)     │
│ │ image │ │ $49  [size ▾]   │
│ └───────┘ │ [ Add to cart ] │← sticky
│ ▫ ▫ ▫ ▫   │ ✓ free returns  │
├───────────┴─────────────────┤
│ Details · Reviews · Q&A     │
```

## You know it when you see

- Gallery left, purchase panel right; the panel staying put while the page scrolls
- Variant swatches that update price and imagery; a review score up top linking down to evidence
- The failures: an add-to-cart that scrolls away, variants that silently sell out, a gallery of one sad photo, price ambiguity at the moment of commitment

## Dials

- **the two-column split** — gallery ~55-60% / buy box ~40-45% ([[split-screen]] asymmetric logic); the buy box goes `position: sticky` so the commit action never leaves reach — the layout's defining behavior
- **gallery grammar** — hero image + thumbnail rail ([[carousel-filmstrip]] paired register), zoom on hover/tap ([[hover-response]] zoom-within or a [[modal-dialog]] lightbox), media order telling a story (context shot, detail, scale, in-use); video and 3D/AR slots as first-class thumbnails ([[scene-staging]] for the rendered register)
- **buy-box anatomy (the rank ladder)** — name, social proof line (stars + count, anchor-linking to reviews), price ([[typographic-voice]] display weight; strikethrough anchoring honest; unit/period explicit), variant selectors, quantity, the primary CTA ([[control-language]] hero rank — the page's one primary), then reassurance ([[chips-badges-avatars]] badges: stock, shipping, returns)
- **variant selection** — swatches for visual attributes (color as actual swatch images), [[control-language]] segmented/select for sizes; selection updates price, gallery, and availability *instantly*; unavailable combinations shown-but-marked (strikethrough swatch), never hidden and never a dead add-to-cart
- **the evidence tail** — below the fold: description, spec [[table-design]], reviews ([[timeline-feed]] with rating [[chart-voice]] distribution), Q&A ([[disclosure]]); a [[navigation-language]] tab/anchor row bridges buy box claims to their proof
- **commitment feedback** — add-to-cart resolves visibly: button [[loading-language]] arc → mini-cart [[sheet-drawer]] or [[toast-notification]] with the item and a cart route; silence after the click is the cardinal failure

## Content contract

One acquirable thing with rich media (3+ images minimum — the gallery is
the product's body), a determinate price, and optional variants with
live availability. Weak media or ambiguous pricing breaks the layout's
promise — it *stages a decision*, and decisions need evidence. Multi-item
comparison belongs upstream in [[faceted-browse]] / [[comparison-columns]].

## Collapse behavior

Single column: gallery first as a swipeable [[carousel-filmstrip]] (dots,
edge peek), buy-box content follows in rank order — and the CTA docks as
a **sticky bottom bar** (price + Add to cart) once the inline one scrolls
away; the evidence tail becomes [[disclosure]] accordions. The sticky-CTA
handoff is the mobile move that preserves the layout's soul.

## Techniques

- **Sticky buy box** — `position: sticky; top: var(--header-offset)`
  within the grid column; watch column height (the gallery side must be
  the taller or sticky has no room to work).
- **Variant state** — a selection object driving price/gallery/
  availability lookups; URL-serialized so variants are shareable
  ([[faceted-browse]] URL-truth law).
- **Gallery** — scroll-snap thumbnail rail + stage; zoom via
  transform-origin tracking ([[hover-response]]); lightbox reuses
  [[modal-dialog]] media register.
- **Mobile CTA dock** — IntersectionObserver on the inline CTA toggles
  the fixed bottom bar; safe-area padding respected.

## Search queries

- `pdp layout sticky buy box gallery`
- `variant selector unavailable state design`
- `mobile sticky add to cart bar pattern`
- `product gallery zoom lightbox implementation`

## Related

[[split-screen]] (the top-fold geometry), [[carousel-filmstrip]]
(galleries), [[faceted-browse]] (the way in), [[comparison-columns]]
(the tier decision upstream), [[control-language]] +
[[chips-badges-avatars]] (buy-box parts), [[table-design]] (specs),
[[sheet-drawer]] + [[toast-notification]] (add-to-cart feedback),
[[scene-staging]] (3D product media), [[animated-numbers]] (price
updates), [[focus-page]] (checkout, the next step).
