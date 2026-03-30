import type { Metadata } from "next";
import "./globals.css";

const SITE_URL = "https://techpulse-web.vercel.app";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: "TechPulse — AI-Powered Tech News for Android",
  description:
    "TechPulse aggregates 15 top tech sources, scores articles by impact, and delivers AI-powered summaries so you read smarter, not more. Free Android app.",
  keywords: [
    "tech news",
    "AI news aggregator",
    "Android app",
    "TechPulse",
    "Gemini AI",
    "tech articles",
    "news app",
  ],
  alternates: {
    canonical: SITE_URL,
  },
  openGraph: {
    title: "TechPulse — AI-Powered Tech News for Android",
    description:
      "Aggregates 15 top sources, scores articles by impact, and delivers AI summaries. Free. No account required.",
    type: "website",
    locale: "en_US",
    url: SITE_URL,
    siteName: "TechPulse",
    images: [
      {
        url: "/screenshots/feeds.jpeg",
        width: 1200,
        height: 630,
        alt: "TechPulse — AI-Powered Tech News App",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "TechPulse — AI-Powered Tech News for Android",
    description:
      "Aggregates 15 top sources, scores articles by impact, and delivers AI summaries. Free Android app.",
    images: ["/screenshots/feeds.jpeg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
