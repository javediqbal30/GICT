# GICT Website

Professional website for the **Global Institute of Corporate Training (GICT)**, Rawalpindi.

Built with Astro 7, TypeScript and a custom CSS design system. The site is fully static and includes course pages, faculty profiles, a Knowledge Hub, lead forms, eight finance/tax calculators and complete SEO metadata.

## Requirements

- Node.js **22.22 or newer**
- npm 9.6 or newer

## Commands

```bash
npm install
npm run dev       # local development server
npm run check     # Astro/TypeScript validation
npm run build     # production build to dist/
npm run preview   # preview the production build
```

## Project structure

```text
src/
  components/     shared UI, cards, forms, calculators
  data/           site details, courses, faculty, articles, calculators
  layouts/        BaseLayout and shared page shell
  lib/            SEO, formatting and shared helpers
  pages/          routes and dynamic pages
  styles/         design tokens and responsive global CSS
public/
  assets/images/  logo and faculty photography
  robots.txt
astro.config.mjs  site URL, sitemap and build settings
```

## Content updates

- **Contact details, address, map:** `src/data/site.ts`
- **Courses:** `src/data/courses.ts`
- **Faculty:** `src/data/faculty.ts`
- **Calculators:** `src/data/calculators.ts` and `src/data/calculatorContent.ts`
- **Knowledge Hub articles:** `src/data/articles.ts`
- **Navigation and footer links:** `src/data/navigation.ts`

## SEO

- Titles are clamped to 55 characters and descriptions to 155 characters in `src/lib/seo.ts`.
- Canonical URLs use `https://www.gict.com.pk`.
- `sitemap-index.xml` is generated at build time; `/thank-you` and `/404` are excluded.
- Analytics/cookie copy is in the privacy page. No analytics script is included by default.

## Deployment

Upload the contents of `dist/` to any static host with clean-URL support, or configure the host to serve `.html` files without the extension. The production site expects the canonical domain `https://www.gict.com.pk`.

## Important

The tax calculators are **estimates** using illustrative 2024-25 rates. They are not tax, legal or investment advice. Confirm the current Finance Act and the facts of each case before filing or relying on a result.
