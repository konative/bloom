import React from "react";
import { hide } from "../../../redux/actions/displaySearchActions.js";
import { connect } from "react-redux";
import { useEffect } from "react";

function Listing({ hide, displaySearch }) {
  useEffect(() => {
    if (displaySearch == true) {
      hide();
    }
  });

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
