import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import store from "./app/store.js";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router";
import { Analytics } from "@vercel/analytics/react";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Provider store={store}>
        <div className="relative">
          <Analytics />
          <App />
        </div>
      </Provider>
    </BrowserRouter>
  </StrictMode>
);
