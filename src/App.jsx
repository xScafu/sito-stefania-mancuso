import { useEffect, useState } from "react";
import Home from "./routes/Home";
import { useSelector } from "react-redux";
import { PrimeReactProvider, PrimeReactContext } from "primereact/api";

function App() {
  const darkModeSelector = useSelector((state) => state.theme.darkMode);
  const [darkMode, setDarkMode] = useState(darkModeSelector);

  const value = { ripple: true };

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
      <PrimeReactProvider value={value}>
        <Home />
      </PrimeReactProvider>
    </div>
  );
}

export default App;
