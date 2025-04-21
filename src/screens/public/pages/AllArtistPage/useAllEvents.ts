import { useEffect, useState } from "react";
import { dataListEvents } from "../../../../data/listEvents";

export const useAllEvents = () => {
  const [listEvents, setlistEvents] = useState<any>([]);

  useEffect(() => {
    fetchListEvents();
  }, []);

  const fetchListEvents = async () => {
    setlistEvents(dataListEvents);
  };

  return { listEvents };
};
