//Combine Reducers Here
import { combineReducers } from "redux";
import listingReducer from "./updateListingsReducer.js";

const allReducers = combineReducers({
  listingReducer,
});

export default allReducers;
