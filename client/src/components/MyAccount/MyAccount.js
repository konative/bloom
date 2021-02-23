import React, { useEffect, useState } from "react";
import ListingCard from "../ListingCard/ListingCard.js";
import "./MyAccount.css";

function MyAccount() {
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
    return <ListingCard name={myListings[0].name}></ListingCard>;
  }
  return <div>Zero Listings Available</div>;
  //   return (
  //     <div>
  //       <h2>My Listings:</h2>
  //       <ListingCard name={myListings[0].name}></ListingCard>
  //     </div>
  //   );
}

export default MyAccount;
