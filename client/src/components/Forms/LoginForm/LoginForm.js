import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../../../redux/actions/isLogged.js";
import "./LoginForm.css";

function LoginForm({ login, isLogged }) {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [tryAgain, setTryAgain] = useState(false);
  //const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    const formData = { user: username, pass: password };
    console.log("Login Form input:" + formData);

    await fetch("http://localhost:5000/login", {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        password,
      }),
    })
      .then(async (response) => {
        if (response.status === 200) {
          await response.json().then((data) => {
            console.log("Token data:" + data.token);
            if (data.token === undefined) {
              setTryAgain(true);
            } else {
              setTryAgain(false);
              localStorage.setItem("token", data.token);
              //setRedirect(true);
              login();
            }
          });
        }
      })
      .catch((error) => {
        console.log(error);
        alert("Error");
      });
  };

  if (isLogged) {
    return <Redirect to="/"></Redirect>;
  }

  // if (redirect) {
  //   return <Redirect to="/"></Redirect>;
  // }

  return (
    <div className="LoginForm">
      {/* //CHANGE  ACTION FOR DEPLOYMENT */}
      <form onSubmit={handleSubmit} className="inputs">
        <input
          placeholder="Please enter your username"
          value={username}
          onChange={(e) => setUserName(e.target.value)}
          required
          className="input1"
        />
        <br />
        <input
          type="password"
          placeholder="Please enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="inputs"
        />
        {tryAgain && <div>Please try again</div>}
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const mapDispatchToProps = {
  login,
};

const mapStateToProps = (state) => {
  return {
    isLogged: state.isLoggedReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
