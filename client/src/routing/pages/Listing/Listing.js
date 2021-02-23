import React from "react";
import { hide } from "../../../redux/actions/displaySearchActions.js";
import { connect } from "react-redux";
import { useEffect } from "react";

function Listing({ hide, displaySearch }) {
  useEffect(async () => {
    if (displaySearch == true) {
      hide();
    }

    await fetch("http://localhost:5000/isLogged", {
      headers: {
        Authorization: "Bearer " + (await localStorage.getItem("token")),
      },
    })
      .then(async (res) => {
        const rese = await res.json();
        console.log(rese);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return <div>Listing</div>;
}

const mapDispatchToProps = {
  hide,
};

const mapStateToProps = (state) => {
  return {
    displaySearch: state.displaySearchReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);

//export default Listing;
