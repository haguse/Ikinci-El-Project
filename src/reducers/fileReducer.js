import FILE from "../constants/fileTypes";

const INITIAL_STATE = {
  imageUrl: {},
  progress: 0,
  errorMessage: "",
};

const categoriesReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FILE.UPLOAD_FILE_SUCCESS:
      return { ...state, imageUrl: action.payload };
    case FILE.UPLOAD_FILE_ERROR:
      return { ...state, errorMessage: action.payload };
    case FILE.UPLOADING_PROGRESS:
      return { ...state, progress: action.payload };
    default:
      return state;
  }
};

export default categoriesReducer;
