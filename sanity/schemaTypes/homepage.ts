import { defineField, defineType } from "sanity"

const currentAbout = [
  "Finished in 2026, the Judy Chandler Fine Arts Center, located inside Bullitt East High School, stands as a beacon of cultural enrichment in Mt. Washington, Kentucky. Our mission is to bring world-class performances to our community while nurturing local talent and fostering a love for the arts in all generations.",
  "Whether you're here for a school concert, a local production, or a community celebration, our doors are open to all who seek the transformative power of live performance.",
]

export const homepage = defineType({
  name: "homepage",
  title: "Homepage",
  type: "document",
  groups: [
    { name: "hero", title: "Hero", default: true },
    { name: "events", title: "Events" },
    { name: "about", title: "About" },
    { name: "venue", title: "Venue" },
    { name: "newsletter", title: "Newsletter" },
  ],
  fields: [
    defineField({
      name: "hero",
      title: "Hero",
      type: "object",
      group: "hero",
      fields: [
        defineField({
          name: "locationLabel",
          title: "Location label",
          type: "string",
          initialValue: "Mt. Washington, Kentucky",
        }),
        defineField({
          name: "headlineBefore",
          title: "Headline start",
          type: "string",
          initialValue: "Where",
        }),
        defineField({
          name: "headlineGold",
          title: "Gold word",
          type: "string",
          initialValue: "Arts",
        }),
        defineField({
          name: "headlineMiddle",
          title: "Middle word",
          type: "string",
          initialValue: "Come",
        }),
        defineField({
          name: "headlineAccent",
          title: "Coral word",
          type: "string",
          initialValue: "Alive",
        }),
        defineField({
          name: "description",
          type: "text",
          rows: 3,
          initialValue:
            "Experience local theater, concerts, dance performances, and community events at the heart of Bullitt County.",
        }),
        defineField({
          name: "backgroundImage",
          title: "Background image",
          type: "image",
          options: { hotspot: true },
          fields: [
            defineField({ name: "alt", title: "Alt text", type: "string" }),
          ],
        }),
        defineField({
          name: "primaryCtaLabel",
          title: "Primary button label",
          type: "string",
          initialValue: "Get Tickets",
        }),
        defineField({
          name: "primaryCtaHref",
          title: "Primary button link",
          type: "string",
          description: "Leave blank to use the ticket link from Site Settings.",
        }),
        defineField({
          name: "secondaryCtaLabel",
          title: "Secondary button label",
          type: "string",
          initialValue: "View Schedule",
        }),
        defineField({
          name: "secondaryCtaHref",
          title: "Secondary button link",
          type: "string",
          initialValue: "#events",
        }),
      ],
    }),
    defineField({
      name: "eventsSection",
      title: "Events section",
      type: "object",
      group: "events",
      fields: [
        defineField({
          name: "eyebrow",
          type: "string",
          initialValue: "What's On Stage",
        }),
        defineField({
          name: "title",
          type: "string",
          initialValue: "Upcoming Events",
        }),
        defineField({
          name: "description",
          type: "text",
          rows: 3,
          initialValue:
            "From riveting theater productions to soul-stirring concerts, discover the performances that await you.",
        }),
        defineField({
          name: "viewAllLabel",
          title: "View all label",
          type: "string",
          initialValue: "View Full Schedule",
        }),
        defineField({
          name: "viewAllHref",
          title: "View all link",
          type: "string",
          initialValue: "#events",
        }),
      ],
    }),
    defineField({
      name: "about",
      title: "About",
      type: "object",
      group: "about",
      fields: [
        defineField({
          name: "eyebrow",
          type: "string",
          initialValue: "About Us",
        }),
        defineField({
          name: "title",
          type: "string",
          initialValue: "The Heart of Bullitt County's Arts Scene",
        }),
        defineField({
          name: "paragraphs",
          type: "array",
          of: [{ type: "aboutParagraph" }],
          initialValue: currentAbout.map((text) => ({
            _type: "aboutParagraph",
            text,
          })),
        }),
        defineField({
          name: "features",
          type: "array",
          of: [{ type: "aboutFeature" }],
          initialValue: [
            {
              _type: "aboutFeature",
              icon: "theater",
              title: "World-Class Productions",
              description:
                "From Broadway classics to original works, experience theater at its finest.",
            },
            {
              _type: "aboutFeature",
              icon: "music",
              title: "Live Performances",
              description:
                "Concerts, recitals, and musical events that move the soul.",
            },
            {
              _type: "aboutFeature",
              icon: "users",
              title: "Community Focus",
              description:
                "A gathering place for schools, local artists, and community celebrations.",
            },
            {
              _type: "aboutFeature",
              icon: "star",
              title: "Exceptional Experience",
              description:
                "State-of-the-art acoustics and comfortable seating for every guest.",
            },
          ],
        }),
      ],
    }),
    defineField({
      name: "venue",
      title: "Venue",
      type: "object",
      group: "venue",
      fields: [
        defineField({
          name: "eyebrow",
          type: "string",
          initialValue: "Plan Your Visit",
        }),
        defineField({
          name: "title",
          type: "string",
          initialValue: "Visit Our Venue",
        }),
        defineField({
          name: "description",
          type: "text",
          rows: 3,
          initialValue:
            "Conveniently located in Mt. Washington, our state-of-the-art facility is designed for an exceptional experience.",
        }),
      ],
    }),
    defineField({
      name: "newsletter",
      title: "Newsletter",
      type: "object",
      group: "newsletter",
      fields: [
        defineField({
          name: "title",
          type: "string",
          initialValue: "Stay in the Spotlight",
        }),
        defineField({
          name: "description",
          type: "text",
          rows: 3,
          initialValue:
            "Subscribe to our newsletter for exclusive presale access, behind-the-scenes content, and the latest updates on upcoming performances.",
        }),
        defineField({
          name: "successTitle",
          title: "Success title",
          type: "string",
          initialValue: "Thank you for subscribing!",
        }),
        defineField({
          name: "successMessage",
          title: "Success message",
          type: "string",
          initialValue: "You'll receive our next newsletter soon.",
        }),
        defineField({
          name: "placeholder",
          title: "Email placeholder",
          type: "string",
          initialValue: "Enter your email",
        }),
        defineField({
          name: "buttonLabel",
          title: "Button label",
          type: "string",
          initialValue: "Subscribe",
        }),
      ],
    }),
  ],
  preview: {
    prepare: () => ({ title: "Homepage" }),
  },
})
