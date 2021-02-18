import React from "react";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import "./Listing.css"

const [loaded, isLoaded] = useState();

function Listing() {
    const location = useLocation()
    console.log(location);
  return ( <div className="Listing">
    <h1>{location.pathname}</h1>
  </div>
  )
}

export default Listing;
