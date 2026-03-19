import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Announcements",
};

export default function AnnouncementsPage() {
  return (
    <main id="main-content" className="min-h-screen flex items-center justify-center py-20">
      <div className="text-center">
        <h1 className="font-display text-4xl text-forest mb-4">Announcements</h1>
        <p className="font-body text-slate text-lg">Coming Soon</p>
        <div className="gold-divider w-24 mx-auto mt-6" />
      </div>
    </main>
  );
}
