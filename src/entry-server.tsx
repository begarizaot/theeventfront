import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

import { MetaProvider } from "./provider/MetaProvider";
import { getArtistMeta, getEventMeta } from "./store/thunks";

export const render = async (url: string) => {
  const helmetContext: any = {};

  // Prefetch de datos
  const [metaArtist, metaEvent] = await Promise.all([
    getArtistMeta(url),
    getEventMeta(url),
  ]);

  // Render SSR con datos listos
  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <MetaProvider data={{ event: metaEvent, artist: metaArtist }}>
          <App />
        </MetaProvider>
      </StaticRouter>
    </HelmetProvider>
  );

  return {
    html,
    helmetContext, // ahora el servidor recibirá helmetContext directamente
  };
};
