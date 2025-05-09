import axios from "axios";
import { getLocalStorage } from "../hooks";

const { VITE_APITHEEVENT } = import.meta.env;

export const theEventApi = axios.create({
  baseURL: `${VITE_APITHEEVENT}/api/`,
});

theEventApi.interceptors.request.use(
  (config: any) => {
    const userData = getLocalStorage("userData");

    if (userData?.token) {
      config.headers = {
        ...config.headers,
        Authorization: `Bearer ${userData.token}`, // Usar template literals correctamente
      };
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
