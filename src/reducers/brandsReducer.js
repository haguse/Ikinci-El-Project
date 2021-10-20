import BRANDS from "../constants/brandsTypes";

const INITIAL_STATE = {
  brandsData: [],
  errorMessage: "",
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case BRANDS.GET_ALL_BRANDS_SUCCESS:
      return { ...state, brandsData: action.payload };
    case BRANDS.GET_ALL_BRANDS_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
