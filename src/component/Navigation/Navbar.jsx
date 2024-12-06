import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";
import "./Navbar.css";

function Navbar({ initialSelectedItem = "home", onNavItemSelect }) {
  const [selectedNavItem, setSelectedNavItem] = useState("Home");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Photos", path: "/photos" },
    { name: "Favourites", path: "/favourites" },
  ];

  const onNavItemClick = (item) => {
    setSelectedNavItem(item.name);
    if (onNavItemSelect) {
      onNavItemSelect(item.name);
    }
  };
  useEffect(() => {
    setSelectedNavItem(initialSelectedItem);
  }, [initialSelectedItem]);

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
        <div className="search-container">
          <input type="text" placeholder="Search for photos..." />
          <img src="/asset/searchs.svg" />
        </div>
        <div className="drop-down-button">
          <Button label="New" className="new-button" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
