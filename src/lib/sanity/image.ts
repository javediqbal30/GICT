import type { SanityImageField } from './types';
import { getSanityConfig } from './client';

export interface ImageUrlOptions {
  width?: number;
  height?: number;
  quality?: number;
  format?: 'webp' | 'avif' | 'jpg' | 'png';
  fit?: 'clip' | 'crop' | 'fill' | 'max' | 'scale';
}

/**
 * Builds optimized CDN URLs from Sanity image assets.
 * Gracefully falls back to a provided local asset URL if no Sanity image is present.
 */
export function urlForSanityImage(
  image?: SanityImageField | { asset?: { url?: string }; alt?: string } | null,
  fallbackUrl: string = '/assets/images/Tax_Filing_&_IRIS_Compliance.webp',
  options: ImageUrlOptions = {}
): string {
  if (!image) return fallbackUrl;

  // Direct URL already populated via GROQ asset->url
  if ('asset' in image && image.asset && typeof (image.asset as any).url === 'string') {
    const rawUrl = (image.asset as any).url as string;
    const url = new URL(rawUrl);

    if (options.width) url.searchParams.set('w', String(options.width));
    if (options.height) url.searchParams.set('h', String(options.height));
    url.searchParams.set('q', String(options.quality || 85));
    url.searchParams.set('auto', 'format');
    url.searchParams.set('fit', options.fit || 'max');

    return url.toString();
  }

  // Ref ID pattern: image-Tb9E...-1200x800-jpg
  if ('asset' in image && image.asset && typeof image.asset._ref === 'string') {
    const { projectId, dataset } = getSanityConfig();
    const ref = image.asset._ref;
    const match = ref.match(/^image-([a-f0-9]+)-(\d+x\d+)-(\w+)$/);

    if (match && projectId) {
      const [, id, dimensions, extension] = match;
      const baseUrl = `https://cdn.sanity.io/images/${projectId}/${dataset}/${id}-${dimensions}.${extension}`;
      const url = new URL(baseUrl);
      if (options.width) url.searchParams.set('w', String(options.width));
      if (options.height) url.searchParams.set('h', String(options.height));
      url.searchParams.set('auto', 'format');
      return url.toString();
    }
  }

  return fallbackUrl;
}
