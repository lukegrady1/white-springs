'use client';

// ADA: Section with proper heading hierarchy (h2). Announcement cards use semantic article elements. Scroll animations respect prefers-reduced-motion. All links have descriptive text.

import { motion, useInView, useReducedMotion } from "framer-motion";
import { useRef } from "react";
import Link from "next/link";
import { announcements } from "@/lib/announcements";
import { AnnouncementCard } from "@/components/home/AnnouncementCard";

export function AnnouncementsSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const shouldReduceMotion = useReducedMotion();

  const sortedAnnouncements = [...announcements].sort((a, b) => {
    if (a.isPinned && !b.isPinned) return -1;
    if (!a.isPinned && b.isPinned) return 1;
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });

  return (
    <section id="announcements" className="py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between">
          <div>
            <h2 className="font-display text-3xl md:text-4xl text-forest font-bold">
              Town Announcements
            </h2>
            <p className="font-body text-slate mt-2">
              Stay up to date with the latest news from White Springs.
            </p>
          </div>
          <Link
            href="/announcements"
            className="mt-3 sm:mt-0 text-sky font-body font-bold hover:text-forest transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded"
          >
            View All Announcements →
          </Link>
        </div>

        <div className="gold-divider mt-6 mb-8" />

        <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {sortedAnnouncements.map((announcement, index) => (
            <motion.div
              key={announcement.id}
              initial={shouldReduceMotion ? false : { opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <AnnouncementCard announcement={announcement} />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
