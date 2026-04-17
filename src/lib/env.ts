const ADSENSE_RE = /^ca-pub-\d{16}$/;

function readAdsenseClientId(): string | null {
  const raw = process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID?.trim();
  if (!raw) return null;
  if (!ADSENSE_RE.test(raw)) {
    if (process.env.NODE_ENV !== "production") {
      console.warn(
        `[env] NEXT_PUBLIC_ADSENSE_CLIENT_ID invalid: "${raw}". Expected ca-pub-<16 digits>.`,
      );
    }
    return null;
  }
  return raw;
}

export const ADSENSE_CLIENT_ID = readAdsenseClientId();
