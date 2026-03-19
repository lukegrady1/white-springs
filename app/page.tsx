import { EmergencyBanner } from "@/components/home/EmergencyBanner";
import { HeroSection } from "@/components/home/HeroSection";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";

export default function Home() {
  return (
    <>
      <EmergencyBanner />
      <main id="main-content">
        <HeroSection />
        <AnnouncementsSection />
      </main>
    </>
  );
}
