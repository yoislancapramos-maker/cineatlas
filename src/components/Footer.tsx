const Footer = () => {
  return (
    <footer className="border-t border-border/30 py-12">
      <div className="container mx-auto px-6 text-center space-y-4">
        <div className="flex items-center justify-center gap-3 mb-4">
          <img
            src="/logo.png"
            alt="CineAtlas"
            className="h-8 w-8 rounded-full object-cover ring-1 ring-gold/20"
          />
          <span className="text-gold-gradient font-display text-lg font-bold tracking-wide">
            CineAtlas
          </span>
        </div>
        <p className="font-body text-xs text-muted-foreground max-w-lg mx-auto leading-relaxed">
          Professional YouTube AVOD film distribution. Licensed content, optimized monetization,
          and rights-compliant workflows for global territories.
        </p>
        <div className="pt-4 border-t border-border/20 space-y-3">
          <p className="font-body text-[11px] text-muted-foreground/60">
            © {new Date().getFullYear()} CineAtlas. All rights reserved. Content distribution subject to
            territorial licensing agreements and rights holder approval. CineAtlas does not claim
            ownership of distributed content.
          </p>
          <p className="font-body text-[11px] text-muted-foreground/40">
            CineAtlas operates as an independent AVOD distribution initiative focused on licensed cinematic content.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
