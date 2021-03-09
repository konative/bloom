import React, { useEffect } from "react";
import "./Navbar.css";
import Searchbar from "../Searchbar/Searchbar.js";
import { NavbarItems } from "./NavbarItems";
import { Link } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { logout, login } from "../../redux/actions/isLogged.js";
import { updateCurrentUser } from "../../redux/actions/updateCurrentUser";

function Navbar({
  displaySearch,
  isLoggedIn,
  logout,
  login,
  updateCurrentUser,
}) {
  //On Refresh Authorize Login
  useEffect(async () => {
    const token = window.localStorage.getItem("token");
    if (token) {
      console.log("JWT " + token);
      await fetch("http://localhost:5000/auth", {
        method: "post",
        headers: {
          "Content-Type": "application/json",
          Authorization: "JWT " + token,
        },
      }).then(async (res) => {
        const data = await res.json();
        console.log(data);
        if (data.status === "confirmed") {
          updateCurrentUser(data.username);
          login();
        }
      });
    }
  }, []);

  const display = () => {
    if (displaySearch == true) {
      return (
        <div>
          <Searchbar></Searchbar>
        </div>
      );
    }
  };

  const logoutLogic = () => {
    updateCurrentUser("");
    logout();
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
        item.onClick = logoutLogic;
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
    }
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
  login,
  updateCurrentUser,
};

const mapStateToProps = (state) => {
  return {
    displaySearch: state.displaySearchReducer,
    isLoggedIn: state.isLoggedReducer,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);
