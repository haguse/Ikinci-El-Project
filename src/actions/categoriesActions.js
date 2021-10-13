import axios from "axios";
import CATEGORIES from "../constants/categoriesTypes";

const baseUrl = `http://bootcampapi.techcs.io/api/fe/v1`;

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
