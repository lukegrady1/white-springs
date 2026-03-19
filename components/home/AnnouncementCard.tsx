// ADA: Semantic article element, descriptive link text ("Read more about [title]"), focus-visible rings, proper heading hierarchy (h3).

import Link from "next/link";
import { Badge } from "@/components/ui/badge";
import { type Announcement, categoryColors } from "@/lib/announcements";

export function AnnouncementCard({ announcement }: { announcement: Announcement }) {
  const formattedDate = new Date(announcement.date).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <article
      className={`bg-white rounded-lg border border-ivory-dark p-5 hover:shadow-lg transition-shadow duration-200${
        announcement.isPinned ? " border-l-4 border-l-gold" : ""
      }`}
    >
      <div className="flex items-center justify-between">
        <Badge variant="outline" className={categoryColors[announcement.category]}>
          {announcement.category}
        </Badge>
        <time className="font-mono text-sm text-slate/70" dateTime={announcement.date}>
          {formattedDate}
        </time>
      </div>

      <h3 className="font-display text-lg font-bold text-forest mt-2">
        {announcement.isPinned ? "📌 " : ""}
        {announcement.title}
      </h3>

      <p className="font-body text-slate text-sm mt-2 line-clamp-3">{announcement.excerpt}</p>

      <Link
        href={announcement.href}
        className="inline-block mt-3 text-sky font-body text-sm font-bold hover:text-forest transition-colors focus-visible:ring-2 focus-visible:ring-gold focus-visible:ring-offset-2 rounded"
        aria-label={`Read more about ${announcement.title}`}
      >
        Read More →
      </Link>
    </article>
  );
}
