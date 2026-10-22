export default {
  name: 'author',
  title: 'Faculty / Practitioner Author',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Full Name',
      type: 'string',
      validation: (Rule: any) => Rule.required(),
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
    },
    {
      name: 'role',
      title: 'Professional Role (e.g. "Senior Tax Partner", "Advocate High Court")',
      type: 'string',
    },
    {
      name: 'credentials',
      title: 'Credentials (e.g. "FCA, LL.B")',
      type: 'string',
    },
    {
      name: 'avatar',
      title: 'Profile Photo',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'bio',
      title: 'Short Bio',
      type: 'text',
      rows: 3,
    },
  ],
};
