import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "https://animepulse-backend.vercel.app",
});
