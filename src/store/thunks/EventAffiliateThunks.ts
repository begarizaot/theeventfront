import { FirstUpperCase } from "../../helpers";
import { useMoment } from "../../hooks";
import { theEventApi } from "../../lib";

export const getListEventAffiliate = (
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
        `event-affiliate/getListEventAffiliate/${id_event}?size=${
          sizePage.size
        }&page=${sizePage.page}${search ? `&search=${search}` : ""}`
      );

      if (!data.status) return reject(data?.message);

      const res = (data.data ?? []).map((item: any) => {
        item.key = item.id;
        item.customer = `${FirstUpperCase(
          item.user_id?.firstName
        )} ${FirstUpperCase(item.user_id?.lastName)}`;
        item.commission =
          item.state == "por" ? `${item.value}%` : `$${item.value}`;
        item.expirationDate = useMoment(item.expiration_date).format(
          "DD/MM/YYYY hh:mm A"
        );
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

export const postCreateEventAffiliate = (id_event: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<any>(
        `event-affiliate/postCreateEventAffiliate/${id_event}`,
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

export const putUpdateEventAffiliate = (id_event: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.put<any>(
        `event-affiliate/putUpdateEventAffiliate/${id_event}`,
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
