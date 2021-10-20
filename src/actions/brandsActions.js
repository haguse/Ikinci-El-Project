import axios from "axios";
import BRANDS from "../constants/brandsTypes";
import baseUrl from "../api";

export const getAllBrands = () => (dispatch) => {
  axios
    .get(`${baseUrl}/detail/brand/all`)
    .then((res) =>
      dispatch({
        type: BRANDS.GET_ALL_BRANDS_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: BRANDS.GET_ALL_BRANDS_ERROR,
        payload: err,
      })
    );
};
