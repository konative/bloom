//Combine Reducers Here
import { combineReducers } from "redux";
import listingReducer from "./updateListingsReducer.js";
import displaySearchReducer from "./displaySearchReducer.js";

const allReducers = combineReducers({
  listingReducer,
  displaySearchReducer,
});

export default allReducers;
