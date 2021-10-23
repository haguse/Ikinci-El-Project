import axios from "axios";
import baseUrl from "../api";
import { ACCESS_TOKEN_NAME } from "../api";
import { history } from "../_helpers/history";
import { toast } from "react-toastify";
import { setTokenCookie } from "../api";

// Email Validation
function validateEmail(email) {
  const re =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

export const signUp = (data) => {
  if (data.password.length < 8 || data.password.length > 20)
    toast.warn("Parola en az 8, en fazla 20 haneli olmalıdır.");
  else if (!validateEmail(data.email))
    toast.warn("Lütfen geçerli bir email girin");
  else {
    axios
      .post(`${baseUrl}/authorization/signup`, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          toast.success("Üye oldunuz.");
          localStorage.setItem(ACCESS_TOKEN_NAME, res.data.access_token);
          localStorage.setItem("email", data.email);
          setTokenCookie("Bearer", res.data.access_token);
          history.push("/");
        }
      })
      .catch(() => toast.error("Beklenmeyen bir hata meydana geldi."));
  }
};

export const signIn = (data) => {
  if (data.password.length < 8 || data.password.length > 20)
    toast.warn("Parola en az 8, en fazla 20 haneli olmalıdır.");
  else if (!validateEmail(data.email))
    toast.warn("Lütfen geçerli bir email girin.");
  else {
    axios
      .post(`${baseUrl}/authorization/signin`, {
        email: data.email,
        password: data.password,
      })
      .then((res) => {
        if (res.status === 201 || res.status === 200) {
          localStorage.setItem(ACCESS_TOKEN_NAME, res.data.access_token);
          localStorage.setItem("email", data.email);
          setTokenCookie("Bearer", res.data.access_token);
          history.push("/");
          toast.success("Giriş yaptınız.");
        }
      })
      .catch(() => toast.error("Emailiniz veya şifreniz hatalı."));
  }
};
