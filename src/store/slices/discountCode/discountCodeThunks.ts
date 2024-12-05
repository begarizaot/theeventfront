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
