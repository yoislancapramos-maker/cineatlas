const posters = [
  { src: "/poster-1.jpg", title: "Shadow Walker" },
  { src: "/poster-2.jpg", title: "Eyes of Ember" },
  { src: "/poster-3.jpg", title: "The Long Road" },
  { src: "/poster-4.jpg", title: "Neon Rain" },
  { src: "/poster-5.jpg", title: "Summit" },
  { src: "/poster-6.jpg", title: "Tidal Edge" },
];

const CatalogPreview = () => {
  return (
    <section id="catalog" className="py-24 md:py-32">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="font-display text-3xl md:text-5xl font-bold text-gold-gradient gold-text-glow mb-4">
            Catalog in Development
          </h2>
          <p className="font-body text-muted-foreground max-w-xl mx-auto">
            A curated selection of licensed films prepared for AVOD distribution.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
          {posters.map(({ src, title }) => (
            <div
              key={title}
              className="group relative aspect-[2/3] overflow-hidden rounded-sm cursor-pointer"
            >
              <img
                src={src}
                alt={title}
                className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 flex items-end p-4">
                <span className="font-display text-sm text-foreground">{title}</span>
              </div>
              <div className="absolute inset-0 border border-transparent group-hover:border-primary/30 rounded-sm transition-all duration-500 group-hover:gold-glow" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CatalogPreview;
