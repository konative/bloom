import React from "react";
import { connect } from "react-redux";
import { hideRegister } from "../../../redux/actions/displayRegister.js";
import { hide } from "../../../redux/actions/displaySearchActions.js";
import "./SignupForm.css";

function SignupForm({ displayRegister, hideRegister }) {
  if (displayRegister) {
    const handleSubmit = () => {};
    const handleClose = () => {
      hideRegister();
    };
    return (
      <div className="popup">
        <div className="popup-inner">
          <h3>Register New Account</h3>
          <button className="close-btn" onClick={handleClose}>
            X
          </button>
          <form
            className="popup-inner"
            onSubmit={handleSubmit}
            className="inputs"
          >
            <input
              placeholder="Choose a username"
              //value={username}
              //onChange={(e) => setUserName(e.target.value)}
              required
              className="input1"
            />
            <br />
            <input
              type="password"
              placeholder="Choose a password"
              //value={password}
              //onChange={(e) => setPassword(e.target.value)}
              required
              className="inputs"
            />
            <br />
            <button>Submit</button>
          </form>
        </div>
      </div>
    );
  }
  if (!displayRegister) {
    //Don't display register if !displayRegister
    return "";
  }
}

const mapDispatchToProps = {
  hideRegister,
};

const mapStateToProps = (state) => {
  return {
    displayRegister: state.displayRegisterReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
