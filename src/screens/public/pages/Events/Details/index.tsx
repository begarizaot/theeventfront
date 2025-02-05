import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";

const fetchEventDetails = (id: string) =>
  Promise.resolve({
    title: `Evento ${id}`,
    description: `Descripción del evento ${id}`,
    keywords: `evento, detalles, ${id}`,
  });

type EventDetails = {
  title: string;
  description: string;
  keywords: string;
};

interface EventDetailPageProps {
  ssrEvent?: EventDetails; // Datos precargados por SSR
}

export const EventDetailPage = ({ ssrEvent }: EventDetailPageProps) => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetails | null>(ssrEvent || null);

  useEffect(() => {
    if (id && !event) {
      fetchEventDetails(id).then(setEvent);
    }
  }, [id]);

  if (!event) return <div>Cargando...</div>;

  return (
    <div>
      <Helmet>
        <title>{event.title}</title>
        <meta name="description" content={event.description} />
        <meta name="keywords" content={event.keywords} />
      </Helmet>
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
};
