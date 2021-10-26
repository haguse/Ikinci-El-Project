import axios from "axios";
import PRODUCTS from "../constants/productsTypes";
import baseUrl from "../api";
import { toast } from "react-toastify";
import { history } from "../_helpers/history";
import { getGivenOffers } from "./accountActions";

export const getAllProducts = () => (dispatch) => {
  dispatch({
    type: PRODUCTS.IS_LOADING_PRODUCTS,
    payload: true,
  });
  axios
    .get(`${baseUrl}/product/all`)
    .then((res) => {
      dispatch({
        type: PRODUCTS.GET_ALL_PRODUCTS_SUCCESS,
        payload: res.data,
      });
      dispatch({
        type: PRODUCTS.IS_LOADING_PRODUCTS,
        payload: false,
      });
    })
    .catch((err) => {
      dispatch({
        type: PRODUCTS.GET_ALL_PRODUCTS_ERROR,
        payload: err,
      });
    });
};

export const getProductById = (id) => (dispatch) => {
  dispatch({
    type: PRODUCTS.IS_LOADING_PRODUCT,
    payload: true,
  });
  axios
    .get(`${baseUrl}/product/${id}`)
    .then((res) => {
      dispatch({
        type: PRODUCTS.GET_PRODUCT_BY_ID_SUCCESS,
        payload: res.data,
      });
      dispatch({
        type: PRODUCTS.IS_LOADING_PRODUCT,
        payload: false,
      });
    })
    .catch((err) =>
      dispatch({
        type: PRODUCTS.GET_PRODUCT_BY_ID_ERROR,
        payload: err,
      })
    );
};

export const purchaseProductById = (id) => (dispatch) => {
  axios
    .put(`${baseUrl}/product/purchase/${id}`)
    .then((res) => {
      dispatch({
        type: PRODUCTS.PURCHASE_PRODUCT_BY_ID_SUCCESS,
        payload: res.data,
      });
      toast.success("Satın Alındı");
    })
    .then(() => dispatch(getGivenOffers()))
    .then(() => dispatch(getProductById(id)))
    .catch((err) => {
      dispatch({
        type: PRODUCTS.PURCHASE_PRODUCT_BY_ID_ERROR,
        payload: err,
      });
      toast.error("Kendi Ürününüzü Satın Alamazsınız");
    });
};

export const addProduct = (product) => (dispatch) => {
  axios
    .post(`${baseUrl}/product/create`, {
      price: product.price,
      imageUrl: product.imageUrl,
      title: product.title,
      status: {
        title: product.status.title,
        id: product.status.id,
      },
      color: {
        title: product.color.title,
        id: product.color.id,
      },
      brand: {
        title: product.brand.title,
        id: product.brand.id,
      },
      category: {
        title: product.category.title,
        id: product.category.id,
      },
      description: product.description,
      isOfferable: product.isOfferable,
    })
    .then((res) => {
      dispatch({
        type: PRODUCTS.ADD_PRODUCT_SUCCESS,
        payload: res.data,
      });
      toast.success("Ürün Eklendi");
      history.push("/");
    })
    .catch((err) => {
      dispatch({
        type: PRODUCTS.ADD_PRODUCT_ERROR,
        payload: err,
      });
      toast.warning("Lütfen tüm alanları doldurun");
    });
};

export const offerProduct =
  (id, price, percentage, offerPrice) => (dispatch) => {
    let sendingPrice = 0;
    if (percentage.length > 0)
      sendingPrice = parseFloat(price / 100) * parseFloat(percentage);
    else sendingPrice = parseFloat(offerPrice);
    axios
      .post(`${baseUrl}/product/offer/${id}`, {
        offeredPrice: Math.round(sendingPrice),
      })
      .then((res) => {
        dispatch({
          type: PRODUCTS.OFFER_PRODUCT_SUCCESS,
          payload: res.data,
        });
        toast.success("Teklif verildi");
      })
      .then(() => dispatch(getGivenOffers()))
      .catch((err) => {
        dispatch({
          type: PRODUCTS.OFFER_PRODUCT_ERROR,
          payload: err,
        });
        toast.error("Bu ürüne daha önce teklif verdiniz veya ürün sizin.");
      });
  };

export const isProductOffered = (data) => (dispatch) => {
  dispatch({
    type: PRODUCTS.IS_PRODUCT_OFFERED,
    payload: data,
  });
};
