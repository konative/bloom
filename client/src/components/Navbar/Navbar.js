import React from "react";
import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar.js";
import { NavbarItems } from "./NavbarItems";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <h1 className="navbarLogo">bloom.</h1>
        <Searchbar></Searchbar>
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
}

export default Navbar;
