import { theEventApi } from "../../lib";

export const getListCategories = () => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<any>(`category/getListCategories`);

      if (!data.status) return reject(data.message);

      const res = ((data?.data as any) ?? []).map((item: any) => ({
        label: item?.title || "",
        value: item?.id,
      }));
      resolve(res);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};
