import React from "react";
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react'
import "./Listing.css"
import "../Home/Home.js"

let listingData = ""


function Listing() {
    const location = useLocation()
    console.log(location);
    let id = location.pathname.replace('/listing/','')
    useEffect(async ()=>{
       listingData = await fetch(`http://localhost:5000/listings/${id}`)
    },[])
      console.log(listingData)
    if (listingData == "NOT FOUND") {
      return <h1>Listing NOT Found</h1>
    }
  return ( <div className="Listing">
    <h1>{id}</h1>
  </div>
  )
}

export default Listing;
