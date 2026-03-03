const placeholders = Array.from({ length: 6 });

const CatalogPreview = () => {
  return (
    <section id="catalog" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gold-gradient gold-text-glow mb-4">
            Catalog in Preparation
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            Our curated film catalog is currently being assembled for AVOD distribution.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {placeholders.map((_, i) => (
            <div
              key={i}
              className="group relative aspect-[2/3] overflow-hidden rounded-sm cursor-default card-gold-rim transition-all duration-500 hover:gold-glow"
            >
              {/* Dark placeholder background */}
              <div className="absolute inset-0 bg-cinema-surface flex items-center justify-center">
                <div className="text-center px-3">
                  <div className="w-8 h-8 mx-auto mb-3 rounded-full border border-primary/20 flex items-center justify-center">
                    <svg className="w-4 h-4 text-primary/40" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7 4v16M17 4v16M3 8h4m10 0h4M3 12h18M3 16h4m10 0h4M4 20h16a1 1 0 001-1V5a1 1 0 00-1-1H4a1 1 0 00-1 1v14a1 1 0 001 1z" />
                    </svg>
                  </div>
                  <span className="font-body text-[10px] tracking-widest uppercase text-muted-foreground/50">
                    TBA
                  </span>
                </div>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center mt-8 font-body text-xs tracking-widest uppercase text-muted-foreground/60">
          Titles to be announced
        </p>
      </div>
    </section>
  );
};

export default CatalogPreview;
