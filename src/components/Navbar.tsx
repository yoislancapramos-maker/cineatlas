import { useState, useEffect } from "react";
import { useLanguage } from "@/context/LanguageContext";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
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

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-4">

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

        {/* MOBILE RIGHT SIDE */}
        <div className="flex md:hidden items-center gap-3">

          {/* LANGUAGE SWITCH MOBILE */}
          <div className="flex rounded-full border border-primary/40 overflow-hidden">
            <button
              onClick={() => setLang("en")}
              className={`px-2 py-1 text-[10px] font-semibold uppercase ${
                lang === "en"
                  ? "bg-primary text-primary-foreground"
                  : "text-white"
              }`}
            >
              EN
            </button>

            <button
              onClick={() => setLang("es")}
              className={`px-2 py-1 text-[10px] font-semibold uppercase ${
                lang === "es"
                  ? "bg-primary text-primary-foreground"
                  : "text-white"
              }`}
            >
              ES
            </button>
          </div>

          {/* HAMBURGER */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-primary text-xl"
          >
            ☰
          </button>

        </div>
      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden bg-black/90 backdrop-blur-md border-t border-primary/20">
          <div className="flex flex-col items-center py-6 gap-4">

            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-sm uppercase tracking-widest text-white hover:text-primary"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setMenuOpen(false)}
              className="rounded border border-primary/30 bg-primary px-5 py-2 text-xs font-semibold uppercase tracking-wider text-primary-foreground"
            >
              {t.navSubmitTitles}
            </a>

          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;