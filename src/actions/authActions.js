import axios from "axios";
import baseUrl from "../api";
import { ACCESS_TOKEN_NAME } from "../api";
import { history } from "../_helpers/history";
import { toast } from "react-toastify";

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
        localStorage.setItem(ACCESS_TOKEN_NAME, res.data.access_token);
        localStorage.setItem("email", data.email);
        history.push("/");
        toast.success("Giriş yaptınız.");
      }
    })
    .catch(() => toast.error("Emailiniz veya şifreniz hatalı."));
};
