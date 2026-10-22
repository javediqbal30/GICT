import type { BlogArticle } from './types';
import { site } from '../../data/site';

export function generateBlogPostingSchema(article: BlogArticle, currentUrl: string) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BlogPosting',
    headline: article.title,
    description: article.excerpt,
    datePublished: article.published,
    dateModified: article.updated,
    author: {
      '@type': 'Organization',
      name: article.author,
      url: site.url,
    },
    reviewedBy: {
      '@type': 'Person',
      name: article.reviewer,
    },
    publisher: {
      '@type': 'EducationalOrganization',
      name: site.legalName,
      url: site.url,
      logo: {
        '@type': 'ImageObject',
        url: new URL('/images/logo.png', site.url).toString(),
      },
    },
    mainEntityOfPage: currentUrl,
  };
}

export function generateBlogBreadcrumbSchema(items: { label: string; href?: string }[]) {
  return {
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.label,
      ...(item.href ? { item: new URL(item.href, site.url).toString() } : {}),
    })),
  };
}
