import moment from "moment";

import { AppDispatch } from "../..";
import {
  Event,
  EventDetail,
  EventListPage,
} from "../../interfaces/EventsInterfaces";

import { theEventApi } from "../../../apis";

import {
  eventsFailure,
  eventsStart,
  eventsSuccess,
  selectEvent,
} from "./eventsSlices";
import {
  eventsAnalyticsFailure,
  eventsAnalyticsStart,
  eventsAnalyticsSuccess,
} from "./eventAnalyticsSlice";
import {
  myEventsFailure,
  myEventsStart,
  myEventsSuccess,
} from "./myEventsSlices";
import {
  searchEventsClear,
  searchEventsSuccess,
  searctEventsStart,
} from "./eventsSearchSlices";
import {
  eventsFreesFailure,
  eventsFreesStart,
  eventsFreesSuccess,
} from "./eventFreeTicketsSlice";
import {
  eventsDiscountFailure,
  eventsDiscountStart,
  eventsDiscountSuccess,
} from "./eventDiscountCodeSlice";

// GETS
export const getEventListPage = (req?: any) => {
  const { size = 3, page = 1 } = req || {};
  return async (dispatch: AppDispatch) => {
    dispatch(eventsStart());
    try {
      const { data } = await theEventApi.get<EventListPage>(
        `event/getEventList?size=${size}&page=${page}`
      );

      if (!data.status) {
        return dispatch(eventsFailure(data.message));
      }

      dispatch(
        eventsSuccess({ events: data.data, pagination: data.pagination })
      );
    } catch (error) {
      dispatch(eventsFailure("Failed to fetch events"));
    }
  };
};

export const getMyEventListPage = (req?: any) => {
  const { size = 3, page = 1, shared = false } = req || {};
  return async (dispatch: AppDispatch) => {
    dispatch(myEventsStart());
    try {
      const { data } = await theEventApi.get<EventListPage>(
        `event/${
          shared ? "getEventSharedList" : "getMyEventList"
        }?size=${size}&page=${page}`
      );

      if (!data.status) {
        return dispatch(myEventsFailure(data.message));
      }

      dispatch(
        myEventsSuccess({ data: data.data, pagination: data.pagination })
      );
    } catch (error) {
      dispatch(myEventsFailure("Failed to fetch events"));
    }
  };
};

export const getEventDetail = (idEvent?: any) => {
  return async (dispatch: AppDispatch) => {
    dispatch(eventsStart());
    try {
      const { data } = await theEventApi.get<EventDetail>(
        `event/getEventDetail/${idEvent}`
      );

      if (!data.status) {
        return dispatch(eventsFailure(data.message));
      }

      const res = handleDetail(data.data);
      dispatch(selectEvent({ ...data.data, ...res }));
    } catch (error) {
      dispatch(eventsFailure("Failed to fetch events"));
    }
  };
};

export const getEventDetailById = (idEvent?: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<EventDetail>(
        `event/getEventDetail/${idEvent}`
      );

      if (!data.status) {
        return reject(data.message);
      }

      const res = handleDetail(data.data);
      resolve({ ...data.data, ...res });
    } catch (error) {
      reject("Failed to fetch events");
    }
  });
};

export const getEventSearch = (name: string) => {
  return async (dispatch: AppDispatch) => {
    dispatch(searctEventsStart());
    try {
      const { data } = await theEventApi.get<EventListPage>(
        `event/getEventSearch?eventName=${name}`
      );

      if (!data.status) {
        return dispatch(searchEventsClear());
      }

      dispatch(
        searchEventsSuccess({ data: data.data, pagination: data.pagination })
      );
    } catch (error) {
      dispatch(searchEventsClear());
    }
  };
};

export const getEventAnalytics = (eventId: string, req?: any) => {
  const { size = 6, page = 1, search = "" } = req || {};
  return async (dispatch: AppDispatch) => {
    dispatch(eventsAnalyticsStart());
    try {
      const { data } = await theEventApi.get(
        `event/getEventAnalytics/${eventId}?size=${size}&page=${page}&search=${search}`
      );

      if (!data.status) {
        return dispatch(eventsAnalyticsFailure(data.message));
      }

      dispatch(
        eventsAnalyticsSuccess({
          data: data?.data?.orders || [],
          analytic: data?.data?.analytics || [],
          pagination: data?.pagination || {},
        })
      );
    } catch (error) {
      dispatch(eventsAnalyticsFailure("Failed to fetch events"));
    }
  };
};

