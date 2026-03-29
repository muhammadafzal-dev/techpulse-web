import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
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
  openGraph: {
    title: "TechPulse — AI-Powered Tech News for Android",
    description:
      "Aggregates 15 top sources, scores articles by impact, and delivers AI summaries. Free. No account required.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechPulse — AI-Powered Tech News for Android",
    description:
      "Aggregates 15 top sources, scores articles by impact, and delivers AI summaries. Free Android app.",
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
