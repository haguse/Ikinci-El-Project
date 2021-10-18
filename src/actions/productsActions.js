import axios from "axios";
import PRODUCTS from "../constants/productsTypes";
import baseUrl from "../api";

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
    console.log(res);
    dispatch({
      type: PRODUCTS.PURCHASE_PRODUCT_BY_ID,
      payload: res.data,
    });
  });
};
