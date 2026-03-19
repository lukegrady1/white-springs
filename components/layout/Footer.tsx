// ADA: Semantic footer element, all links have descriptive text, phone/email as accessible links, social icons have aria-labels, focus-visible rings.

import Link from "next/link";
import { MapPin, Phone, Mail, Facebook } from "lucide-react";

const focusRing =
  "focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/announcements", label: "Announcements" },
  { href: "/government", label: "Government" },
  { href: "/services", label: "Services" },
  { href: "/contact", label: "Contact" },
  { href: "/accessibility", label: "Accessibility" },
];

export default function Footer() {
  return (
    <footer className="bg-forest text-ivory py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Column 1 — Town identity */}
          <div>
            <p className="font-display text-xl font-bold">
              ⚜ White Springs, Florida
            </p>
            <p className="text-ivory/70 text-sm">Suwannee River Valley</p>
          </div>

          {/* Column 2 — Navigation */}
          <div>
            <h2 className="font-display text-lg font-bold mb-4">
              Quick Links
            </h2>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`text-ivory/80 hover:text-gold transition-colors ${focusRing}`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3 — Contact */}
          <div>
            <h2 className="font-display text-lg font-bold mb-4">Contact Us</h2>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin size={16} className="text-gold mt-0.5 shrink-0" />
                <span className="text-ivory/80">
                  PO Box 307, White Springs, FL 32096
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone size={16} className="text-gold shrink-0" />
                <a
                  href="tel:+13863972000"
                  className={`text-ivory/80 hover:text-gold transition-colors ${focusRing}`}
                >
                  (386) 397-2000
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail size={16} className="text-gold shrink-0" />
                <a
                  href="mailto:info@whitespringsflorida.gov"
                  className={`text-ivory/80 hover:text-gold transition-colors ${focusRing}`}
                >
                  info@whitespringsflorida.gov
                </a>
              </li>
            </ul>
          </div>

          {/* Column 4 — Social */}
          <div>
            <h2 className="font-display text-lg font-bold mb-4">Follow Us</h2>
            <a
              href="#"
              aria-label="Visit our Facebook page"
              className={`inline-block text-ivory/80 hover:text-gold transition-colors ${focusRing}`}
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="gold-divider mt-8" />
        <p className="text-ivory/60 text-sm text-center mt-6">
          &copy; 2025 Town of White Springs, Florida. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
