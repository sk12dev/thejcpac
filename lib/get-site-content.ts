import { cache } from "react"

import {
  fallbackContent,
  mapsDirectionsHref,
  type FeatureIcon,
  type NavLink,
  type SiteContent,
  type SiteEvent,
  type SocialPlatform,
} from "@/lib/site-content"
import { isSanityConfigured } from "@/sanity/env"
import { client } from "@/sanity/lib/client"
import { urlForImage } from "@/sanity/lib/image"
import { siteQuery } from "@/sanity/lib/queries"

type SanityLink = { label?: string | null; href?: string | null } | null

type SanityImage = {
  alt?: string | null
  asset?: { _ref?: string | null } | null
} | null

type SanitySocial = {
  platform?: string | null
  url?: string | null
} | null

type QueryResult = {
  settings?: {
    shortName?: string | null
    descriptor?: string | null
    metaTitle?: string | null
    metaDescription?: string | null
    footerBlurb?: string | null
    copyrightName?: string | null
    ticketLabel?: string | null
    ticketHref?: string | null
    venueName?: string | null
    street?: string | null
    cityStateZip?: string | null
    phone?: string | null
    email?: string | null
    boxOfficeHours?: Array<string | null> | null
    headerLogo?: SanityImage
    footerLogo?: SanityImage
    navLinks?: SanityLink[] | null
    quickLinks?: SanityLink[] | null
    supportLinks?: SanityLink[] | null
    legalLinks?: SanityLink[] | null
    socialLinks?: SanitySocial[] | null
  } | null
  home?: {
    hero?: {
      locationLabel?: string | null
      headlineBefore?: string | null
      headlineGold?: string | null
      headlineMiddle?: string | null
      headlineAccent?: string | null
      description?: string | null
      backgroundImage?: SanityImage
      primaryCtaLabel?: string | null
      primaryCtaHref?: string | null
      secondaryCtaLabel?: string | null
      secondaryCtaHref?: string | null
    } | null
    eventsSection?: {
      eyebrow?: string | null
      title?: string | null
      description?: string | null
      viewAllLabel?: string | null
      viewAllHref?: string | null
    } | null
    about?: {
      eyebrow?: string | null
      title?: string | null
      paragraphs?: Array<{ text?: string | null } | null> | null
      features?: Array<{
        icon?: string | null
        title?: string | null
        description?: string | null
      } | null> | null
    } | null
    venue?: {
      eyebrow?: string | null
      title?: string | null
      description?: string | null
    } | null
    faq?: {
      eyebrow?: string | null
      title?: string | null
      description?: string | null
      items?: Array<{
        question?: string | null
        answer?: string | null
      } | null> | null
    } | null
    newsletter?: {
      title?: string | null
      description?: string | null
      successTitle?: string | null
      successMessage?: string | null
      placeholder?: string | null
      buttonLabel?: string | null
    } | null
  } | null
  events?: Array<{
    _id?: string | null
    title?: string | null
    description?: string | null
    category?: string | null
    dateLabel?: string | null
    time?: string | null
    image?: SanityImage
    ticketUrl?: string | null
  } | null> | null
}

const featureIcons: FeatureIcon[] = ["theater", "music", "users", "star"]
const socialPlatforms: SocialPlatform[] = [
  "facebook",
  "instagram",
  "twitter",
  "youtube",
]

const categoryImages: Record<string, string> = {
  Theater: "/images/event-theater.jpg",
  Concert: "/images/event-concert.jpg",
  Dance: "/images/event-dance.jpg",
}

function text(value: string | null | undefined, fallback: string) {
  const next = value?.trim()
  return next ? next : fallback
}

function lines(value: Array<string | null> | null | undefined, fallback: string[]) {
  const next = value?.map((item) => item?.trim() ?? "").filter(Boolean)
  return next && next.length > 0 ? next : fallback
}

function links(value: SanityLink[] | null | undefined, fallback: NavLink[]) {
  const next = (value ?? [])
    .map((item) => ({
      label: item?.label?.trim() ?? "",
      href: item?.href?.trim() ?? "",
    }))
    .filter((item) => item.label && item.href)

  return next.length > 0 ? next : fallback
}

