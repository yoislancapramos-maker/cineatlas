import { useState, useEffect } from "react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "Catalog", href: "#catalog" },
    { label: "Distributors", href: "#how-we-work" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "glass-dark py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">
        <a href="#" className="flex items-center gap-3 group">
          <img
            src="/logo.png"
            alt="CineAtlas"
            className="h-10 w-10 rounded-full object-cover ring-1 ring-gold/30"
          />
          <span className="text-gold-gradient font-display text-xl font-bold tracking-wide">
            CineAtlas
          </span>
        </a>

        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-body text-sm tracking-widest uppercase text-foreground/70 hover:text-primary transition-colors duration-300"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="metallic-shine rounded border border-primary/50 bg-primary/10 px-5 py-2 font-body text-sm font-medium tracking-wider uppercase text-primary transition-all duration-300 hover:bg-primary/20 hover:border-primary/70 gold-glow"
          >
            License Content
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
