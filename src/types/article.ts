/**
 * Shape of a news article as stored in the TechPulse Supabase database.
 *
 * This is the single source of truth for article data consumed by:
 *   - the mobile app
 *   - the /news listing page (future)
 *   - the /news/[slug] detail page (future)
 *   - any RSS/sitemap generator
 *
 * Keep field names aligned with the actual `articles` table.
 * When the schema changes, update this file first, then fix callers.
 */
export type Article = {
  id: string;
  slug: string;
  title: string;
  url: string;
  summary: string;
  source: string;
  category?: string;
  imageUrl?: string;
  impactScore: number;
  publishedAt: string;
  ingestedAt: string;
};

export type ArticleListParams = {
  limit?: number;
  offset?: number;
  category?: string;
  minImpactScore?: number;
};
