/* eslint-disable no-unused-expressions */
//^Unwanted eslint based error removal
import { connect } from "react-redux";
import React, { useEffect, useState } from "react";
import "./AllListings.css";
import ListingCard from "../ListingCard/ListingCard";

function AllListings({ listing }) {
  const [Loaded, setLoaded] = useState(false);

  let listingsArray = listing;
  console.log(listingsArray);
  //if (Loaded) {
  return (
    <div>
      {listingsArray.map((item) => (
        <ListingCard
          name={item.name}
          description={item.description}
          id={item.id}
        ></ListingCard>
      ))}
    </div>
  );
  // } else {
  //   return <div className="Loading">Loading...</div>;
  // }
}

const mapStateToProps = (state) => {
  return {
    listing: state.listingReducer.listingReducer,
  };
};
export default connect(mapStateToProps)(AllListings);
