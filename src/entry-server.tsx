import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom/server";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

import { MetaProvider } from "./provider/MetaProvider";

import { getArtistMeta, getEventMeta } from "./store/thunks";

export const render = async (url: string) => {
  const helmetContext = {};

  let metaEvent = await getEventMeta(url);
  let metaArtist = await getArtistMeta(url);

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <MetaProvider data={{ event: metaEvent, artist: metaArtist }}>
          <App />
        </MetaProvider>
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet }: any = helmetContext;

  return {
    html,
    helmetContext: { helmet },
  };
};
