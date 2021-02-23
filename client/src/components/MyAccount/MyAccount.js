import React, { useEffect, useState } from "react";
import ListingCard from "../ListingCard/ListingCard.js";
import "./MyAccount.css";

function MyAccount(props) {
  const owner = "johnfc@gmail.com";
  const [myListings, setMyListings] = useState([]);
  useEffect(async () => {
    await fetch(`http://localhost:5000/owners?user=${owner}`, {}).then(
      async (response) => {
        const res = await response.json();
        console.log(res);
        setMyListings(res);
      }
    );
  }, []);

  if (myListings.length > 0) {
    return (
        <div>
        <h2>My Listings:</h2>
        {myListings.map((item) => (
        <ListingCard 
        name={item.name}
        description={item.description}
        phoneNum={item.phoneNum}
        address={item.address}
        id={item._id}
        edit={true}
        ></ListingCard>))}
        </div>
        )
    }
  return ( <div>
      <h2>My Listings:</h2>
      You do not have any listings.
  </div>)
}

export default MyAccount;
