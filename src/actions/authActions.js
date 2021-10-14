import axios from "axios";
import baseUrl from "../api";

export const signUp = (data) => {
  axios
    .post(`${baseUrl}/authorization/signup`, {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      console.log(res.data);
    });
};

export const signIn = (data) => {
  axios
    .post(`${baseUrl}/authorization/signin`, {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      if (res.status === 201) {
        console.log(res.status);
        localStorage.setItem("token", res.data.access_token);
      }
    });
};
