import axios from "axios";

export const getAllCategories = () => (dispatch) => {
  axios
    .get("http://bootcampapi.techcs.io/api/fe/v1/detail/category/all")
    .then((res) =>
      dispatch({
        type: "GET_ALL_CATEGORIES_SUCCESS",
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: "GET_ALL_CATEGORIES_ERROR",
        payload: err,
      })
    );
};
