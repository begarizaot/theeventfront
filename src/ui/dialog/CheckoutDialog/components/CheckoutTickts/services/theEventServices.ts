import { theEventApi } from "../../../../../../apis";

export const theEventService = {
  getServiceFee: async () => {
    const { data } = await theEventApi.get(`service-fee/getServiceFee`);
    return data;
  },
};
