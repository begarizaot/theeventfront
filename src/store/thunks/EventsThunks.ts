import { AppDispatch } from "..";
import { theEventApi } from "../../lib";
import { EventRes } from "../../interfaces/EventsInterface";
import {
  eventHomeFailure,
  eventHomeStart,
  eventHomeSuccess,
  myEventFailure,
  myEventStart,
  myEventSuccess,
  sharedEventFailure,
  sharedEventStart,
  sharedEventSuccess,
} from "../slices";

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

export const getMyEvent = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(myEventStart());
    try {
      const { data } = await theEventApi.get<EventRes>(`event/getMyEvents`);

      if (!data.status)
        return dispatch(myEventFailure("Error al cargar los datos"));

      dispatch(myEventSuccess(data.data));
    } catch (error) {
      dispatch(myEventFailure("Error al cargar los datos"));
    }
  };
};

export const getSharedEvents = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(sharedEventStart());
    try {
      const { data } = await theEventApi.get<EventRes>(`event/getSharedEvents`);

      if (!data.status)
        return dispatch(sharedEventFailure("Error al cargar los datos"));

      dispatch(sharedEventSuccess(data.data));
    } catch (error) {
      dispatch(sharedEventFailure("Error al cargar los datos"));
    }
  };
};

export const getEventDetail = (id_event?: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<EventRes>(
        `event/getEventDetail/${id_event}`
      );

      if (!data.status) return reject("Error al cargar los datos");

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const getAdminEventDetail = (id_event?: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<EventRes>(
        `event/getAdminEventDetail/${id_event}`
      );

      if (!data.status) return reject("Error al cargar los datos");

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const getAdminEventAnality = (id_event?: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<EventRes>(
        `event/getAdminEventAnality/${id_event}`
      );

      if (!data.status) return reject("Error al cargar los datos");

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
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
