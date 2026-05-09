import { Music, Theater, Users, Star } from "lucide-react";

const features = [
  {
    icon: Theater,
    title: "World-Class Productions",
    description:
      "From Broadway classics to original works, experience theater at its finest.",
  },
  {
    icon: Music,
    title: "Live Performances",
    description: "Concerts, recitals, and musical events that move the soul.",
  },
  {
    icon: Users,
    title: "Community Focus",
    description:
      "A gathering place for schools, local artists, and community celebrations.",
  },
  {
    icon: Star,
    title: "Exceptional Experience",
    description:
      "State-of-the-art acoustics and comfortable seating for every guest.",
  },
];

export function AboutSection() {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#e8b923] text-sm font-semibold tracking-widest uppercase mb-4 block">
              About Us
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              The Heart of Bullitt County&apos;s Arts Scene
            </h2>
            <p className="text-muted-foreground text-lg mb-6 text-pretty">
              Finished in 2026, the Judy Chandler Performing Arts Center,
              located inside Bullitt East High School, stands as a beacon of
              cultural enrichment in Mt. Washington, Kentucky. Our mission is to
              bring world-class performances to our community while nurturing
              local talent and fostering a love for the arts in all generations.
            </p>
            <p className="text-muted-foreground text-lg text-pretty">
              Whether you&apos;re here for a school concert, a local production,
              or a community celebration, our doors are open to all who seek the
              transformative power of live performance.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature, index) => (
              <div
                key={index}
                className="p-6 bg-card rounded-lg border border-border hover:border-[#2a7c7c]/50 transition-colors"
              >
                <div className="w-12 h-12 bg-[#2a7c7c]/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="w-6 h-6 text-[#2a7c7c]" />
                </div>
                <h3 className="text-lg font-semibold text-foreground mb-2">
                  {feature.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
