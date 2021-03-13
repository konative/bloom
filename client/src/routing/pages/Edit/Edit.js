import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { connect } from "react-redux";
import "./Edit.css";
import EditForm from "../../../components/Forms/EditForm/EditForm.js";
import { hide } from "../../../redux/actions/displaySearchActions";

function Edit({ hide, displaySearch }) {
  if (displaySearch) {
    hide();
  }
  return (
    <div className="Edit">
      <h1>Edit your Listing:</h1>
      <EditForm></EditForm>
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

export default connect(mapStateToProps, mapDispatchToProps)(Edit);
