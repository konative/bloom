import React, { useEffect, useState } from "react";
import ListingCard from "../ListingCard/ListingCard.js";
import "./MyAccount.css";

function MyAccount() {


    const owner = "johnfc@gmail.com";
    useEffect(async () => {
        await fetch(`http://localhost:5000/owners?user=${owner}`, {

    })

    .then(async (response) => {
        const res = await response.json();
        console.log(res);
        setMyListings(res);
    })
    })
    

    return (
        <div>
            <h2>My Listings:</h2>
            <ListingCard
            name = {myListings.name}
            ></ListingCard>
        </div>
    );

}

export default MyAccount;