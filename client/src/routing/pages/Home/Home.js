import React from "react";

import AllListings from "../../../components/AllListings/AllListings";
import "./Home.css";

function Home() {
  return (
    <div className="Home">
      <h1>Home</h1>
      <AllListings></AllListings>
    </div>
  );
}

export default Home;
