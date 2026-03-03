import { useLanguage } from "@/context/LanguageContext";

const RightsCompliance = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="mb-8">
          <div className="w-16 h-px bg-primary/30 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient gold-text-glow mb-6">
            {t.rightsTitle}
          </h2>
        </div>
        <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
          <p>{t.rightsP1}</p>
          <p>{t.rightsP2}</p>
        </div>
        <div className="w-16 h-px bg-primary/30 mx-auto mt-8" />
      </div>
    </section>
  );
};

export default RightsCompliance;