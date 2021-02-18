import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/Home/Home.js";
import Register from "./pages/Register/Register.js";
import Listing from "./pages/Listing/Listing.js";

function Main() {
  return (
    //Decides which route to render based on currrent URL
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route path="/listing" component={Listing}></Route>
    </Switch>
  );
}

export default Main;
