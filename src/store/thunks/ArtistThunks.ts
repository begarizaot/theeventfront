import { AppDispatch } from "..";
import { theEventApi } from "../../lib";
import { ArtistRes } from "../../interfaces/ArtistInterface";
import { artistFailure, artistStart, artistSuccess } from "../slices";

export const getArtist = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(artistStart());
    try {
      const { data } = await theEventApi.get<ArtistRes>(`artist/getArtist`);

      if (!data.status)
        return dispatch(artistFailure("Error al cargar los datos"));

      dispatch(artistSuccess(data.data));
    } catch (error) {
      dispatch(artistFailure("Error al cargar los datos"));
    }
  };
};
