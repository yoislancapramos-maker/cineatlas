import { useLanguage } from "@/context/LanguageContext";

const DistributorStrip = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 px-6">
      <div className="mx-auto max-w-3xl text-center glass-card banner-gold-rim rounded-sm p-6 md:p-10">
        <p className="font-body text-sm tracking-[0.35em] uppercase text-gold-gradient gold-text-glow mb-6">
          {t.distributorTitle}
        </p>
        <p className="font-body text-sm text-muted-foreground leading-relaxed max-w-2xl mx-auto">
          {t.distributorDesc}
        </p>
      </div>
    </section>
  );
};

export default DistributorStrip;