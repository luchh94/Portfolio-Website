import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const openMenuHandler = (e) => setOpen(!open);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2f4454] text-white">
      <div className="">
        <h1 className="border p-4">LH</h1>
      </div>

      {/* Menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <li className="font-[inconsoloata] flex">
            <p className="text-[#65e1e3] px-5">01.</p>
            <p className="tracking-[5px]">Home</p>
          </li>
          <li className="font-[inconsoloata] flex">
            <p className="text-[#65e1e3] px-5">02.</p>
            <p className="tracking-[5px]">About</p>
          </li>
          <li className="font-[inconsoloata] flex">
            <p className="text-[#65e1e3] px-5">03.</p>
            <p className="tracking-[5px]">Skills</p>
          </li>
          <li className="font-[inconsoloata] flex">
            <p className="text-[#65e1e3] px-5">04.</p>
            <p className="tracking-[5px]">Work</p>
          </li>
          <li className="font-[inconsoloata] flex">
            <p className="text-[#65e1e3] px-5">05.</p>
            <p className="tracking-[5px]">Contact Me</p>
          </li>
        </ul>
      </div>

      {/* Bars */}

      <div onClick={openMenuHandler} className="md:hidden z-10">
        {!open ? <FaBars /> : <FaTimes />}
      </div>

      {/* MobileMenu */}

      <ul
        className={
          !open
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#2f4454] flex flex-col justify-center items-center"
        }
      >
        <li className="font-[inconsoloata] flex py-6 text-4xl">
          <p className="text-[#65e1e3] pr-5">01.</p>
          <p className="tracking-[5px]">Home</p>
        </li>
        <li className="font-[inconsoloata] flex py-6 text-4xl">
          <p className="text-[#65e1e3] pr-5">02.</p>
          <p className="tracking-[5px]">About</p>
        </li>
        <li className="font-[inconsoloata] flex py-6 text-4xl">
          <p className="text-[#65e1e3] pr-5">03.</p>
          <p className="tracking-[5px]">Skills</p>
        </li>
        <li className="font-[inconsoloata] flex py-6 text-4xl">
          <p className="text-[#65e1e3] pr-5">04.</p>
          <p className="tracking-[5px]">Work</p>
        </li>
        <li className="font-[inconsoloata] flex py-6 text-4xl">
          <p className="text-[#65e1e3] pr-5">05.</p>
          <p className="tracking-[5px]">Contact Me</p>
        </li>
      </ul>

      {/* SocialIcons */}
      <div className="hidden md:h-[200px] md:flex fixed flex-col top-[35%] left-0 ml-[-30px] ">
        <ul className="h-[200px] flex flex-col justify-around">
          <li className="">
            <a>
              <AiOutlineLinkedin className="h-[40px] w-[110px]" />
            </a>
          </li>
          <li>
            <a>
              <AiOutlineGithub className="h-[40px] w-[110px]"/>
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
