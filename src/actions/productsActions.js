import axios from "axios";
import PRODUCTS from "../constants/productsTypes";
import baseUrl from "../api";

import { ACCESS_TOKEN_NAME } from "../api";
const token = localStorage.getItem(ACCESS_TOKEN_NAME);

// Authorization
axios.interceptors.request.use(
  (config) => {
    config.headers.authorization = `Bearer ${token}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export const getAllProducts = () => (dispatch) => {
  axios
    .get(`${baseUrl}/product/all`)
    .then((res) =>
      dispatch({
        type: PRODUCTS.GET_ALL_PRODUCTS_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: PRODUCTS.GET_ALL_PRODUCTS_ERROR,
        payload: err,
      })
    );
};

export const filterProductsByCategory = (id) => {
  return {
    type: PRODUCTS.GET_PRODUCTS_BY_CATEGORY,
    payload: id,
  };
};

export const getProductById = (id) => (dispatch) => {
  axios
    .get(`${baseUrl}/product/${id}`)
    .then((res) =>
      dispatch({
        type: PRODUCTS.GET_PRODUCT_BY_ID_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: PRODUCTS.GET_PRODUCT_BY_ID_ERROR,
        payload: err,
      })
    );
};

export const purchaseProductById = (id) => (dispatch) => {
  axios.put(`${baseUrl}/product/purchase/${id}`).then((res) => {
    dispatch({
      type: PRODUCTS.PURCHASE_PRODUCT_BY_ID,
      payload: res.data,
    });
  });
};

// export const addProduct =
//   (product, category, brand, color, status) => (dispatch) => {
//     axios
//       .post(`${baseUrl}/product/create`, {
//         price: product.price,
//         imageUrl:
//           "https://nohftzveajkz.merlincdn.net/i/m/005/0057471_erkek-kapusonlu-kanguru-cep-ottoman-haki-sweat.jpeg",
//         title: product.title,
//         status: {
//           title: status.title,
//           id: status.id,
//         },
//         color: {
//           title: color.title,
//           id: color.id,
//         },
//         brand: {
//           title: brand.title,
//           id: brand.id,
//         },
//         category: {
//           title: category.title,
//           id: category.id,
//         },
//         description: product.description,
//         isOfferable: product.isOfferable,
//       })
//       .then((res) =>
//         dispatch({
//           type: PRODUCTS.ADD_PRODUCT_SUCCESS,
//           payload: res.data,
//         })
//       )
//       .catch((err) =>
//         dispatch({
//           type: PRODUCTS.ADD_PRODUCT_ERROR,
//           payload: err,
//         })
//       );
//   };

export const addProduct = (product) => (dispatch) => {
  axios
    .post(`${baseUrl}/product/create`, {
      price: product.price,
      imageUrl:
        "https://nohftzveajkz.merlincdn.net/i/m/005/0057471_erkek-kapusonlu-kanguru-cep-ottoman-haki-sweat.jpeg",
      title: product.title,
      status: {
        title: product.status.title,
        id: product.status.id,
      },
      color: {
        title: product.color.title,
        id: product.color.id,
      },
      brand: {
        title: product.brand.title,
        id: product.brand.id,
      },
      category: {
        title: product.category.title,
        id: product.category.id,
      },
      description: product.description,
      isOfferable: product.isOfferable,
    })
    .then((res) =>
      dispatch({
        type: PRODUCTS.ADD_PRODUCT_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: PRODUCTS.ADD_PRODUCT_ERROR,
        payload: err,
      })
    );
};
