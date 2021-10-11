import axios from "axios";

const baseUrl = `http://bootcampapi.techcs.io/api/fe/v1`;

const checkStatus = (response) => {
  if (response.ok) {
    return response;
  }
  const error = new Error(response.statusText);
  error.response = response;
  return Promise.reject(error);
};

//Sign Up
// export const signUp = (body) => {
//   axios({
//     method: "post",
//     url: "http://bootcampapi.techcs.io/api/fe/v1/authorization/signup",
//     headers: {
//       "Content-Type": "application/json",
//     },
//   }).then(checkStatus);
// };

export const signUp = (body) => {
  axios
    .get("https://jsonplaceholder.typicode.com/users")
    .then((res) => console.log(res.data));
};

//Sign In
export const signIn = (data) => {
  axios(`${baseUrl}/authorization/signin`, {
    headers: {
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(data),
  }).then(checkStatus);
};

export const getCategories = () => {
  axios
    .get(`https://jsonplaceholder.typicode.com/users`)
    .then((res) => console.log(res.data));
};