import React from "react";
import searchIcon from "../assets/magnifying-glass-solid.svg";
const Nav = () => {
  return (
    <div className="bg-white text-black p-4 mt-1 ml-4 mr-4 rounded-2xl">
      <div className="flex items-center ">
        <div className="relative">
          <input
            type="text"
            placeholder="Search"
            className="bg-gray-100 text-black rounded-full py-2 px-4 pl-5 outline-none focus:ring-1 focus:ring-black"
          />
          <img
            src={searchIcon}
            alt=""
            className="absolute inset-y-0 right-0 px-6 py-2 mt-1 h-8"
          />
        </div>
        <button className="ml-4 bg-transparent  py-2 px-4 rounded-full">
          Relevance ▼
        </button>
        <button className="ml-2 bg-transparent  py-2 px-4 rounded-full">
          All Brands ▼
        </button>
      </div>
      {/* Add other navigation elements for the right side if needed */}
    </div>
  );
};

export default Nav;
