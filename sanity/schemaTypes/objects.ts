import { defineField, defineType } from "sanity"

export const link = defineType({
  name: "link",
  title: "Link",
  type: "object",
  fields: [
    defineField({
      name: "label",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "href",
      title: "URL",
      type: "string",
      description: "A path such as #events, or a full https:// link.",
      validation: (rule) => rule.required(),
    }),
  ],
})

export const socialLink = defineType({
  name: "socialLink",
  title: "Social link",
  type: "object",
  fields: [
    defineField({
      name: "platform",
      type: "string",
      options: {
        list: [
          { title: "Facebook", value: "facebook" },
          { title: "Instagram", value: "instagram" },
          { title: "X (Twitter)", value: "twitter" },
          { title: "YouTube", value: "youtube" },
        ],
        layout: "radio",
      },
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "url",
      type: "url",
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "platform", subtitle: "url" },
  },
})

export const aboutFeature = defineType({
  name: "aboutFeature",
  title: "Feature",
  type: "object",
  fields: [
    defineField({
      name: "icon",
      type: "string",
      options: {
        list: [
          { title: "Theater", value: "theater" },
          { title: "Music", value: "music" },
          { title: "Community", value: "users" },
          { title: "Star", value: "star" },
        ],
        layout: "radio",
      },
      initialValue: "star",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "description",
      type: "text",
      rows: 3,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "title", subtitle: "description" },
  },
})

export const faqItem = defineType({
  name: "faqItem",
  title: "Question",
  type: "object",
  fields: [
    defineField({
      name: "question",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "answer",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "question", subtitle: "answer" },
  },
})

export const aboutParagraph = defineType({
  name: "aboutParagraph",
  title: "Paragraph",
  type: "object",
  fields: [
    defineField({
      name: "text",
      type: "text",
      rows: 4,
      validation: (rule) => rule.required(),
    }),
  ],
  preview: {
    select: { title: "text" },
  },
})
