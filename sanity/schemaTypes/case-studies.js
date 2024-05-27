import {defineField, defineType} from 'sanity'

export const caseStudies = defineType({
  name: 'case-studies',
  title: 'Case studies',
  type: 'document',
  fields: [
    defineField({
      name: 'title',
      title: 'Title',
      type: 'string',
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'title',
      },
    }),
    defineField({
      name: 'excerpt',
      title: 'Excerpt',
      type: 'text',
    }),
    defineField({
      name: 'featuredImg',
      title: 'Featured image',
      type: 'image',
    }),
    defineField({
      name: 'intro',
      title: 'Intro',
      type: 'array',
      of: [
        {
          type: 'block',
        },
        {
          type: 'image',
        },
      ],
    }),
  ],
})
