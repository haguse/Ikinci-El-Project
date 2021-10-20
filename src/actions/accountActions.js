import axios from "axios";
import ACCOUNT from "../constants/accountTypes";
import baseUrl from "../api";

export const getGivenOffers = () => (dispatch) => {
  axios
    .get(`${baseUrl}/account/given-offers`)
    .then((res) => {
      dispatch({
        type: ACCOUNT.GET_GIVEN_OFFERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: ACCOUNT.GET_GIVEN_OFFERS_ERROR,
        payload: err,
      })
    );
};

export const getReceivedOffers = () => (dispatch) => {
  axios
    .get(`${baseUrl}/account/received-offers`)
    .then((res) => {
      dispatch({
        type: ACCOUNT.GET_RECEIVED_OFFERS_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: ACCOUNT.GET_GIVEN_OFFERS_ERROR,
        payload: err,
      })
    );
};
