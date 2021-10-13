const INITIAL_STATE = {
  categories: [],
  products: [],
  filteredProducts: [],
  errorMessage: "",
};

export const reducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALL_CATEGORIES_SUCCESS":
      return { ...state, categories: action.payload };
    case "GET_ALL_CATEGORIES_ERROR":
      return { ...state, errorMessage: action.payload };
    case "GET_ALL_PRODUCTS_SUCCESS":
      return {
        ...state,
        products: action.payload,
        filteredProducts: action.payload,
      };
    case "GET_ALL_PRODUCTS_ERROR":
      return { ...state, errorMessage: action.payload };
    case "GET_PRODUCTS_BY_CATEGORY":
      return {
        ...state,
        filteredProducts: [
          ...state.products.filter(
            (product) => product.category.id === action.payload
          ),
        ],
      };
    default:
      return state;
  }
};
