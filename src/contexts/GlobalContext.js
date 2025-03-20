import { createContext, useContext, useState, useEffect } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLightMode, setisLightMode] = useState(false);

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

  return (
    <GlobalContext.Provider value={{ isLightMode, toggleDarkMode }}>
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
