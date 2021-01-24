import React from "react";
import "./Navbar.css";
import { NavbarItems } from "./NavbarItems";
import { Link } from "react-router-dom";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <h1 className="navbarLogo">bloom.</h1>
        <ul className="navMenu">
          {NavbarItems.map((item, index) => {
            return (
              <Link to={item.url}>
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
