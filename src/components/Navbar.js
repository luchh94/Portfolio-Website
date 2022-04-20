import React from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2f4454] text-white">
      <div>
        <h1>Lucas Hoffmann</h1>
      </div>

      {/* Menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li className="font-[inconsoloata] flex">
            <p className="text-[#50a4a5]">01.</p>
            <p>Home</p>
          </li>
          <li className="font-[inconsoloata] flex">
            <p className="text-[#50a4a5]">02.</p>
            <p>About</p>
          </li>
          <li className="font-[inconsoloata] flex">
            <p className="text-[#50a4a5]">03.</p>
            <p>Skills</p>
          </li>
          <li className="font-[inconsoloata] flex">
            <p className="text-[#50a4a5]">04.</p>
            <p>Work</p>
          </li>
          <li className="font-[inconsoloata] flex">
            <p className="text-[#50a4a5]">05.</p>
            <p>Contact Me</p>
          </li>
        </ul>
      </div>

      {/* Bars */}

      <div className="md:hidden">
        <FaBars />
      </div>

      {/* MobileMenu */}

      <ul className="absolute top-0 left-0 w-full h-screen bg-[#2f4454] flex flex-col justify-center items-center">
        <li className="font-[inconsoloata] flex">
          <p className="text-[#50a4a5]">01.</p>
          <p>Home</p>
        </li>
        <li className="font-[inconsoloata] flex">
          <p className="text-[#50a4a5]">02.</p>
          <p>About</p>
        </li>
        <li className="font-[inconsoloata] flex">
          <p className="text-[#50a4a5]">03.</p>
          <p>Skills</p>
        </li>
        <li className="font-[inconsoloata] flex">
          <p className="text-[#50a4a5]">04.</p>
          <p>Work</p>
        </li>
        <li className="font-[inconsoloata] flex">
          <p className="text-[#50a4a5]">05.</p>
          <p>Contact Me</p>
        </li>
      </ul>

      {/* SocialIcons */}
      <div className="hidden"></div>
    </div>
  );
};

export default Navbar;
