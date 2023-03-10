import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'home',
  type: 'document',
  title: 'Home Page Content',
  fields: [
    {
      name: 'page',
      type: 'string',
      title: 'Page'
    },
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      description: 'do not change slug name',
      options: {
        source: 'title',
        maxLength: 96,
      },
    }),
    {
      name: 'paragraphone',
      title: 'Paragraph One',
      type: 'blockContent',
    },
    {
      name: 'paragraphtwo',
      title: 'Paragraph Two',
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