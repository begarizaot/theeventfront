import { useEffect, useState } from "react";
import { dataListEvents } from "../../../../data/listEvents";
import { dataListArtists } from "../../../../data/listArtists";
import { dataListTestimonials } from "../../../../data/listTestimonials";

export const useHome = () => {
  const [listEvents, setlistEvents] = useState<any>([]);
  const [listArtists, setlistArtists] = useState<any>([]);
  const [listTestimonials, setlistTestimonials] = useState<any>([]);

  useEffect(() => {
    fetchListEvents();
    fetchListArtists();
    fetchListTestimonials();
  }, []);

  const fetchListEvents = async () => {
    setlistEvents(dataListEvents);
  };

  const fetchListArtists = async () => {
    setlistArtists(dataListArtists);
  };

  const fetchListTestimonials = async () => {
    setlistTestimonials(dataListTestimonials);
  };

  return { listEvents, listArtists, listTestimonials };
};
