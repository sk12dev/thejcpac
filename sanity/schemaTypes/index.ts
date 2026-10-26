import { aboutFeature, aboutParagraph, faqItem, link, socialLink } from "./objects"
import { event } from "./event"
import { homepage } from "./homepage"
import { siteSettings } from "./siteSettings"

export const schemaTypes = [
  link,
  socialLink,
  aboutFeature,
  aboutParagraph,
  faqItem,
  event,
  homepage,
  siteSettings,
]

export const singletonTypes = new Set(["homepage", "siteSettings"])
