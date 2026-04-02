"use client";

import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { useState } from "react";

export function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-md border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/jcpac-logo.png"
              alt="Judy Chandler Performing Arts Center Logo"
              width={30}
              height={60}
              className="w-6 h-12 md:w-10 md:h-14"
            />
            <div className="hidden sm:block">
              <p className="text-lg font-bold tracking-wide text-foreground">
                Judy Chandler
              </p>
              <p className="text-xs text-[#2a7c7c] tracking-widest uppercase">
                Performing Arts Center
              </p>
            </div>
          </Link>

          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="#events"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Events
            </Link>
            <Link
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              href="#venue"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Venue
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors font-medium"
            >
              Contact
            </Link>
            <Button className="bg-[#e8b923] text-background hover:bg-[#e8b923]/90">
              Buy Tickets
            </Button>
          </nav>

          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden bg-card border-t border-border">
          <nav className="container mx-auto px-4 py-4 flex flex-col gap-4">
            <Link
              href="#events"
              className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Events
            </Link>
            <Link
              href="#about"
              className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </Link>
            <Link
              href="#venue"
              className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Venue
            </Link>
            <Link
              href="#contact"
              className="text-muted-foreground hover:text-primary transition-colors font-medium py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Contact
            </Link>
            <Button className="bg-[#e8b923] text-background hover:bg-[#e8b923]/90 w-full">
              Buy Tickets
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
