import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"
import type { FaqContent } from "@/lib/site-content"

export function FaqSection({ eyebrow, title, description, items }: FaqContent) {
  return (
    <section id="faq" className="py-24 bg-background">
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

        <Accordion
          type="single"
          collapsible
          className="max-w-3xl mx-auto rounded-lg border border-border bg-card px-6"
        >
          {items.map((item) => (
            <AccordionItem key={item.question} value={item.question} className="border-border">
              <AccordionTrigger className="py-5 text-base font-semibold text-foreground hover:no-underline hover:text-[#e8b923]">
                {item.question}
              </AccordionTrigger>
              <AccordionContent className="text-base text-muted-foreground">
                {item.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  )
}
