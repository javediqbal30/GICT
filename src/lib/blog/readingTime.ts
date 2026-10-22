/**
 * Compute reading time accurately based on average professional reading speed (200 words/min).
 */
export function calculateReadingTime(content: string, defaultMinutes = 5): string {
  if (!content) return `${defaultMinutes} min read`;
  // Strip HTML tags and markdown markers
  const plainText = content.replace(/<[^>]*>/g, ' ').replace(/[#*_`~[\]]/g, ' ');
  const words = plainText.trim().split(/\s+/).filter(Boolean).length;
  const minutes = Math.max(1, Math.ceil(words / 200));
  return `${minutes} min read`;
}
