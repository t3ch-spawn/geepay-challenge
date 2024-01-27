import React, { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Lenis from "@studio-freight/lenis";
import Home from "./components/Home";
import Loader from "./components/Loader";

export const Context = React.createContext();

function App() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }
    requestAnimationFrame(raf);
  }, []);

  const [isMobileSide, setMobileSide] = useState(false);

  return (
    <Context.Provider value={[isMobileSide, setMobileSide]}>
      <main className="w-full relative font-jakarta">
        {/* <Loader /> */}
        <Home />
      </main>
    </Context.Provider>
  );
}

export default App;
