"use client"

import Image from "next/image"
import { Button } from "@/components/ui/button"
import { ContentLink, isNavigableHref } from "@/components/content-link"
import { Menu, X } from "lucide-react"
import { useState } from "react"
import type { HeaderContent } from "@/lib/site-content"

export function Header({
  logoSrc,
  logoAlt,
  name,
  tagline,
  ticketLabel,
  ticketHref,
  nav,
}: HeaderContent) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <ContentLink href="/" className="flex items-center gap-3">
            <Image
              src={logoSrc}
              alt={logoAlt}
              width={30}
              height={60}
              className="w-6 h-12 md:w-10 md:h-14"
            />
            <div className="hidden sm:block">
              <p className="text-lg font-bold tracking-wide text-foreground">
                {name}
              </p>
              <p className="text-xs text-[#2a7c7c] tracking-widest uppercase">
                {tagline}
              </p>
            </div>
          </ContentLink>

          <nav className="hidden md:flex items-center gap-8">
            {nav.map((item) => (
              <ContentLink
                key={`${item.label}-${item.href}`}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium"
              >
                {item.label}
              </ContentLink>
            ))}
            {isNavigableHref(ticketHref) ? (
              <Button
                asChild
                className="bg-[#e8b923] text-background hover:bg-[#e8b923]/90"
              >
                <ContentLink href={ticketHref}>{ticketLabel}</ContentLink>
              </Button>
            ) : (
              <Button className="bg-[#e8b923] text-background hover:bg-[#e8b923]/90">
                {ticketLabel}
              </Button>
            )}
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
            aria-expanded={mobileMenuOpen}
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen ? (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            {nav.map((item) => (
              <ContentLink
                key={`${item.label}-${item.href}`}
                href={item.href}
                className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
                onClick={() => setMobileMenuOpen(false)}
              >
                {item.label}
              </ContentLink>
            ))}
            {isNavigableHref(ticketHref) ? (
              <Button
                asChild
                className="bg-[#e8b923] text-background hover:bg-[#e8b923]/90 w-full"
              >
                <ContentLink href={ticketHref}>{ticketLabel}</ContentLink>
              </Button>
            ) : (
              <Button className="bg-[#e8b923] text-background hover:bg-[#e8b923]/90 w-full">
                {ticketLabel}
              </Button>
            )}
          </nav>
        </div>
      ) : null}
    </header>
  )
}
