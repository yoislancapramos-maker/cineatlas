const HeroSection = () => {
  return (
    <section className="relative flex items-center justify-center overflow-hidden" style={{ height: 'clamp(420px, 50vw, 520px)' }}>
      {/* Background - banner.png */}
      <div className="absolute inset-0">
        <img
          src="/banner.png"
          alt=""
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-background/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-background/10" />
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="font-display text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-[0.95] mb-5 opacity-0 animate-fade-in-up"
          >
            <span className="text-gold-gradient gold-text-glow block">YouTube AVOD</span>
            <span className="text-foreground block mt-2">Film Distribution</span>
            <span className="text-foreground/80 block mt-1 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-medium">
              Infrastructure
            </span>
          </h1>

          <p
            className="font-body text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-8 leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Professional film monetization through licensed AVOD distribution. 
            Rights-compliant workflows and distributor-focused operations.
          </p>

          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <a
              href="#catalog"
              className="metallic-shine inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-3.5 font-body text-sm font-semibold tracking-wider uppercase text-primary-foreground transition-all duration-300 hover:brightness-110 gold-glow-strong animate-pulse-gold"
            >
              Explore Catalog
            </a>
            <a
              href="#how-we-work"
              className="inline-flex items-center gap-2 rounded-sm border border-primary/40 px-8 py-3.5 font-body text-sm font-medium tracking-wider uppercase text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/60"
            >
              For Distributors
            </a>
          </div>
        </div>
      </div>

      {/* Bottom gradient fade */}
      <div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
