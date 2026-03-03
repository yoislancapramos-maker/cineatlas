const RightsCompliance = () => {
  return (
    <section className="py-24 md:py-32">
      <div className="container mx-auto px-6 max-w-3xl text-center">
        <div className="mb-8">
          <div className="w-16 h-px bg-primary/30 mx-auto mb-8" />
          <h2 className="font-display text-3xl md:text-4xl font-bold text-gold-gradient gold-text-glow mb-6">
            Rights & Compliance
          </h2>
        </div>
        <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
          <p>
            All content distributed through CineAtlas is subject to rights verification
            and territorial review. We work exclusively under defined licensing agreements
            and do not claim ownership of third-party content.
          </p>
          <p>
            Distribution availability may vary based on regional rights and platform policies.
          </p>
        </div>
        <div className="w-16 h-px bg-primary/30 mx-auto mt-8" />
      </div>
    </section>
  );
};

export default RightsCompliance;
