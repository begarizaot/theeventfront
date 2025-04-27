import { theEventApi } from "../../lib";
import { TicketEventsRes } from "../../interfaces/TicketEventsInterface";

export const getTicketEvents = (id_event?: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<TicketEventsRes>(
        `event-ticket/getTicketEvents/${id_event}`
      );

      if (!data.status) return reject("Error al cargar los datos");

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};
