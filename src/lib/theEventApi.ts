import axios from "axios";

const { VITE_APITHEEVENT } = import.meta.env;

export const theEventApi = axios.create({
  baseURL: `${VITE_APITHEEVENT}/api/`,
});
