const INITIAL_STATE = {
  categoriesData: [],
  errorMessage: "",
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case "GET_ALL_CATEGORIES_SUCCESS":
      return { ...state, categoriesData: action.payload };
    case "GET_ALL_CATEGORIES_ERROR":
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
