import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { createRoot } from "react-dom/client";

import "./index.scss";
import App from "./App.tsx";

import { PrimeReactProvider } from "primereact/api";

import "animate.css";
import store from "./store/index.ts";

import "primereact/resources/themes/lara-light-blue/theme.css"; //theme
import "primereact/resources/primereact.min.css"; //core css
import "primeicons/primeicons.css"; //icons
import "primeflex/primeflex.css"; // flex

createRoot(document.getElementById("root")!).render(
  <Provider store={store}>
    <PrimeReactProvider value={{ ripple: true, inputStyle: "outlined" }}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </PrimeReactProvider>
  </Provider>
);
