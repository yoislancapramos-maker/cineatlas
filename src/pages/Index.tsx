import FloatingParticles from "@/components/FloatingParticles";
import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import TrustStrip from "@/components/TrustStrip";
import HowWeWork from "@/components/HowWeWork";
import LicensingModels from "@/components/LicensingModels";
import OperationalFramework from "@/components/OperationalFramework";
import DistributionTerritories from "@/components/DistributionTerritories";
import CatalogPreview from "@/components/CatalogPreview";
import AboutSection from "@/components/AboutSection";
import DistributionPlatform from "@/components/DistributionPlatform";
import RightsCompliance from "@/components/RightsCompliance";
import DistributorStrip from "@/components/DistributorStrip";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function Index() {
  return (
    <>
      {/* MAIN */}
      <div className="min-h-screen bg-background">
        <FloatingParticles />

        <Navbar />

        <HeroSection />

        <TrustStrip />

        <HowWeWork />

        <LicensingModels />

        <OperationalFramework />

        <DistributionTerritories />

        <CatalogPreview />

        <AboutSection />

        <DistributionPlatform />

        <DistributorStrip />

        <RightsCompliance />

        <ContactSection />

        <Footer />
      </div>
    </>
  );
}