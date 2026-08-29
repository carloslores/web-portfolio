import { createContext, useContext, useState, useEffect, useMemo } from "react";
import esData from "../locales/es.json";
import enData from "../locales/en.json";

const GlobalContext = createContext();

const es = esData.default || esData;
const en = enData.default || enData;
const translations = { es, en };

export const GlobalProvider = ({ children }) => {
  const [isLightMode, setisLightMode] = useState(false);
  const [showCoder, setShowCoder] = useState(false);
  const [lang, setLang] = useState("es");

  useEffect(() => {
    if (isLightMode) {
      document.body.classList.remove("dark-mode");
      document.body.classList.add("light-mode");
    } else {
      document.body.classList.remove("light-mode");
      document.body.classList.add("dark-mode");
    }
  }, [isLightMode]);

  const toggleDarkMode = () => setisLightMode((prev) => !prev);
  const toggleLanguage = () => setLang((prev) => (prev === "es" ? "en" : "es"));

  const t = useMemo(() => {
    return translations[lang] || translations.es || es;
  }, [lang]);

  const value = useMemo(
    () => ({ isLightMode, toggleDarkMode, showCoder, setShowCoder, lang, setLang, toggleLanguage, t }),
    [isLightMode, showCoder, lang, t]
  );

  return (
    <GlobalContext.Provider value={value}>
      {children}
    </GlobalContext.Provider>
  );
};

export const useGlobal = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error("useGlobal debe usarse dentro de un GlobalProvider");
  }
  return context;
};
