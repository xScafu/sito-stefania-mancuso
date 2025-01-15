import { useEffect, useState } from "react";
import Home from "./routes/Home";
import { useSelector } from "react-redux";

function App() {
  const darkModeSelector = useSelector((state) => state.theme.darkMode);
  const [darkMode, setDarkMode] = useState(darkModeSelector);

  useEffect(() => {
    let darkMode = JSON.parse(localStorage.getItem("theme"));
    setDarkMode(darkMode);
  });

  return (
    <div
      className={`${darkMode ? "dark" : ""} p-2 bg-apricot dark:bg-darkPurple`}
    >
      <Home />
    </div>
  );
}

export default App;
