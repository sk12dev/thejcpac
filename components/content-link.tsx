import Link from "next/link"
import { forwardRef } from "react"

type ContentLinkProps = React.ComponentPropsWithoutRef<"a"> & {
  href: string
}

export function isNavigableHref(href: string) {
  return href.trim() !== "" && href.trim() !== "#"
}

export const ContentLink = forwardRef<HTMLAnchorElement, ContentLinkProps>(
  function ContentLink({ href, ...props }, ref) {
    if (href.startsWith("http")) {
      return (
        <a
          ref={ref}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          {...props}
        />
      )
    }

    return <Link ref={ref} href={href} {...props} />
  },
)
