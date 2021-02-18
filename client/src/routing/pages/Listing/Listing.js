import React from "react";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import "./Listing.css";
import "../Home/Home.js";

function Listing() {
  const [isFound, setIsFound] = useState(false);
  const [listingData, setListingData] = useState({});

  const location = useLocation();
  console.log(location);
  let id = location.pathname.replace("/listing/", "");
  useEffect(async () => {
    await fetch(`http://localhost:5000/listings/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (!data.notfound) {
          //When data found
          setListingData(data);
          setIsFound(true);
        }
      });
  }, []);

  if (!isFound) {
    return <h1>Listing NOT Found</h1>;
  }
  return (
    <div className="Listing">
      <h1>{listingData.name}</h1>
    </div>
  );
}

export default Listing;
