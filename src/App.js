import React, { useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import Welcome from "./sections/welcome";
import { GlobalProvider } from "./contexts/GlobalContext";

function App() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (!hasRun.current) {
      document.body.classList.add("dark-mode");
      hasRun.current = true;
    }
  }, []);

  return (
    <GlobalProvider>
      <div className="App">
        <Header />
        <Welcome />
      </div>
    </GlobalProvider>
  );
}

export default App;
