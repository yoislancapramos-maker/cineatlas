import { createContext, useContext, useState } from "react";
import { translations } from "../translations";

type Lang = "en" | "es";

type LanguageContextType = {
  lang: Lang;
  setLang: (lang: Lang) => void;
  t: any;
};

const LanguageContext = createContext<LanguageContextType | null>(null);

export const LanguageProvider = ({ children }: any) => {
  const [lang, setLang] = useState<Lang>("en");
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