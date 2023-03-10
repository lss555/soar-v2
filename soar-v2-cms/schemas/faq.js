import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'faq',
  type: 'document',
  title: 'Faq',
  fields: [
    {
      name: 'question',
      type: 'string',
      title: 'Question'
    },
    {
      name: 'answer',
      title: 'Answer',
      type: 'blockContent',
    }
  ],
})
