import { articles } from '../../data/articles';
import type { BlogArticle, BlogCategory, BlogTocItem, CategoryCount } from './types';
import { CATEGORY_COURSE_MAPPINGS, STATUTORY_AUTHORITY_SOURCES } from './constants';
import { calculateReadingTime } from './readingTime';
import { isSanityConfigured, sanityFetch } from '../sanity/client';
import { ALL_POSTS_QUERY, POST_BY_SLUG_QUERY } from '../sanity/queries';
import { adaptSanityPostToArticle } from '../sanity/adapter';
import type { SanityPostDocument } from '../sanity/types';

// Synchronous local domain contract
export function getAllArticles(): BlogArticle[] {
  return articles.map((item) => ({
    ...item,
    category: item.category as BlogCategory,
    readingTime: item.readingTime || calculateReadingTime(item.body),
    canonicalUrl: `/blog/${item.slug}`,
  }));
}

/**
 * Enterprise Dual-Source Data Fetcher:
 * Automatically pulls from Sanity CMS when credentials are set,
 * and seamlessly falls back to high-fidelity local content.
 */
export async function getArticlesAsync(): Promise<BlogArticle[]> {
  if (isSanityConfigured()) {
    const sanityPosts = await sanityFetch<SanityPostDocument[]>(ALL_POSTS_QUERY);
    if (sanityPosts && sanityPosts.length > 0) {
      return sanityPosts.map(adaptSanityPostToArticle);
    }
  }
  return getAllArticles();
}

export function getArticleBySlug(slug: string): BlogArticle | undefined {
  const found = articles.find((item) => item.slug === slug);
  if (!found) return undefined;
  return {
    ...found,
    category: found.category as BlogCategory,
    readingTime: found.readingTime || calculateReadingTime(found.body),
    canonicalUrl: `/blog/${found.slug}`,
  };
}

export async function getArticleBySlugAsync(slug: string): Promise<BlogArticle | undefined> {
  if (isSanityConfigured()) {
    const post = await sanityFetch<SanityPostDocument>(POST_BY_SLUG_QUERY, { slug });
    if (post) {
      return adaptSanityPostToArticle(post);
    }
  }
  return getArticleBySlug(slug);
}

export function getRecentArticles(limit = 3): BlogArticle[] {
  return getAllArticles().slice(0, limit);
}

export function getRelatedArticles(currentSlug: string, category: string, limit = 3): BlogArticle[] {
  const all = getAllArticles().filter((item) => item.slug !== currentSlug);
  // Sort prioritized by matching category first
  const sameCategory = all.filter((item) => item.category === category);
  const otherCategory = all.filter((item) => item.category !== category);
  return [...sameCategory, ...otherCategory].slice(0, limit);
}

export function getCategoryCounts(): CategoryCount[] {
  const all = getAllArticles();
  const counts: Record<string, number> = {};
  all.forEach((item) => {
    counts[item.category] = (counts[item.category] || 0) + 1;
  });

  return Object.entries(counts).map(([name, count]) => ({
    name,
    count,
    slug: name.toLowerCase().replace(/\s+/g, '-'),
  }));
}

/**
 * Extracts h2/h3 headings from raw article HTML to construct a semantic Table of Contents (TOC).
 */
export function extractTableOfContents(htmlContent: string): BlogTocItem[] {
  const headingRegex = /<h([23])[^>]*>(.*?)<\/h\1>/gi;
  const items: BlogTocItem[] = [];
  let match: RegExpExecArray | null;

  while ((match = headingRegex.exec(htmlContent)) !== null) {
    const depth = parseInt(match[1], 10);
    const rawText = match[2].replace(/<[^>]*>/g, '').trim();
    const id = rawText
      .toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .replace(/\s+/g, '-');

    if (rawText) {
      items.push({ id, text: rawText, depth });
    }
  }

  return items;
}

export function getLeadCourseForCategory(category: string) {
  return CATEGORY_COURSE_MAPPINGS[category] || CATEGORY_COURSE_MAPPINGS['Individual tax'];
}

export function getStatutorySources() {
  return STATUTORY_AUTHORITY_SOURCES;
}
