import Image from "next/image"
import Link from "next/link"
import { Facebook, Instagram, Twitter, Youtube } from "lucide-react"

export function Footer() {
  return (
    <footer id="contact" className="bg-card border-t border-border">
      <div className="container mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <Image
                src="/images/logo.png"
                alt="Judy Chandler Performing Arts Center Logo"
                width={60}
                height={60}
                className="w-14 h-14"
              />
              <div>
                <p className="text-lg font-bold tracking-wide text-foreground">Judy Chandler</p>
                <p className="text-xs text-[#2a7c7c] tracking-widest uppercase">Performing Arts Center</p>
              </div>
            </Link>
            <p className="text-muted-foreground text-sm">
              Bringing world-class performing arts to the heart of Bullitt County since 2020.
            </p>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#events" className="text-muted-foreground hover:text-[#e8b923] transition-colors text-sm">
                  Upcoming Events
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#e8b923] transition-colors text-sm">
                  Buy Tickets
                </Link>
              </li>
              <li>
                <Link href="#venue" className="text-muted-foreground hover:text-[#e8b923] transition-colors text-sm">
                  Plan Your Visit
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#e8b923] transition-colors text-sm">
                  Rent Our Venue
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Support</h3>
            <ul className="space-y-3">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#e8b923] transition-colors text-sm">
                  Become a Sponsor
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#e8b923] transition-colors text-sm">
                  Volunteer
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#e8b923] transition-colors text-sm">
                  Donate
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-[#e8b923] transition-colors text-sm">
                  Accessibility
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-foreground font-semibold mb-4">Connect With Us</h3>
            <div className="flex gap-4 mb-6">
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-[#e8b923] hover:text-background transition-colors text-muted-foreground"
                aria-label="Facebook"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-[#e8b923] hover:text-background transition-colors text-muted-foreground"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-[#e8b923] hover:text-background transition-colors text-muted-foreground"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center hover:bg-[#e8b923] hover:text-background transition-colors text-muted-foreground"
                aria-label="YouTube"
              >
                <Youtube className="w-5 h-5" />
              </a>
            </div>
            <p className="text-muted-foreground text-sm">
              11450 Highway 44 East<br />
              Mt. Washington, KY 40047
            </p>
          </div>
        </div>
      </div>

      <div className="border-t border-border">
        <div className="container mx-auto px-4 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © {new Date().getFullYear()} Judy Chandler Performing Arts Center. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="text-muted-foreground hover:text-[#e8b923] transition-colors text-sm">
              Privacy Policy
            </Link>
            <Link href="#" className="text-muted-foreground hover:text-[#e8b923] transition-colors text-sm">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
