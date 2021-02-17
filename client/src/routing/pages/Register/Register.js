import React from "react";
import Form from "../../../components/Form/Form.js";
import { hide } from "../../../redux/actions/displaySearchActions.js";
import { connect } from "react-redux";
import { useEffect } from "react";

function Register({ hide, displaySearch }) {
  useEffect(() => {
    if (displaySearch == true) {
      hide();
    }
  });

  return (
    <div>
      <Form></Form>
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

//export default Register;
