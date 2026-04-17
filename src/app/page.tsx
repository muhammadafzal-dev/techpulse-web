import Image from "next/image";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AdUnit } from "@/components/AdUnit";
import { APK_DOWNLOAD_URL } from "@/lib/constants";
import { ADSENSE_SLOT_HOME_MID, ADSENSE_SLOT_HOME_CTA } from "@/lib/env";

// App accent: #00d4a0 (teal) — matches the mobile app theme
// Hover shade: #00b88a (10% darker)
// Light tint:  #f0fdf9
// Soft tint:   #ccfbf1

// ---------------------------------------------------------------------------
// Inline SVG icons
// ---------------------------------------------------------------------------

function IconSparkles({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.456 2.456L21.75 6l-1.035.259a3.375 3.375 0 0 0-2.456 2.456Z" />
    </svg>
  );
}

function IconTrendingUp({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 18 9 11.25l4.306 4.306a11.95 11.95 0 0 1 5.814-5.519l2.74-1.22m0 0-5.94-2.281m5.94 2.28-2.28 5.941" />
    </svg>
  );
}

function IconBell({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M14.857 17.082a23.848 23.848 0 0 0 5.454-1.31A8.967 8.967 0 0 1 18 9.75V9A6 6 0 0 0 6 9v.75a8.967 8.967 0 0 1-2.312 6.022c1.733.64 3.56 1.085 5.455 1.31m5.714 0a24.255 24.255 0 0 1-5.714 0m5.714 0a3 3 0 1 1-5.714 0" />
    </svg>
  );
}

function IconNewspaper({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5h1.5m-1.5 3h1.5m-7.5 3h7.5m-7.5 3h7.5m3-9h3.375c.621 0 1.125.504 1.125 1.125V18a2.25 2.25 0 0 1-2.25 2.25M16.5 7.5V18a2.25 2.25 0 0 0 2.25 2.25M16.5 7.5V4.875c0-.621-.504-1.125-1.125-1.125H4.125C3.504 3.75 3 4.254 3 4.875V18a2.25 2.25 0 0 0 2.25 2.25h13.5M6 7.5h3v3H6v-3Z" />
    </svg>
  );
}

function IconBookmark({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M17.593 3.322c1.1.128 1.907 1.077 1.907 2.185V21L12 17.25 4.5 21V5.507c0-1.108.806-2.057 1.907-2.185a48.507 48.507 0 0 1 11.186 0Z" />
    </svg>
  );
}

function IconStar({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.499Z" />
    </svg>
  );
}

function IconDownload({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3" />
    </svg>
  );
}

function IconCheck({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={2.5} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="m4.5 12.75 6 6 9-13.5" />
    </svg>
  );
}

function IconPhone({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" viewBox="0 0 24 24" strokeWidth={1.8} stroke="currentColor" aria-hidden="true">
      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 1.5H8.25A2.25 2.25 0 0 0 6 3.75v16.5a2.25 2.25 0 0 0 2.25 2.25h7.5A2.25 2.25 0 0 0 18 20.25V3.75a2.25 2.25 0 0 0-2.25-2.25H13.5m-3 0V3h3V1.5m-3 0h3m-3 8.25h3" />
    </svg>
  );
}

// ---------------------------------------------------------------------------
// Feature data
// ---------------------------------------------------------------------------

const features = [
  {
    Icon: IconSparkles,
    title: "AI-Powered Summaries",
    description: "Gemini 2.5 Flash distills every article into plain English so you grasp the key insight in seconds.",
  },
  {
    Icon: IconTrendingUp,
    title: "Impact Score",
    description: "Each article receives a 0–100 score based on source credibility and recency. Prioritize what matters.",
  },
  {
    Icon: IconBell,
    title: "Smart Notifications",
    description: "Breaking tech news with an impact score of 85 or above triggers an instant push notification.",
  },
  {
    Icon: IconNewspaper,
    title: "15 Top Tech Sources",
    description: "TechCrunch, Hacker News, Wired, MIT Tech Review, ArXiv and more — aggregated in one feed.",
  },
  {
    Icon: IconBookmark,
    title: "Offline Bookmarks",
    description: "Save articles to read later. Bookmarks are stored locally — no account, no sync required.",
  },
  {
    Icon: IconStar,
    title: "NEW Badge System",
    description: "Fresh articles since your last visit are flagged automatically so nothing slips past you.",
  },
] as const;

// ---------------------------------------------------------------------------
// Tech stack
// ---------------------------------------------------------------------------

const techStack = [
  "React Native",
  "TypeScript",
  "Gemini AI",
  "Firebase",
  "Supabase",
  "GitHub Actions",
] as const;

// ---------------------------------------------------------------------------
// Reusable: Download button
// ---------------------------------------------------------------------------

