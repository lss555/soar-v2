import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'contact',
  type: 'document',
  title: 'Contact',
  fields: [
    {
      name: 'phonenumber',
      type: 'string',
      title: 'Phone Number',
      description: 'only have one phone number, email and address in here',
    },
    {
      name: 'email',
      title: 'Email',
      type: 'string',
    },
    {
      name: 'address',
      type: 'string',
      title: 'Office Address'
    },
  ],
})