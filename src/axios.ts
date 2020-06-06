import axios from "axios";
import { getAccessToken } from "./Service/localStorageService";

axios.defaults.baseURL = process.env.REACT_APP_API_URL || "";

axios.interceptors.request.use(
  (config) => {
    const token = getAccessToken();

    if (token) {
      config.headers["Authorization"] = "Bearer " + token;
    }

    return config;
  },
  (err) => {
    return Promise.reject(err);
  }
);
