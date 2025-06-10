import { theEventApi } from "../../lib";

interface DiscountCodeRes {
  data: number;
  message: string;
  status: boolean;
}

export const getListDiscountCode = (
  id_event?: any,
  sizePage = {
    page: 1,
    size: 10,
  },
  search = ""
) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<any>(
        `event-discount-code/getListDiscountCode/${id_event}?size=${
          sizePage.size
        }&page=${sizePage.page}${search ? `&search=${search}` : ""}`
      );

      if (!data.status) return reject(data?.message);

      const res = (data.data ?? []).map((item: any) => {
        item.key = item.id;
        item.dateStartEnd = `${new Date(
          item.start_date
        ).toLocaleDateString()} - ${new Date(
          item.end_date
        ).toLocaleDateString()}`;

        return item;
      });

      resolve({
        data: res,
        pagination: data.pagination,
      });

      resolve(data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const postEventsDiscountCode = (id_event: any, body?: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<DiscountCodeRes>(
        `event-discount-code/postEventsDiscountCode/${id_event}`,
        body
      );

      if (!data.status || data.message)
        return reject(data.message || data.message);

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const postCreateDiscountCode = (id_event: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<any>(
        `event-discount-code/postCreateDiscountCode/${id_event}`,
        dataReq
      );

      if (!data.status) {
        reject(data.message);
        return;
      }

      resolve(data.message);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const putUpdateDiscountCode = (id_event: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.put<any>(
        `event-discount-code/putUpdateDiscountCode/${id_event}`,
        dataReq
      );

      if (!data.status) {
        reject(data.message);
        return;
      }

      resolve(data.message);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};
