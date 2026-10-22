/**
 * Zero-Dependency Enterprise Sanity Client
 * Connects directly to Sanity CDN API with graceful fallback to local data
 */

export interface SanityConfig {
  projectId: string;
  dataset: string;
  apiVersion: string;
  token?: string;
  useCdn: boolean;
}

export function getSanityConfig(): SanityConfig {
  const projectId = import.meta.env.SANITY_PROJECT_ID || process.env.SANITY_PROJECT_ID || '';
  const dataset = import.meta.env.SANITY_DATASET || process.env.SANITY_DATASET || 'production';
  const apiVersion = import.meta.env.SANITY_API_VERSION || process.env.SANITY_API_VERSION || '2026-10-22';
  const token = import.meta.env.SANITY_API_TOKEN || process.env.SANITY_API_TOKEN || '';
  const useCdn = import.meta.env.PROD && !token;

  return { projectId, dataset, apiVersion, token, useCdn };
}

export function isSanityConfigured(): boolean {
  const { projectId } = getSanityConfig();
  return Boolean(projectId && projectId.trim() !== '' && projectId !== 'YOUR_SANITY_PROJECT_ID');
}

/**
 * Execute GROQ Query against Sanity API
 */
export async function sanityFetch<T = any>(
  query: string,
  params: Record<string, string | number> = {}
): Promise<T | null> {
  const config = getSanityConfig();

  if (!isSanityConfigured()) {
    return null;
  }

  try {
    const host = config.useCdn ? 'apicdn.sanity.io' : 'api.sanity.io';
    const url = new URL(`https://${config.projectId}.${host}/v${config.apiVersion}/data/query/${config.dataset}`);
    url.searchParams.set('query', query);

    Object.entries(params).forEach(([key, val]) => {
      url.searchParams.set(`$${key}`, JSON.stringify(val));
    });

    const headers: Record<string, string> = {
      'Content-Type': 'application/json',
    };

    if (config.token) {
      headers['Authorization'] = `Bearer ${config.token}`;
    }

    const response = await fetch(url.toString(), {
      headers,
      // Revalidate cache hourly in static build
      next: { revalidate: 3600 },
    } as any);

    if (!response.ok) {
      console.warn(`[Sanity Client Error] HTTP ${response.status}: ${response.statusText}`);
      return null;
    }

    const json = await response.json();
    return json.result as T;
  } catch (error) {
    console.error('[Sanity Client Fetch Error]:', error);
    return null;
  }
}
