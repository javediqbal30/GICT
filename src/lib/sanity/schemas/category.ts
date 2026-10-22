export default {
  name: 'category',
  title: 'Tax & Legal Practice Area',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Practice Category Title (e.g. "Individual tax", "Litigation")',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
        maxLength: 96,
      },
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 2,
    },
  ],
};
