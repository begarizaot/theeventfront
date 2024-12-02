import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.scss";
import App from "./App.tsx";

import { PrimeReactProvider } from "primereact/api";

import 'animate.css';

import "primereact/resources/themes/lara-light-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex

import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  // <StrictMode>
    <PrimeReactProvider value={{ ripple: true, inputStyle: "outlined" }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PrimeReactProvider>
  // </StrictMode>
);