export const getEventFreeTiekcts = (eventId: string, req?: any) => {
  const { size = 6, page = 1, search = "" } = req || {};
  return async (dispatch: AppDispatch) => {
    dispatch(eventsFreesStart());
    try {
      const { data } = await theEventApi.get(
        `event/getEventFreeTiekcts/${eventId}?size=${size}&page=${page}&search=${search}`
      );

      if (!data.status) {
        return dispatch(eventsFreesFailure(data.message));
      }

      dispatch(
        eventsFreesSuccess({
          data: data?.data?.orders || [],
          analytic: data?.data?.analytics || [],
          pagination: data?.pagination || {},
        })
      );
    } catch (error) {
      dispatch(eventsFreesFailure("Failed to fetch events"));
    }
  };
};

export const getEventDiscountCode = (eventId: string, req?: any) => {
  const { size = 6, page = 1, search = "" } = req || {};
  return async (dispatch: AppDispatch) => {
    dispatch(eventsDiscountStart());
    try {
      const { data } = await theEventApi.get(
        `event/getEventDiscountCode/${eventId}?size=${size}&page=${page}&search=${search}`
      );

      if (!data.status) {
        return dispatch(eventsDiscountFailure(data.message));
      }

      dispatch(
        eventsDiscountSuccess({
          data: data?.data?.data || [],
          analytic: data?.data?.analytics || [],
          pagination: data?.pagination || {},
        })
      );
    } catch (error) {
      dispatch(eventsDiscountFailure("Failed to fetch events"));
    }
  };
};

export const getEventScanner = (eventId: string, idQr?: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<EventDetail>(
        `event/getEventScanner/${eventId}/${idQr}`
      );

      if (!data.status) {
        return reject(data.message);
      }

      const res = handleDetail(data.data);
      resolve({ ...data.data, ...res });
    } catch (error) {
      reject("Ticket not found");
    }
  });
};

export const getEventScannerCreate = (eventId: string, idQr?: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<EventDetail>(
        `event/getEventScannerCreate/${eventId}/${idQr}`
      );

      if (!data.status) {
        return reject(data.message);
      }

      const res = handleDetail(data.data);
      resolve({ ...data.data, ...res });
    } catch (error) {
      reject("Ticket not found");
    }
  });
};

// POSTS

export const postCreateEvent = (dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post(`event/postCreateEvent`, dataReq);
      if (!data.status) {
        return reject(data.message);
      }

      resolve(data);
    } catch (error) {
      reject("Failed to create event");
    }
  });
};

// PUTS

export const putUpdateEventImage = (idEvent: any, imgEvent: any) => {
  const fd = new FormData();
  fd.append("image", imgEvent);

  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.put(
        `event/putUpdateEventImage/${idEvent}`,
        fd
      );
      if (!data.status) {
        return reject(data.message);
      }

      resolve(data);
    } catch (error) {
      reject("Failed to create event");
    }
  });
};

const handleDetail = (ev: Event) => {
  const {
    map_id,
    start_date,
    end_date,
    event_age_restriction_id: restriction,
    venue,
  } = ev;

  return {
    shareData: [
      {
        icon: "pi pi-facebook",
        link: `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`,
      },
      {
        icon: "pi pi-twitter",
        link: `https://twitter.com/intent/tweet?url=${window.location.href}`,
      },
      {
        icon: "pi pi-whatsapp",
        link: `https://web.whatsapp.com/send?text=${window.location.href}`,
      },
      {
        icon: "pi pi-envelope",
        link: `https://outlook.office.com/mail/deeplink/compose?mailtouri=${window.location.href}`,
      },
    ],
    detail: [
      {
        icon: "pi pi-building",
        label: venue || "",
      },
      {
        icon: "pi pi-map-marker",
        label: map_id?.labelCompl || "",
        link: `https://www.google.com/maps/search/?api=1&query=${
          map_id?.labelCompl || ""
        }`,
      },
      {
        icon: "pi pi-calendar",
        label: `${moment(start_date).format("dddd")}, ${moment(
          start_date
        ).format("MMMM")} ${moment(start_date).format("DD")}, ${moment(
          start_date
        ).format("YYYY")}`,
      },
      {
        icon: "pi pi-clock",
        label: `${moment(start_date).format("hh:mm a")} - ${moment(
          end_date
        ).format("hh:mm a")}`,
      },
      {
        icon: "pi pi-id-card",
        label: restriction?.name || "",
      },
    ],
  };
};
