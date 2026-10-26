export const siteQuery = `{
  "settings": *[_id == "siteSettings"][0]{
    shortName,
    descriptor,
    metaTitle,
    metaDescription,
    footerBlurb,
    copyrightName,
    ticketLabel,
    ticketHref,
    venueName,
    street,
    cityStateZip,
    phone,
    email,
    boxOfficeHours,
    headerLogo,
    footerLogo,
    navLinks[]{ label, href },
    quickLinks[]{ label, href },
    supportLinks[]{ label, href },
    legalLinks[]{ label, href },
    socialLinks[]{ platform, url }
  },
  "home": *[_id == "homepage"][0]{
    hero{
      locationLabel,
      headlineBefore,
      headlineGold,
      headlineMiddle,
      headlineAccent,
      description,
      backgroundImage,
      primaryCtaLabel,
      primaryCtaHref,
      secondaryCtaLabel,
      secondaryCtaHref
    },
    eventsSection{
      eyebrow,
      title,
      description,
      viewAllLabel,
      viewAllHref
    },
    about{
      eyebrow,
      title,
      paragraphs[]{ text },
      features[]{ icon, title, description }
    },
    venue{
      eyebrow,
      title,
      description
    },
    newsletter{
      title,
      description,
      successTitle,
      successMessage,
      placeholder,
      buttonLabel
    }
  },
  "events": *[_type == "event" && !(_id in path("drafts.**"))] | order(coalesce(sortOrder, 999) asc, startDate asc){
    _id,
    title,
    description,
    category,
    dateLabel,
    time,
    image,
    ticketUrl
  }
}`
