import { useLanguage } from "@/context/LanguageContext";

const DistributionPlatform = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-3xl text-center">

        <h2 className="font-display text-3xl md:text-5xl font-bold text-gold-gradient gold-text-glow mb-6">
          {t.platformTitle}
        </h2>

        <p className="font-body text-muted-foreground leading-relaxed">
          {t.platformText}
        </p>

      </div>
    </section>
  );
};

export default DistributionPlatform;