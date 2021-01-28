/* eslint-disable no-unused-expressions */
//^Unwanted eslint based error removal

import React, { useEffect, useState } from "react";
import "./AllListings.css";
import ListingCard from "../ListingCard/ListingCard";

function AllListings() {
  const [Loaded, setLoaded] = useState(false);
  const [Listings, setListings] = useState([]);

  useEffect(async () => {
    await fetch("http://localhost:5000/listings")
      .then(async (res) => await res.json())
      .then((result) => {
        if (!Loaded) {
          setListings(result);
          console.log(Listings);
          setLoaded(true);
        }
      })
      .catch((error) => console.log(error.message)),
      [];
  }, []);

  if (Loaded) {
    return (
      <div>
        {Listings.map((item) => (
          <ListingCard
            name={item.name}
            description={item.description}
            id={item.id}
          ></ListingCard>
        ))}
      </div>
    );
  } else {
    return <div className="Loading">Loading...</div>;
  }
}
export default AllListings;
