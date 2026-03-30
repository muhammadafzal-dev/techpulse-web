# TechPulse — Landing Page

> Official landing page for the **TechPulse** Android app — an AI-powered tech news aggregator.

🌐 **Live:** [techpulse-web.vercel.app](https://techpulse-web.vercel.app)

---

## About TechPulse

TechPulse aggregates 15 top tech sources, scores every article by impact, and delivers AI-powered summaries — so you read smarter, not more.

- **AI Summaries** — Gemini 2.5 Flash summarizes every article in plain English
- **Impact Score** — 0–100 score based on source credibility and recency
- **Smart Notifications** — Breaking news (score ≥ 85) triggers instant push alerts
- **15 Sources** — TechCrunch, Hacker News, Wired, MIT Tech Review, ArXiv, and more
- **Offline Bookmarks** — Save articles locally, no account needed
- **100% Free** — $0/month, no paywalls, no subscription

---

## Tech Stack

| Layer | Technology |
|-------|-----------|
| Framework | Next.js 14 (App Router) |
| Styling | Tailwind CSS |
| Language | TypeScript |
| Deployment | Vercel |

---

## Getting Started

```bash
# Install dependencies
npm install

# Run development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Build

```bash
npm run build
npm start
```

---

## Project Structure

```
src/
└── app/
    ├── page.tsx        # Landing page (all sections)
    ├── layout.tsx      # Root layout with metadata
    └── globals.css     # Global styles + Tailwind

public/
└── screenshots/
    ├── app_logo.png    # App icon
    ├── feeds.jpeg      # News feed screenshot
    ├── article.jpeg    # Article detail screenshot
    ├── bookmarks.jpeg  # Bookmarks screenshot
    └── settings.jpeg   # Settings screenshot
```

---

## Related

- **TechPulse Android App** — React Native · Supabase · Firebase · Gemini AI · GitHub Actions

---

## License

MIT © 2025 [Muhammad Afzal](https://github.com/muhammadafzal-dev)
