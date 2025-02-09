import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { MetaComp } from "../../../../../ui/components";

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


export const EventDetailPage = () => {
  const { id } = useParams<{ id: string }>();
  const [event, setEvent] = useState<EventDetails | null>(null);

  useEffect(() => {
    if (id && !event) {
      fetchEventDetails(id).then(setEvent);
    }
  }, [id]);

  if (!event) return <div>Cargando...</div>;

  return (
    <div>
      <MetaComp title={event.title} />
      <h1>{event.title}</h1>
      <p>{event.description}</p>
    </div>
  );
};
