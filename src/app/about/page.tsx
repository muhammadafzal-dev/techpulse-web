import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AdUnit } from "@/components/AdUnit";
import { ADSENSE_SLOT_ARTICLE } from "@/lib/env";
import { SITE_URL, GITHUB_URL, AUTHOR_NAME } from "@/lib/constants";

export const metadata: Metadata = {
  title: "About TechPulse — AI-Curated Tech News",
  description:
    "Why TechPulse exists, how it works, which sources it aggregates, and who built it.",
  alternates: { canonical: `${SITE_URL}/about` },
};

export default function AboutPage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose-custom">
          <h1>About TechPulse</h1>
          <p className="lede">
            A one-screen tech news feed that respects your time. Fifteen
            sources, one impact score, two-sentence summaries. No accounts,
            no subscriptions, no feed manipulation.
          </p>

          <h2>Why this exists</h2>
          <p>
            Tech news has three problems: it is noisy, it is paywalled, and
            it is optimized for engagement rather than information. TechPulse
            is a deliberate rejection of all three.
          </p>
          <ul>
            <li>
              <strong>One-tap sign-in.</strong> The app uses Google Sign-In
              for a single purpose: to sync your saved articles across
              devices. No username, no password, no email verification
              flow.
            </li>
            <li>
              <strong>No subscription.</strong> Free forever. The website
              shows ads that pay the Gemini API bill. The app itself shows
              no ads.
            </li>
            <li>
              <strong>No feed manipulation.</strong> Articles are sorted by
              an impact score — a deterministic 0 to 100 value derived from
              source credibility and recency — not by what keeps you
              scrolling.
            </li>
            <li>
              <strong>No paywalled sources.</strong> Every publisher in the
              rotation is open-access.
            </li>
          </ul>

          <h2>How it works</h2>
          <p>
            A scheduled GitHub Action pulls fresh items from fifteen RSS
            feeds every hour. Each item is scored, summarized by Gemini 2.5
            Flash in two sentences, and written to a Supabase database. The
            Android app reads from that database and caches aggressively so
            you can read offline.
          </p>
          <p>
            When you sign in with Google, the app creates a user record in
            Supabase (keyed to your Google account ID) and stores your
            bookmark list there so it follows you between devices.
            Summaries themselves are generated once and cached globally —
            never per-user — which keeps inference cost low enough to run
            the service on ad revenue alone.
          </p>

          <h2>Sources in rotation</h2>
          <p>
            TechCrunch, Hacker News, Wired, MIT Technology Review, ArXiv
            (cs.AI), The Verge, Ars Technica, Engadget, IEEE Spectrum,
            Nature Tech, VentureBeat, ZDNet, CNET, TechRadar, and Android
            Authority.
          </p>

          <h2>Stack</h2>
          <p>
            React Native, TypeScript, Supabase, Firebase (crash reporting
            only), Gemini 2.5 Flash, GitHub Actions. The landing page you
            are reading is Next.js on Vercel.
          </p>

          <h2>Who built it</h2>
          <p>
            {AUTHOR_NAME} — a software engineer who reads too much tech
            news and wanted a tool that matched how he thinks about it.
            Open issues, feature requests, and pull requests are welcome at{" "}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              github.com/muhammadafzal-dev
            </a>
            .
          </p>

          <div className="my-10">
            <AdUnit slot={ADSENSE_SLOT_ARTICLE} />
          </div>

          <h2>Roadmap</h2>
          <ul>
            <li>User-defined source weighting.</li>
            <li>Topic filters (AI, mobile, security, etc.).</li>
            <li>iOS build.</li>
            <li>Optional Play Store distribution.</li>
          </ul>
        </article>
      </main>
      <Footer />
    </>
  );
}
