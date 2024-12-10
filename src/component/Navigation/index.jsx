import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Button from "../Button";

function Navbar({ initialSelectedItem = "home", setSearchQuery }) {
  const [selectedNavItem, setSelectedNavItem] = useState("Home");

  const navItems = [
    { name: "Home", path: "/" },
    { name: "Photos", path: "/photos" },
    { name: "Favourites", path: "/favourites" },
  ];

  useEffect(() => {
    setSelectedNavItem(initialSelectedItem);
  }, [initialSelectedItem]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <>
      <div className="flex justify-center py-8">
        <div className="flex scrollbar-hide overflow-auto whitespace-nowrap ">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={`flex items-center h-12 px-2.5 py-0 text-base font-poppins tracking-wide leading-snug  ${
                selectedNavItem === item.name
                  ? "bg-black text-white rounded-3xl font-semibold"
                  : "bg-white text-darkGrey font-semibold"
              }`}
              onClick={() => setSelectedNavItem(item.name)}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="block justify-between items-center pb-8 sm:block md:flex px-4 xl:px-8 2xl:px-20">
        <h4 className="font-semibold font-poppins text-xl text-black tracking-wide leading-sung pb-5 md: align-center pb-0">
          New Stock Photos
        </h4>
        <div className="flex justify-center items-center w-auto h-8  border-2 border-purpleGrey rounded-lg p-2 box-content md:w-w-499">
          <input
            type="text"
            placeholder="Search for photos..."
            onChange={handleSearchChange}
            className="self-center w-full h-8 border-none focus:outline-none"
          />
          <img
            className="flex self-center h-10 w-10"
            src="/asset/searchs.svg"
            alt="Search"
          />
        </div>
        <div className="pt-5 md:pt-0 ">
          <Button
            label="New"
            className="bg-white flex flex-wrap justify-center items-center border border-lightGrey rounded-md w-24 h-12 px-5 font-semibold text-md text-black font-poppins "
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
