import { useLanguage } from "@/context/LanguageContext";

const AboutSection = () => {
  const { t } = useLanguage();

  return (
    <section id="about" className="py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="banner-gold-rim rounded-sm overflow-hidden max-w-[460px] mx-auto">
              <img
                src="/about-cinema.png"
                alt="CineAtlas film distribution facility"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-gold-gradient gold-text-glow mb-6">
              {t.aboutTitle}
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>{t.aboutP1}</p>
              <p>{t.aboutP2}</p>
              <p>{t.aboutP3}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;