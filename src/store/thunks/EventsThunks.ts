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
        return dispatch(eventHomeFailure("Failed to fetch events"));

      dispatch(eventHomeSuccess(data.data));
    } catch (error) {
      dispatch(eventHomeFailure("Failed to fetch events"));
    }
  };
};

export const getMyEvent = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(myEventStart());
    try {
      const { data } = await theEventApi.get<EventRes>(`event/getMyEvents`);

      if (!data.status)
        return dispatch(myEventFailure("Failed to fetch events"));

      dispatch(myEventSuccess(data.data));
    } catch (error) {
      dispatch(myEventFailure("Failed to fetch events"));
    }
  };
};

export const getSharedEvents = () => {
  return async (dispatch: AppDispatch) => {
    dispatch(sharedEventStart());
    try {
      const { data } = await theEventApi.get<EventRes>(`event/getSharedEvents`);

      if (!data.status)
        return dispatch(sharedEventFailure("Failed to fetch events"));

      dispatch(sharedEventSuccess(data.data));
    } catch (error) {
      dispatch(sharedEventFailure("Failed to fetch events"));
    }
  };
};

export const getEventDetail = (id_event?: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<EventRes>(
        `event/getEventDetail/${id_event}`
      );

      if (!data.status) return reject("Failed to fetch events");

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const getEventAllPage = (
  sizePage = {
    page: 1,
    size: 10,
  },
  search = "",
  filter: any = null
) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<any>(
        `event/getEventAllPage?size=${sizePage.size}&page=${sizePage.page}${
          search ? `&search=${search}` : ""
        }${filter ? `&filter=${JSON.stringify(filter)}` : ""}`
      );

      if (!data.status) return reject("Failed to fetch events");

      resolve(data);
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

      if (!data.status) return reject("Failed to fetch events");

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

      if (!data.status) return reject("Failed to fetch events");

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const postCreateEvent = (dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<any>(
        `event/postCreateEvent`,
        dataReq
      );

      if (!data.status) return reject("Failed to fetch events");

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const putUpdateEventFollowing = (id_event?: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.put<any>(
        `event/putUpdateEventFollowing/${id_event}`
      );

      if (!data.status) return reject("Failed to fetch events");

      resolve("Failed to fetch events");
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const putUpdateEvent = (id_event: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.put<any>(
        `event/putUpdateEvent/${id_event}`,
        dataReq
      );

      if (!data.status) return reject("Failed to fetch events");

      resolve("Failed to fetch events");
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const putUpdateEventImage = (id_event: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const formData = new FormData();
      formData.append("image", dataReq);
      const { data } = await theEventApi.put<any>(
        `event/putUpdateEventImage/${id_event}`,
        formData
      );

      if (!data.status) return reject("Failed to fetch events");

      resolve("Failed to fetch events");
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
      const res = data?.data?.id
        ? {
            ...data?.data,
            url: `${import.meta.env.VITE_APITHEEVENT}/event/${
              data?.data?.id ?? ""
            }`,
          }
        : {};
      return res;
    } catch (error) {
      return {};
    }
  } else {
    return {};
  }
};
