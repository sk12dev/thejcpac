import { defineField, defineType } from "sanity"

export const siteSettings = defineType({
  name: "siteSettings",
  title: "Site Settings",
  type: "document",
  fields: [
    defineField({
      name: "shortName",
      title: "Short name",
      type: "string",
      description: "Shown beside the logo.",
      initialValue: "Judy Chandler",
    }),
    defineField({
      name: "descriptor",
      title: "Descriptor",
      type: "string",
      description: "Small line under the short name.",
      initialValue: "Fine Arts Center",
    }),
    defineField({
      name: "metaTitle",
      title: "Browser title",
      type: "string",
      initialValue: "Judy Chandler Fine Arts Center | Mt. Washington, KY",
    }),
    defineField({
      name: "metaDescription",
      title: "Search description",
      type: "text",
      rows: 3,
      initialValue:
        "Welcome to the Judy Chandler Fine Arts Center in Mt. Washington, Kentucky. Experience world-class theater, concerts, dance, and community events.",
    }),
    defineField({
      name: "headerLogo",
      title: "Header logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
      ],
    }),
    defineField({
      name: "footerLogo",
      title: "Footer logo",
      type: "image",
      options: { hotspot: true },
      fields: [
        defineField({ name: "alt", title: "Alt text", type: "string" }),
      ],
    }),
    defineField({
      name: "footerBlurb",
      title: "Footer description",
      type: "text",
      rows: 3,
      initialValue:
        "Bringing world-class performing arts to the heart of Bullitt County since 2020.",
    }),
    defineField({
      name: "copyrightName",
      title: "Copyright name",
      type: "string",
      initialValue: "Judy Chandler Fine Arts Center",
    }),
    defineField({
      name: "ticketLabel",
      title: "Ticket button label",
      type: "string",
      initialValue: "Buy Tickets",
    }),
    defineField({
      name: "ticketHref",
      title: "Ticket button link",
      type: "string",
      description: "Used by the header button and event cards that have no link of their own.",
    }),
    defineField({
      name: "venueName",
      title: "Venue name",
      type: "string",
      initialValue: "Bullitt East High School",
    }),
    defineField({
      name: "street",
      title: "Street",
      type: "string",
      initialValue: "11450 Highway 44 East",
    }),
    defineField({
      name: "cityStateZip",
      title: "City, state, ZIP",
      type: "string",
      initialValue: "Mt. Washington, KY 40047",
    }),
    defineField({
      name: "phone",
      type: "string",
      initialValue: "(502) 869-JCFA",
    }),
    defineField({
      name: "email",
      type: "string",
      initialValue: "jcfac@bullittschools.org",
    }),
    defineField({
      name: "boxOfficeHours",
      title: "Box office hours",
      type: "array",
      of: [{ type: "string" }],
      initialValue: [
        "Monday - Friday: 10:00 AM - 2:00 PM",
        "Saturday: Closed (except event days)",
        "Sunday: Closed (except event days)",
      ],
    }),
    defineField({
      name: "navLinks",
      title: "Header links",
      type: "array",
      of: [{ type: "link" }],
    }),
    defineField({
      name: "quickLinks",
      title: "Footer quick links",
      type: "array",
      of: [{ type: "link" }],
    }),
    defineField({
      name: "supportLinks",
      title: "Footer support links",
      type: "array",
      of: [{ type: "link" }],
    }),
    defineField({
      name: "legalLinks",
      title: "Footer legal links",
      type: "array",
      of: [{ type: "link" }],
    }),
    defineField({
      name: "socialLinks",
      title: "Social links",
      type: "array",
      of: [{ type: "socialLink" }],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Site Settings" }),
  },
})
