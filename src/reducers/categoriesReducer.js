import CATEGORIES from "../constants/categoriesTypes";

const INITIAL_STATE = {
  categoriesData: [],
  errorMessage: "",
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES.GET_ALL_CATEGORIES_SUCCESS:
      return { ...state, categoriesData: action.payload };
    case CATEGORIES.GET_ALL_CATEGORIES_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
