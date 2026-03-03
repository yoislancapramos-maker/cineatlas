const AboutSection = () => {
  return (
    <section id="about" className="py-24 md:py-28">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="banner-gold-rim rounded-sm overflow-hidden max-w-[460px] mx-auto">
              <img
                src="/about-cinema.png"
                alt="CineAtlas film distribution facility"
                className="w-full h-auto object-cover"
                loading="lazy"
              />
              
            </div>
          </div>

          {/* Text */}
          <div>
            <h2 className="font-display text-3xl md:text-5xl font-bold text-gold-gradient gold-text-glow mb-6">
              About CineAtlas
            </h2>
            <div className="space-y-5 font-body text-muted-foreground leading-relaxed">
              <p>
                CineAtlas operates as a professional YouTube AVOD distribution platform,
                specializing in the monetization of licensed film content across global
                territories.
              </p>
              <p>
                Our infrastructure is built around rights compliance, distributor collaboration,
                and revenue optimization — ensuring that every title in our catalog is
                properly licensed, strategically positioned, and transparently reported.
              </p>
              <p>
                We work exclusively with content licensors and distributors who share our
                commitment to legitimate, rights-aware digital distribution. Every workflow
                is designed to protect intellectual property while maximizing AVOD revenue
                potential.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
