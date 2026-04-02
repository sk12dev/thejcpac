import { Header } from "@/components/header"
import { HeroSection } from "@/components/hero-section"
import { UpcomingEvents } from "@/components/upcoming-events"
import { AboutSection } from "@/components/about-section"
import { VenueSection } from "@/components/venue-section"
import { NewsletterSection } from "@/components/newsletter-section"
import { Footer } from "@/components/footer"

export default function Home() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <UpcomingEvents />
      <AboutSection />
      <VenueSection />
      <NewsletterSection />
      <Footer />
    </main>
  )
}
