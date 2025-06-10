import { AppDispatch } from "..";
import { theEventApi } from "../../lib";
import { HomeRes } from "../../interfaces/HomeInterface";
import { adminStart, adminFailure, adminSuccess } from "../slices";

export const getAdmin = (idEvent: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch(adminStart());

    const maxRetries = 2;
    let attempt = 0;

    while (attempt <= maxRetries) {
      try {
        const { data } = await theEventApi.get<HomeRes>(
          `admin/getAdmin/${idEvent}`
        );
        dispatch(adminSuccess(data.data));
        return;
      } catch (error) {
        attempt++;
        if (attempt > maxRetries) {
          dispatch(adminFailure("Failed to fetch admin data"));
        }
      }
    }
  };
};