function withFaqLink(items: NavLink[], label: string) {
  if (items.some((item) => item.href === "#faq")) return items
  const faq = { label, href: "#faq" }
  const contactIndex = items.findIndex((item) => item.href === "#contact")
  if (contactIndex === -1) return [...items, faq]
  return [
    ...items.slice(0, contactIndex),
    faq,
    ...items.slice(contactIndex),
  ]
}

function featureIcon(value: string | null | undefined): FeatureIcon {
  return featureIcons.includes(value as FeatureIcon)
    ? (value as FeatureIcon)
    : "star"
}

function socialPlatform(value: string | null | undefined): SocialPlatform | null {
  return socialPlatforms.includes(value as SocialPlatform)
    ? (value as SocialPlatform)
    : null
}

function imageSrc(image: SanityImage, width: number, fallback: string) {
  return urlForImage(image, width) || fallback
}

function mergeContent(data: QueryResult | null): SiteContent {
  const settings = data?.settings
  const home = data?.home
  const hero = home?.hero
  const eventsSection = home?.eventsSection
  const about = home?.about
  const venue = home?.venue
  const faq = home?.faq
  const newsletter = home?.newsletter
  const fallback = fallbackContent

  const street = text(settings?.street, fallback.venue.street)
  const cityStateZip = text(settings?.cityStateZip, fallback.venue.cityStateZip)
  const ticketHref = text(settings?.ticketHref, fallback.header.ticketHref)
  const ticketLabel = text(settings?.ticketLabel, fallback.header.ticketLabel)

  const paragraphs = (about?.paragraphs ?? [])
    .map((paragraph) => paragraph?.text?.trim() ?? "")
    .filter(Boolean)

  const features = (about?.features ?? [])
    .map((feature) => ({
      icon: featureIcon(feature?.icon),
      title: feature?.title?.trim() ?? "",
      description: feature?.description?.trim() ?? "",
    }))
    .filter((feature) => feature.title && feature.description)

  const socials = (settings?.socialLinks ?? [])
    .map((item) => {
      const platform = socialPlatform(item?.platform)
      const href = item?.url?.trim() ?? ""
      return platform && href ? { platform, href } : null
    })
    .filter((item): item is { platform: SocialPlatform; href: string } => item !== null)

  const publishedEvents = (data?.events ?? [])
    .map((event): SiteEvent | null => {
      const title = event?.title?.trim() ?? ""
      if (!title) return null
      const category = text(event?.category, "Community")
      return {
        id: event?._id || title,
        title,
        description: text(event?.description, ""),
        date: text(event?.dateLabel, ""),
        time: text(event?.time, ""),
        imageSrc: imageSrc(
          event?.image ?? null,
          1200,
          categoryImages[category] || fallback.hero.imageSrc,
        ),
        imageAlt: text(event?.image?.alt, title),
        category,
        ticketHref: text(event?.ticketUrl, ticketHref),
      }
    })
    .filter((event): event is SiteEvent => event !== null)

  return {
    metaTitle: text(settings?.metaTitle, fallback.metaTitle),
    metaDescription: text(settings?.metaDescription, fallback.metaDescription),
    header: {
      logoSrc: imageSrc(settings?.headerLogo ?? null, 240, fallback.header.logoSrc),
      logoAlt: text(settings?.headerLogo?.alt, fallback.header.logoAlt),
      name: text(settings?.shortName, fallback.header.name),
      tagline: text(settings?.descriptor, fallback.header.tagline),
      ticketLabel,
      ticketHref,
      nav: withFaqLink(links(settings?.navLinks, fallback.header.nav), "FAQ"),
    },
    hero: {
      locationLabel: text(hero?.locationLabel, fallback.hero.locationLabel),
      headlineBefore: text(hero?.headlineBefore, fallback.hero.headlineBefore),
      headlineGold: text(hero?.headlineGold, fallback.hero.headlineGold),
      headlineMiddle: text(hero?.headlineMiddle, fallback.hero.headlineMiddle),
      headlineAccent: text(hero?.headlineAccent, fallback.hero.headlineAccent),
      description: text(hero?.description, fallback.hero.description),
      imageSrc: imageSrc(hero?.backgroundImage ?? null, 2000, fallback.hero.imageSrc),
      imageAlt: text(hero?.backgroundImage?.alt, fallback.hero.imageAlt),
      primaryCtaLabel: text(hero?.primaryCtaLabel, fallback.hero.primaryCtaLabel),
      primaryCtaHref: text(hero?.primaryCtaHref, ticketHref),
      secondaryCtaLabel: text(
        hero?.secondaryCtaLabel,
        fallback.hero.secondaryCtaLabel,
      ),
      secondaryCtaHref: text(hero?.secondaryCtaHref, fallback.hero.secondaryCtaHref),
    },
    eventsSection: {
      eyebrow: text(eventsSection?.eyebrow, fallback.eventsSection.eyebrow),
      title: text(eventsSection?.title, fallback.eventsSection.title),
      description: text(eventsSection?.description, fallback.eventsSection.description),
      viewAllLabel: text(eventsSection?.viewAllLabel, fallback.eventsSection.viewAllLabel),
      viewAllHref: text(eventsSection?.viewAllHref, fallback.eventsSection.viewAllHref),
      events:
        publishedEvents.length > 0
          ? publishedEvents
          : fallback.eventsSection.events.map((event) => ({
              ...event,
              ticketHref,
            })),
    },
    about: {
      eyebrow: text(about?.eyebrow, fallback.about.eyebrow),
      title: text(about?.title, fallback.about.title),
      paragraphs: paragraphs.length > 0 ? paragraphs : fallback.about.paragraphs,
      features: features.length > 0 ? features : fallback.about.features,
    },
    venue: {
      eyebrow: text(venue?.eyebrow, fallback.venue.eyebrow),
      title: text(venue?.title, fallback.venue.title),
      description: text(venue?.description, fallback.venue.description),
      venueName: text(settings?.venueName, fallback.venue.venueName),
      street,
      cityStateZip,
      hours: lines(settings?.boxOfficeHours, fallback.venue.hours),
      phone: text(settings?.phone, fallback.venue.phone),
      email: text(settings?.email, fallback.venue.email),
      directionsHref: mapsDirectionsHref(street, cityStateZip),
    },
    faq: {
      eyebrow: text(faq?.eyebrow, fallback.faq.eyebrow),
      title: text(faq?.title, fallback.faq.title),
      description: text(faq?.description, fallback.faq.description),
      items: (() => {
        const published = (faq?.items ?? [])
          .map((item) => ({
            question: item?.question?.trim() ?? "",
            answer: item?.answer?.trim() ?? "",
          }))
          .filter((item) => item.question && item.answer)
        return published.length > 0 ? published : fallback.faq.items
      })(),
    },
    newsletter: {
      title: text(newsletter?.title, fallback.newsletter.title),
      description: text(newsletter?.description, fallback.newsletter.description),
      successTitle: text(newsletter?.successTitle, fallback.newsletter.successTitle),
      successMessage: text(
        newsletter?.successMessage,
        fallback.newsletter.successMessage,
      ),
      placeholder: text(newsletter?.placeholder, fallback.newsletter.placeholder),
      buttonLabel: text(newsletter?.buttonLabel, fallback.newsletter.buttonLabel),
    },
    footer: {
      logoSrc: imageSrc(settings?.footerLogo ?? null, 240, fallback.footer.logoSrc),
      logoAlt: text(settings?.footerLogo?.alt, fallback.footer.logoAlt),
      name: text(settings?.shortName, fallback.footer.name),
      tagline: text(settings?.descriptor, fallback.footer.tagline),
      blurb: text(settings?.footerBlurb, fallback.footer.blurb),
      quickLinks: withFaqLink(
        links(settings?.quickLinks, fallback.footer.quickLinks),
        "FAQs",
      ),
      supportLinks: links(settings?.supportLinks, fallback.footer.supportLinks),
      socials: socials.length > 0 ? socials : fallback.footer.socials,
      street,
      cityStateZip,
      copyrightName: text(settings?.copyrightName, fallback.footer.copyrightName),
      legalLinks: links(settings?.legalLinks, fallback.footer.legalLinks),
    },
  }
}

export const getSiteContent = cache(async (): Promise<SiteContent> => {
  if (!isSanityConfigured) return fallbackContent

  try {
    const data = await client.fetch<QueryResult>(
      siteQuery,
      {},
      { next: { revalidate: 60, tags: ["sanity"] } },
    )
    return mergeContent(data)
  } catch (error) {
    console.error(
      "Failed to load content from Sanity. Using the built-in site content.",
      error,
    )
    return fallbackContent
  }
})
