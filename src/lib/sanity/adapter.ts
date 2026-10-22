import type { SanityPostDocument } from './types';
import type { BlogArticle, BlogCategory } from '../blog/types';
import { urlForSanityImage } from './image';
import { calculateReadingTime } from '../blog/readingTime';

export function adaptSanityPostToArticle(post: SanityPostDocument): BlogArticle {
  const categoryTitle =
    typeof post.category === 'object' && post.category !== null
      ? post.category.title
      : typeof post.category === 'string'
        ? post.category
        : 'Taxation';

  const authorName =
    typeof post.author === 'object' && post.author !== null
      ? post.author.name
      : typeof post.author === 'string'
        ? post.author
        : 'GICT Tax Desk';

  const reviewerName =
    typeof post.reviewer === 'object' && post.reviewer !== null
      ? post.reviewer.name
      : typeof post.reviewer === 'string'
        ? post.reviewer
        : 'Ehsan Ur Raheem Farooqi, CA';

  const bodyHtml = post.bodyHtml || (typeof post.body === 'string' ? post.body : '');
  const readingTime = post.readingTime || calculateReadingTime(bodyHtml);

  const coverImageUrl = urlForSanityImage(
    post.mainImage,
    '/assets/images/Tax_Filing_&_IRIS_Compliance.webp',
    { width: 1200, height: 675, quality: 90 }
  );

  return {
    slug: post.slug,
    title: post.title,
    category: categoryTitle as BlogCategory,
    excerpt: post.excerpt || '',
    published: post.publishedAt ? post.publishedAt.split('T')[0] : new Date().toISOString().split('T')[0],
    updated: post.updatedAt ? post.updatedAt.split('T')[0] : post.publishedAt?.split('T')[0] || new Date().toISOString().split('T')[0],
    readingTime,
    author: authorName,
    reviewer: reviewerName,
    metaTitle: post.metaTitle || `${post.title} | GICT Blog`,
    metaDescription: post.metaDescription || post.excerpt,
    body: bodyHtml,
    coverImage: {
      src: coverImageUrl,
      alt: post.mainImage?.alt || post.title,
      caption: post.mainImage?.caption,
    },
    canonicalUrl: `/blog/${post.slug}`,
  };
}
