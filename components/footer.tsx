import Image from "next/image"
import { Facebook, Instagram, Twitter, Youtube, type LucideIcon } from "lucide-react"
import { ContentLink } from "@/components/content-link"
import type { FooterContent, SocialPlatform } from "@/lib/site-content"

const socialIcons: Record<SocialPlatform, LucideIcon> = {
  facebook: Facebook,
  instagram: Instagram,
  twitter: Twitter,
  youtube: Youtube,
}

const socialLabels: Record<SocialPlatform, string> = {
  facebook: "Facebook",
  instagram: "Instagram",
  twitter: "Twitter",
  youtube: "YouTube",
}

export function Footer({
  logoSrc,
  logoAlt,
  name,
  tagline,
  blurb,
  quickLinks,
  supportLinks,
  socials,
  street,
  cityStateZip,
  copyrightName,
  legalLinks,
}: FooterContent) {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <ContentLink href="/" className="flex items-center gap-3 mb-6">
              <Image
                src={logoSrc}
                alt={logoAlt}
                width={60}
                height={60}
                className="w-14 h-14"
              />
              <div>
                <p className="text-lg font-bold tracking-wide text-foreground">
                  {name}
                </p>
                <p className="text-xs text-[#2a7c7c] tracking-widest uppercase">
                  {tagline}
                </p>
              </div>
            </ContentLink>
            <p className="text-muted-foreground text-sm">{blurb}</p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={`${item.label}-${item.href}`}>
                  <ContentLink
                    href={item.href}
                    className="text-muted-foreground hover:text-[#e8b923] transition-colors text-sm"
                  >
                    {item.label}
                  </ContentLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              {supportLinks.map((item) => (
                <li key={`${item.label}-${item.href}`}>
                  <ContentLink
                    href={item.href}
                    className="text-muted-foreground hover:text-[#e8b923] transition-colors text-sm"
                  >
                    {item.label}
                  </ContentLink>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              {socials.map((item) => {
                const Icon = socialIcons[item.platform]
                return (
                  <ContentLink
                    key={item.platform}
                    href={item.href}
                    className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-[#e8b923] hover:text-background transition-colors text-muted-foreground"
                    aria-label={socialLabels[item.platform]}
                  >
                    <Icon className="w-5 h-5" />
                  </ContentLink>
                )
              })}
            </div>
            <p className="text-muted-foreground text-sm">
              {street}
              <br />
              {cityStateZip}
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} {copyrightName}. All rights reserved.
          </p>
          <div className="flex gap-6">
            {legalLinks.map((item) => (
              <ContentLink
                key={`${item.label}-${item.href}`}
                href={item.href}
                className="text-muted-foreground hover:text-[#e8b923] transition-colors text-sm"
              >
                {item.label}
              </ContentLink>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
