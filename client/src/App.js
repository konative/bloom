import React from "react";
import Footer from "./components/Footer/Footer";
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

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Main></Main>
      <Footer></Footer>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    listingReducer: state.listingReducer,
    displaySearch: state.displaySearchReducer,
  };
};

export default connect(mapStateToProps)(App);
