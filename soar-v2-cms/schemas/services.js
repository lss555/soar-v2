import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'services',
  type: 'document',
  title: 'Services',
  fields: [
    {
      name: 'therapy',
      type: 'string',
      title: 'Kind of Therapy',
    },
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'do not change slug name of cost and payments below, just description and kind of therapy (which is the title)',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    {
      name: 'therapydescription',
      title: 'Therapy Description',
      type: 'blockContent',
    },
    defineField({
      name: 'mainImage',
      title: 'Main image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
})