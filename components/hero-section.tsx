import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Calendar, Ticket } from "lucide-react";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src="/images/PXL_20260506_000822516.MP.jpg"
          alt="Judy Chandler Performing Arts Center Theater"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
      </div>

      <div className="container mx-auto px-4 pt-20 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-block mb-6">
            <span className="px-4 py-2 bg-[#2a7c7c]/20 border border-[#2a7c7c]/40 rounded-full text-[#2a7c7c] text-sm font-medium tracking-wide">
              Mt. Washington, Kentucky
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-foreground mb-6 leading-tight text-balance">
            Where <span className="text-[#e8b923]">Arts</span> Come{" "}
            <span className="text-[#e05a47]">Alive</span>
          </h1>

          <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
            Experience local theater, concerts, dance performances, and
            community events at the heart of Bullitt County.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              className="bg-[#e8b923] text-background hover:bg-[#e8b923]/90 text-lg px-8 py-6"
            >
              <Ticket className="w-5 h-5 mr-2" />
              Get Tickets
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-[#2a7c7c] text-[#2a7c7c] hover:bg-[#2a7c7c]/10 text-lg px-8 py-6"
            >
              <Calendar className="w-5 h-5 mr-2" />
              View Schedule
            </Button>
          </div>
        </div>
      </div>

      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground rounded-full flex justify-center pt-2">
          <div className="w-1 h-3 bg-muted-foreground rounded-full" />
        </div>
      </div>
    </section>
  );
}
