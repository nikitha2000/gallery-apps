import React, { useState } from "react";
import Button from "../Button";
import "./Navbar.css";

function Nav() {
  const [navigationItem, setNavigationItem] = useState("Home");
  const navItems = [
    "Home",
    "Videos",
    "Leaderboard",
    "Challenges",
    "Favourites",
  ];

  const onNavigationItemClick = (item) => {
    setNavigationItem(item);
  };

  return (
    <>
      <div className="nav-container">
        <div className="nav-content">
          {navItems.map((item) => (
            <a
              key={item}
              className={`nav-item ${navigationItem === item ? "active" : ""}`}
              onClick={() => onNavigationItemClick(item)}>
              {item}
            </a>
          ))}
        </div>
      </div>
      <div className="sub-heading">
        <h4>New Stock Photos</h4>
        <div className="drop-down-button">
          <Button label="New" className="new-button" />
        </div>
      </div>
    </>
  );
}

export default Nav;
