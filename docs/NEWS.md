# News on the Website — Implementation Plan

> Status: **not built yet.** Routes intentionally absent to avoid AdSense
> "thin content" rejection while the account is under review.

The mobile app already reads articles from a Supabase database. This plan
extends the same data source to the web so the marketing site becomes a
real news destination — which is also what unlocks serious ad revenue.

---

## Why wait

1. **AdSense review.** A half-built `/news` page with "Coming soon" text
   is exactly the signal that triggers a low-value-content rejection.
2. **SEO.** Shipping thin article pages now would get them indexed, then
   de-indexed when replaced. Bad for domain authority.
3. **Cost.** Every crawled page that makes a Supabase query costs you
   request quota. No point spending before ads start paying.

Ship `/news` **after** the AdSense account flips to "Ready" and at
least one home-page ad has served an impression.

---

## Data source

The mobile app writes/reads to a Supabase Postgres table. For the website:

- **Read-only access.** The site must never write. Create a separate
  anon key with row-level-security (RLS) policies restricting reads to
  published articles only.
- **Required env (already added to `.env.example`):**
  ```
  NEXT_PUBLIC_SUPABASE_URL
  NEXT_PUBLIC_SUPABASE_ANON_KEY
  ```
- **Type contract:** `src/types/article.ts` defines the `Article` shape.
  Match your Supabase column names to that type (or add a small mapper).

---

## File layout

When you're ready to build, add these files:

```
src/
├── lib/
│   ├── supabase.ts              # createClient(url, anonKey)
│   └── articles.ts              # already stubbed — replace the returns
├── types/
│   └── article.ts               # already present
└── app/
    └── news/
        ├── page.tsx             # listing
        ├── [slug]/
        │   └── page.tsx         # article detail
        ├── opengraph-image.tsx  # dynamic OG per article (optional)
        └── loading.tsx          # skeleton while ISR regenerates
```

Add `/news` to the Navbar + Footer nav once the listing is live.

---

## Caching strategy

- **Listing page** (`/news`): ISR with `export const revalidate = 300`
  (5 minutes). Fetches top N articles by `impactScore` + recency.
- **Article detail** (`/news/[slug]`): ISR with `revalidate = 3600`
  (1 hour). `generateStaticParams` seeds the top 200 slugs at build time;
  the rest render on-demand and cache.
- **Sitemap**: generate from `listArticles({ limit: 1000 })` so Google
  can discover every published article.

Avoid server-side rendering per request — it will hit Supabase rate
limits and Vercel function-invocation costs at scale.

---

## Ad placement on news pages

Two slot IDs are already wired in `src/lib/env.ts` (null until set):

| Env var | Where it renders | Format |
|---|---|---|
| `NEXT_PUBLIC_ADSENSE_SLOT_NEWS_IN_FEED` | Every Nth card in the `/news` listing | Fluid / in-feed |
| `NEXT_PUBLIC_ADSENSE_SLOT_NEWS_ARTICLE` | Once mid-body on `/news/[slug]` | In-article, responsive |

Rules of thumb:

- **Listing:** one ad after every 6–8 article cards. Never more than three
  ads total on a single listing view.
- **Article:** one ad after the first 2–3 paragraphs. Optionally one more
  at the bottom after the "Read original on X" link.
- Always hide ads behind the `<AdUnit>` component — slot null-renders if
  the env var is blank, so staged deploys don't show empty boxes.

---

## Content rules for AdSense compliance

The article pages are where revenue happens *and* where policy risk is
highest. Enforce these in `src/app/news/[slug]/page.tsx`:

1. **Do not reproduce full article bodies.** Show the AI summary, key
   metadata (source, impact score, published date), and a prominent
   "Read the full article on <publisher>" outbound link. Reproducing
   more than a short excerpt = copyright + AdSense policy violation.
2. **Canonical URL points to the publisher.** Use
   `alternates: { canonical: article.url }` so Google doesn't rank your
   summary over the original — same reason, different mechanism.
3. **Add structured data.** `NewsArticle` JSON-LD on every detail page.
4. **No ads on error/empty states.** `<AdUnit>` should unmount on 404.

---

## Rough build order (2–3 hour task once approved)

1. `npm i @supabase/supabase-js`
2. Create `src/lib/supabase.ts` + replace `listArticles` /
   `getArticleBySlug` stubs in `src/lib/articles.ts`.
3. Add Supabase env vars to Vercel (Production + Preview).
4. Build `/news/page.tsx` — listing with `<AdUnit>` every 8 cards.
5. Build `/news/[slug]/page.tsx` — summary + canonical to publisher +
   one `<AdUnit>` mid-body.
6. Add `loading.tsx` skeleton.
7. Add `/news` to Navbar + Footer.
8. Add article entries to `src/app/sitemap.ts` (create if missing).
9. Create two new ad units in AdSense; paste IDs into Vercel env.
10. Redeploy; verify `grep -c 'data-ad-slot' /news` ≥ 1.

Nothing in the current codebase blocks this — types, env vars, docs,
and the `<AdUnit>` component all already fit together.
