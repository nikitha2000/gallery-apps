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
        <div className="flex overflow-auto whitespace-nowrap scrollbar-hide">
          {navItems.map((item) => (
            <NavLink
              key={item.name}
              to={item.path}
              className={`flex items-center px-2.5 py-0 text-base font-poppins tracking-[1px] leading-[1.4] h-12 ${
                selectedNavItem === item.name
                  ? "bg-black text-white rounded-[30px] font-semibold"
                  : "bg-white text-[#4a4a4a] font-semibold"
              }`}
              onClick={() => setSelectedNavItem(item.name)}>
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>

      <div className="block justify-between items-center pb-[30px] sm:block md:flex px-[15px] xl:px-[30px] 2xl:px-[80px]">
        <h4 className="font-[600] font-poppins text-[20px] text-black tracking-[1px] leading-[1.4] pb-[20px] md: align-center pb-[0px]">
          New Stock Photos
        </h4>
        <div className="w-auto h-[30px] flex justify-center border-2 border-[#5441704b] rounded-[10px] p-[10px] box-content md:w-[500px]">
          <input
            type="text"
            placeholder="Search for photos..."
            onChange={handleSearchChange}
            className="border-none self-center w-full h-[30px] focus:outline-none"
          />
          <img
            className="flex self-center h-[40px] w-[40px]"
            src="/asset/searchs.svg"
            alt="Search"
          />
        </div>
        <div className="pt-[20px] md:pt-[0px] ">
          <Button
            label="New"
            className="bg-white flex flex-wrap justify-center items-center border border-[#dfdfe0] rounded-[6px] w-[90px] h-[46px] px-[20px] font-semibold text-[16px] text-black font-poppins "
          />
        </div>
      </div>
    </>
  );
}

export default Navbar;
