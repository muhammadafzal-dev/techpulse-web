const ADSENSE_CLIENT_RE = /^ca-pub-\d{16}$/;
const SLOT_RE = /^\d{10,}$/;

function warnInvalid(name: string, value: string, hint: string): void {
  if (process.env.NODE_ENV !== "production") {
    console.warn(`[env] ${name} invalid: "${value}". ${hint}`);
  }
}

function validateClientId(raw: string | undefined): string | null {
  const v = raw?.trim();
  if (!v) return null;
  if (!ADSENSE_CLIENT_RE.test(v)) {
    warnInvalid("NEXT_PUBLIC_ADSENSE_CLIENT_ID", v, "Expected ca-pub-<16 digits>.");
    return null;
  }
  return v;
}

function validateSlot(raw: string | undefined, name: string): string | null {
  const v = raw?.trim();
  if (!v) return null;
  if (!SLOT_RE.test(v)) {
    warnInvalid(name, v, "Expected numeric slot ID (10+ digits).");
    return null;
  }
  return v;
}

export const ADSENSE_CLIENT_ID = validateClientId(
  process.env.NEXT_PUBLIC_ADSENSE_CLIENT_ID,
);

export const ADSENSE_SLOT_HOME_MID = validateSlot(
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_MID,
  "NEXT_PUBLIC_ADSENSE_SLOT_HOME_MID",
);

export const ADSENSE_SLOT_HOME_CTA = validateSlot(
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_HOME_CTA,
  "NEXT_PUBLIC_ADSENSE_SLOT_HOME_CTA",
);

export const ADSENSE_SLOT_ARTICLE = validateSlot(
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE,
  "NEXT_PUBLIC_ADSENSE_SLOT_ARTICLE",
);

export const ADSENSE_SLOT_NEWS_IN_FEED = validateSlot(
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_NEWS_IN_FEED,
  "NEXT_PUBLIC_ADSENSE_SLOT_NEWS_IN_FEED",
);

export const ADSENSE_SLOT_NEWS_ARTICLE = validateSlot(
  process.env.NEXT_PUBLIC_ADSENSE_SLOT_NEWS_ARTICLE,
  "NEXT_PUBLIC_ADSENSE_SLOT_NEWS_ARTICLE",
);
