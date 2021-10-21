import ACCOUNT from "../constants/accountTypes";

const INITIAL_STATE = {
  givenOffers: [],
  receivedOffers: [],
  errorMessage: "",
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case ACCOUNT.GET_GIVEN_OFFERS_SUCCESS:
      return { ...state, givenOffers: action.payload };
    case ACCOUNT.GET_GIVEN_OFFERS_ERROR:
      return { ...state, errorMessage: action.payload };
    case ACCOUNT.GET_RECEIVED_OFFERS_SUCCESS:
      return { ...state, receivedOffers: action.payload };
    case ACCOUNT.GET_RECEIVED_OFFERS_ERROR:
      return { ...state, errorMessage: action.payload };
    case ACCOUNT.REJECT_OFFER_SUCCESS:
      return { ...state };
    case ACCOUNT.REJECT_OFFER_ERROR:
      return { ...state, errorMessage: action.payload };
    case ACCOUNT.ACCEPT_OFFER_SUCCESS:
      return { ...state };
    case ACCOUNT.ACCEPT_OFFER_ERROR:
      return { ...state, errorMessage: action.payload };
    case ACCOUNT.CANCEL_OFFER_SUCCESS:
      return { ...state };
    case ACCOUNT.CANCEL_OFFER_ERROR:
      return { ...state, errorMessage: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
