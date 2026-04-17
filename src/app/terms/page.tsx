import type { Metadata } from "next";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AdUnit } from "@/components/AdUnit";
import { ADSENSE_SLOT_ARTICLE } from "@/lib/env";
import { SITE_URL, GITHUB_URL } from "@/lib/constants";

export const metadata: Metadata = {
  title: "Terms of Use — TechPulse",
  description:
    "Terms governing use of the TechPulse website and Android application.",
  alternates: { canonical: `${SITE_URL}/terms` },
};

export default function TermsPage(): React.ReactElement {
  return (
    <>
      <Navbar />
      <main className="bg-white px-4 py-16 sm:px-6 lg:px-8">
        <article className="prose-custom">
          <h1>Terms of Use</h1>
          <p className="lede">Last updated: 17 April 2026</p>

          <h2>1. Acceptance</h2>
          <p>
            By accessing the Site or installing the App, you agree to these
            Terms. If you do not agree, do not use the Site or the App.
          </p>

          <h2>2. The service</h2>
          <p>
            TechPulse is a free, ad-supported Android application that
            aggregates publicly available tech news and presents
            AI-generated summaries alongside an impact score. The Site
            exists to distribute the App and describe its features.
          </p>

          <h2>3. Distribution and installation</h2>
          <p>
            The App is distributed as an APK file hosted on Google Drive.
            You install it at your own risk. Installation from outside the
            Play Store requires enabling unknown-source installs on your
            Android device, which carries general security implications you
            are responsible for understanding.
          </p>
          <p>
            The APK is provided <strong>&quot;as is&quot;</strong> without
            warranty of any kind — express or implied — including fitness
            for a particular purpose, non-infringement, or uninterrupted
            operation.
          </p>

          <h2>3.1 Account and authentication</h2>
          <p>
            The App uses Google Sign-In for a single purpose: to sync your
            saved-article list across devices. By signing in you authorize
            us to receive your Google account ID, email, and display name
            from Google, and to store them in our user database. You may
            read articles without signing in, but bookmarks will be
            unavailable until you do. See the{" "}
            <a href="/privacy">Privacy Policy</a> for detail.
          </p>
          <p>
            You are responsible for keeping your Google account secure.
            Any activity performed while signed in with your Google
            account is attributed to you. Request account deletion at any
            time via the contact route in section 10.
          </p>

          <h2>4. Third-party content</h2>
          <p>
            Articles, headlines, excerpts, summaries, and images belong to
            their respective publishers. TechPulse does not claim ownership
            of third-party content and provides direct links to the
            original sources. AI-generated summaries are a starting point,
            not a substitute for reading the original article, and may
            contain errors. Verify anything important before acting on it.
          </p>

          <div className="my-10">
            <AdUnit slot={ADSENSE_SLOT_ARTICLE} />
          </div>

          <h2>5. Acceptable use</h2>
          <p>You agree not to:</p>
          <ul>
            <li>
              Reverse engineer, decompile, or modify the App except as
              permitted by applicable law.
            </li>
            <li>
              Use the App or Site to violate any law or third-party right.
            </li>
            <li>
              Abuse the Site&apos;s infrastructure (for example, automated
              scraping beyond reasonable rate limits or attempts to probe
              for vulnerabilities without responsible disclosure).
            </li>
            <li>
              Represent the App as your own product or resell access to it.
            </li>
          </ul>

          <h2>6. Intellectual property</h2>
          <p>
            The TechPulse name, logo, and original Site/App code are
            property of the author. You may link to the Site freely. You
            may not use the TechPulse name or logo to imply endorsement
            without written permission.
          </p>

          <h2>7. Advertising</h2>
          <p>
            The Site displays advertisements via Google AdSense. Clicks on
            ads lead to third-party destinations we do not control and
            cannot vouch for. Use discretion with any purchase, download,
            or signup initiated from an ad on this Site.
          </p>

          <h2>8. Disclaimers and limitation of liability</h2>
          <p>
            The App and Site are provided free of charge. We do not
            guarantee article availability, summary accuracy, notification
            delivery, or continuous service. To the fullest extent
            permitted by law, we disclaim liability for any direct,
            indirect, incidental, or consequential damages arising from
            your use of the App or Site.
          </p>

          <h2>9. Changes</h2>
          <p>
            We may update these Terms. Continued use after changes
            constitutes acceptance. Material changes will be flagged on the
            homepage for at least fourteen days.
          </p>

          <h2>10. Contact</h2>
          <p>
            Open an issue at{" "}
            <a href={GITHUB_URL} target="_blank" rel="noopener noreferrer">
              github.com/muhammadafzal-dev
            </a>
            .
          </p>
        </article>
      </main>
      <Footer />
    </>
  );
}
