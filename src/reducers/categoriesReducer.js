import CATEGORIES from "../constants/categoriesTypes";

const INITIAL_STATE = {
  categoriesData: [],
  categoryData: [],
  errorMessage: "",
  selectedCategory: "",
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CATEGORIES.GET_ALL_CATEGORIES_SUCCESS:
      return { ...state, categoriesData: action.payload };
    case CATEGORIES.GET_ALL_CATEGORIES_ERROR:
      return { ...state, errorMessage: action.payload };
    case CATEGORIES.GET_CATEGORY_BY_ID_SUCCESS:
      return { ...state, categoryData: action.payload };
    case CATEGORIES.GET_CATEGORY_BY_ID_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
