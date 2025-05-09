import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import { AppDispatch, RootState } from "../../../../store";
import { getArtist, getEventHome, getHome } from "../../../../store/thunks";

export const useHome = () => {
  const dispatch: AppDispatch = useDispatch();
  const { homeDate, loading: loadingHome } = useSelector(
    (state: RootState) => state.home
  );
  const { eventDate, loading: loadingEvents } = useSelector(
    (state: RootState) => state.eventHome
  );
  const { artistDate, loading: loadingArtist } = useSelector(
    (state: RootState) => state.artist
  );

  useEffect(() => {
    dispatch(getHome());
    dispatch(getEventHome());
    dispatch(getArtist());
  }, [dispatch]);

  return {
    homeDate,
    eventDate,
    artistDate,
    loadingEvents,
    loadingArtist,
    loadingHome,
  };
};
