import React, { useState } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import "./RegisterListingForm.css";

function RegisterListingForm({ currentUser }) {
  const [busName, setBusName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");
  const [termsAndCon, setTermsAndCon] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const handleSubmit = async (event) => {
    event.preventDefault();

    await fetch(`http://localhost:5000/newListing`, {
      method: "post",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        busName,
        phoneNum,
        address,
        desc,
        currentUser,
      }),
    }).then(async (res) => {
      const data = await res.json();
      console.log(data);
      setRedirect(true);
    });
  };

  if (redirect) {
    return <Redirect to={{ pathname: "/", state: { id: "123" } }}></Redirect>;
  }

  return (
    <div className="formCont">
      <form onSubmit={handleSubmit} className="inputs">
        <input
          placeholder="Please enter your business name"
          value={busName}
          onChange={(e) => setBusName(e.target.value)}
          required
          className="input1"
        />
        <br />
        <input
          placeholder="Please enter your phone number"
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          required
          className="inputs"
          type="tel"
          pattern="^\d{3}\d{3}\d{4}$"
        />
        <input
          placeholder="Please enter your address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="inputs"
        />
        <br />
        <input
          placeholder="Please enter a short description about your business"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
          className="descInput"
        />
        <br />
        <label>
          <input
            type="checkbox"
            onChange={(e) => setTermsAndCon(e.target.value)}
            required
          />
          I accept the Terms and Conditions
        </label>
        <br />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

const mapStateToProps = (state) => {
  return {
    currentUser: state.currentUserReducer.currentUser,
  };
};

export default connect(mapStateToProps)(RegisterListingForm);
