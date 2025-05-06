import { theEventApi } from "../../lib";

interface paymentRes {
  data: DataRes;
  status: boolean;
  message: string;
}

export interface DataRes {
  id: string;
  client_secret: string;
}

export const getSendMail = (idOrder: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<any>(
        `order/getSendMail/${idOrder}`
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

export const postCreatePayment = (dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<paymentRes>(
        `order/postCreatePayment`,
        dataReq
      );

      if (!data.status) {
        reject(data.message);
        return;
      }

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const postCreateOrder = (dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<paymentRes>(
        `order/postCreateOrder`,
        dataReq
      );

      if (!data.status) {
        reject(data.message);
        return;
      }

      resolve(data.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};
