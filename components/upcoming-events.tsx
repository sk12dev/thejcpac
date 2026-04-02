import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Calendar, Clock, ArrowRight } from "lucide-react"

const events = [
  {
    id: 1,
    title: "The Tempest",
    description:
      "Shakespeare's magical tale of revenge, forgiveness, and the power of art. Join us for an enchanting evening of theater.",
    date: "April 18-20, 2026",
    time: "7:30 PM",
    image: "/images/event-theater.jpg",
    category: "Theater",
  },
  {
    id: 2,
    title: "Spring Symphony Concert",
    description:
      "The Bullitt County Symphony Orchestra presents a celebration of classical masterpieces featuring works by Mozart and Beethoven.",
    date: "April 25, 2026",
    time: "8:00 PM",
    image: "/images/event-concert.jpg",
    category: "Concert",
  },
  {
    id: 3,
    title: "In Bloom: Spring Dance Recital",
    description:
      "A beautiful showcase of local dance talent celebrating growth, creativity, and the joy of movement.",
    date: "May 2, 2026",
    time: "6:00 PM",
    image: "/images/event-dance.jpg",
    category: "Dance",
  },
]

export function UpcomingEvents() {
  return (
    <section id="events" className="py-24 bg-card">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-[#e8b923] text-sm font-semibold tracking-widest uppercase mb-4 block">
            What&apos;s On Stage
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4 text-balance">
            Upcoming Events
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto text-pretty">
            From riveting theater productions to soul-stirring concerts, discover the performances that await you.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {events.map((event) => (
            <Card
              key={event.id}
              className="bg-background border-border overflow-hidden group hover:border-[#e8b923]/50 transition-all duration-300"
            >
              <div className="relative h-56 overflow-hidden">
                <Image
                  src={event.image}
                  alt={event.title}
                  fill
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
                <Button
                  variant="outline"
                  className="w-full border-[#e8b923] text-[#e8b923] hover:bg-[#e8b923] hover:text-background"
                >
                  Get Tickets
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button
            variant="link"
            className="text-[#2a7c7c] hover:text-[#2a7c7c]/80 text-lg"
          >
            View Full Schedule
            <ArrowRight className="w-5 h-5 ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
