/**
 * GICT Enterprise Digital Publishing Architecture
 * Domain Models & Type Specifications
 * Adheres to Domain-Driven Design (DDD) & TOGAF 10 Standards
 */

export type BlogCategory =
  | 'Individual tax'
  | 'Corporate taxation'
  | 'Sales tax'
  | 'Litigation'
  | 'Compliance'
  | 'Financial modelling'
  | 'Regulatory updates';

export interface BlogTocItem {
  id: string;
  text: string;
  depth: number;
}

export interface StatutorySource {
  title: string;
  authority: 'FBR' | 'PRA' | 'SRB' | 'KPRA' | 'BRA' | 'SECP' | 'MoF';
  url: string;
  description?: string;
}

export interface BlogLeadCourse {
  slug: string;
  title: string;
  shortTitle: string;
  description: string;
  tagline: string;
}

export interface BlogImage {
  src: string;
  alt: string;
  caption?: string;
  width?: number;
  height?: number;
}

export interface BlogArticle {
  slug: string;
  title: string;
  category: BlogCategory;
  excerpt: string;
  published: string;        // ISO 8601 (YYYY-MM-DD)
  updated: string;          // ISO 8601 (YYYY-MM-DD)
  readingTime: string;      // Computed or canonical duration
  author: string;           // Named practitioner or editorial desk
  reviewer: string;         // Credentialed CA / Advocate reviewer
  metaTitle: string;
  metaDescription: string;
  body: string;             // Validated semantic HTML
  coverImage: BlogImage;    // Mandatory cover image for professional visual presentation
  canonicalUrl?: string;
  tags?: string[];
  featured?: boolean;
}

export interface BlogFilterOptions {
  category?: string;
  searchQuery?: string;
  page?: number;
  pageSize?: number;
}

export interface CategoryCount {
  name: string;
  count: number;
  slug: string;
}
