import { AppDispatch } from "..";
import { theEventApi } from "../../lib";
import { EventRes } from "../../interfaces/EventsInterface";
import { eventHomeFailure, eventHomeStart, eventHomeSuccess } from "../slices";

export const getEventHome = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(eventHomeStart());
    try {
      const { data } = await theEventApi.get<EventRes>(`event/getEventsHome`);

      if (!data.status)
        return dispatch(eventHomeFailure("Error al cargar los datos"));

      dispatch(eventHomeSuccess(data.data));
    } catch (error) {
      dispatch(eventHomeFailure("Error al cargar los datos"));
    }
  };
};

export const getEventMeta = async (url?: any) => {
  const match = url.match(/^\/event\/(.+)/);
  if (match && match.length > 0) {
    const eventId = match[1] || "";
    try {
      const { data } = await theEventApi.get(`event/getEventMeta/${eventId}`);
      const res = data.data || {};
      return res;
    } catch (error) {
      return {};
    }
  } else {
    return {};
  }
};
