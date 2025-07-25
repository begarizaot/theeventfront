import { AppDispatch } from "..";
import { theEventApi } from "../../lib";
import { HomeRes } from "../../interfaces/HomeInterface";
import { homeFailure, homeStart, homeSuccess } from "../slices/HomeSlices";
import { setLocalStorage } from "../../hooks";

export const getHome = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(homeStart());

    const maxRetries = 2;
    let attempt = 0;

    while (attempt <= maxRetries) {
      try {
        const { data } = await theEventApi.get<HomeRes>(`home`);
        setLocalStorage("home", data.data);
        dispatch(homeSuccess(data.data));
        return; // Éxito, salimos de la función
      } catch (error) {
        attempt++;
        if (attempt > maxRetries) {
          dispatch(homeFailure("Failed to fetch home data after multiple attempts"));
        }
      }
    }
  };
};
