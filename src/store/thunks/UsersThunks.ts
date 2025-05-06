import { theEventApi } from "../../lib";

export const getValidateEmail = (email: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.get<any>(
        `users-permissions/getValidateEmail/${email}`
      );

      if (!data?.status) {
        reject(data?.message);
        return;
      }

      resolve(true);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};
