import {defineType, defineField} from 'sanity'

export const order = defineType({
  name: 'order',
  title: 'Order',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'email',
      title: 'Email',
      type: 'string',
      validation: (rule) => rule.required().email(),
    }),
    defineField({
      name: 'address',
      title: 'Delivery Address',
      type: 'text',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'phone',
      title: 'Phone Number',
      type: 'string',
      validation: (rule) =>
        rule.required().regex(/^\+?[0-9]{7,15}$/, {
          name: 'Valid phone number',
          invert: false,
        }),
    }),
    defineField({
      name: 'orderItems',
      title: 'Order Items',
      type: 'array',
      of: [{type: 'reference', to: [{type: 'menuItem'}]}],
    }),
    defineField({
      name: 'totalPrice',
      title: 'Total Price',
      type: 'number',
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: 'status',
      title: 'Order Status',
      type: 'string',
      options: {
        list: ['Pending', 'Processing', 'Shipped', 'Delivered'],
      },
      initialValue: 'Pending',
    }),
  ],
})
