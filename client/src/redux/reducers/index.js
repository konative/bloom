//Combine Reducers Here
import { combineReducers } from "redux";
import listingReducer from "./updateListingsReducer.js";
import displaySearchReducer from "./displaySearchReducer.js";
import displayRegisterReducer from "./displayRegisterReducer.js";
import isLoggedReducer from "./isLoggedReducer";

const allReducers = combineReducers({
  listingReducer,
  displaySearchReducer,
  displayRegisterReducer,
  isLoggedReducer,
});

export default allReducers;
