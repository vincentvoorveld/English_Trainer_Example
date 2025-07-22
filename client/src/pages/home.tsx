import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import BenefitsSection from "@/components/benefits-section";
import TrainingSection from "@/components/training-section";
import TestimonialsSection from "@/components/testimonials-section";
import ClientLogosSection from "@/components/client-logos-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <BenefitsSection />
      <TrainingSection />
      <TestimonialsSection />
      <ClientLogosSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
