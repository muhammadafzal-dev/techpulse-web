import { ADSENSE_CLIENT_ID } from "@/lib/env";

export const dynamic = "force-static";

export function GET(): Response {
  if (!ADSENSE_CLIENT_ID) {
    return new Response("", { status: 404 });
  }
  const publisherId = ADSENSE_CLIENT_ID.replace(/^ca-/, "");
  const body = `google.com, ${publisherId}, DIRECT, f08c47fec0942fa0\n`;
  return new Response(body, {
    status: 200,
    headers: { "Content-Type": "text/plain; charset=utf-8" },
  });
}
