import { renderToString } from "react-dom/server";
import { StaticRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import App from "./App";

async function fetchEventDetails(id: string) {
  return {
    title: `Evento ${id}`,
    description: `Descripción del evento ${id}`,
    keywords: `evento, detalles, ${id}`,
  };
}

export const render = async (url: string) => {
  const helmetContext = {};

  let ssrEvent = null;

  // Verificar si la URL corresponde a un evento
  const match = url.match(/^\/event\/(.+)/);
  if (match) {
    const eventId = match[1];
    console.log("eventId", eventId);
    ssrEvent = await fetchEventDetails(eventId);
  }

  const html = renderToString(
    <HelmetProvider context={helmetContext}>
      <StaticRouter location={url}>
        <App ssrEvent={ssrEvent} />
      </StaticRouter>
    </HelmetProvider>
  );

  const { helmet }: any = helmetContext;

  return {
    html,
    helmetContext: { helmet },
  };
};
