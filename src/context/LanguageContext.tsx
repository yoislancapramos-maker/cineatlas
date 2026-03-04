import { createContext, useContext, useState, useEffect } from "react";
import { translations } from "../translations";

type Lang = "en" | "es";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: any) => {
  const getInitialLang = (): Lang => {
    const saved = localStorage.getItem("lang") as Lang | null;

    if (saved) return saved;

    const browserLang = navigator.language.toLowerCase();

    if (browserLang.startsWith("es")) return "es";

    return "en";
  };

  const [lang, setLangState] = useState<Lang>(getInitialLang);

  const setLang = (newLang: Lang) => {
    localStorage.setItem("lang", newLang);
    setLangState(newLang);
  };

  const t = translations[lang];

  return (
    <LanguageContext.Provider value={{ lang, setLang, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const ctx = useContext(LanguageContext);
  if (!ctx) throw new Error("useLanguage must be used inside LanguageProvider");
  return ctx;
};