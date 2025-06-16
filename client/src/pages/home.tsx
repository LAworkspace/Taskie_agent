import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import AppIntegrations from "@/components/app-integrations";
import WaitlistSection from "@/components/waitlist-section";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <HeroSection />
      <HowItWorks />
      <AppIntegrations />
      <WaitlistSection />
    </div>
  );
}
