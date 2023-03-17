import axios from "axios";

export const API_URL = "https://dummyjson.com";

export const apiSuccessCode = {
  success: 200,
};

export const $axios = axios.create({
  baseURL: API_URL,
  timeout: 30000,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

$axios.interceptors.request.use(
  (config: any) => {
    return config;
  },
  (error: any) => {
    return Promise.reject(error);
  }
);
