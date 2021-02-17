import React, { useState } from "react";
import "./LoginForm.css";

function LoginForm() {
  const [username, setUserName] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(`
        Username: ${username}
        Password: ${password}
    `);
  };
  return (
    <div className="LoginForm">
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
        <br />
        <button>Submit</button>
      </form>
    </div>
  );
}

export default LoginForm;
