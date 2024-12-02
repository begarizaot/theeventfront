import axios from "axios";

export const theEventApi = axios.create({
  baseURL: "http://localhost:9000/api/",
});
