import STATUS from "../constants/statusTypes";

const INITIAL_STATE = {
  statusData: [],
  errorMessage: "",
};

const colorsReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case STATUS.GET_ALL_STATUS_SUCCESS:
      return { ...state, statusData: action.payload };
    case STATUS.GET_ALL_STATUS_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default colorsReducer;
