import COLORS from "../constants/colorsTypes";

const INITIAL_STATE = {
  colorsData: [],
  errorMessage: "",
};

const colorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case COLORS.GET_ALL_COLORS_SUCCESS:
      return { ...state, colorsData: action.payload };
    case COLORS.GET_ALL_COLORS_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default colorsReducer;
