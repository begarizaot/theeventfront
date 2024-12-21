import { theEventApi } from "../../../apis";

// GET
export const getDowloandOrder = (idOrder: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get(
        `order/getDowloandOrder/${idOrder}`
      );
      if (!data.status) {
        return reject(data.message);
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const getForwardMailOrder = (idOrder: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get(
        `order/getForwardMailOrder/${idOrder}`
      );
      if (!data.status) {
        return reject(data.message);
      }
      resolve(data);
    } catch (error) {
      reject('Failed to forward mail');
    }
  });
};
// -------------------------------------------------------------

// POST
export const postCreatePayment = (dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post(
        `order/postCreatePayment`,
        dataReq
      );
      if (!data.status) {
        return reject(data);
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};

export const postCreateOrder = (dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post(`order/postCreateOrder`, dataReq);
      if (!data.status) {
        return reject(data);
      }
      resolve(data);
    } catch (error) {
      reject(error);
    }
  });
};
// -------------------------------------------------------------
