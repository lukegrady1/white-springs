'use client';

// ADA: Skip navigation handled in layout.tsx. Sticky header with keyboard-navigable mobile menu, ARIA landmarks, focus-visible rings on all interactive elements.

import { useState, useEffect, useCallback } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Announcements", href: "/announcements" },
  { label: "Government", href: "/government" },
  { label: "Services", href: "/services" },
  { label: "Contact", href: "/contact" },
];

const linkClasses =
  "text-ivory/90 hover:text-gold transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:outline-none rounded-sm";

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMobile = useCallback(() => setMobileOpen(false), []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    handleScroll();
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeMobile();
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [mobileOpen, closeMobile]);

  return (
    <header className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${scrolled ? 'bg-forest/95 backdrop-blur-md shadow-md' : 'bg-gradient-to-b from-black/40 to-transparent'}`}>
      <nav aria-label="Main navigation" className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-24 items-center justify-between">
          {/* Town seal + wordmark */}
          <Link
            href="/"
            className={`flex items-center gap-3 ${linkClasses}`}
          >
            <Image
              src="/white-springs/images/logo.png"
              alt="Town of White Springs seal"
              width={64}
              height={64}
              className="rounded-full"
            />
            <div className="flex flex-col leading-tight">
              <span className="font-display text-2xl font-bold text-ivory tracking-wide">
                White Springs
              </span>
              <span className="text-ivory/60 text-xs font-body uppercase tracking-[0.15em]">
                Florida &middot; Est. 1885
              </span>
            </div>
          </Link>

          {/* Desktop nav */}
          <ul className="hidden md:flex md:items-center md:gap-6">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className={linkClasses}>
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Mobile hamburger */}
          <button
            type="button"
            className={`md:hidden text-ivory p-2 ${linkClasses}`}
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            <span className="sr-only">{mobileOpen ? 'Close menu' : 'Open menu'}</span>
            {mobileOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile drawer */}
        {mobileOpen && (
          <div id="mobile-menu" className="md:hidden pb-4">
            <ul className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block px-3 py-2 ${linkClasses}`}
                    onClick={closeMobile}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        )}
      </nav>
    </header>
  );
}
