export default {
  name: 'post',
  title: 'Blog Article & Regulatory Notice',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Article Title',
      type: 'string',
      validation: (Rule: any) => Rule.required().max(100),
    },
    {
      name: 'slug',
      title: 'Slug (URL path)',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'category',
      title: 'Category',
      type: 'reference',
      to: [{ type: 'category' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'excerpt',
      title: 'Excerpt (Short Summary for Cards)',
      type: 'text',
      rows: 3,
      validation: (Rule: any) => Rule.required().max(250),
    },
    {
      name: 'mainImage',
      title: 'Featured Cover Image (16:9)',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          title: 'Alternative Text (Accessibility & SEO)',
          type: 'string',
          validation: (Rule: any) => Rule.required(),
        },
        {
          name: 'caption',
          title: 'Image Caption / Regulatory Source Reference',
          type: 'string',
        },
      ],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'author',
      title: 'Author',
      type: 'reference',
      to: [{ type: 'author' }],
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'reviewer',
      title: 'Verified Legal / Tax Reviewer (CA / Advocate)',
      type: 'reference',
      to: [{ type: 'author' }],
      description: 'Mandatory E-E-A-T requirement for GICT fiscal accuracy policy.',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'publishedAt',
      title: 'Published Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'updatedAt',
      title: 'Last Reviewed / Statutory Update Date',
      type: 'date',
      options: {
        dateFormat: 'YYYY-MM-DD',
      },
    },
    {
      name: 'readingTime',
      title: 'Reading Duration (e.g. "6 min read")',
      type: 'string',
    },
    {
      name: 'metaTitle',
      title: 'Meta Title (SEO)',
      type: 'string',
      validation: (Rule: any) => Rule.max(70),
    },
    {
      name: 'metaDescription',
      title: 'Meta Description (SEO)',
      type: 'text',
      rows: 2,
      validation: (Rule: any) => Rule.max(160),
    },
    {
      name: 'bodyHtml',
      title: 'Article Body (Semantic HTML or Rich Content)',
      type: 'text',
      rows: 15,
      validation: (Rule: any) => Rule.required(),
    },
  ],
  preview: {
    select: {
      title: 'title',
      author: 'author.name',
      media: 'mainImage',
      date: 'publishedAt',
    },
    prepare(selection: any) {
      const { author, date } = selection;
      return {
        ...selection,
        subtitle: `${author ? `By ${author}` : ''} ${date ? `· ${date}` : ''}`,
      };
    },
  },
};
