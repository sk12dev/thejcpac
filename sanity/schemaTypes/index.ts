import { aboutFeature, aboutParagraph, link, socialLink } from "./objects"
import { event } from "./event"
import { homepage } from "./homepage"
import { siteSettings } from "./siteSettings"

export const schemaTypes = [
  link,
  socialLink,
  aboutFeature,
  aboutParagraph,
  event,
  homepage,
  siteSettings,
]

export const singletonTypes = new Set(["homepage", "siteSettings"])
