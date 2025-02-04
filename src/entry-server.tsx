import App from "./App";
import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";

export function render(_url: string) {
  const html = renderToString(
    <StaticRouter location={_url}>
      <App />
    </StaticRouter>
  );
  return { html };
}
