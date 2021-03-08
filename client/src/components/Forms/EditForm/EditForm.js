import {React, useState, useEffect, useForm} from "react";
import { Redirect, Link, useHistory, useLocation } from "react-router-dom";
import "./EditForm.css";
import ListingCard from "../../ListingCard/ListingCard.js";

function EditForm(props){

  const location = useLocation();
  console.log(location);
  let id = location.pathname.replace("/edit/", "");
  useEffect(async () => {
    await fetch(`http://localhost:5000/listings/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.notfound) {
          //When data found
          setBusName(data.name);
          setPhoneNum(data.phoneNum);
          setAddress(data.address);
          setDesc(data.description);
        }
      });
  }, []);

  const [busName, setBusName] = useState("");
  const [phoneNum, setPhoneNum] = useState("");
  const [address, setAddress] = useState("");
  const [desc, setDesc] = useState("");

  const handleSubmit = (event) => {
  }
    return (
        <div>
        <form onSubmit={handleSubmit} className="inputs">
        <input
          value={busName}
          onChange={(e) => setBusName(e.target.value)}
          required
          className="input1"
        />
        <br />
        <input
          value={phoneNum}
          onChange={(e) => setPhoneNum(e.target.value)}
          required
          className="inputs"
          type="tel"
          pattern="^\d{3}\d{3}\d{4}$"
        />
        <input
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          required
          className="inputs"
        />
        <br />
        <input
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          required
          className="descInput"
        />
        <br />
        <button>Save Changes</button>
        </form>
        </div>
    );
}


export default EditForm;