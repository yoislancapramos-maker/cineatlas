const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0">
        <img
          src="/hero-bg.jpg"
          alt=""
          className="h-full w-full object-cover"
        />
        <div className="absolute inset-0 bg-background/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-background/40 to-background/20" />
        <div className="absolute inset-0 vignette" />
      </div>

      {/* Content */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">
          <h1
            className="font-display text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold leading-[0.95] mb-6 opacity-0 animate-fade-in-up"
          >
            <span className="text-gold-gradient gold-text-glow block">YouTube AVOD</span>
            <span className="text-foreground block mt-2">Film Distribution</span>
            <span className="text-foreground/80 block mt-1 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-medium">
              Infrastructure
            </span>
          </h1>

          <p
            className="font-body text-muted-foreground text-base sm:text-lg max-w-2xl mx-auto mb-10 leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
            Professional film monetization through licensed AVOD distribution. 
            Rights-compliant workflows, optimized revenue channels, and enterprise-grade 
            reporting for content licensors worldwide.
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
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
    </section>
  );
};

export default HeroSection;
