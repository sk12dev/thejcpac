import { Music, Star, Theater, Users, type LucideIcon } from "lucide-react"
import type { AboutContent, FeatureIcon } from "@/lib/site-content"

const featureIcons: Record<FeatureIcon, LucideIcon> = {
  theater: Theater,
  music: Music,
  users: Users,
  star: Star,
}

export function AboutSection({
  eyebrow,
  title,
  paragraphs,
  features,
}: AboutContent) {
  return (
    <section id="about" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#e8b923] text-sm font-semibold tracking-widest uppercase mb-4 block">
              {eyebrow}
            </span>
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6 text-balance">
              {title}
            </h2>
            {paragraphs.map((paragraph, index) => (
              <p
                key={paragraph}
                className={`text-muted-foreground text-lg text-pretty ${
                  index < paragraphs.length - 1 ? "mb-6" : ""
                }`}
              >
                {paragraph}
              </p>
            ))}
          </div>

          <div className="grid sm:grid-cols-2 gap-6">
            {features.map((feature) => {
              const Icon = featureIcons[feature.icon]
              return (
                <div
                  key={feature.title}
                  className="p-6 bg-card rounded-lg border border-border hover:border-[#2a7c7c]/50 transition-colors"
                >
                  <div className="w-12 h-12 bg-[#2a7c7c]/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-[#2a7c7c]" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}
