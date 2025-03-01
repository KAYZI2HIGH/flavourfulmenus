import {defineType, defineField} from 'sanity'

export const menuItem = defineType({
  name: 'menuItem',
  title: 'Menu Item',
  type: 'document',
  fields: [
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          {title: 'Deals', value: 'Deals'},
          {title: "Chef's Specials", value: 'ChefsSpecials'},
          {title: 'Meals', value: 'Meals'},
          {title: 'Snacks', value: 'Snacks'},
          {title: 'Drinks', value: 'Drinks'},
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'name',
      title: 'Item Name',
      type: 'string',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
    }),
    defineField({
      name: 'price',
      title: 'Price',
      type: 'number',
      validation: (rule) => rule.min(0),
    }),
    defineField({
      name: 'originalPrice',
      title: 'Original Price (if discounted)',
      type: 'number',
    }),
    defineField({
      name: 'discount',
      title: 'Discount Label',
      type: 'string',
    }),
    defineField({
      name: 'code',
      title: 'Discount Code',
      type: 'string',
    }),
    defineField({
      name: 'tag',
      title: 'Tag (e.g., NEW, PREMIUM, SIGNATURE)',
      type: 'string',
    }),
    defineField({
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    }),
  ],
  preview: {
    select: {
      title: 'name',
      media: 'image',
    },
  },
})
