# HANDOFF — getslo.cam build-out (Slo marketing site)

Plan finalized 2026-06-18. Execute this in-repo. Read `CONTEXT.md` first — it is the source of truth for voice, banned terms, platform status, and locked page structure.

## What this is

Expand the existing single-screen `index.html` into a full single-product app-landing page. Keep the stack: **static HTML/CSS, no build, GitHub Pages, domain `getslo.cam`.** Extend `styles.css` and `index.html` in place. Keep brand: bg `#0a0a0a`, accent `#f2b705`, text `#fafafa`, Roboto Flex.

## HARD RULE — copy is original

The section *structure* was scaffolded from peer app-landing pages. **Do NOT copy, paraphrase, or "swap words into" any other site's copy.** All text below is original Slo copy — refine for tone, but write our own words. Never re-fetch or transliterate another app's marketing page.

## Voice

Marketing voice — evocative is allowed. Banned words: **"film roll", "roll"** → use **"slot" / "pack"**. Don't claim features Slo lacks (see "Do not claim" below).

## Page structure (build top→bottom)

### 1. Nav
- Left: `Slo.` wordmark (accent).
- Right: live Google Play badge (`assets/google-play-badge.png`, link `https://play.google.com/store/apps/details?id=art.stonerat.slo`) + a greyed **"iOS — coming soon"** pill that is a `mailto:` link (notify-me). Use existing contact address.

### 2. Hero
- H1: **Slow photos. Real prints, mailed to your door.**
- Sub: *Slo turns your phone into a film camera. Shoot a pack at your own pace — then we print every frame and mail it to you.*
- Store badges repeated under sub (Play live + iOS-soon pill).

### 3. Video block
- Placeholder media card (16:9 or phone-frame), "demo coming" poster. Real asset supplied later — leave a clearly-marked swap point.

### 4. Feature — A camera that feels like a camera
*Ground-glass viewfinder, a real shutter. Slo is built to slow you down: frame it, feel it, take the shot.*

### 5. Feature — Film tones, baked in at the shutter
*Every pack carries its own film look, applied the moment you press the shutter — not faked afterward. No sliders, no AI cleanup, nothing to edit. The grain stays.*

### 6. Feature — Fill a pack at your own pace
*A pack holds a handful of slots. Shoot them across a night, a trip, a season. No timer, no rush — when it's full, it's ready.*

### 7. Feature — Then we mail you the prints
*Finish a pack and we print every frame on real paper and post it to your door. Your photos leave the screen and land in your hands.* (This is the differentiator — give it the most visual weight.)

### 8. FAQ (draft from behavior — curate later, MVP now)
- **Can I edit the photos?** No. Each pack's film look is set up front and baked in at the shutter — there's nothing to edit.
- **Can I use my own filters or LUTs?** No. Every pack has one fixed film look. Pick the pack, get the look.
- **How many photos are in a pack?** _TODO: confirm exact slot count — do not invent._
- **What does a pack cost, and is shipping included?** _TODO: confirm pricing/shipping (payments via Razorpay, currently deferred) — do not invent prices._
- **Where do you ship prints?** _TODO: confirm regions — do not invent._
- **When is the iOS app coming?** It's in active development now. Tap "iOS — coming soon" to get notified.

### 9. Footer
- Keep existing: Privacy · Contact (mailto). Add made-by line if desired. Privacy page (`privacy.html`) unchanged.

## Do not claim (false for Slo)
- ❌ RAW / DNG / ProRaw / pro-export workflow.
- ❌ Bring-your-own / importable / creator-made LUTs or a styles marketplace.
- ❌ A live iOS App Store listing (it's "coming soon").
- ❌ Any price / frame count / shipping region until the TODOs above are confirmed.

## Definition of done (MVP)
- Single responsive `index.html`, mobile-first, renders well 375px → 1440px.
- All 9 sections present with the original copy above.
- Play badge links live; iOS pill is greyed + `mailto:`.
- No external JS deps; CSS in `styles.css`. No build step.
- Lighthouse: no broken links, alt text on images, semantic headings.
- Video + real screenshots are explicit swap-point placeholders (next task).
