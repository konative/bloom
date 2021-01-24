import React from "react";
import "./ListingCard.css";

function ListingCard(props) {
  return (
    <div className="card">
      <h1>{props.name}</h1>
      <h2>Description: {props.description}</h2>
      <h3>Contact: {props.phoneNum}</h3>
    </div>
  );
}

export default ListingCard;
