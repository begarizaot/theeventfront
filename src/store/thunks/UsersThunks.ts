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

      resolve(data?.data ?? {});
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const postLogin = (dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<any>(
        `users-permissions/postLogin`,
        dataReq
      );

      if (!data?.status) {
        reject(data?.message);
        return;
      }

      resolve(data?.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const postValidateOTP = (dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<any>(
        `users-permissions/postValidateOTP`,
        dataReq
      );

      if (!data?.status) {
        reject(data?.message);
        return;
      }

      resolve(data?.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};

export const postRegister = (dataReq: any) => {
  return new Promise<any>(async (resolve, reject) => {
    try {
      const { data } = await theEventApi.post<any>(
        `users-permissions/postRegister`,
        dataReq
      );

      if (!data?.status) {
        reject(data?.message);
        return;
      }

      resolve(data?.data);
    } catch (error: any) {
      reject(`Failed to fetch events`);
    }
  });
};
