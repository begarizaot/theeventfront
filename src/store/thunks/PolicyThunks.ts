import { AppDispatch } from "..";
import { theEventApi } from "../../lib";
import { HomeRes } from "../../interfaces/HomeInterface";
import { policyFailure,policyStart,policySuccess, } from "../slices/PolicySlices";
import { setLocalStorage } from "../../hooks";

export const getPolicy = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(policyStart());

    const maxRetries = 2;
    let attempt = 0;

    while (attempt <= maxRetries) {
      try {
        const { data } = await theEventApi.get<HomeRes>(`policy`);
        setLocalStorage("policy", data.data);
        dispatch(policySuccess(data.data));
        return; // Éxito, salimos de la función
      } catch (error) {
        attempt++;
        if (attempt > maxRetries) {
          dispatch(policyFailure("Failed to fetch policy after multiple attempts."));
        }
      }
    }
  };
};
