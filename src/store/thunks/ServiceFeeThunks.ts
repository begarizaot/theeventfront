import { theEventApi } from "../../lib";
import { ServiceFeeRes } from "../../interfaces/ServiceFeeInterface";

export const getServiceFee = () => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<ServiceFeeRes>(`service-fee`);
      resolve(data.data ?? {});
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};
