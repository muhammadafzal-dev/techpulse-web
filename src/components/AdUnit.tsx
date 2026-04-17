"use client";

import { useEffect } from "react";
import { ADSENSE_CLIENT_ID } from "@/lib/env";

declare global {
  interface Window {
    adsbygoogle?: unknown[];
  }
}

type AdUnitProps = {
  slot: string | null;
  format?: "auto" | "fluid" | "rectangle";
  label?: string;
  className?: string;
};

export function AdUnit({
  slot,
  format = "auto",
  label = "Advertisement",
  className = "",
}: AdUnitProps): React.ReactElement | null {
  useEffect(() => {
    if (!ADSENSE_CLIENT_ID || !slot) return;
    try {
      (window.adsbygoogle = window.adsbygoogle ?? []).push({});
    } catch (err) {
      console.warn("[AdSense] push failed", err);
    }
  }, [slot]);

  if (!ADSENSE_CLIENT_ID || !slot) return null;

  return (
    <aside
      aria-label="Advertisement"
      className={`mx-auto w-full max-w-3xl px-4 ${className}`}
    >
      <p className="mb-1.5 text-center text-[10px] uppercase tracking-[0.2em] text-slate-400">
        {label}
      </p>
      <ins
        className="adsbygoogle block"
        style={{ display: "block" }}
        data-ad-client={ADSENSE_CLIENT_ID}
        data-ad-slot={slot}
        data-ad-format={format}
        data-full-width-responsive="true"
      />
    </aside>
  );
}
