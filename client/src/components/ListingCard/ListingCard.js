import React, { useState } from "react";
import { Redirect, Link, useHistory } from "react-router-dom";
import "./ListingCard.css";

function ListingCard(props) {
  const history = useHistory();
  const [redirectDetails, setRedirectDetails] = useState(false);
  const [redirectMyAccount, setRedirectMyAccount] = useState(false);
  const redirectDetailsHandler = () => {
    setRedirectDetails(true);
  };
  const renderRedirect = () => {
    if (redirectDetails) {
      return <Redirect push to={`/edit/${props.id}`} />;
    }
  };

  const edit = props.edit;

  const deleteHandler = async () => {
    if (window.confirm("Are you sure you want to delete this listing?")) {
      await fetch(`http://localhost:5000/delete/${props.id}`, {
        method: "delete",
      })
        .then(async (res) => {
          await res.json().then((data) => {
            if (data.success) {
              history.push("/account");
            }
          });
        })
        .catch((err) => {
          console.log("ERROR");
        });
    }
  };

  if (edit) {
    return (
      <div className="card" onClick={redirectDetailsHandler}>
        {renderRedirect()}
        <h1>{props.name}</h1>
        <h2>Description: {props.description}</h2>
        <h3>Contact: {props.phoneNum}</h3>
        <h3>Address: {props.address}</h3>
        <Link to={`/edit/${props.id}`}>Edit</Link>
        <button onClick={deleteHandler}>Delete Listing</button>
      </div>
    );
  }

  return (
    <div className="card" onClick={redirectDetailsHandler}>
      {renderRedirect()}
      <h1>{props.name}</h1>
      <h2>Description: {props.description}</h2>
      <h3>Contact: {props.phoneNum}</h3>
      <h3>Address: {props.address}</h3>
    </div>
  );
}

export default ListingCard;
