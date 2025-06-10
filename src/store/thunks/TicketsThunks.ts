import { theEventApi } from "../../lib";

export const getTicketData = (id_event: any, id_order: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<any>(
        `ticket/getTicketData/${id_event}/${id_order}`
      );

      if (!data.status) return reject(data.message);

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const getScannerTicket = (id_event: any, id_order: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<any>(
        `ticket/getScannerTicket/${id_event}/${id_order}`
      );

      if (!data.status) return reject(data.message);

      resolve(data.message);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};
