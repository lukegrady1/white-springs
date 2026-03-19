import { EmergencyBanner } from "@/components/home/EmergencyBanner";
import { HeroSection } from "@/components/home/HeroSection";

export default function Home() {
  return (
    <>
      <EmergencyBanner />
      <main id="main-content">
        <HeroSection />
      </main>
    </>
  );
}
