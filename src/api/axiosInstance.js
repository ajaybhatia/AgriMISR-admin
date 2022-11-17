import axios from "axios";
import { userStore } from "../store/useUserStore";

const axiosInstance = axios.create({
  baseURL: "http://95.111.231.114:85/api",
});

axiosInstance.interceptors.request.use((config) => {
  const token = userStore.getState().token;
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      return response.data;
    }

    return response;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default axiosInstance;
