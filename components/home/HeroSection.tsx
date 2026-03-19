'use client';

// ADA: Hero section with animated content. All animations respect prefers-reduced-motion via useReducedMotion(). Text has sufficient contrast against gradient overlay. CTAs are accessible links with focus-visible rings.

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { BellTowerSVG } from "./BellTowerSVG";
import { useState } from "react";

export function HeroSection() {
  const shouldReduceMotion = useReducedMotion();
  const [imageError, setImageError] = useState(false);

  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center overflow-hidden">
      {/* Background layer */}
      <motion.div
        className="absolute inset-0"
        initial={shouldReduceMotion ? false : { opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
      >
        {!imageError ? (
          // Replace with actual Bell Tower photo
          <Image
            src="/images/bell-tower.jpg"
            alt="Stephen Foster Memorial Bell Tower in White Springs, Florida"
            fill
            className="object-cover"
            priority
            onError={() => setImageError(true)}
          />
        ) : (
          <BellTowerSVG className="absolute inset-0 w-full h-full" />
        )}
      </motion.div>

      {/* Gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-r from-forest/80 via-forest/50 to-forest/20" />

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          {/* Eyebrow + Headline */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p className="text-gold font-mono text-sm tracking-[0.2em] uppercase mb-2">
              Town of
            </p>
            <h1 className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl text-ivory font-bold leading-tight">
              White Springs, Florida
            </h1>
          </motion.div>

          {/* Subhead + Body */}
          <motion.div
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <p className="font-body text-ivory/80 text-lg mt-4">
              Suwannee River Valley — Incorporated 1901
            </p>
            <p className="font-body text-ivory/70 text-base mt-4 max-w-lg">
              Your official source for town announcements, services, and community news.
            </p>
          </motion.div>

          {/* CTAs */}
          <motion.div
            className="flex flex-wrap gap-4 mt-8"
            initial={shouldReduceMotion ? false : { opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <a
              href="#announcements"
              className="inline-flex items-center px-6 py-3 bg-gold text-forest font-body font-bold rounded-md hover:bg-gold-light transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
            >
              View Announcements ↓
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center px-6 py-3 border-2 border-ivory/50 text-ivory font-body font-bold rounded-md hover:bg-ivory/10 transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 focus-visible:ring-offset-forest"
            >
              Contact Town Hall →
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
