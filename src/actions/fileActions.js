import axios from "axios";
import FILE from "../constants/fileTypes";
import baseUrl from "../api";

export const uploadFile = (data) => (dispatch) => {
  axios
    .post(`${baseUrl}/file/upload/image`, data, {
      headers: {
        "Content-Type": "multipart/form-data",
      },
      onUploadProgress: (progressEvent) => {
        const { loaded, total } = progressEvent;
        let percent = Math.floor((loaded * 100) / total);
        console.log(`${loaded} kb of ${total} kb | ${percent}%`);
        dispatch({
          type: FILE.UPLOADING_PROGRESS,
          payload: percent,
        });
      },
    })
    .then((res) => {
      console.log(res);
      dispatch({
        type: FILE.UPLOAD_FILE_SUCCESS,
        payload: res.data,
      });
      return res;
    })
    .catch((err) =>
      dispatch({
        type: FILE.UPLOAD_FILE_ERROR,
        payload: err,
      })
    );
};

export const resetImageUrl = () => (dispatch) => {
  dispatch({
    type: FILE.RESET_PRODUCT_IMAGE_URL,
  });
};
