import { EmergencyBanner } from "@/components/home/EmergencyBanner";

export default function Home() {
  return (
    <>
      <EmergencyBanner />
      <main id="main-content" className="min-h-screen">
        <h1 className="font-display text-4xl text-forest p-8">
          White Springs, Florida
        </h1>
        <p className="font-body text-slate p-8">Homepage sections coming soon.</p>
      </main>
    </>
  );
}
