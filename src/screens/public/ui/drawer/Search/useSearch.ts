import { useEffect, useState } from "react";

export const useSearch = () => {
  const [events, setEvents] = useState<any[]>([]);

  useEffect(() => {
    onGetAllEvents();
  }, []);

  const onGetAllEvents = async () => {
    setEvents([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  };

  return { events };
};
