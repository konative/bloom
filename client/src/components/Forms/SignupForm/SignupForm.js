import React, { useState, useEffect } from "react";
import { connect } from "react-redux";
import { hideRegister } from "../../../redux/actions/displayRegister.js";
import { Redirect } from "react-router-dom";
import { login } from "../../../redux/actions/isLogged.js";

import "./SignupForm.css";

function SignupForm({ displayRegister, hideRegister, login }) {
  const [registerUser, setRegisterUser] = useState("");
  const [registerPass, setRegisterPass] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [tryAgain, setTryAgain] = useState(false);

  //Cleanup for Signup Form
  useEffect(() => {
    return async () => {
      await hideRegister();
    };
  }, []);

  if (displayRegister) {
    const handleSubmit = () => {};
    const handleClose = () => {
      hideRegister();
    };

    const registerHandler = async (event) => {
      event.preventDefault();

      await fetch("http://localhost:5000/register", {
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          registerUser,
          registerPass,
        }),
      }).then(async (res) => {
        await res.json().then((data) => {
          if (data.success) {
            localStorage.setItem("token", data.token);
            login();
            setRedirect(true);
          }
          if (!data.success) {
            setTryAgain(true);
          }
        });
      });
    };

    if (redirect) {
      return <Redirect to="/"></Redirect>;
    }

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
              value={registerUser}
              onChange={(e) => setRegisterUser(e.target.value)}
              required
              className="input1"
            />
            <br />
            <input
              type="password"
              placeholder="Choose a password"
              value={registerPass}
              onChange={(e) => setRegisterPass(e.target.value)}
              required
              className="inputs"
            />
            <br />
            <button type="submit" onClick={registerHandler}>
              Submit
            </button>
          </form>
          {tryAgain && (
            <div>Username already exists. Please try with a new username.</div>
          )}
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
  login,
};

const mapStateToProps = (state) => {
  return {
    displayRegister: state.displayRegisterReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);
