import {
  createImageUrlBuilder,
  type SanityImageSource,
} from "@sanity/image-url"

import { client } from "./client"

const builder = createImageUrlBuilder(client)

type ImageField = {
  alt?: string | null
  asset?: { _ref?: string | null } | null
} | null

export function urlForImage(source: ImageField, width: number) {
  if (!source?.asset?._ref) return null

  return builder
    .image(source as SanityImageSource)
    .width(width)
    .auto("format")
    .url()
}
