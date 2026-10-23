import type { APIRoute } from 'astro';
import { courses } from '../data/courses';
import { faculty } from '../data/faculty';
import { calculators } from '../data/calculators';
import { getAllArticles } from '../lib/blog/service';
import { articles as khArticles } from '../data/articles';
import { site } from '../data/site';

interface SitemapEntry {
  loc: string;
  changefreq: 'always' | 'hourly' | 'daily' | 'weekly' | 'monthly' | 'yearly' | 'never';
  priority: number;
  lastmod?: string;
}

export const GET: APIRoute = async () => {
  const today = new Date().toISOString().split('T')[0];
  const baseUrl = site.url.replace(/\/+$/, '');

  const entries: SitemapEntry[] = [
    // Core Institutional & Programmatic Hubs
    { loc: `${baseUrl}/`, changefreq: 'daily', priority: 1.0, lastmod: today },
    { loc: `${baseUrl}/about`, changefreq: 'monthly', priority: 0.8, lastmod: today },
    { loc: `${baseUrl}/contact`, changefreq: 'monthly', priority: 0.9, lastmod: today },
    { loc: `${baseUrl}/corporate-training`, changefreq: 'weekly', priority: 0.9, lastmod: today },

    // Hyper-Local GEO SEO Landing Pages
    { loc: `${baseUrl}/taxation-institute-islamabad`, changefreq: 'weekly', priority: 0.95, lastmod: today },
    { loc: `${baseUrl}/taxation-institute-rawalpindi`, changefreq: 'weekly', priority: 0.95, lastmod: today },
    { loc: `${baseUrl}/taxation-institute-pakistan`, changefreq: 'weekly', priority: 0.95, lastmod: today },
    { loc: `${baseUrl}/taxation-course-fees-rawalpindi-islamabad`, changefreq: 'weekly', priority: 0.95, lastmod: today },
    { loc: `${baseUrl}/top-taxation-institutes-islamabad-rawalpindi`, changefreq: 'weekly', priority: 0.95, lastmod: today },

    // Section Catalog Roots
    { loc: `${baseUrl}/courses`, changefreq: 'weekly', priority: 0.9, lastmod: today },
    { loc: `${baseUrl}/faculty`, changefreq: 'monthly', priority: 0.8, lastmod: today },
    { loc: `${baseUrl}/calculators`, changefreq: 'weekly', priority: 0.9, lastmod: today },
    { loc: `${baseUrl}/blog`, changefreq: 'daily', priority: 0.9, lastmod: today },
    { loc: `${baseUrl}/knowledge-hub`, changefreq: 'weekly', priority: 0.8, lastmod: today },

    // Dynamic Courses
    ...courses.map((course) => ({
      loc: `${baseUrl}/courses/${course.slug}`,
      changefreq: 'weekly' as const,
      priority: 0.85,
      lastmod: today,
    })),

    // Dynamic Faculty Profiles
    ...faculty.map((member) => ({
      loc: `${baseUrl}/faculty/${member.slug}`,
      changefreq: 'monthly' as const,
      priority: 0.8,
      lastmod: today,
    })),

    // Dynamic Calculators
    ...calculators.map((calc) => ({
      loc: `${baseUrl}/calculators/${calc.slug}`,
      changefreq: 'monthly' as const,
      priority: 0.85,
      lastmod: today,
    })),

    // Dynamic Blog Articles
    ...getAllArticles().map((article) => ({
      loc: `${baseUrl}/blog/${article.slug}`,
      changefreq: 'monthly' as const,
      priority: 0.8,
      lastmod: article.updated ? article.updated.split('T')[0] : today,
    })),

    // Dynamic Knowledge Hub Notes
    ...khArticles.map((article) => ({
      loc: `${baseUrl}/knowledge-hub/${article.slug}`,
      changefreq: 'monthly' as const,
      priority: 0.75,
      lastmod: article.updated ? article.updated.split('T')[0] : today,
    })),

    // Compliance & Legal
    { loc: `${baseUrl}/privacy`, changefreq: 'yearly', priority: 0.4, lastmod: today },
    { loc: `${baseUrl}/terms`, changefreq: 'yearly', priority: 0.4, lastmod: today },
    { loc: `${baseUrl}/refund-policy`, changefreq: 'yearly', priority: 0.4, lastmod: today },
    { loc: `${baseUrl}/disclaimer`, changefreq: 'yearly', priority: 0.4, lastmod: today },
    { loc: `${baseUrl}/accessibility`, changefreq: 'yearly', priority: 0.4, lastmod: today },
  ];

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9"
        xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance"
        xsi:schemaLocation="http://www.sitemaps.org/schemas/sitemap/0.9
        http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd">
${entries
  .map(
    (e) => `  <url>
    <loc>${e.loc}</loc>
    <lastmod>${e.lastmod || today}</lastmod>
    <changefreq>${e.changefreq}</changefreq>
    <priority>${e.priority.toFixed(2)}</priority>
  </url>`
  )
  .join('\n')}
</urlset>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
