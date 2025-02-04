import App from "./App";
import { renderToString } from "react-dom/server";

import { HelmetProvider } from "react-helmet-async";
import { StaticRouter } from "react-router-dom";

export function render(_url: string) {
  const helmetContext = {};
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={_url}>
        <App />
      </StaticRouter>
    </HelmetProvider>
  );
  return { html, helmetContext };
}
