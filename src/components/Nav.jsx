import React from "react";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { SiApacheopenoffice } from "react-icons/si";

const Nav = () => {
  return (
    <div className="w-full flex mx-auto  justify-between items-center p-4 
     ">
      {/* Navigation logo div */}
      <div className="flex items-center ">
        <div>
          <SiApacheopenoffice />
        </div>
        <div className="text-2xl font-bold">Office</div>
      </div>

      {/* Navigation links div */} 
      <div className="flex justify-between gap-2 sm:gap-3 md:gap-12 lg:gap-17 items-center">
        <Link to="/">About</Link>
        <Link to="/membership">Membership</Link>
        <Link to="/feature">Feature</Link>
        <Link to="/location">Location</Link>
      </div>
      {/* button */}
      <div className="flex justify-between items-center pr-1 lg:gap-3 md:gap-3 md:pr-30 lg:pr-40 ">
        <button className="bg-black text-white p-2 md:px-4 lg:px-4 mx-auto ">Book Now</button>
        <span>
          <BsThreeDotsVertical />
        </span>
      </div>
    </div>
  );
};

export default Nav;
