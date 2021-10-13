const INITIAL_STATE = {
  productsData: [],
  filteredProducts: [],
  errorMessage: "",
};

const productsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALL_PRODUCTS_SUCCESS":
      return {
        ...state,
        productsData: action.payload,
        filteredProducts: action.payload,
      };
    case "GET_ALL_PRODUCTS_ERROR":
      return { ...state, errorMessage: action.payload };
    case "GET_PRODUCTS_BY_CATEGORY":
      return {
        ...state,
        filteredProducts: [
          ...state.productsData.filter(
            (product) => product.category.id === action.payload
          ),
        ],
      };
    default:
      return state;
  }
};

export default productsReducer;
