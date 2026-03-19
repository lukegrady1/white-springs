export type AnnouncementCategory = "General" | "Emergency" | "Event" | "Meeting" | "Closure";

export interface Announcement {
  id: string;
  title: string;
  date: string;
  category: AnnouncementCategory;
  excerpt: string;
  isPinned?: boolean;
  href: string;
}

export const announcements: Announcement[] = [
  {
    id: "1",
    title: "Regular Town Commission Meeting — July 8, 2025",
    date: "2025-07-08T18:00:00",
    category: "Meeting",
    excerpt: "The White Springs Town Commission will hold its regular monthly meeting at Town Hall. Agenda items include the downtown revitalization proposal and water infrastructure updates. Public comment period will be available.",
    isPinned: true,
    href: "/announcements",
  },
  {
    id: "2",
    title: "4th of July Celebration at the Suwannee River Park",
    date: "2025-07-04T10:00:00",
    category: "Event",
    excerpt: "Join the White Springs community for our annual Independence Day celebration featuring live music, local food vendors, family activities, and fireworks over the Suwannee River at dusk.",
    href: "/announcements",
  },
  {
    id: "3",
    title: "Water System Maintenance Notice — June 28",
    date: "2025-06-28T08:00:00",
    category: "General",
    excerpt: "Scheduled maintenance on the town water system will take place Saturday, June 28th from 8 AM to 2 PM. Residents in the downtown area may experience temporary low water pressure.",
    href: "/announcements",
  },
  {
    id: "4",
    title: "Town Hall Holiday Hours",
    date: "2025-07-01T00:00:00",
    category: "Closure",
    excerpt: "White Springs Town Hall will be closed Friday, July 4th and Monday, July 7th in observance of Independence Day. Regular hours resume Tuesday, July 8th at 8:30 AM.",
    href: "/announcements",
  },
  {
    id: "5",
    title: "Community Input Session: Downtown Revitalization Project",
    date: "2025-07-15T17:30:00",
    category: "General",
    excerpt: "Share your vision for downtown White Springs. The Planning Committee invites residents to a community input session to discuss proposed improvements to the historic downtown corridor.",
    href: "/announcements",
  },
  {
    id: "6",
    title: "Stephen Foster Folk Culture Center Summer Concert Series",
    date: "2025-07-12T19:00:00",
    category: "Event",
    excerpt: "The Stephen Foster Folk Culture Center State Park kicks off its summer concert series with performances every Saturday evening in July. Bring a blanket and enjoy live folk and bluegrass music.",
    href: "/announcements",
  },
];

export const categoryColors: Record<AnnouncementCategory, string> = {
  Emergency: "bg-red-100 text-red-800 border-red-200",
  Event: "bg-blue-100 text-blue-800 border-blue-200",
  Meeting: "bg-green-100 text-green-800 border-green-200",
  Closure: "bg-amber-100 text-amber-800 border-amber-200",
  General: "bg-gray-100 text-gray-700 border-gray-200",
};
