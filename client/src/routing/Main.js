import React from "react";
import { Switch, Route } from "react-router";
import Home from "./pages/Home/Home.js";
import Listing from "./pages/Listing/Listing.js";
import Account from "./pages/Account/Account.js";
import Edit from "./pages/Edit/Edit.js";
import Login from "./pages/Login/Login.js";
import Register from "./pages/Register/Register";
function Main() {
  return (
    //Decides which route to render based on currrent URL
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route path="/listing" component={Listing}></Route>
      <Route path="/myAccount" component={Account}></Route>
      <Route path="/edit/:id" component={Edit}></Route>
      <Route exact path="/register" component={Register}></Route>
      <Route exact path="/login" component={Login}></Route>
    </Switch>
  );
}

export default Main;
