import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { dataListEvents } from "../../../../data/listEvents";
import { dataListArtists } from "../../../../data/listArtists";
import { dataListCategories } from "../../../../data/listCategories";

import { AppDispatch, RootState } from "../../../../store";
import { getHome } from "../../../../store/thunks";

export const useHome = () => {
  const [allEvents, setAllEvents] = useState<any>([]);
  const [listArtists, setlistArtists] = useState<any>([]);
  const [allcategories, setAllcategories] = useState<any[]>([]);

  const dispatch: AppDispatch = useDispatch();
  const { homeDate, loading } = useSelector((state: RootState) => state.home);

  useEffect(() => {
    dispatch(getHome());
  }, [dispatch]);

  useEffect(() => {
    fetchListEvents();
    fetchListArtists();
    fetchAllCategories();
  }, []);

  const fetchListEvents = async () => {
    setAllEvents(dataListEvents);
  };

  const fetchListArtists = async () => {
    setlistArtists(dataListArtists);
  };

  const fetchAllCategories = async () => {
    setAllcategories(dataListCategories);
  };

  return { allEvents, listArtists, allcategories, homeDate };
};
