import type { Metadata } from "next"

import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { UpcomingEvents } from "@/components/upcoming-events"
import { AboutSection } from "@/components/about-section"
import { VenueSection } from "@/components/venue-section"
import { FaqSection } from "@/components/faq-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"
import { getSiteContent } from "@/lib/get-site-content"

export async function generateMetadata(): Promise<Metadata> {
  const content = await getSiteContent()

  return {
    title: content.metaTitle,
    description: content.metaDescription,
  }
}

export default async function Home() {
  const content = await getSiteContent()

  return (
    <main className="min-h-screen bg-background">
      <Header {...content.header} />
      <HeroSection {...content.hero} />
      <UpcomingEvents {...content.eventsSection} />
      <AboutSection {...content.about} />
      <VenueSection {...content.venue} />
      <FaqSection {...content.faq} />
      <NewsletterSection {...content.newsletter} />
      <Footer {...content.footer} />
    </main>
  )
}
