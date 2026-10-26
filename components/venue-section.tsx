import { MapPin, Phone, Mail, Clock } from "lucide-react"
import { Button } from "@/components/ui/button"
import { ContentLink } from "@/components/content-link"
import { mapsEmbedSrc, type VenueContent } from "@/lib/site-content"

export function VenueSection({
  eyebrow,
  title,
  description,
  venueName,
  street,
  cityStateZip,
  hours,
  phone,
  email,
  directionsHref,
}: VenueContent) {
  return (
    <section id="venue" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#e8b923] text-sm font-semibold tracking-widest uppercase mb-4 block">
            {eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="aspect-video rounded-lg overflow-hidden border border-border">
            <iframe
              src={mapsEmbedSrc(street, cityStateZip)}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Judy Chandler Fine Arts Center Location"
            />
          </div>

          <div className="space-y-8">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e05a47]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <MapPin className="w-6 h-6 text-[#e05a47]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Address
                </h3>
                <p className="text-muted-foreground">
                  {venueName}
                  <br />
                  {street}
                  <br />
                  {cityStateZip}
                </p>
                <Button
                  variant="link"
                  className="text-[#2a7c7c] p-0 h-auto mt-2"
                  asChild
                >
                  <ContentLink href={directionsHref}>Get Directions</ContentLink>
                </Button>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#2a7c7c]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Clock className="w-6 h-6 text-[#2a7c7c]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Box Office Hours
                </h3>
                <p className="text-muted-foreground">
                  {hours.map((line, index) => (
                    <span key={`${line}-${index}`}>
                      {index > 0 ? <br /> : null}
                      {line}
                    </span>
                  ))}
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e8b923]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Phone className="w-6 h-6 text-[#e8b923]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Phone
                </h3>
                <p className="text-muted-foreground">{phone}</p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <div className="w-12 h-12 bg-[#e05a47]/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Mail className="w-6 h-6 text-[#e05a47]" />
              </div>
              <div>
                <h3 className="text-lg font-semibold text-foreground mb-1">
                  Email
                </h3>
                <p className="text-muted-foreground">{email}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
