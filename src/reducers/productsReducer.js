import PRODUCTS from "../constants/productsTypes";

const INITIAL_STATE = {
  productsData: [],
  isLoadingProducts: false,
  errorMessage: "",
  isLoadingProduct: false,
  product: {},
  isProductOffered: false,
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case PRODUCTS.GET_ALL_PRODUCTS_SUCCESS:
      return {
        ...state,
        productsData: action.payload,
      };
    case PRODUCTS.GET_ALL_PRODUCTS_ERROR:
      return { ...state, errorMessage: action.payload };
    case PRODUCTS.IS_LOADING_PRODUCTS:
      return {
        ...state,
        isLoadingProduct: action.payload,
      };
    case PRODUCTS.GET_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
        product: action.payload,
      };
    case PRODUCTS.GET_PRODUCT_BY_ID_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case PRODUCTS.PURCHASE_PRODUCT_BY_ID_SUCCESS:
      return {
        ...state,
      };
    case PRODUCTS.PURCHASE_PRODUCT_BY_ID_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case PRODUCTS.OFFER_PRODUCT_SUCCESS:
      return {
        ...state,
      };
    case PRODUCTS.OFFER_PRODUCT_ERROR:
      return {
        ...state,
        errorMessage: action.payload,
      };
    case PRODUCTS.IS_LOADING_PRODUCT:
      return {
        ...state,
        isLoadingProduct: action.payload,
      };
    case PRODUCTS.IS_PRODUCT_OFFERED:
      return {
        ...state,
        isProductOffered: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
