import { useEffect, useState } from "react";
import { getLocalStorage } from "../../../../hooks";
import { ArtistData } from "../../../../interfaces/ArtistInterface";

export const useArtist = () => {
  const [artistDetail, setArtistDetail] = useState<ArtistData>();

  useEffect(() => {
    getArtistDetailStorage();
  }, []);

  const getArtistDetailStorage = () => {
    setArtistDetail(getLocalStorage("artist"));
  };

  return { artistDetail };
};
