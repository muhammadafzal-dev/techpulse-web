# AdSense Integration — Status & Phase 2 Plan

## Current state (Phase 1 — Verification)

Shipped. Loader + verification + ads.txt are all env-gated and safe to run before approval.

| Piece | Where | Notes |
|---|---|---|
| Loader script | `src/app/layout.tsx` via `<Script strategy="afterInteractive">` | Only renders when `NEXT_PUBLIC_ADSENSE_CLIENT_ID` is set |
| Verification meta | `src/app/layout.tsx` via `metadata.other["google-adsense-account"]` | Same env gate |
| `ads.txt` | `src/app/ads.txt/route.ts` | Dynamic route, serves from env; 404 when unset |
| Client ID validator | `src/lib/env.ts` | Regex `^ca-pub-\d{16}$`; invalid → warn + null |
| Reusable `<AdUnit>` | `src/components/AdUnit.tsx` | Client component; renders null if client ID or slot missing |
| Slot placements | Home ×2, About/FAQ/Privacy/Terms ×1 each | All null-render until slot IDs are set |
| CMP (GDPR consent) | Chosen in AdSense dashboard — 3-option Google CMP | Auto-injected by loader for EEA/UK/CH visitors |

### Environment variables (Vercel → Settings → Environment Variables)

| Key | Required for | Format |
|---|---|---|
| `NEXT_PUBLIC_ADSENSE_CLIENT_ID` | Loader + meta + ads.txt | `ca-pub-` + 16 digits |
| `NEXT_PUBLIC_ADSENSE_SLOT_HOME_MID` | Home slot between Features & Screenshots | 10+ digit numeric |
| `NEXT_PUBLIC_ADSENSE_SLOT_HOME_CTA` | Home slot between Tech & Download | 10+ digit numeric |
| `NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE` | About / FAQ / Privacy / Terms mid-content | 10+ digit numeric |

Client ID is live now. Slot IDs are intentionally empty — `<AdUnit>` renders nothing without them, so the site shows no blank ad holes during review.

---

## Phase 2 — Post-approval (DO AFTER "Ready" status in AdSense)

### Trigger
AdSense dashboard status flips from **Getting ready** → **Ready**. You will also get an approval email.

### Do not do before that
- Do **not** enable Auto ads. The site is a single-page marketing page plus four nested docs — Auto ads will over-stuff the layout and may place ads next to the Download CTA, hurting install conversion.
- Do **not** add more slots than the four already wired. More slots ≠ more revenue on this traffic profile.

### Step-by-step

1. **Create three ad units** in AdSense → **Ads → By ad unit → Create new ad unit**:
   - Name: `techpulse-home-mid` · Type: Display · Size: Responsive
   - Name: `techpulse-home-cta` · Type: Display · Size: Responsive
   - Name: `techpulse-article` · Type: In-article · Size: Responsive
   Copy the 10+ digit `data-ad-slot` value for each.

2. **Add slot IDs to Vercel** → Settings → Environment Variables (Production + Preview + Development):
   - `NEXT_PUBLIC_ADSENSE_SLOT_HOME_MID` = `<slot id from techpulse-home-mid>`
   - `NEXT_PUBLIC_ADSENSE_SLOT_HOME_CTA` = `<slot id from techpulse-home-cta>`
   - `NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE` = `<slot id from techpulse-article>`

3. **Redeploy** (Deployments → redeploy latest, disable build cache so envs take effect).

4. **Verify live**:
   ```bash
   curl -s https://techpulse-web.vercel.app | grep -c 'data-ad-slot'
   # Expect: 2  (home-mid + home-cta)
   curl -s https://techpulse-web.vercel.app/about | grep -c 'data-ad-slot'
   # Expect: 1  (article)
   ```
   In a real browser, open DevTools → Network → filter `adsbygoogle` → confirm 200 responses and non-zero-sized ad iframes.

5. **Wait 24–72 hours** for ads to start actually serving. AdSense needs to crawl and index each ad unit before it fills.

### Monitoring checklist (first 30 days)

- [ ] AdSense → Reports → check impressions are growing.
- [ ] AdSense → Policy center → confirm no violations.
- [ ] Manually test mobile: download CTA must remain the largest touch target on the page. If an ad renders bigger than the CTA, move the slot.
- [ ] CrUX / PageSpeed Insights — confirm LCP and CLS didn't regress after ad fill. Target: CLS < 0.1.
- [ ] Cross-check Vercel Analytics (if enabled): APK download-button click-through rate should not drop more than 10% vs. pre-ad baseline.

### Tuning levers (if revenue is low or UX degrades)

| Symptom | Lever |
|---|---|
| Low fill rate | Enable "Let Google optimize" per ad unit |
| High CLS after ads load | Reserve fixed height on `<AdUnit>` container (`min-h-[280px]`) |
| Ads too close to Download CTA | Move `ADSENSE_SLOT_HOME_CTA` placement up above Tech section |
| Ads too intrusive on nested pages | Drop `ADSENSE_SLOT_ARTICLE` env var — unit null-renders |
| Want more fill | Add **one** more unit at the end of each long article page — not more than one |

### Things to NOT do in Phase 2

- Don't enable Auto ads. (Worth repeating.)
- Don't add ads above the fold on the home page — hurts conversion and LCP.
- Don't add ads inside the Navbar or Footer — policy risk (accidental clicks).
- Don't click your own ads — instant account ban.
- Don't ask friends to click — same.
- Don't copy `data-ad-slot` across ad units — each slot must be unique per `<AdUnit>` usage.

### Future (Phase 3 — news pages, the real revenue driver)

Landing pages have tiny ad surface. News pages have 10–100x more. Plan
lives in [`docs/NEWS.md`](./NEWS.md). Two slot env vars are already
wired and null-render until set:

- `NEXT_PUBLIC_ADSENSE_SLOT_NEWS_IN_FEED` — in-feed unit on `/news` listing
- `NEXT_PUBLIC_ADSENSE_SLOT_NEWS_ARTICLE` — in-article unit on `/news/[slug]`

Do this **only after Phase 2 ads are serving impressions** on the home
page for at least 7 days.

### Future (Phase 4, optional)

Only consider if monthly revenue exceeds $50 and traffic exceeds
10k uniques/month:

- Introduce **Ezoic** or **Mediavine** as a mediator on top of AdSense
  (higher RPM, higher traffic threshold).
- A/B test slot positions using Vercel Edge Middleware.

Below those thresholds the engineering time is not worth the
incremental revenue.
