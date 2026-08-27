import { createContext, useContext, useState, useEffect, useMemo } from "react";

const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [isLightMode, setisLightMode] = useState(false);
  const [showCoder, setShowCoder] = useState(false);

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
  const value = useMemo(
    () => ({ isLightMode, toggleDarkMode, showCoder, setShowCoder }),
    [isLightMode, showCoder]
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
