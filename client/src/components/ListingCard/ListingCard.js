import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import "./ListingCard.css";

function ListingCard(props) {

  const [redirect, setRedirect] = useState(false);
  const redirectHandler = () => {
    setRedirect(true);
  }
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect push to ="/listing" />
    }
  }

  return (
    <div className="card" onClick={redirectHandler} >
      {renderRedirect()}
      <h1>{props.name}</h1>
      <h2>Description: {props.description}</h2>
      <h3>Contact: {props.phoneNum}</h3>
      <h3>Address: {props.address}</h3>
    </div>
  );
}

export default ListingCard;
