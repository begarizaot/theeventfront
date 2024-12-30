import axios from "axios";
import { environment } from "../environments/environment";

export const theEventApi = axios.create({
  baseURL: `${environment.APITHEEVENT}/api/`,
});

// Interceptor para agregar el token de autorización
theEventApi.interceptors.request.use(
  (config) => {
    const token = JSON.parse(localStorage.getItem("userData") || "{}");
    if (token?.token) {
      config.headers.Authorization = `Bearer ${token.token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
