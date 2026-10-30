import type { APIRoute } from 'astro';
import { getArticlesAsync } from '../../lib/blog/service';
import { site } from '../../data/site';

export const GET: APIRoute = async () => {
  const articles = await getArticlesAsync();

  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>GICT Tax &amp; Corporate Law Intelligence</title>
    <description>Practical notes on Pakistani taxation, FBR IRIS compliance, sales tax, and corporate law.</description>
    <link>${site.url}/blog</link>
    <atom:link href="${site.url}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <language>en-PK</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    ${articles
      .map(
        (article) => `
    <item>
      <title><![CDATA[${article.title}]]></title>
      <description><![CDATA[${article.excerpt}]]></description>
      <link>${site.url}/blog/${article.slug}</link>
      <guid isPermaLink="true">${site.url}/blog/${article.slug}</guid>
      <pubDate>${new Date(article.published).toUTCString()}</pubDate>
      <category>${article.category}</category>
      <author>${site.email} (${article.author})</author>
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(xml, {
    headers: {
      'Content-Type': 'application/xml; charset=utf-8',
      'Cache-Control': 'public, max-age=3600',
    },
  });
};
