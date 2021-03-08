import React from "react";
import "./Login.css";
import LoginForm from "../../../components/Forms/LoginForm/LoginForm.js";
import { hide } from "../../../redux/actions/displaySearchActions.js";
import { connect } from "react-redux";
import { useEffect } from "react";
import { showRegister } from "../../../redux/actions/displayRegister.js";
import SignupForm from "../../../components/Forms/SignupForm/SignupForm.js";
function Login({ hide, displaySearch, showRegister }) {
  useEffect(() => {
    if (displaySearch == true) {
      hide();
    }
  });

  const onClickHandler = () => {
    showRegister();
  };

  return (
    <div className="LoginPage">
      <h1>LOGIN </h1>

      <LoginForm></LoginForm>
      <button onClick={onClickHandler}>Register New Account</button>
      <SignupForm></SignupForm>
    </div>
  );
}

const mapDispatchToProps = {
  hide,
  showRegister,
};

const mapStateToProps = (state) => {
  return {
    displaySearch: state.displaySearchReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
