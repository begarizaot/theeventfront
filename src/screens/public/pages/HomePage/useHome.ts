import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { dataListArtists } from "../../../../data/listArtists";
import { dataListCategories } from "../../../../data/listCategories";

import { AppDispatch, RootState } from "../../../../store";
import { getArtist, getEventHome, getHome } from "../../../../store/thunks";

export const useHome = () => {
  const [listArtists, setlistArtists] = useState<any>([]);
  const [allcategories, setAllcategories] = useState<any[]>([]);

  const dispatch: AppDispatch = useDispatch();
  const { homeDate } = useSelector((state: RootState) => state.home);
  const { eventDate } = useSelector((state: RootState) => state.eventHome);
  const { artistDate } = useSelector((state: RootState) => state.artist);

  useEffect(() => {
    dispatch(getHome());
    dispatch(getEventHome());
    dispatch(getArtist());
  }, [dispatch]);

  useEffect(() => {
    fetchListArtists();
    fetchAllCategories();
  }, []);

  const fetchListArtists = async () => {
    setlistArtists(dataListArtists);
  };

  const fetchAllCategories = async () => {
    setAllcategories(dataListCategories);
  };

  return { listArtists, allcategories, homeDate, eventDate, artistDate };
};
