import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { GlobalStore, storeInitial } from "./context/index.ts";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStore.Provider value={storeInitial}>
      <App />
    </GlobalStore.Provider>
  </StrictMode>
);
