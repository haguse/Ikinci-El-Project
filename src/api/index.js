import axios from "axios";
const baseUrl = `https://bootcampapi.techcs.io/api/fe/v1`;
export const ACCESS_TOKEN_NAME = "login_access_token";

const token = localStorage.getItem(ACCESS_TOKEN_NAME);

// Authorization;
axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default baseUrl;
