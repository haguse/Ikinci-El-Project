import axios from "axios";
import STATUS from "../constants/statusTypes";
import baseUrl from "../api";

export const getAllStatus = () => (dispatch) => {
  axios
    .get(`${baseUrl}/detail/status/all`)
    .then((res) =>
      dispatch({
        type: STATUS.GET_ALL_STATUS_SUCCESS,
        payload: res.data,
      })
    )
    .catch((err) =>
      dispatch({
        type: STATUS.GET_ALL_STATUS_ERROR,
        payload: err,
      })
    );
};
