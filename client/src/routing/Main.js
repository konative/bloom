import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/Home/Home.js";
import Listing from "./pages/Listing/Listing.js";
import Login from "./pages/Login/Login.js";

function Main() {
  return (
    //Decides which route to render based on currrent URL
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/listing" component={Listing}></Route>
      <Route exact path="/login" component={Login}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route path="/listing" component={Listing}></Route>
    </Switch>
  );
}

export default Main;
