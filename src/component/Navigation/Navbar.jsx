import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import "./Navbar.css";

function Navbar({ onNavItemSelect }) {
  const [selectedNavItem, setSelectedNavItem] = useState("Home");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Videos", path: "/videos" },
    { name: "Leaderboard", path: "/leaderboard" },
    { name: "Challenges", path: "/challenges" },
    { name: "Favourites", path: "/favourites" },
  ];

  const onNavItemClick = (item) => {
    setSelectedNavItem(item);
    onNavItemSelect(item);
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-content">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={`nav-item ${
                selectedNavItem === item.name ? "active" : ""
              }`}
              onClick={() => onNavItemClick(item)}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
      <div className="sub-heading">
        <h4 className="navbar-heading">New Stock Photos</h4>
        <div className="drop-down-button">
          <Button label="New" className="new-button" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
