import { theEventApi } from "../../../apis";

export const postDiscountCodeEvent = (
  idEvent: any,
  { code, total }: { code: any; total: any }
) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post(
        `discount-code/postDiscountCodeEvent/${idEvent}`,
        { code, total }
      );
      if (!data.status) {
        return reject(data.message);
      }

      resolve(data);
    } catch (error) {
      reject("Discount code is not valid");
    }
  });
};

export const postDiscountStatusEvent = (idEvent: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post(
        `discount-code/postDiscountStatusEvent/${idEvent}`,
        dataReq
      );
      if (!data.status) {
        return reject(data.message);
      }

      resolve(data);
    } catch (error) {
      reject("Discount code is not valid");
    }
  });
};

export const postDiscountCreateEvent = (idEvent: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post(
        `discount-code/postDiscountCreateEvent/${idEvent}`,
        dataReq
      );
      if (!data.status) {
        return reject(data.message);
      }

      resolve(data);
    } catch (error) {
      reject("Discount code is not valid");
    }
  });
};

export const putDiscountEditEvent = (idEvent: any, dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.put(
        `discount-code/putDiscountEditEvent/${idEvent}`,
        dataReq
      );
      if (!data.status) {
        return reject(data.message);
      }

      resolve(data);
    } catch (error) {
      reject("Discount code is not valid");
    }
  });
};
