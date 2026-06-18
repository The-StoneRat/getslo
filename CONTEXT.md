# CONTEXT — getslo.cam

Marketing site for **Slo**, a slow-photography app: shoot → apply LUT → keep/discard → real prints mailed to your door.

Static HTML/CSS, no build step. Hosted on GitHub Pages, custom domain `getslo.cam`.

## Glossary

- **Slo** — the app. Stylized wordmark `Slo.` (period included).
- **Pack** — a fixed set of frames the user fills at their own pace; when full, prints are mailed. User-facing unit of a shoot.
- **Slot** — a single frame within a pack. NEVER call this a "roll" or "film roll" (banned terminology).
- **Prints** — physical photo prints mailed to the user's door. The payoff of the product.
- **LUT** — color look baked into the photo *at capture*. **One fixed LUT per pack**, set by the pack's film type. Users do NOT import, make, or swap LUTs. No "bring your own LUT", no creator marketplace.
- **No RAW** — Slo does not save RAW/DNG/ProRaw or expose a pro-export workflow. Do not claim it.
- **Coming soon (iOS)** — iOS app is pre-launch. Android is the shipping product.

## Platform status (as of 2026-06-18)

- **Android** — LIVE. Play Store: `art.stonerat.slo`. The only installable product today.
- **iOS** — COMING SOON. In active development (pre-MVP). Site shows a greyed "iOS — coming soon" pill that is also a `mailto:` notify link (no email-capture backend; GitHub Pages is no-build). No App Store link yet.

## Voice

- **Marketing copy** (this site): evocative / "Don Draper" allowed.
- Banned: "film roll", "roll". Use "slot" / "pack".
- App in-product copy is factual (not this site's concern).

## Design

- Dark brand: bg `#0a0a0a`, accent `#f2b705`, text `#fafafa`, font Roboto Flex.
- Single-column, centered, airy. Soft rounded cards. One accent color.
- Layout *pattern* inspired by single-product app landings (nav → hero+store CTA → video → stacked feature cards → FAQ → minimal footer). Design and copy are original to Slo.

## Page structure (locked 2026-06-18)

1. **Nav** — `Slo.` wordmark left; right: live Play badge + greyed "iOS — coming soon" `mailto:` pill.
2. **Hero** — headline *"Slow photos. Real prints, mailed to your door."* + one explanatory sub-line + store badges.
3. **Video block** — app demo placeholder (real asset supplied later).
4. **Feature 1 — camera feel** — shoot through a real film-LUT viewfinder; ground glass; tactile.
5. **Feature 2 — film tones baked in** — look applied at capture, no AI, grain preserved, nothing to edit.
6. **Feature 3 — fill a pack at your pace** — slot system, no rush, a handful of frames.
7. **Feature 4 — real prints, mailed** — the payoff + differentiator (no rival camera app prints+mails).
8. **FAQ** — 4–5 Q&A drafted from real app behavior; curated as a later task.
9. **Footer** — Privacy · Contact · made-by.

Four feature blocks (not 3): prints kept separate as the differentiator. Themes scaffolded from a peer app-landing's section set; ALL copy original to Slo. Cut themes that are false for Slo: RAW/digital-negatives, bring-your-own/creator LUTs.
