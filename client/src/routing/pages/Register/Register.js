import React from "react";
import { connect } from "react-redux";
import RegisterForm from "../../../components/Forms/RegisterListingForm/RegisterListingForm.js";
import { hide } from "../../../redux/actions/displaySearchActions";
function Register({ hide, displaySearch }) {
  if (displaySearch) {
    hide();
  }
  return (
    <div>
      <RegisterForm></RegisterForm>
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

export default connect(mapStateToProps, mapDispatchToProps)(Register);
