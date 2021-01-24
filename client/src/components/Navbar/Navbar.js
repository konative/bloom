import React from "react";
import "./Navbar.css";
import { NavbarItems } from "./NavbarItems";

class Navbar extends React.Component {
  render() {
    return (
      <nav className="Navbar">
        <h1 className="navbarLogo">bloom.</h1>
        <ul className="navMenu">
          {NavbarItems.map((item, index) => {
            return (
              <li key={index}>
                <a className={item.cName} href={item.url}>
                  {item.title}
                </a>
              </li>
            );
          })}
        </ul>
      </nav>
    );
  }
}

export default Navbar;
