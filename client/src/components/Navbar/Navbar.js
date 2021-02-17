import React from "react";
import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar.js";
import { NavbarItems } from "./NavbarItems";
import { Link, useLocation } from "react-router-dom";
import { connect } from "react-redux";

function Navbar({ displaySearch }) {
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
  };
};

export default connect(mapStateToProps)(Navbar);
