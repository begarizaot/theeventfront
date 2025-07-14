import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../../../store";
import { getArtist, getEventHome, getHome } from "../../../../store/thunks";
import { getLocalStorage } from "../../../../hooks";

export const useHome = () => {
  const dispatch: AppDispatch = useDispatch();
  const { homeDate:home, loading: loadingHome } = useSelector(
    (state: RootState) => state.home
  );
  const { eventDate, loading: loadingEvents } = useSelector(
    (state: RootState) => state.eventHome
  );
  const { artistDate, loading: loadingArtist } = useSelector(
    (state: RootState) => state.artist
  );

  const [homeDate, setHomeDate] = useState<any>({})

  useEffect(() => {
    dispatch(getHome());
    dispatch(getEventHome());
    dispatch(getArtist());
  }, [dispatch]);

  useEffect(() => {
    fechHomeData();
  }, [home]);

  const fechHomeData = async () => {
    const res = await getLocalStorage("home");
    setHomeDate(home ?? res ?? {});
  };

  return {
    homeDate,
    eventDate,
    artistDate,
    loadingEvents,
    loadingArtist,
    loadingHome,
  };
};
