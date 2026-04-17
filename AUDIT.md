# TechPulse Web — Audit Findings

> Backlog from 2026-04-17 audit. Do later.

## Priority 1 — A11y / Correctness

- [ ] **Button contrast fails WCAG AA.** `#00d4a0` bg + white text = 2.4:1 (need 4.5:1). Switch primary button bg to `#00956e` (already used elsewhere) or darken.
- [ ] **Focus ring color unset.** `focus-visible:outline` has no color — may be invisible on teal. Add explicit `outline-slate-900` or `outline-[#00956e]`.
- [ ] **Footer misleading.** Says "Built with React Native" on a Next.js site. Change to "Next.js" (or remove).

## Priority 2 — Perf / Assets

- [ ] **Screenshots too heavy.** 296K–704K JPEGs. Convert to WebP/AVIF (expect 50–70% reduction).
- [ ] **next.config.mjs empty.** Add explicit `images.formats: ['image/avif', 'image/webp']`.
- [ ] **OG image wrong aspect.** `/screenshots/feeds.jpeg` is 9:19.5 phone shot — social cards letterbox. Generate dedicated 1200×630 OG image.

## Priority 3 — SEO / Metadata

- [ ] **No `robots.ts`.** Add Next 14 file-based robots.
- [ ] **No `sitemap.ts`.** Add.
- [ ] **Missing `viewport` export.** Next 14 split `metadata` / `viewport`. Add `themeColor: "#00d4a0"`.
- [ ] **No JSON-LD.** Add `SoftwareApplication` schema for Android app (rich-result eligible).

## Priority 4 — Code Structure

- [ ] **`page.tsx` = 494 lines.** Exceeds ~200 line target. Split:
  - `src/components/icons/*.tsx` (9 inline SVGs)
  - `src/components/sections/Hero.tsx`, `Features.tsx`, `Screenshots.tsx`, `Tech.tsx`, `Download.tsx`, `Navbar.tsx`, `Footer.tsx`
  - `src/components/PhoneMockup.tsx`, `DownloadButton.tsx`
  - `src/data/features.ts`, `src/data/techStack.ts`
  - `src/lib/constants.ts` (APK_DOWNLOAD_URL)
- [ ] **Dead import.** `import React from "react"` at line 478 — unneeded (Next 14 JSX transform). Remove.
- [ ] **Inline hex colors everywhere.** Add brand tokens to `tailwind.config.ts`:
  ```ts
  brand: {
    DEFAULT: "#00d4a0",
    hover:   "#00b88a",
    dark:    "#00956e",
    tint:    "#f0fdf9",
    soft:    "#ccfbf1",
    border:  "#99f0e0",
  }
  ```
  Replace `style={{ backgroundColor: "#..." }}` with `bg-brand`, `text-brand-dark`, etc.
- [ ] **Unused tailwind vars.** `background` / `foreground` CSS vars declared but not used. Remove or wire up.

## Priority 5 — Tooling / CI

- [ ] **No ESLint dep.** `lint` script calls `next lint` but no `eslint` / `eslint-config-next` in deps. Install.
- [ ] **No Prettier.** Add + `.prettierrc`.
- [ ] **No tests.** Add Vitest + one smoke test (`HomePage` renders).
- [ ] **No CI workflow.** Add `.github/workflows/ci.yml` → `npm ci && npm run build && npm run lint && tsc --noEmit`.
- [ ] **`package.json` missing `engines`.** Pin Node (e.g. `"engines": { "node": ">=20" }`).
- [ ] **tsconfig could be stricter.** Add `noUncheckedIndexedAccess`, `noImplicitReturns`, `noFallthroughCasesInSwitch`.

## Priority 6 — Distribution

- [ ] **APK on Google Drive folder link.** Unreliable (quota, access changes, no versioning, no hash). Move to **GitHub Releases** with SHA256 checksum + version tag. Update `APK_DOWNLOAD_URL`.

## Nice-to-Haves

- [ ] Add `not-found.tsx` + `error.tsx` at app root.
- [ ] Add `loading.tsx` (though SSG = unused).
- [ ] Consider Vercel Analytics / Speed Insights (1-line add).
- [ ] `manifest.ts` for PWA-lite (app icon, theme color).
