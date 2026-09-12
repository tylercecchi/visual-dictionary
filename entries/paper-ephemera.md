---
name: paper-ephemera
title: Paper Ephemera
summary: "tickets, passes, receipts, stamps; perforations and barcodes as furniture"
category: wardrobe
aliases: [ticket, ticket stub, boarding pass, event ticket ui, receipt, thermal receipt, postage stamp, stamp edge, luggage tag, hang tag, punch card, coupon, tear-off, perforated edge, perforation, wallet pass, paper objects, ephemera, rubber stamp, barcode furniture]
media: [css, svg]
---

# Paper Ephemera

UI dressed as the small printed objects of transit and commerce — tickets,
boarding passes, receipts, stamps, tags, coupons. The object's *furniture*
(perforations, barcodes, serials, rubber-stamp overprints) carries the
identity; the content just rides on it.

## You know it when you see

- A card with a dashed tear line and half-circle notches bitten out of
  both edges — the stub you're meant to rip off
- A receipt: narrow, monospaced, dotted rules, `*** THANK YOU ***`, a
  sawtooth bottom edge, a barcode nobody scans
- A stamp's scalloped (dentelle) edge, a luggage tag's reinforced hole, a
  coupon's `CUT HERE` scissors glyph
- Wallet-pass registers: the Apple Wallet boarding pass as a UI object
  with a header strip, fields, and a QR
- The failure: furniture without function — a barcode that encodes
  nothing on a screen where nothing needs scanning reads as a costume,
  not an object

## Dials

- **object type** — ticket / boarding pass / receipt / stamp / tag /
  punch card / coupon / wallet pass; each brings its own furniture set
  and paper stock
- **perforation & tear** — clean dashed cut line, notched tear (semicircle
  bites), or an actually torn edge (irregular mask); how much the tear is
  *interactive* (rip-to-reveal, [[page-transitions]] tear-in)
- **print furniture density** — barcode / QR, serial number, seat/row/gate
  fields, date stamps, rubber-stamp overprints (`PAID`, `ADMIT ONE`,
  `VOID`) — real data or clearly decorative, never fake-precise
- **paper claim** — flat vector object vs [[material-texture]] paper
  (thermal gloss, kraft tag, stamp gum) with [[weathering-patina]] wear
- **physicality** — tilt/lift on hover ([[hover-response]]), slot-in /
  swipe interactions ([[interaction-feel]]), stacking in a wallet
  ([[morphing]] pass-to-detail)
- **type** — monospace for receipts and serials ([[terminal-aesthetic]]'s
  data voice), condensed caps for tickets, tiny legal text as texture;
  ticket numerals in `tabular-nums`

## Techniques

- **Notched tear line** — `mask-image: radial-gradient(circle at 0 50%,
  transparent 8px, #000 8.5px), radial-gradient(circle at 100% 50%, …)`
  on the card, with a `border-top: 2px dashed` on the stub; or two
  absolutely positioned circles matching the page background.
- **Perforated / dentelle edges** — a repeating `radial-gradient` mask
  along each edge (`mask-size: 12px 12px; mask-repeat: repeat-x`) scallops
  a stamp; a `clip-path: polygon(...)` sawtooth ends a receipt.
- **Barcodes and QR** — SVG from a generator (JsBarcode, `qrcode`) so the
  data is real and crisp; treat as an image with fixed aspect; QR needs
  the quiet zone.
- **Rubber stamp** — SVG text in a rounded rectangle, rotated 8-15°,
  `mix-blend-mode: multiply`, a grain mask ([[film-grain]]) with random
  dropouts; ink color slightly off-red/blue.
- **Receipt register** — narrow max-width, mono, `border-bottom: 1px
  dotted` rules, right-aligned prices, a totals block; thermal look via a
  faint vertical banding gradient.
- **Wallet pass** — follow the PassKit anatomy (header strip, primary /
  secondary / auxiliary fields, barcode zone); the platform has already
  set the object's expectations.

## Starting points

- Apple Wallet / PassKit design guidance — the canonical pass anatomy
- JsBarcode, `qrcode` (npm) — real codes as SVG
- Recent showcases: boarding-pass card-reader intros, 3D pass scanners,
  receipt collages (recent.design, see LIBRARIES.md) — calibrate the
  object's *furniture* against them
- Real tickets/receipts scanned at 600 dpi — the best reference is the
  drawer

## Search queries

- `css ticket notch mask-image radial-gradient`
- `css perforated edge stamp scalloped border`
- `jsbarcode svg react` / `qrcode npm svg`
- `receipt ui component monospace dotted`
- `passkit pass layout fields barcode`

## Related

[[stickers-badges]] (die-cut siblings), [[material-texture]] +
[[weathering-patina]] (paper stock and wear), [[print-artifacts]]
(misregistration on the overprint), [[terminal-aesthetic]] (receipt
mono), [[card]] (the surface it is drawn on), [[hover-response]] +
[[interaction-feel]] (tilt, swipe, slot), [[page-transitions]]
(tear-to-enter), [[film-stock]] (Polaroid frames — the photo cousin),
[[mid-century-modern]] (stamp design's golden era),
[[outdoor-expedition]] (field-notes and patch registers).
