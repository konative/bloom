import React, { useEffect, useState } from "react";
import { hide } from "../../../redux/actions/displaySearchActions.js";
import { connect } from "react-redux";
import { useLocation } from "react-router-dom";
import "./Listing.css";

function Listing({ hide, displaySearch }) {
  const [isFound, setIsFound] = useState(false);
  const [listingData, setListingData] = useState({});

  const location = useLocation();
  console.log(location);
  let id = location.pathname.replace("/listing/", "");
  useEffect(async () => {
    //Hide Search
    if (displaySearch == true) {
      hide();
    }
    //Fetch Listing
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
      <h2>{listingData.description}</h2>
      <h3>{listingData.phoneNum}</h3>
      <h3>{listingData.address}</h3>
    </div>
  );
}
const mapDispatchToProps = {
  hide,
};

const mapStateToProps = (state) => {
  return {
    displaySearch: state.displaySearchReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Listing);
