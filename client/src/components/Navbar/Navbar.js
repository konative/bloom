import React from "react";
import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar.js";
import { NavbarItems } from "./NavbarItems";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { logout } from "../../redux/actions/isLogged.js";

function Navbar({ displaySearch, isLoggedIn, logout }) {
  const display = () => {
    if (displaySearch == true) {
      return (
        <div>
          <Searchbar></Searchbar>
        </div>
      );
    }
  };

  const renderNavbarItems = () => {
    let renderItems = [];

    for (let item of NavbarItems) {
      item.onClick = () => {};
      if (item.title == "Home") {
        renderItems.push(
          <Link
            to={item.url}
            onClick={item.onClick}
            style={{ textDecoration: "none" }}
          >
            <li className={item.cName}>{item.title}</li>
          </Link>
        );
      }
      if (item.title == "Login" && !isLoggedIn) {
        renderItems.push(
          <Link
            to={item.url}
            onClick={item.onClick}
            style={{ textDecoration: "none" }}
          >
            <li className={item.cName}>{item.title}</li>
          </Link>
        );
      }
      if (item.title === "Logout" && isLoggedIn) {
        item.onClick = logout;
        renderItems.push(
          <Link
            to={item.url}
            onClick={item.onClick}
            style={{ textDecoration: "none" }}
          >
            <li className={item.cName}>{item.title}</li>
          </Link>
        );
      }
      if (item.title === "My Account" && isLoggedIn) {
        renderItems.push(
          <Link
            to={item.url}
            onClick={item.onClick}
            style={{ textDecoration: "none" }}
          >
            <li className={item.cName}>{item.title}</li>
          </Link>
        );
      }

      console.log(renderItems[0]);
    }
    console.log(renderItems);
    return renderItems;
  };

  return (
    <nav className="Navbar">
      <h1 className="navbarLogo">bloom.</h1>

      {
        display() //displays SearchBar
      }
      <ul className="navMenu">
        {
          renderNavbarItems() //displays navbar items depending on states
        }
      </ul>
    </nav>
  );
}

const mapDispatchToProps = {
  logout,
};

const mapStateToProps = (state) => {
  return {
    displaySearch: state.displaySearchReducer,
    isLoggedIn: state.isLoggedReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
