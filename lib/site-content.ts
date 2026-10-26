export type NavLink = {
  label: string
  href: string
}

export type FeatureIcon = "theater" | "music" | "users" | "star"

export type SocialPlatform = "facebook" | "instagram" | "twitter" | "youtube"

export type SiteEvent = {
  id: string
  title: string
  description: string
  date: string
  time: string
  imageSrc: string
  imageAlt: string
  category: string
  ticketsAvailable: boolean
  ticketHref: string
}

export type HeaderContent = {
  logoSrc: string
  logoAlt: string
  name: string
  tagline: string
  ticketLabel: string
  ticketHref: string
  nav: NavLink[]
}

export type HeroContent = {
  locationLabel: string
  headlineBefore: string
  headlineGold: string
  headlineMiddle: string
  headlineAccent: string
  description: string
  imageSrc: string
  imageAlt: string
  primaryCtaLabel: string
  primaryCtaHref: string
  secondaryCtaLabel: string
  secondaryCtaHref: string
}

export type EventsSectionContent = {
  eyebrow: string
  title: string
  description: string
  viewAllLabel: string
  viewAllHref: string
  events: SiteEvent[]
}

export type AboutContent = {
  eyebrow: string
  title: string
  paragraphs: string[]
  features: Array<{
    icon: FeatureIcon
    title: string
    description: string
  }>
}

export type VenueContent = {
  eyebrow: string
  title: string
  description: string
  venueName: string
  street: string
  cityStateZip: string
  hours: string[]
  phone: string
  email: string
  directionsHref: string
}

export type FaqItem = {
  question: string
  answer: string
}

export type FaqContent = {
  eyebrow: string
  title: string
  description: string
  items: FaqItem[]
}

export type NewsletterContent = {
  title: string
  description: string
  successTitle: string
  successMessage: string
  placeholder: string
  buttonLabel: string
}

export type FooterContent = {
  logoSrc: string
  logoAlt: string
  name: string
  tagline: string
  blurb: string
  quickLinks: NavLink[]
  supportLinks: NavLink[]
  socials: Array<{ platform: SocialPlatform; href: string }>
  street: string
  cityStateZip: string
  copyrightName: string
  legalLinks: NavLink[]
}

export type SiteContent = {
  metaTitle: string
  metaDescription: string
  header: HeaderContent
  hero: HeroContent
  eventsSection: EventsSectionContent
  about: AboutContent
  venue: VenueContent
  faq: FaqContent
  newsletter: NewsletterContent
  footer: FooterContent
}

const ticketHref = "#"

