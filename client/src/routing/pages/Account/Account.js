import React from "react";
import { connect } from "react-redux";
import "./Account.css";
import MyAccount from "../../../components/MyAccount/MyAccount.js";
import { hide } from "../../../redux/actions/displaySearchActions";

function Account({ hide, displaySearch }) {
  if (displaySearch) {
    hide();
  }
  return (
    <div className="Account">
      <h1>My Account</h1>
      <MyAccount></MyAccount>
    </div>
  );
}

const mapDispatchToProps = {
  hide,
};

const mapStateToProps = (state) => {
  return {
    displaySearch: state.displaySearchReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Account);
