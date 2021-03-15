import React from "react";
import { Redirect, useLocation } from "react-router-dom";
import AllListings from "../../../components/AllListings/AllListings";
import { show } from "../../../redux/actions/displaySearchActions.js";
import { connect } from "react-redux";
import { useEffect, useState } from "react";
import "./Home.css";

function Home({ show, displaySearch, isLogged }) {
  useEffect(() => {
    if (displaySearch == false) {
      show();
      window.location.reload();
    }
  });

  const [redirect, setRedirect] = useState(false);

  if (redirect) {
    return <Redirect to="/register"></Redirect>;
  }

  return (
    <div className="Home">
      {isLogged && (
        <button onClick={() => setRedirect(true)}>ADD NEW LISTING</button>
      )}
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
    isLogged: state.isLoggedReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Home);
