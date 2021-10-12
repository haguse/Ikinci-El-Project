import axios from "axios";

const baseUrl = `http://bootcampapi.techcs.io/api/fe/v1`;

// Sign Up
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

//Sign In
export const signIn = (data) => {
  axios
    .post(`${baseUrl}/authorization/signin`, {
      email: data.email,
      password: data.password,
    })
    .then((res) => {
      localStorage.setItem("token", res.data.access_token);
    });
};

// export const getProductInfo = (id) => {

// }
