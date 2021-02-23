import React from "react";
import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar.js";
import { NavbarItems } from "./NavbarItems";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function Navbar({ displaySearch, isLoggedIn }) {
  const display = () => {
    if (displaySearch == true) {
      return (
        <div>
          <Searchbar></Searchbar>
        </div>
      );
    }
  };

  return (
    <nav className="Navbar">
      <h1 className="navbarLogo">bloom.</h1>

      {
        display() //displays SearchBar
      }
      <ul className="navMenu">
        {NavbarItems.map((item, index) => {
          if (item.title == "Login" && isLoggedIn) {
            item.title = "My Account";
            item.url = "/myAccount";
          }
          return (
            <Link to={item.url} style={{ textDecoration: "none" }}>
              <li key={index} className={item.cName}>
                {item.title}
              </li>
            </Link>
          );
        })}
      </ul>
    </nav>
  );
}

const mapStateToProps = (state) => {
  return {
    displaySearch: state.displaySearchReducer,
    isLoggedIn: state.isLoggedReducer,
  };
};

export default connect(mapStateToProps)(Navbar);
