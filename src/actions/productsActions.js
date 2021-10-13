import axios from "axios";

const baseUrl = `http://bootcampapi.techcs.io/api/fe/v1`;

export const getAllProducts = () => (dispatch) => {
  axios
    .get(`${baseUrl}/product/all`)
    .then((res) =>
      dispatch({
        type: "GET_ALL_PRODUCTS_SUCCESS",
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: "GET_ALL_PRODUCTS_ERROR",
        payload: err,
      })
    );
};

export const filterProductsByCategory = (id) => {
  return {
    type: "GET_PRODUCTS_BY_CATEGORY",
    payload: id,
  };
};
