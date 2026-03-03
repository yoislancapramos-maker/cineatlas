import { useLanguage } from "@/context/LanguageContext";

const OperationalFramework = () => {
  const { t } = useLanguage();

  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl">
        <div className="glass-card rounded-sm p-10 md:p-14 banner-gold-rim">
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient gold-text-glow mb-8 text-center">
            {t.operationalTitle}
          </h2>
          <div className="space-y-5 font-body text-muted-foreground leading-relaxed text-center">
            <p>{t.operationalP1}</p>
            <p>{t.operationalP2}</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OperationalFramework;