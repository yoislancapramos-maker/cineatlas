import FloatingParticles from "@/components/FloatingParticles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import HowWeWork from "@/components/HowWeWork";
import OperationalFramework from "@/components/OperationalFramework";
import CatalogPreview from "@/components/CatalogPreview";
import AboutSection from "@/components/AboutSection";
import RightsCompliance from "@/components/RightsCompliance";
import DistributorStrip from "@/components/DistributorStrip";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <FloatingParticles />
      <Navbar />
      <HeroSection />
      <TrustStrip />
      <HowWeWork />
      <OperationalFramework />
      <CatalogPreview />
      <AboutSection />
      <RightsCompliance />
      <DistributorStrip />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
