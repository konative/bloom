import React from "react";
import "./AllListings.css";
import ListingCard from "../ListingCard/ListingCard";

function allListings() {
  return (
    <div className="AllListings">
      <ListingCard
        name="Joe's Pizza"
        description="Great Pizza"
        phoneNum="911"
      />
      <ListingCard
        name="Joe's Pizza"
        description="Great Pizza"
        phoneNum="911"
      />
    </div>
  );
}

export default allListings;
