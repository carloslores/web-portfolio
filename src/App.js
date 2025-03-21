import React, { useEffect, useRef, useState } from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import Welcome from "./sections/welcome";
import { GlobalProvider } from "./contexts/GlobalContext";
import About from "./sections/about";
import Projects from "./sections/projects";

function App() {
  const hasRun = useRef(false);
  const [navBg, setNavBg] = useState(false);

  const changeNavBg = () => {
    window.scrollY >= 100 ? setNavBg(true) : setNavBg(false);
  };

  useEffect(() => {
    if (!hasRun.current) {
      document.body.classList.add("dark-mode");
      hasRun.current = true;
    }
  }, []);

  useEffect(() => {
    window.addEventListener("scroll", changeNavBg);
    return () => {
      window.removeEventListener("scroll", changeNavBg);
    };
  }, []);

  return (
    <GlobalProvider>
      <main className="App">
        <div onScroll={changeNavBg}>
          <Header scroll={navBg} />
        </div>

        <Welcome />
        <About />
        <Projects />
      </main>
    </GlobalProvider>
  );
}

export default App;
