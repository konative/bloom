import React, { useState } from "react";
import { Redirect, Link } from "react-router-dom";
import "./ListingCard.css";

function ListingCard(props) {
  const [redirect, setRedirect] = useState(false);
  const redirectHandler = () => {
    setRedirect(true);
  };
  const renderRedirect = () => {
    if (redirect) {
      return <Redirect push to="/" />;
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
              setRedirect(true);
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
      <div className="card" onClick={redirectHandler}>
        {renderRedirect()}
        <h1>{props.name}</h1>
        <h2>Description: {props.description}</h2>
        <h3>Contact: {props.phoneNum}</h3>
        <h3>Address: {props.address}</h3>
        <Link to={`/edit/${props.id}`}>Edit</Link>
        <Link to={"/account"} onClick={deleteHandler}>
          Delete Listing
        </Link>
      </div>
    );
  }

  return (
    <div className="card" onClick={redirectHandler}>
      {renderRedirect()}
      <h1>{props.name}</h1>
      <h2>Description: {props.description}</h2>
      <h3>Contact: {props.phoneNum}</h3>
      <h3>Address: {props.address}</h3>
    </div>
  );
}

export default ListingCard;
