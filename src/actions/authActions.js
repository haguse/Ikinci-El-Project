import axios from "axios";
import baseUrl from "../api";
import { ACCESS_TOKEN_NAME } from "../api";
import { history } from "../_helpers/history";

export const signUp = (data) => {
  axios
    .post(`${baseUrl}/authorization/signup`, {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      if (res.status === 201 || res.status === 200) {
        history.push("/sign-in");
      }
    });
};

export const signIn = (data) => {
  axios
    .post(`${baseUrl}/authorization/signin`, {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      if (res.status === 201 || res.status === 200) {
        console.log(res.status);
        localStorage.setItem(ACCESS_TOKEN_NAME, res.data.access_token);
        history.push("/");
      }
    });
};
