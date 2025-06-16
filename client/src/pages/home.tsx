import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import HowItWorks from "@/components/how-it-works";
import AppIntegrations from "@/components/app-integrations";
import PricingSection from "@/components/pricing-section";
import CTASection from "@/components/cta-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Navigation />
      <HeroSection />
      <HowItWorks />
      <AppIntegrations />
      <PricingSection />
      <CTASection />
      <Footer />
    </div>
  );
}
