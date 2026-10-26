"use client"

import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { useState } from "react"
import type { NewsletterContent } from "@/lib/site-content"

export function NewsletterSection({
  title,
  description,
  successTitle,
  successMessage,
  placeholder,
  buttonLabel,
}: NewsletterContent) {
  const [email, setEmail] = useState("")
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
    setEmail("")
  }

  return (
    <section className="py-24 bg-background relative overflow-hidden">
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#e8b923] rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#2a7c7c] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4 text-balance">
            {title}
          </h2>
          <p className="text-muted-foreground mb-8 text-pretty">{description}</p>

          {submitted ? (
            <div className="p-6 bg-[#2a7c7c]/10 border border-[#2a7c7c]/30 rounded-lg">
              <p className="text-[#2a7c7c] font-semibold">{successTitle}</p>
              <p className="text-muted-foreground text-sm mt-1">{successMessage}</p>
            </div>
          ) : (
            <form
              onSubmit={handleSubmit}
              className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
            >
              <Input
                type="email"
                placeholder={placeholder}
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="bg-card border-border focus:border-[#e8b923] focus:ring-[#e8b923]"
              />
              <Button
                type="submit"
                className="bg-[#e8b923] text-background hover:bg-[#e8b923]/90 whitespace-nowrap"
              >
                {buttonLabel}
              </Button>
            </form>
          )}
        </div>
      </div>
    </section>
  )
}
