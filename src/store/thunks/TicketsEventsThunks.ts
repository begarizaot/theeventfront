import { theEventApi } from "../../lib";
import { TicketEventsRes } from "../../interfaces/TicketEventsInterface";

export const getTicketEvents = (id_event?: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<TicketEventsRes>(
        `event-ticket/getTicketEvents/${id_event}`
      );

      if (!data.status) return reject("Failed to fetch events");

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const createTicketEvents = (id_event: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<any>(
        `event-ticket/createTicketEvents/${id_event}`,
        dataReq
      );

      if (!data.status) return reject(data.message);

      resolve(data.message);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const editTicketEvents = (id_event: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.put<any>(
        `event-ticket/editTicketEvents/${id_event}`,
        dataReq
      );

      if (!data.status) return reject(data.message);

      resolve(data.message);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};
