const TITLE_LIMIT = 55;
const DESCRIPTION_LIMIT = 155;

export function metaTitle(value: string): string {
  const clean = (value || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= TITLE_LIMIT) return clean;
  const cut = clean.slice(0, TITLE_LIMIT);
  const boundary = cut.lastIndexOf(' ');
  return (boundary > 30 ? cut.slice(0, boundary) : cut).trim();
}

export function metaDescription(value: string): string {
  const clean = (value || '').replace(/\s+/g, ' ').trim();
  if (clean.length <= DESCRIPTION_LIMIT) return clean;
  const cut = clean.slice(0, DESCRIPTION_LIMIT - 1);
  const boundary = cut.lastIndexOf(' ');
  return `${(boundary > 90 ? cut.slice(0, boundary) : cut).trim()}.`;
}

export function canonicalUrl(pathname: string, site: URL | undefined): string {
  const base = site ?? new URL('https://www.gict.com.pk');
  const cleanPath =
    pathname
      .replace(/\/index\.html$/, '/')
      .replace(/\.html$/, '')
      .replace(/\/+$/, '') || '/';
  return new URL(cleanPath, base).toString();
}
