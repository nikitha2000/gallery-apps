import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button/Button";
import "./Navbar.css";

interface NavItem { 
  name: string; 
  path: string; 
}   

interface NavbarProps { 
  initialSelectedItem:string; 
  setSearchQuery: (query: string) => void; 
}

const Navbar = ({ initialSelectedItem = "home", setSearchQuery }:NavbarProps) =>  {
  const [selectedNavItem, setSelectedNavItem] = useState<string>("Home");

  const navItems: NavItem[] = [
    { name: "Home", path: "/" },
    { name: "Photos", path: "/photos" },
    { name: "Favourites", path: "/favourites" },
  ];

  useEffect(() => {
    setSelectedNavItem(initialSelectedItem);
  }, [initialSelectedItem]);

  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(event.target.value);
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
              }`}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="sub-heading">
        <h4 className="navbar-heading">New Stock Photos</h4>
        <div className="search-container">
          <input
            type="text"
            placeholder="Search for photos..."
            onChange={handleSearchChange}
          />
          <img className="search-img" src="/asset/searchs.svg" />
        </div>
        <div className="drop-down-button">
          <Button label="New" className="new-button" />
        </div>
      </div>
    </>
  );
}

export default Navbar;
