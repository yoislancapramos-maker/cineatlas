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
import { useLanguage } from "@/context/LanguageContext";

export default function Index() {
  const { lang, setLang } = useLanguage();

  return (
    <>
      {/* 🌐 Language Switch */}
      <div className="fixed top-24 md:top-20 right-[26px] z-[99999]">
        <div className="flex rounded-full border border-primary/40 bg-black/60 backdrop-blur-md shadow-lg overflow-hidden">
          <button
            onClick={() => setLang("en")}
            className={`px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 ${
              lang === "en"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary/10 text-white"
            }`}
          >
            EN
          </button>

          <button
            onClick={() => setLang("es")}
            className={`px-3 py-1.5 text-[11px] font-semibold tracking-wider uppercase transition-all duration-200 ${
              lang === "es"
                ? "bg-primary text-primary-foreground"
                : "hover:bg-primary/10 text-white"
            }`}
          >
            ES
          </button>
        </div>
      </div>

      <div className="min-h-screen bg-background">
        <FloatingParticles />
        <Navbar />
        <HeroSection />
        <TrustStrip />
        <HowWeWork />
        <OperationalFramework />
        <CatalogPreview />
        <AboutSection />
        <DistributorStrip />
        <RightsCompliance />
        <ContactSection />
        <Footer />
      </div>
    </>
  );
}