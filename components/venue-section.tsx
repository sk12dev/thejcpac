import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";

export function VenueSection() {
  const venueAddress = "11450 Highway 44 East, Mt. Washington, KY 40047";
  const venueAddressQuery = encodeURIComponent(venueAddress);

  return (
    <section id="venue" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#e8b923] text-sm font-semibold tracking-widest uppercase mb-4 block">
            Plan Your Visit
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Visit Our Venue
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            Conveniently located in Mt. Washington, our state-of-the-art
            facility is designed for an exceptional experience.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div className="aspect-video rounded-lg overflow-hidden border border-border">
            <iframe
              src={`https://www.google.com/maps?q=${venueAddressQuery}&output=embed`}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Judy Chandler Performing Arts Center Location"
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
                  11450 Highway 44 East
                  <br />
                  Mt. Washington, KY 40047
                </p>
                <Button
                  variant="link"
                  className="text-[#2a7c7c] p-0 h-auto mt-2"
                  asChild
                >
                  <a
                    href={`https://www.google.com/maps/dir/?api=1&destination=${venueAddressQuery}`}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Get Directions
                  </a>
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
                  Monday - Friday: 10:00 AM - 2:00 PM
                  <br />
                  Saturday: Closed (except event days)
                  <br />
                  Sunday: Closed (except event days)
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
                <p className="text-muted-foreground">(502) 869-BEFA</p>
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
                <p className="text-muted-foreground">
                  info@judychandlerpac.org
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