function DownloadButton({ size = "md", className = "" }: { size?: "md" | "lg"; className?: string }) {
  const sizeClasses = size === "lg" ? "px-8 py-4 text-base" : "px-5 py-2.5 text-sm";
  return (
    <a
      href={APK_DOWNLOAD_URL}
      target="_blank"
      rel="noopener noreferrer"
      style={{ backgroundColor: "#00d4a0" }}
      className={`inline-flex items-center gap-2 rounded-xl font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md active:scale-95 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 ${sizeClasses} ${className}`}
    >
      <IconDownload className="h-4 w-4" />
      Download APK
    </a>
  );
}

// ---------------------------------------------------------------------------
// Reusable: Phone mockup
// ---------------------------------------------------------------------------

function PhoneMockup({ src, alt, label }: { src: string; alt: string; label: string }) {
  return (
    <div className="relative mx-auto w-[185px] sm:w-[200px] lg:w-[215px]">
      <div className="relative overflow-hidden rounded-[2rem] border-[3px] border-slate-200 bg-white shadow-xl ring-1 ring-slate-100">
        {/* Notch */}
        <div className="flex h-6 items-center justify-center bg-slate-900">
          <div className="h-1.5 w-14 rounded-full bg-slate-700" />
        </div>
        {/* Screen */}
        <div className="relative aspect-[9/19.5] overflow-hidden">
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
            sizes="215px"
          />
        </div>
      </div>
      {/* Home indicator */}
      <div className="mt-1.5 flex justify-center">
        <div className="h-1 w-20 rounded-full bg-slate-300" />
      </div>
      <p className="mt-2 text-center text-xs font-medium text-slate-500">{label}</p>
    </div>
  );
}

// ---------------------------------------------------------------------------
// Section: Hero
// ---------------------------------------------------------------------------