export const fallbackContent: SiteContent = {
  metaTitle: "Judy Chandler Fine Arts Center | Mt. Washington, KY",
  metaDescription:
    "Welcome to the Judy Chandler Fine Arts Center in Mt. Washington, Kentucky. Experience world-class theater, concerts, dance, and community events.",
  header: {
    logoSrc: "/images/jcpac-logo.png",
    logoAlt: "Judy Chandler Fine Arts Center Logo",
    name: "Judy Chandler",
    tagline: "Fine Arts Center",
    ticketLabel: "Buy Tickets",
    ticketHref,
    nav: [
      { label: "Events", href: "#events" },
      { label: "About", href: "#about" },
      { label: "Venue", href: "#venue" },
      { label: "FAQ", href: "#faq" },
      { label: "Contact", href: "#contact" },
    ],
  },
  hero: {
    locationLabel: "Mt. Washington, Kentucky",
    headlineBefore: "Where",
    headlineGold: "Arts",
    headlineMiddle: "Come",
    headlineAccent: "Alive",
    description:
      "Experience local theater, concerts, dance performances, and community events at the heart of Bullitt County.",
    imageSrc: "/images/JCFAC-RoomView.jpg",
    imageAlt: "Judy Chandler Fine Arts Center Theater",
    primaryCtaLabel: "Get Tickets",
    primaryCtaHref: ticketHref,
    secondaryCtaLabel: "View Schedule",
    secondaryCtaHref: "#events",
  },
  eventsSection: {
    eyebrow: "What's On Stage",
    title: "Upcoming Events",
    description:
      "From riveting theater productions to soul-stirring concerts, discover the performances that await you.",
    viewAllLabel: "View Full Schedule",
    viewAllHref: "#events",
    events: [
      {
        id: "the-tempest",
        title: "The Tempest",
        description:
          "Shakespeare's magical tale of revenge, forgiveness, and the power of art. Join us for an enchanting evening of theater.",
        date: "April 18-20, 2026",
        time: "7:30 PM",
        imageSrc: "/images/event-theater.jpg",
        imageAlt: "The Tempest",
        category: "Theater",
        ticketsAvailable: true,
        ticketHref,
      },
      {
        id: "spring-symphony",
        title: "Spring Symphony Concert",
        description:
          "The Bullitt County Symphony Orchestra presents a celebration of classical masterpieces featuring works by Mozart and Beethoven.",
        date: "April 25, 2026",
        time: "8:00 PM",
        imageSrc: "/images/event-concert.jpg",
        imageAlt: "Spring Symphony Concert",
        category: "Concert",
        ticketsAvailable: true,
        ticketHref,
      },
      {
        id: "in-bloom",
        title: "In Bloom: Spring Dance Recital",
        description:
          "A beautiful showcase of local dance talent celebrating growth, creativity, and the joy of movement.",
        date: "May 2, 2026",
        time: "6:00 PM",
        imageSrc: "/images/event-dance.jpg",
        imageAlt: "In Bloom: Spring Dance Recital",
        category: "Dance",
        ticketsAvailable: true,
        ticketHref,
      },
    ],
  },
  about: {
    eyebrow: "About Us",
    title: "The Heart of Bullitt County's Arts Scene",
    paragraphs: [
      "Finished in 2026, the Judy Chandler Fine Arts Center, located inside Bullitt East High School, stands as a beacon of cultural enrichment in Mt. Washington, Kentucky. Our mission is to bring world-class performances to our community while nurturing local talent and fostering a love for the arts in all generations.",
      "Whether you're here for a school concert, a local production, or a community celebration, our doors are open to all who seek the transformative power of live performance.",
    ],
    features: [
      {
        icon: "theater",
        title: "World-Class Productions",
        description:
          "From Broadway classics to original works, experience theater at its finest.",
      },
      {
        icon: "music",
        title: "Live Performances",
        description: "Concerts, recitals, and musical events that move the soul.",
      },
      {
        icon: "users",
        title: "Community Focus",
        description:
          "A gathering place for schools, local artists, and community celebrations.",
      },
      {
        icon: "star",
        title: "Exceptional Experience",
        description:
          "State-of-the-art acoustics and comfortable seating for every guest.",
      },
    ],
  },
  venue: {
    eyebrow: "Plan Your Visit",
    title: "Visit Our Venue",
    description:
      "Conveniently located in Mt. Washington, our state-of-the-art facility is designed for an exceptional experience.",
    venueName: "Bullitt East High School",
    street: "11450 Highway 44 East",
    cityStateZip: "Mt. Washington, KY 40047",
    hours: [
      "Monday - Friday: 10:00 AM - 2:00 PM",
      "Saturday: Closed (except event days)",
      "Sunday: Closed (except event days)",
    ],
    phone: "(502) 869-JCFA",
    email: "jcfac@bullittschools.org",
    directionsHref:
      "https://www.google.com/maps/dir/?api=1&destination=11450%20Highway%2044%20East%2C%20Mt.%20Washington%2C%20KY%2040047",
  },
  faq: {
    eyebrow: "Good To Know",
    title: "Frequently Asked Questions",
    description:
      "Answers to common questions about visiting, tickets, and performances.",
    items: [
      {
        question: "Where is the Judy Chandler Fine Arts Center?",
        answer:
          "The center is inside Bullitt East High School at 11450 Highway 44 East, Mt. Washington, KY 40047.",
      },
      {
        question: "When is the box office open?",
        answer:
          "Monday through Friday, 10:00 AM to 2:00 PM. The box office is closed Saturday and Sunday except on event days.",
      },
      {
        question: "How do I buy tickets?",
        answer:
          "Choose an upcoming event and select Get Tickets, or call the box office at (502) 869-JCFA during open hours.",
      },
      {
        question: "How can I reach the center?",
        answer: "Call (502) 869-JCFA or email jcfac@bullittschools.org.",
      },
      {
        question: "What kinds of performances are held here?",
        answer:
          "The center hosts local theater, concerts, dance recitals, school performances, and community events.",
      },
    ],
  },
  newsletter: {
    title: "Stay in the Spotlight",
    description:
      "Subscribe to our newsletter for exclusive presale access, behind-the-scenes content, and the latest updates on upcoming performances.",
    successTitle: "Thank you for subscribing!",
    successMessage: "You'll receive our next newsletter soon.",
    placeholder: "Enter your email",
    buttonLabel: "Subscribe",
  },
  footer: {
    logoSrc: "/images/logo.png",
    logoAlt: "Judy Chandler Fine Arts Center Logo",
    name: "Judy Chandler",
    tagline: "Fine Arts Center",
    blurb:
      "Bringing world-class performing arts to the heart of Bullitt County since 2020.",
    quickLinks: [
      { label: "Upcoming Events", href: "#events" },
      { label: "Buy Tickets", href: ticketHref },
      { label: "Plan Your Visit", href: "#venue" },
      { label: "FAQs", href: "#faq" },
      { label: "Rent Our Venue", href: "#" },
    ],
    supportLinks: [
      { label: "Become a Sponsor", href: "#" },
      { label: "Volunteer", href: "#" },
      { label: "Donate", href: "#" },
      { label: "Accessibility", href: "#" },
    ],
    socials: [
      { platform: "facebook", href: "#" },
      { platform: "instagram", href: "#" },
      { platform: "twitter", href: "#" },
      { platform: "youtube", href: "#" },
    ],
    street: "11450 Highway 44 East",
    cityStateZip: "Mt. Washington, KY 40047",
    copyrightName: "Judy Chandler Fine Arts Center",
    legalLinks: [
      { label: "Privacy Policy", href: "#" },
      { label: "Terms of Service", href: "#" },
    ],
  },
}

export function mapsDirectionsHref(street: string, cityStateZip: string) {
  const destination = encodeURIComponent(`${street}, ${cityStateZip}`)
  return `https://www.google.com/maps/dir/?api=1&destination=${destination}`
}

export function mapsEmbedSrc(street: string, cityStateZip: string) {
  const query = encodeURIComponent(`${street}, ${cityStateZip}`)
  return `https://www.google.com/maps?q=${query}&output=embed`
}
