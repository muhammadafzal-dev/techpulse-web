import Image from "next/image";
import Link from "next/link";
import { APK_DOWNLOAD_URL } from "@/lib/constants";

function IconDownload({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      strokeWidth={1.8}
      stroke="currentColor"
      aria-hidden="true"
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M3 16.5v2.25A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75V16.5M16.5 12 12 16.5m0 0L7.5 12m4.5 4.5V3"
      />
    </svg>
  );
}

export function Navbar(): React.ReactElement {
  return (
    <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/95 shadow-sm backdrop-blur-sm">
      <nav
        className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8"
        aria-label="Main navigation"
      >
        <Link href="/" className="flex items-center gap-2.5">
          <div className="relative h-9 w-9 flex-shrink-0 overflow-hidden rounded-xl border border-slate-100 shadow-sm">
            <Image
              src="/screenshots/app_logo.png"
              alt="TechPulse app icon"
              width={36}
              height={36}
              className="object-cover"
            />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">
            TechPulse
          </span>
        </Link>
        <a
          href={APK_DOWNLOAD_URL}
          target="_blank"
          rel="noopener noreferrer"
          style={{ backgroundColor: "#00d4a0" }}
          className="inline-flex items-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold text-white shadow-sm transition-all hover:opacity-90 hover:shadow-md active:scale-95"
        >
          <IconDownload className="h-4 w-4" />
          Download APK
        </a>
      </nav>
    </header>
  );
}