function HeroSection() {
  return (
    <section className="pb-24 pt-20" style={{ background: "linear-gradient(to bottom, #f0fdf9, #ffffff)" }} aria-labelledby="hero-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-14 lg:flex-row lg:items-center lg:gap-16">

          {/* Left: copy */}
          <div className="flex-1 text-center lg:text-left">
            {/* Pill badge */}
            <div
              className="mb-5 inline-flex items-center gap-2 rounded-full px-4 py-1.5"
              style={{ backgroundColor: "#f0fdf9", border: "1px solid #99f0e0" }}
            >
              <span className="h-2 w-2 rounded-full" style={{ backgroundColor: "#00d4a0" }} aria-hidden="true" />
              <span className="text-sm font-medium" style={{ color: "#00956e" }}>AI-Powered · Free · Android</span>
            </div>

            <h1 id="hero-heading" className="text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Stay Ahead of Tech with{" "}
              <span style={{ color: "#00d4a0" }}>AI-Curated</span> News
            </h1>

            <p className="mt-6 text-lg leading-relaxed text-slate-600 sm:text-xl">
              TechPulse aggregates 15 top sources, scores articles by impact,
              and delivers AI summaries — so you read smarter, not more.
            </p>

            <div className="mt-8 flex flex-col items-center gap-4 sm:flex-row lg:justify-start">
              <DownloadButton size="lg" />
              <a
                href="#features"
                className="inline-flex items-center gap-1.5 rounded-xl border border-slate-300 px-7 py-[14px] text-base font-semibold text-slate-700 transition-all hover:border-slate-400 hover:bg-slate-50 active:scale-95"
              >
                See Features <span aria-hidden="true">↓</span>
              </a>
            </div>

            {/* Trust strip */}
            <div className="mt-10 flex flex-wrap items-center justify-center gap-6 lg:justify-start">
              {([
                { label: "Zero cost", sub: "$0/month" },
                { label: "No account", sub: "required" },
                { label: "No paywalls", sub: "ever" },
              ] as const).map(({ label, sub }) => (
                <div key={label} className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-full" style={{ backgroundColor: "#ccfbf1", color: "#00956e" }}>
                    <IconCheck className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-sm text-slate-700">
                    <strong className="font-semibold">{label}</strong>{" "}
                    <span className="text-slate-500">{sub}</span>
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Right: hero phone */}
          <div className="flex-shrink-0">
            <div className="relative mx-auto w-[260px] sm:w-[290px] lg:w-[310px]">
              {/* Ambient glow */}
              <div
                className="absolute -inset-8 rounded-[3rem] opacity-40 blur-3xl"
                style={{ background: "linear-gradient(to bottom right, #99f0e0, #b3f0d9)" }}
                aria-hidden="true"
              />
              {/* Phone shell */}
              <div className="relative overflow-hidden rounded-[3rem] border-[4px] border-slate-200 bg-white shadow-2xl ring-1 ring-slate-100">
                <div className="flex h-7 items-center justify-center bg-slate-900">
                  <div className="h-1.5 w-20 rounded-full bg-slate-700" />
                </div>
                <div className="relative aspect-[9/19.5] overflow-hidden">
                  <Image
                    src="/screenshots/feeds.jpeg"
                    alt="TechPulse app — main news feed"
                    fill
                    priority
                    className="object-cover object-top"
                    sizes="310px"
                  />
                </div>
              </div>
              <div className="mt-2 flex justify-center">
                <div className="h-1.5 w-28 rounded-full bg-slate-300" />
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Features
// ---------------------------------------------------------------------------

function FeaturesSection() {
  return (
    <section id="features" className="bg-slate-50 py-24" aria-labelledby="features-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 id="features-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            Everything You Need to Stay Informed
          </h2>
          <p className="mt-4 text-lg text-slate-600">
            Built for people who care about tech — not for engagement metrics.
          </p>
        </div>

        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3" aria-label="App features">
          {features.map(({ Icon, title, description }) => (
            <li key={title} className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm transition-shadow hover:shadow-md">
              <div
                className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl"
                style={{ backgroundColor: "#ccfbf1", color: "#00956e" }}
              >
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mb-2 text-base font-bold text-slate-900">{title}</h3>
              <p className="text-sm leading-relaxed text-slate-600">{description}</p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Screenshots
// ---------------------------------------------------------------------------

function ScreenshotsSection() {
  const screens = [
    { src: "/screenshots/feeds.jpeg", alt: "TechPulse — news feed", label: "News Feed" },
    { src: "/screenshots/article.jpeg", alt: "TechPulse — article with AI summary", label: "AI Summary" },
    { src: "/screenshots/bookmarks.jpeg", alt: "TechPulse — saved bookmarks", label: "Bookmarks" },
    { src: "/screenshots/settings.jpeg", alt: "TechPulse — settings & notifications", label: "Settings" },
  ] as const;

  return (
    <section id="screenshots" className="bg-white py-24" aria-labelledby="screenshots-heading">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-14 text-center">
          <h2 id="screenshots-heading" className="text-3xl font-extrabold tracking-tight text-slate-900 sm:text-4xl">
            See It In Action
          </h2>
          <p className="mt-4 text-lg text-slate-600">Clean, focused reading. No clutter.</p>
        </div>

        <div className="flex flex-wrap items-end justify-center gap-8 lg:gap-10">
          {screens.map((screen, index) => (
            <div key={screen.src} className={index === 1 || index === 2 ? "sm:-translate-y-6" : ""}>
              <PhoneMockup src={screen.src} alt={screen.alt} label={screen.label} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Tech stack
// ---------------------------------------------------------------------------

function TechSection() {
  return (
    <section className="border-y border-slate-200 bg-slate-50 py-14" aria-label="Technologies used">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <p className="mb-6 text-center text-xs font-semibold uppercase tracking-widest text-slate-400">
          Built with
        </p>
        <ul className="flex flex-wrap items-center justify-center gap-3">
          {techStack.map((tech) => (
            <li key={tech}>
              <span className="inline-block rounded-full border border-slate-200 bg-white px-4 py-1.5 text-sm font-medium text-slate-700 shadow-sm">
                {tech}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Section: Download CTA
// ---------------------------------------------------------------------------

function DownloadSection() {
  return (
    <section
      id="download"
      className="py-24"
      style={{ background: "linear-gradient(135deg, #00d4a0 0%, #00b88a 100%)" }}
      aria-labelledby="download-heading"
    >
      <div className="mx-auto max-w-2xl px-4 text-center sm:px-6 lg:px-8">
        <div
          className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl backdrop-blur-sm"
          style={{ backgroundColor: "rgba(255,255,255,0.2)" }}
        >
          <IconPhone className="h-8 w-8 text-white" />
        </div>

        <h2 id="download-heading" className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
          Get TechPulse on Android
        </h2>
        <p className="mt-4 text-lg" style={{ color: "rgba(255,255,255,0.85)" }}>
          Free download, no account required
        </p>

        <div className="mt-8">
          <a
            href={APK_DOWNLOAD_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 rounded-2xl bg-white px-10 py-4 text-base font-bold shadow-lg transition-all hover:shadow-xl active:scale-95"
            style={{ color: "#00956e" }}
          >
            <IconDownload className="h-5 w-5" />
            Download APK
          </a>
        </div>

        <p className="mt-5 text-sm" style={{ color: "rgba(255,255,255,0.7)" }}>
          Requires Android 8.0+ · ~25 MB
        </p>
      </div>
    </section>
  );
}

// ---------------------------------------------------------------------------
// Page
// ---------------------------------------------------------------------------

export default function HomePage() {
  return (
    <>
      <Navbar />
      <main>
        <HeroSection />
        <FeaturesSection />
        <div className="bg-white py-10">
          <AdUnit slot={ADSENSE_SLOT_HOME_MID} />
        </div>
        <ScreenshotsSection />
        <TechSection />
        <div className="bg-white py-10">
          <AdUnit slot={ADSENSE_SLOT_HOME_CTA} />
        </div>
        <DownloadSection />
      </main>
      <Footer />
    </>
  );
}
