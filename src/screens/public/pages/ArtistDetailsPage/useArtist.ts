import { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { getLocalStorage } from "../../../../hooks";
import { getArtistDetail } from "../../../../store/thunks";
import { MetaContext } from "../../../../context/MetaContext";

import { ArtistData } from "../../../../interfaces/ArtistInterface";

export const useArtist = () => {
  const { id } = useParams();
  const { artistMeta } = useContext(MetaContext);

  const [artistDetail, setArtistDetail] = useState<ArtistData>();

  useEffect(() => {
    getArtistDetailStorage();
    getArtistDetailApi();
  }, []);

  const getArtistDetailStorage = () => {
    setArtistDetail(getLocalStorage("artist"));
  };

  const getArtistDetailApi = async () => {
    const res = await getArtistDetail(id);
    setArtistDetail(res);
  };

  return { artistDetail, artistMeta };
};
