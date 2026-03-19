import { EmergencyBanner } from "@/components/home/EmergencyBanner";
import { HeroSection } from "@/components/home/HeroSection";
import { AnnouncementsSection } from "@/components/home/AnnouncementsSection";
import { QuickLinksSection } from "@/components/home/QuickLinksSection";

export default function Home() {
  return (
    <>
      <EmergencyBanner />
      <main id="main-content">
        <HeroSection />
        <AnnouncementsSection />
        <QuickLinksSection />
      </main>
    </>
  );
}
