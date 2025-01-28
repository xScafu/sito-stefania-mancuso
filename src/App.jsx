import { useEffect, useState } from "react";
import Home from "./routes/Home";
import About from "./routes/About";
import Music from "./routes/Music";
import Contact from "./routes/Contact";
import Navbar from "./components/Navbar";
import { useSelector } from "react-redux";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";
import { Route, Routes, useLocation } from "react-router";
import { motion, AnimatePresence } from "motion/react";
import LogoBig from "./components/ui/home/LoogoBig";

function App() {
  const darkModeSelector = useSelector((state) => state.theme.darkMode);
  const [darkMode, setDarkMode] = useState(darkModeSelector);

  const value = { ripple: true };
  const location = useLocation();

  useEffect(() => {
    let darkMode = JSON.parse(localStorage.getItem("theme"));
    setDarkMode(darkMode);
  });

  return (
    <div
      className={`${
        darkMode ? "dark" : ""
      } p-2 bg-apricot dark:bg-englishViolet`}
    >
      <div className="border-2 border-bistre overflow-clip">
        <div className="hidden xl:inline">
          <LogoBig />
        </div>
        <div className="sticky top-0 z-50 navbar">
          <Navbar />
        </div>
        <AnimatePresence mode="wait">
          <PrimeReactProvider value={value}>
            <Routes location={location} key={location.pathname}>
              <Route
                path="/"
                element={
                  <PageAnimation>
                    <Home />
                  </PageAnimation>
                }
              />
              <Route
                path="about"
                element={
                  <PageAnimation>
                    <About />
                  </PageAnimation>
                }
              />
              <Route
                path="music"
                element={
                  <PageAnimation>
                    <Music />
                  </PageAnimation>
                }
              />
              <Route
                path="contact"
                element={
                  <PageAnimation>
                    <Contact />
                  </PageAnimation>
                }
              />
            </Routes>
          </PrimeReactProvider>
        </AnimatePresence>
      </div>
    </div>
  );
}
function PageAnimation({ children }) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1, delay: 1 }}
    >
      {children}
    </motion.div>
  );
}
export default App;
