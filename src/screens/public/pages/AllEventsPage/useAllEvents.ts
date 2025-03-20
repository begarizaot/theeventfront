import { useEffect, useState } from "react";
import { dataListCategories } from "../../../../data/listCategories";
import { dataListEvents } from "../../../../data/listEvents";

export const useAllEvents = () => {
  const [listEvents, setlistEvents] = useState<any>([]);
  const [allcategories, setAllcategories] = useState<any[]>([]);

  useEffect(() => {
    fetchAllCategories();
    fetchListEvents();
  }, []);

  const fetchAllCategories = async () => {
    setAllcategories(dataListCategories);
  };

  const fetchListEvents = async () => {
    setlistEvents(dataListEvents);
  };

  return { allcategories, listEvents };
};
