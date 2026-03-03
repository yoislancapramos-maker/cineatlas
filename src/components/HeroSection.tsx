const HeroSection = () => {
  return (
    <section className="relative overflow-hidden w-full bg-background pt-24 pb-8 min-h-[65vh] flex items-center">
      
      {/* CONTENT */}
      <div className="relative z-20 container mx-auto px-6 text-center">
        <div className="max-w-4xl mx-auto">

          {/* ===== TITLES ===== */}
<h1
  className="font-display font-bold leading-[0.95] mb-3 opacity-0 animate-fade-in-up"
  style={{
    textShadow:
      "0 0 30px hsl(43, 72%, 55%, 0.2), 0 0 60px hsl(43, 72%, 55%, 0.08)",
  }}
>
  {/* Desktop: una línea */}
  <span className="hidden md:block text-3xl lg:text-[2.6rem] xl:text-[3.1rem] whitespace-nowrap">
    <span className="text-gold-gradient gold-text-glow">
      YouTube AVOD
    </span>{" "}
    <span className="text-foreground">
      Film Monetization
    </span>
  </span>

  {/* Mobile: formato vertical */}
  <span className="md:hidden block text-3xl sm:text-4xl">
    <span className="text-gold-gradient gold-text-glow block">
      YouTube AVOD
    </span>
    <span className="text-foreground block mt-1">
      Film Distribution
    </span>
  </span>

  {/* Sub */}
  <span className="block mt-3 text-foreground/80 text-xl sm:text-2xl md:text-3xl font-medium">
    Infrastructure
  </span>
</h1>

          {/* ===== PARAGRAPHS ===== */}
          <p
            className="font-body text-muted-foreground text-sm sm:text-base max-w-2xl mx-auto mb-3 leading-relaxed opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.3s" }}
          >
           Professional monetization of licensed films across YouTube AVOD infrastructure. Flexible deal structures including Revenue Share, MG, and hybrid models for rights holders.
          </p>

          <p
            className="font-body text-foreground/75 text-xs sm:text-sm max-w-xl mx-auto mb-8 tracking-wide opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.45s" }}
          >
            Built for legitimate, rights-aware AVOD exploitation in collaboration with distributors and content owners.
          </p>

          {/* ===== BANNER STRIP (NUEVO) ===== */}
          <div
            className="relative mx-auto mb-8 overflow-hidden rounded-sm opacity-0 animate-fade-in-up banner-gold-rim"
            style={{
              animationDelay: "0.55s",
              maxWidth: "1100px",
              height: "clamp(160px, 18vw, 200px)",
            }}
          >
            <img
              src="/banner.png"
              alt=""
              className="h-full w-full object-cover object-center"
            />

            {/* overlays suaves */}
            <div className="absolute inset-0 bg-background/35" />
            <div className="absolute inset-0 vignette" />

            {/* glow dorado suave */}
            <div
              className="absolute inset-0"
              style={{
                background:
                  "radial-gradient(ellipse at center, hsl(43, 72%, 55%, 0.06) 0%, transparent 65%)",
              }}
            />
          </div>

          {/* ===== BUTTONS ===== */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up"
            style={{ animationDelay: "0.7s" }}
          >
            <a
              href="#catalog"
              className="metallic-shine inline-flex items-center gap-2 rounded-sm bg-primary px-8 py-2.5 font-body text-sm font-semibold tracking-wider uppercase text-primary-foreground transition-all duration-300 hover:brightness-110 gold-glow-strong shine-sweep"
            >
              Explore Catalog
            </a>

            <a
              href="#how-we-work"
              className="inline-flex items-center gap-2 rounded-sm border border-primary/40 px-8 py-2.5 font-body text-sm font-medium tracking-wider uppercase text-primary transition-all duration-300 hover:bg-primary/10 hover:border-primary/60"
            >
              For Distributors
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;