/**
 * Production GROQ Queries for GICT Blog & Regulatory Intelligence
 */

export const ALL_POSTS_QUERY = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc) {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    updatedAt,
    readingTime,
    "category": category->title,
    "author": {
      "name": author->name,
      "role": author->role,
      "credentials": author->credentials
    },
    "reviewer": {
      "name": reviewer->name,
      "credentials": reviewer->credentials
    },
    metaTitle,
    metaDescription,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt,
      caption
    },
    bodyHtml
  }
`;

export const POST_BY_SLUG_QUERY = `
  *[_type == "post" && slug.current == $slug][0] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    updatedAt,
    readingTime,
    "category": category->title,
    "author": {
      "name": author->name,
      "role": author->role,
      "credentials": author->credentials
    },
    "reviewer": {
      "name": reviewer->name,
      "credentials": reviewer->credentials
    },
    metaTitle,
    metaDescription,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt,
      caption
    },
    bodyHtml,
    body
  }
`;

export const RECENT_POSTS_QUERY = `
  *[_type == "post" && defined(slug.current)] | order(publishedAt desc)[0...$limit] {
    _id,
    title,
    "slug": slug.current,
    excerpt,
    publishedAt,
    updatedAt,
    readingTime,
    "category": category->title,
    "author": author->name,
    "reviewer": reviewer->name,
    mainImage {
      asset-> {
        _id,
        url
      },
      alt,
      caption
    }
  }
`;

export const ALL_CATEGORIES_QUERY = `
  *[_type == "category"] | order(title asc) {
    _id,
    title,
    "slug": slug.current,
    description
  }
`;
