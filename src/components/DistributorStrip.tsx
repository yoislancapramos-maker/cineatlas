import { useLanguage } from "@/context/LanguageContext";

const DistributorStrip = () => {
  const { t } = useLanguage();

  return (
    <section className="py-16 border-y border-border/20">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <p className="font-body text-xs tracking-[0.35em] uppercase text-primary/70 mb-6">
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