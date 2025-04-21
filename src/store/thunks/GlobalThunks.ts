import { AppDispatch } from "..";
import { theEventApi } from "../../lib";
import { GlobalRes } from "../../interfaces/GlobalInterface";
import { globalFailure, globalStart, globalSuccess } from "../slices";

export const getGlobal = () => {
    return async (dispatch: AppDispatch) => {
      dispatch(globalStart());
  
      const maxRetries = 2;
      let attempt = 0;
  
      while (attempt <= maxRetries) {
        try {
          const { data } = await theEventApi.get<GlobalRes>(`global`);
          dispatch(globalSuccess(data.data));
          return; // Éxito, salimos de la función
        } catch (error) {
          attempt++;
          if (attempt > maxRetries) {
            dispatch(globalFailure("Error al cargar los datos"));
          }
        }
      }
    };
  };
