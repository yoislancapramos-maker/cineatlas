import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { t, lang, setLang } = useLanguage();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: t.navCatalog, href: "#catalog" },
    { label: t.navDistributors, href: "#how-we-work" },
    { label: t.navAbout, href: "#about" },
    { label: t.navContact, href: "#contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass-dark py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between px-6">

        {/* LOGO */}
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

        {/* NAV */}
        <div className="hidden md:flex items-center gap-6">

          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 py-1.5 rounded-sm border border-primary/20 font-body text-xs tracking-widest uppercase text-foreground/80 hover:text-primary hover:border-primary/40 hover:bg-primary/5 transition-all duration-300"
            >
              {link.label}
            </a>
          ))}

          {/* CTA */}
          <a
            href="#contact"
            className="metallic-shine shine-sweep rounded border border-primary/30 bg-primary px-4 py-2 font-body text-xs font-semibold tracking-wider uppercase text-primary-foreground transition-all duration-300 hover:brightness-110 gold-glow-strong"
          >
            {t.navSubmitTitles}
          </a>

          {/* LANGUAGE SWITCH */}
          <div className="flex rounded-full border border-primary/40 overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 text-[10px] font-semibold tracking-wider uppercase transition-all ${
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-white hover:bg-primary/10"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLang("es")}
              className={`px-2 py-1 text-[10px] font-semibold tracking-wider uppercase transition-all ${
                lang === "es"
                  ? "bg-primary text-primary-foreground"
                  : "text-white hover:bg-primary/10"
              }`}
            >
              ES
            </button>
          </div>

        </div>
      </div>
    </nav>
  );
};

export default Navbar;