import { useEffect, useState } from "react";
import { dataListEvents } from "../../../../data/listEvents";
import { dataListArtists } from "../../../../data/listArtists";

export const useHome = () => {
  const [listEvents, setlistEvents] = useState<any>([]);
  const [listArtists, setlistArtists] = useState<any>([]);

  useEffect(() => {
    fetchListEvents();
    fetchListArtists();
  }, []);

  const fetchListEvents = async () => {
    setlistEvents(dataListEvents);
  };

  const fetchListArtists = async () => {
    setlistArtists(dataListArtists);
  };

  return { listEvents, listArtists };
};
