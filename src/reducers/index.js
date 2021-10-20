import { combineReducers } from "redux";

import productsReducer from "./productsReducer";
import categoriesReducer from "./categoriesReducer";
import brandsReducer from "./brandsReducer";
import colorsReducer from "./colorsReducer";
import statusReducer from "./statusReducer";
import accountReducer from "./accountReducer";

export default combineReducers({
  products: productsReducer,
  categories: categoriesReducer,
  brands: brandsReducer,
  colors: colorsReducer,
  status: statusReducer,
  account: accountReducer,
});
