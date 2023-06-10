import axios from "axios";

const axiosInstance = axios.create({
  baseURL: process.env.BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
    "Accept-Language": "tr",
  },
});

export default axiosInstance;
