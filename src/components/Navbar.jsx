import React, { useEffect, useState } from "react";
import { searchIcon } from "../assets/images";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
 
  return (
    <>
      <div className="bg-[rgb(33,39,49)] w-full flex justify-center ps-20 max-[420px]:ps-0 ">
        <div className="p-2 flex justify-around items-center">
          <div className="flex items-center">
            <img
              src={searchIcon}
              alt="search-icon"
              className="absolute w-4 ms-2"
            />
            <input
              type="text"
              placeholder="Search ..."
              className="ps-8 rounded-md w-72 outline-none h-7 max-[420px]:w-screen "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="flex gap-10 ps-10 max-[420px]:hidden ">
            <div className="text-white">Categories</div>
            <div className="text-white">Website Builders</div>
            <div className="text-white">Today Deals</div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
