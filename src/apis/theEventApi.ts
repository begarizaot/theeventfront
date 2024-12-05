import axios from "axios";

export const theEventApi = axios.create({
  baseURL: "http://localhost:9000/api/",
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
