import React from "react";
import Navbar from "./components/Navbar/Navbar";
import Main from "./routing/Main";
import { applyMiddleware, createStore } from "redux";
import { connect } from "react-redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import allReducers from "./redux/reducers/index.js";

const middleware = [thunk];

export const store = createStore(
  allReducers,
  composeWithDevTools(applyMiddleware(...middleware))
);

function App({ listings }) {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listingReducer: state.listingReducer,
  };
};

export default connect(mapStateToProps)(App);
