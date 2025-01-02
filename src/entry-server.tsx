import { StrictMode } from "react";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import App from "./App";
import { Helmet } from "react-helmet";

export function render(_url: string) {
  const html = renderToString(
    <StrictMode>
      <StaticRouter location={_url}>
        <App />
      </StaticRouter>
    </StrictMode>
  );
  return { html, helmet: Helmet.renderStatic() };
}
