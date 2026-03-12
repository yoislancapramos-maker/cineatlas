import { useLanguage } from "@/context/LanguageContext";

const LicensingModels = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 md:py-20">
      <div className="container mx-auto px-6 max-w-3xl text-center">

        <h2 className="font-display text-3xl md:text-5xl font-bold text-gold-gradient gold-text-glow mb-6">
          {t.licensingModelsTitle}
        </h2>

        <p className="font-body text-muted-foreground leading-relaxed mb-8">
          {t.licensingIntro}
        </p>

        <p className="font-body text-muted-foreground leading-relaxed mb-6">
          {t.licensingListIntro}
        </p>

        <div className="space-y-3 text-sm font-body text-foreground/80">

          <p>• {t.licensing1}</p>
          <p>• {t.licensing2}</p>
          <p>• {t.licensing3}</p>

        </div>

        <p className="font-body text-muted-foreground leading-relaxed mt-8">
          {t.licensingOutro}
        </p>

      </div>
    </section>
  );
};

export default LicensingModels;