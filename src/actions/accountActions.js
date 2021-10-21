import axios from "axios";
import ACCOUNT from "../constants/accountTypes";
import baseUrl from "../api";
import { toast } from "react-toastify";

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

export const rejectOffer = (id) => (dispatch) => {
  axios
    .post(`${baseUrl}/account/reject-offer/${id}`)
    .then((res) => {
      dispatch({
        type: ACCOUNT.REJECT_OFFER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: ACCOUNT.REJECT_OFFER_ERROR,
        payload: err,
      })
    );
};

export const acceptOffer = (id) => (dispatch) => {
  axios
    .put(`${baseUrl}/account/accept-offer/${id}`)
    .then((res) => {
      dispatch({
        type: ACCOUNT.ACCEPT_OFFER_SUCCESS,
        payload: res.data,
      });
    })
    .catch((err) =>
      dispatch({
        type: ACCOUNT.ACCEPT_OFFER_ERROR,
        payload: err,
      })
    );
};

export const cancelOffer = (id) => (dispatch) => {
  axios
    .delete(`${baseUrl}/account/cancel-offer/${id}`)
    .then((res) => {
      dispatch({
        type: ACCOUNT.ACCEPT_OFFER_SUCCESS,
        payload: res.data,
      });
      toast.success("Teklifi iptal ettiniz.");
    })
    .catch((err) =>
      dispatch({
        type: ACCOUNT.ACCEPT_OFFER_ERROR,
        payload: err,
      })
    );
};
