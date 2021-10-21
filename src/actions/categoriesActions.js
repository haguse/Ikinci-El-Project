import axios from "axios";
import CATEGORIES from "../constants/categoriesTypes";
import baseUrl from "../api";

export const getAllCategories = () => (dispatch) => {
  axios
    .get(`${baseUrl}/detail/category/all`)
    .then((res) =>
      dispatch({
        type: CATEGORIES.GET_ALL_CATEGORIES_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: CATEGORIES.GET_ALL_CATEGORIES_ERROR,
        payload: err,
      })
    );
};

export const getCategoryById = (id) => (dispatch) => {
  axios
    .get(`${baseUrl}/detail/category/${id}`)
    .then((res) =>
      dispatch({
        type: CATEGORIES.GET_CATEGORY_BY_ID_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: CATEGORIES.GET_CATEGORY_BY_ID_ERROR,
        payload: err,
      })
    );
};
