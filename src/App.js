import { useEffect, useRef } from "react";
import Header from "./components/Header/Header";
import "./App.scss";
import Welcome from "./sections/welcome";
import { GlobalProvider } from "./contexts/GlobalContext";
import RailWrap from "./components/RailWrap/RailWrap";

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
      <main className="App">
        <div>
          <Header/>
        </div>

        <Welcome />
        <RailWrap />



      </main>
    </GlobalProvider>
  );
}

export default App;
