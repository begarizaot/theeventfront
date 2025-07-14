import { AppDispatch } from "..";
import { theEventApi } from "../../lib";
import { GlobalRes } from "../../interfaces/GlobalInterface";
import { globalFailure, globalStart, globalSuccess } from "../slices";
import { clearLocalStorage, setLocalStorage } from "../../hooks";

export const getGlobal = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(globalStart());

    const maxRetries = 2;
    let attempt = 0;

    while (attempt <= maxRetries) {
      try {
        const { data } = await theEventApi.get<GlobalRes>(`global`);
        dispatch(globalSuccess(data.data));
        setLocalStorage("global", data.data);
        return; // Éxito, salimos de la función
      } catch (error: any) {
        attempt++;

        if (
          error?.response?.data?.error?.name === "UnauthorizedError" &&
          error?.response?.data?.error?.status === 401
        ) {
          clearLocalStorage();
        }
        if (attempt > maxRetries) {
          dispatch(
            globalFailure("Failed to fetch global data after multiple attempts")
          );
        }
      }
    }
  };
};
