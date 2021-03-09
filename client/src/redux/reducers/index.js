//Combine Reducers Here
import { combineReducers } from "redux";
import listingReducer from "./updateListingsReducer.js";
import displaySearchReducer from "./displaySearchReducer.js";
import displayRegisterReducer from "./displayRegisterReducer.js";
import isLoggedReducer from "./isLoggedReducer";
import currentUserReducer from "./currentUserReducer";

const allReducers = combineReducers({
  listingReducer,
  displaySearchReducer,
  displayRegisterReducer,
  isLoggedReducer,
  currentUserReducer,
});

export default allReducers;
