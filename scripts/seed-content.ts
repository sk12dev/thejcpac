import { createReadStream } from "node:fs"
import path from "node:path"

import { getCliClient } from "sanity/cli"

import { fallbackContent } from "../lib/site-content"

const client = getCliClient({ apiVersion: "2026-03-01" })

async function uploadImage(relativePath: string) {
  const filePath = path.join(process.cwd(), relativePath)
  const asset = await client.assets.upload(
    "image",
    createReadStream(filePath),
    { filename: path.basename(filePath) },
  )
  return asset._id
}

function link(label: string, href: string) {
  return { _type: "link" as const, label, href }
}

function paragraph(text: string, key: string) {
  return { _type: "aboutParagraph" as const, _key: key, text }
}

function feature(
  icon: string,
  title: string,
  description: string,
  key: string,
) {
  return { _type: "aboutFeature" as const, _key: key, icon, title, description }
}

async function seed() {
  const { hero, about, eventsSection, venue, faq, newsletter, header, footer } =
    fallbackContent

  let heroImage: { _type: "image"; alt: string; asset: { _type: "reference"; _ref: string } } | undefined

  try {
    const assetId = await uploadImage("public/images/JCFAC-RoomView.jpg")
    heroImage = {
      _type: "image",
      alt: hero.imageAlt,
      asset: { _type: "reference", _ref: assetId },
    }
  } catch (error) {
    console.warn("Skipped hero image upload.", error)
  }

  await client.createOrReplace({
    _id: "siteSettings",
    _type: "siteSettings",
    shortName: header.name,
    descriptor: header.tagline,
    metaTitle: fallbackContent.metaTitle,
    metaDescription: fallbackContent.metaDescription,
    footerBlurb: footer.blurb,
    copyrightName: footer.copyrightName,
    ticketLabel: header.ticketLabel,
    venueName: venue.venueName,
    street: venue.street,
    cityStateZip: venue.cityStateZip,
    phone: venue.phone,
    email: venue.email,
    boxOfficeHours: venue.hours,
    navLinks: header.nav.map((item, index) => ({
      ...link(item.label, item.href),
      _key: `nav-${index}`,
    })),
    quickLinks: footer.quickLinks.map((item, index) => ({
      ...link(item.label, item.href),
      _key: `quick-${index}`,
    })),
    supportLinks: footer.supportLinks.map((item, index) => ({
      ...link(item.label, item.href),
      _key: `support-${index}`,
    })),
    legalLinks: footer.legalLinks.map((item, index) => ({
      ...link(item.label, item.href),
      _key: `legal-${index}`,
    })),
  })

  await client.createOrReplace({
    _id: "homepage",
    _type: "homepage",
    hero: {
      locationLabel: hero.locationLabel,
      headlineBefore: hero.headlineBefore,
      headlineGold: hero.headlineGold,
      headlineMiddle: hero.headlineMiddle,
      headlineAccent: hero.headlineAccent,
      description: hero.description,
      primaryCtaLabel: hero.primaryCtaLabel,
      secondaryCtaLabel: hero.secondaryCtaLabel,
      secondaryCtaHref: hero.secondaryCtaHref,
      ...(heroImage ? { backgroundImage: heroImage } : {}),
    },
    eventsSection: {
      eyebrow: eventsSection.eyebrow,
      title: eventsSection.title,
      description: eventsSection.description,
      viewAllLabel: eventsSection.viewAllLabel,
      viewAllHref: eventsSection.viewAllHref,
    },
    about: {
      eyebrow: about.eyebrow,
      title: about.title,
      paragraphs: about.paragraphs.map((text, index) =>
        paragraph(text, `paragraph-${index}`),
      ),
      features: about.features.map((item, index) =>
        feature(item.icon, item.title, item.description, `feature-${index}`),
      ),
    },
    venue: {
      eyebrow: venue.eyebrow,
      title: venue.title,
      description: venue.description,
    },
    faq: {
      eyebrow: faq.eyebrow,
      title: faq.title,
      description: faq.description,
      items: faq.items.map((item, index) => ({
        _type: "faqItem",
        _key: `faq-${index}`,
        question: item.question,
        answer: item.answer,
      })),
    },
    newsletter,
  })

  const eventDates = ["2026-04-18", "2026-04-25", "2026-05-02"]

  for (const [index, event] of eventsSection.events.entries()) {
    await client.createOrReplace({
      _id: `event-${event.id}`,
      _type: "event",
      title: event.title,
      description: event.description,
      category: event.category,
      dateLabel: event.date,
      time: event.time,
      ticketsAvailable: event.ticketsAvailable,
      startDate: eventDates[index],
      sortOrder: index + 1,
    })
  }

  console.log("Published the current site content to Sanity.")
}

seed().catch((error) => {
  console.error(error)
  process.exit(1)
})
