import axios from "axios";
import COLORS from "../constants/colorsTypes";
import baseUrl from "../api";

export const getAllColors = () => (dispatch) => {
  axios
    .get(`${baseUrl}/detail/color/all`)
    .then((res) =>
      dispatch({
        type: COLORS.GET_ALL_COLORS_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: COLORS.GET_ALL_COLORS_ERROR,
        payload: err,
      })
    );
};
