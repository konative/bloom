import React from "react";
import { useLocation } from "react-router-dom";
import AllListings from "../../../components/AllListings/AllListings";
import { show } from "../../../redux/actions/displaySearchActions.js";
import { connect } from "react-redux";
import { useEffect } from "react";
import "./Home.css";

function Home({ show, displaySearch }) {
  useEffect(() => {
    if (displaySearch == false) {
      show();
    }
  });

  // if (displaySearch === false) {
  //   console.log("Y" + displaySearch);
  //   show();
  // }
  //

  return (
    <div className="Home">
      <h1>Home</h1>
      <AllListings></AllListings>
    </div>
  );
}
const mapDispatchToProps = {
  show,
};

const mapStateToProps = (state) => {
  return {
    displaySearch: state.displaySearchReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);

// export default Home;
