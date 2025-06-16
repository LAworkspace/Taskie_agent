import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import AppIntegrations from "@/components/app-integrations";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-[var(--dark-bg)] text-white">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <AppIntegrations />
      <CTASection />
      <Footer />
    </div>
  );
}
