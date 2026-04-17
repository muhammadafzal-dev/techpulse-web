import type { Metadata } from "next";
import Link from "next/link";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AdUnit } from "@/components/AdUnit";
import { ADSENSE_SLOT_ARTICLE } from "@/lib/env";
import { SITE_URL, GITHUB_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "FAQ — TechPulse",
  description:
    "Answers to common questions about TechPulse: pricing, privacy, sources, installation, and roadmap.",
  alternates: { canonical: `${SITE_URL}/faq` },
};

export default function FaqPage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose-custom">
          <h1>Frequently Asked Questions</h1>
          <p className="lede">
            The short answers to the questions most people ask before
            installing.
          </p>

          <h2>Is TechPulse really free?</h2>
          <p>
            Yes. $0 per month, no trial, no subscription, no in-app
            purchases. Ads on this website cover the Gemini API cost that
            powers article summaries. The mobile app itself shows no ads.
          </p>

          <h2>Do I need to create an account?</h2>
          <p>
            No. The app has no login, no signup, and no cloud sync.
            Bookmarks stay on your device, which also means they do not
            follow you across devices.
          </p>

          <h2>Where does my data go?</h2>
          <p>
            Almost nowhere. The app downloads publicly sourced article
            metadata from a Supabase database. Your bookmarks stay local.
            Anonymous crash reports go to Firebase Crashlytics so the next
            build is less broken than the last. See{" "}
            <Link href="/privacy">Privacy</Link> for details.
          </p>

          <h2>How are summaries generated?</h2>
          <p>
            Gemini 2.5 Flash receives the article title, URL, and the first
            two thousand characters of visible content, and returns a
            two-sentence summary. Summaries are generated once per article
            and cached — there is no per-user inference.
          </p>

          <h2>What is the Impact Score?</h2>
          <p>
            A deterministic 0 to 100 number derived from source credibility
            (weighted list) and recency (exponential decay). Articles
            scoring 85 or higher trigger a push notification so you do not
            miss genuinely important news.
          </p>

          <div className="my-10">
            <AdUnit slot={ADSENSE_SLOT_ARTICLE} />
          </div>

          <h2>How often are articles updated?</h2>
          <p>
            Every hour, via a scheduled GitHub Action that pulls from all
            fifteen sources in parallel.
          </p>

          <h2>What Android version do I need?</h2>
          <p>Android 8.0 (Oreo) or later. The APK is around 25 MB.</p>

          <h2>Why is TechPulse not on Google Play?</h2>
          <p>
            The Play Store requires a one-time developer fee, a review
            process per release, and policy-target compliance that adds
            weeks to each update. For a free side project with a small
            audience, direct APK distribution is faster. A Play Store
            listing may come later.
          </p>

          <h2>Is there an iOS version?</h2>
          <p>
            Not yet. The codebase is React Native, so an iOS build is
            possible — but shipping on the App Store costs both time and
            money. No firm ETA.
          </p>

          <h2>The APK link will not download. What now?</h2>
          <p>
            The APK is hosted on Google Drive, which occasionally
            rate-limits high-traffic folders. Wait an hour and try again,
            or open a GitHub issue so a mirror can be posted.
          </p>

          <h2>Can I request a new source?</h2>
          <p>
            Yes. Open an issue at{" "}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              github.com/muhammadafzal-dev
            </a>{" "}
            with the RSS URL and a one-line reason. Sources need an open
            RSS feed and a reasonable credibility profile.
          </p>

          <h2>Can I contribute code?</h2>
          <p>
            The app itself is not open source yet, but this landing site
            is. Pull requests welcome on the site repo.
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
