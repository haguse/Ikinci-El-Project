import axios from "axios";
const baseUrl = `https://bootcampapi.techcs.io/api/fe/v1`;

export function setTokenCookie(name, value) {
  document.cookie = name + "=" + value + "; Path=/;";
}

export function deleteTokenCookie(name) {
  document.cookie = name + "=; Path=/; Expires=Thu, 01 Jan 1970 00:00:01 GMT;";
}

// Get Cookie By Name
export function getCookie(name) {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop().split(";").shift();
}

// Authorization;
axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${getCookie("Bearer")}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default baseUrl;
