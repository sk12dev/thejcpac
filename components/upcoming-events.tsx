import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ContentLink, isNavigableHref } from "@/components/content-link"
import { Calendar, Clock, ArrowRight } from "lucide-react"
import type { EventsSectionContent } from "@/lib/site-content"

export function UpcomingEvents({
  eyebrow,
  title,
  description,
  viewAllLabel,
  viewAllHref,
  events,
}: EventsSectionContent) {
  return (
    <section id="events" className="py-24 bg-card">
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

        {events.length > 0 ? (
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {events.map((event) => (
              <Card
                key={event.id}
                className="bg-background border-border overflow-hidden group hover:border-[#e8b923]/50 transition-all duration-300"
              >
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={event.imageSrc}
                    alt={event.imageAlt}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute top-4 left-4">
                    <span className="px-3 py-1 bg-[#e05a47] text-foreground text-xs font-semibold rounded-full">
                      {event.category}
                    </span>
                  </div>
                </div>
                <CardContent className="p-6">
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-[#e8b923] transition-colors">
                    {event.title}
                  </h3>
                  <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                    {event.description}
                  </p>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4 text-[#2a7c7c]" />
                      <span>{event.date}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4 text-[#2a7c7c]" />
                      <span>{event.time}</span>
                    </div>
                  </div>
                  {event.ticketsAvailable ? (
                    isNavigableHref(event.ticketHref) ? (
                      <Button
                        asChild
                        variant="outline"
                        className="w-full border-[#e8b923] text-[#e8b923] hover:bg-[#e8b923] hover:text-background"
                      >
                        <ContentLink href={event.ticketHref}>Get Tickets</ContentLink>
                      </Button>
                    ) : (
                      <Button
                        variant="outline"
                        className="w-full border-[#e8b923] text-[#e8b923] hover:bg-[#e8b923] hover:text-background"
                      >
                        Get Tickets
                      </Button>
                    )
                  ) : (
                    <div className="flex h-9 w-full items-center justify-center rounded-md border border-[#2a7c7c] text-sm font-medium text-[#2a7c7c]">
                      Free Event
                    </div>
                  )}
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <p className="text-center text-muted-foreground">
            No upcoming events right now.
          </p>
        )}

        <div className="text-center mt-12">
          {isNavigableHref(viewAllHref) ? (
            <Button
              asChild
              variant="link"
              className="text-[#2a7c7c] hover:text-[#2a7c7c]/80 text-lg"
            >
              <ContentLink href={viewAllHref}>
                {viewAllLabel}
                <ArrowRight className="w-5 h-5 ml-2" />
              </ContentLink>
            </Button>
          ) : (
            <Button
              variant="link"
              className="text-[#2a7c7c] hover:text-[#2a7c7c]/80 text-lg"
            >
              {viewAllLabel}
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          )}
        </div>
      </div>
    </section>
  )
}
