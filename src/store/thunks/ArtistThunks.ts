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
        return dispatch(artistFailure("Failed to fetch artists"));

      dispatch(artistSuccess(data.data));
    } catch (error) {
      dispatch(artistFailure("Failed to fetch artists"));
    }
  };
};

export const getListArtist = () => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<ArtistRes>(`artist/getListArtist`);

      if (!data.status) return reject("Failed to fetch artists");

      const res = ((data?.data as any) ?? []).map((item: any) => ({
        label: item?.name || "",
        value: item?.id,
      }));

      resolve(res);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const getArtistAllPage = (
  sizePage = {
    page: 1,
    size: 10,
  },
  search = ""
) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<any>(
        `artist/getArtistAllPage?size=${sizePage.size}&page=${sizePage.page}${
          search ? `&search=${search}` : ""
        }`
      );

      if (!data.status) return reject("Failed to fetch artists");

      resolve(data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const getArtistDetail = (id_artist?: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<ArtistRes>(
        `artist/getArtistDetail/${id_artist}`
      );

      if (!data.status) return reject("Failed to fetch artist details");

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const getArtistMeta = async (url?: any) => {
  const match = url.match(/^\/artist\/(.+)/);
  if (match && match.length > 0) {
    const eventId = match[1] || "";
    try {
      const { data } = await theEventApi.get(`artist/getArtistMeta/${eventId}`);
      const res = data.data || {};
      return res;
    } catch (error) {
      return {};
    }
  } else {
    return {};
  }
};
