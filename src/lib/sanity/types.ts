/**
 * Raw Sanity CMS Document Types & Interfaces
 * Matches Sanity Studio Schema for GICT Digital Publishing
 */

export interface SanityReference {
  _ref: string;
  _type: 'reference';
}

export interface SanityImageCrop {
  top: number;
  bottom: number;
  left: number;
  right: number;
}

export interface SanityImageHotspot {
  x: number;
  y: number;
  height: number;
  width: number;
}

export interface SanityImageField {
  _type: 'image';
  asset: SanityReference;
  crop?: SanityImageCrop;
  hotspot?: SanityImageHotspot;
  alt?: string;
  caption?: string;
}

export interface SanityAuthorDocument {
  _id: string;
  _type: 'author';
  name: string;
  slug: { current: string };
  role?: string;
  credentials?: string; // e.g. "CA", "Advocate High Court"
  bio?: string;
  avatar?: SanityImageField;
}

export interface SanityCategoryDocument {
  _id: string;
  _type: 'category';
  title: string;
  slug: { current: string };
  description?: string;
}

export interface SanityPostDocument {
  _id: string;
  _type: 'post';
  title: string;
  slug: { current: string };
  category?: string | { title: string };
  excerpt: string;
  mainImage?: SanityImageField;
  publishedAt: string;
  updatedAt?: string;
  readingTime?: string;
  author?: SanityAuthorDocument | { name: string };
  reviewer?: { name: string; credentials?: string } | string;
  metaTitle?: string;
  metaDescription?: string;
  body?: any; // PortableText or HTML
  bodyHtml?: string;
}
