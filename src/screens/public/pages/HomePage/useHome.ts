import { useEffect, useState } from "react";
import { dataListEvents } from "../../../../data/listEvents";
import { dataListArtists } from "../../../../data/listArtists";
import { dataListCategories } from "../../../../data/listCategories";

export const useHome = () => {
  const [listEvents, setlistEvents] = useState<any>([]);
  const [allEvents, setAllEvents] = useState<any>([]);
  const [listArtists, setlistArtists] = useState<any>([]);
  const [allcategories, setAllcategories] = useState<any[]>([]);

  useEffect(() => {
    fetchListEvents();
    fetchListArtists();
    fetchAllCategories();
  }, []);

  const fetchListEvents = async () => {
    setlistEvents([dataListEvents[0]]);
    setAllEvents(dataListEvents);
  };

  const fetchListArtists = async () => {
    setlistArtists(dataListArtists);
  };

  const fetchAllCategories = async () => {
    setAllcategories(dataListCategories);
  };

  return { allEvents, listEvents, listArtists, allcategories };
};
