import "./index.css";
import { hydrateRoot } from "react-dom/client";

import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import App from "./App";

hydrateRoot(
  document.getElementById("root") as HTMLElement,
  <HelmetProvider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </HelmetProvider>
);
