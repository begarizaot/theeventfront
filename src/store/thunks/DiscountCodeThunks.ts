import { theEventApi } from "../../lib";

interface DiscountCodeRes {
  data: number;
  message: string;
  status: boolean;
}

export const postEventsDiscountCode = (id_event: any, body?: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<DiscountCodeRes>(
        `event-discount-code/postEventsDiscountCode/${id_event}`,
        body
      );

      if (!data.status || data.message)
        return reject(data.message || "Error al cargar los datos");

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};
