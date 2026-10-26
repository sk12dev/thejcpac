import { defineField, defineType } from "sanity"

export const event = defineType({
  name: "event",
  title: "Event",
  type: "document",
  fields: [
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "category",
      type: "string",
      options: {
        list: [
          { title: "Theater", value: "Theater" },
          { title: "Concert", value: "Concert" },
          { title: "Dance", value: "Dance" },
          { title: "Community", value: "Community" },
        ],
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "dateLabel",
      title: "Date label",
      description: 'Shown on the card, for example "April 18-20, 2026".',
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "startDate",
      title: "Start date",
      description: "Used to order the cards. This date is not shown on the site.",
      type: "date",
    }),
    defineField({
      name: "time",
      title: "Time",
      type: "string",
      description: 'Shown on the card, for example "7:30 PM".',
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({
          name: "alt",
          title: "Alt text",
          type: "string",
        }),
      ],
    }),
    defineField({
      name: "ticketUrl",
      title: "Ticket link",
      type: "url",
      description: "Leave blank to use the ticket link from Site Settings.",
    }),
    defineField({
      name: "sortOrder",
      title: "Sort order",
      type: "number",
      description: "Lower numbers appear first. Leave blank to sort by start date.",
    }),
  ],
  orderings: [
    {
      title: "Start date",
      name: "startDateAsc",
      by: [{ field: "startDate", direction: "asc" }],
    },
    {
      title: "Sort order",
      name: "sortOrderAsc",
      by: [{ field: "sortOrder", direction: "asc" }],
    },
  ],
  preview: {
    select: {
      title: "title",
      subtitle: "dateLabel",
      media: "image",
    },
  },
})
