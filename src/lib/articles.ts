import type { Article, ArticleListParams } from "@/types/article";

/**
 * Data access for news articles.
 *
 * Stubbed until the /news pages ship. See docs/NEWS.md for the plan.
 *
 * When wiring Supabase:
 *   1. `npm i @supabase/supabase-js`
 *   2. Create `src/lib/supabase.ts` with a createClient using
 *      NEXT_PUBLIC_SUPABASE_URL + NEXT_PUBLIC_SUPABASE_ANON_KEY.
 *   3. Replace the stubs below with `.from('articles').select(...)` calls.
 *   4. Use Next revalidate (e.g. `export const revalidate = 300`) on
 *      /news pages so the list re-renders every 5 minutes.
 *
 * Signatures are intentionally final so callers can be written now
 * and stay unchanged when the stubs are replaced.
 */

export async function listArticles(
  _params: ArticleListParams = {},
): Promise<Article[]> {
  return [];
}

export async function getArticleBySlug(_slug: string): Promise<Article | null> {
  return null;
}
