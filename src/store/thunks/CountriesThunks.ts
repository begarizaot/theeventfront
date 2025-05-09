import { theEventApi } from "../../lib";

interface DiscountCodeRes {
  data: number;
}

export const getListCountries = () => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<DiscountCodeRes>(`countries`);
      const res = ((data?.data as any) ?? []).map((country: any) => ({
        label: `${country?.flag} ${country?.name}`,
        value: country?.code || "",
      }));
      resolve(res || []);
    } catch (error: any) {
      reject(`Failed to fetch countries`);
    }
  });
};
