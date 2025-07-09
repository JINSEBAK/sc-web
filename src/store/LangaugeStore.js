import { createContext, useEffect, useState } from "react";
import i18n from "i18n";

export const LanguageContext = createContext();

const LanguageContainer = ({ children }) => {
  const [language, setLanguage] = useState();

  useEffect(() => {
    const lang = localStorage.getItem("lang");
    i18n.changeLanguage(lang);
    setLanguage(lang ?? "ko");
  }, []);

  const onChangeLanguage = (lang) => {
    if (!lang) return;
    i18n.changeLanguage(lang);
    localStorage.setItem("lang", lang);
    setLanguage(lang);
  };

  return (
    <LanguageContext.Provider value={{ language, onChangeLanguage }}>
      {children}
    </LanguageContext.Provider>
  );
};

export default LanguageContainer;
