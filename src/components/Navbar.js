import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, showSet] = useState(true);
  const openMenuHandler = (e) => setOpen(!open);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#2f4454] z-10 text-white">
      <div className="">
        <h1 className="border p-4">LH</h1>
      </div>

      {/* Menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <Link to="home" smooth={true} offset={50} duration={500}>
            <li className="font-fira cursor-pointer  flex hover:scale-[1.2] duration-300">
              <p className="text-[#65e1e3] text-sm px-5">01.</p>
              <p className="tracking-widest text-sm">Home</p>
            </li>
          </Link>
          <Link to="about" smooth={true} offset={50} duration={500}>
            <li className="font-fira cursor-pointer flex hover:scale-[1.2] duration-300">
              <p className="text-[#65e1e3] text-sm px-5">02.</p>
              <p className="tracking-widest text-sm">About</p>
            </li>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <li className="font-fira cursor-pointer flex hover:scale-[1.2] duration-300">
              <p className="text-[#65e1e3] text-sm px-5">03.</p>
              <p className="tracking-widest text-sm">Skills</p>
            </li>
          </Link>
          <Link to="work" smooth={true} offset={50} duration={500}>
            <li className="font-fira cursor-pointer flex hover:scale-[1.2] duration-300">
              <p className="text-[#65e1e3] text-sm px-5">04.</p>
              <p className="tracking-widest text-sm">Work</p>
            </li>
          </Link>
          <Link to="contact" smooth={true} offset={50} duration={500}>
            <li className="font-fira cursor-pointer flex hover:scale-[1.2] duration-300">
              <p className="text-[#65e1e3] text-sm px-5">05.</p>
              <p className="tracking-widest text-sm">Contact</p>
            </li>
          </Link>
        </ul>
      </div>

      {/* Bars */}

      <div onClick={openMenuHandler} className="md:hidden z-10">
        {!open ? (
          <FaBars className="hover:scale-110 duration-300 cursor-pointer" />
        ) : (
          <FaTimes className="hover:scale-110 duration-300" />
        )}
      </div>

      {/* MobileMenu */}

      <ul
        className={
          !open
            ? "hidden"
            : "absolute top-0 left-0 w-full h-screen bg-[#000000] flex flex-col justify-center items-center "
        }
      >
        <Link to="home" smooth={true} duration={500}>
          <li
            onClick={(e) => setOpen(false)}
            className="font-fira cursor-pointer  flex py-6 text-4xl "
          >
            <p className="text-[#65e1e3] pr-5">01.</p>
            <p className="tracking-[5px]">Home</p>
          </li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li
            onClick={(e) => setOpen(false)}
            className="font-fira cursor-pointer  flex py-6 text-4xl"
          >
            <p className="text-[#65e1e3] pr-5">02.</p>
            <p className="tracking-[5px]">About</p>
          </li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li
            onClick={(e) => setOpen(false)}
            className="font-fira cursor-pointer  flex py-6 text-4xl"
          >
            <p className="text-[#65e1e3] pr-5">03.</p>
            <p className="tracking-[5px]">Skills</p>
          </li>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <li
            onClick={(e) => setOpen(false)}
            className="font-fira cursor-pointer  flex py-6 text-4xl"
          >
            <p className="text-[#65e1e3] pr-5">04.</p>
            <p className="tracking-[5px]">Work</p>
          </li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li
            onClick={(e) => setOpen(false)}
            className="font-fira cursor-pointer flex py-6 text-4xl"
          >
            <p className="text-[#65e1e3] pr-5">05.</p>
            <p className="tracking-[5px]">Contact Me</p>
          </li>
        </Link>
      </ul>

      {/* SocialIcons */}
      <div className="hidden md:h-[200px] lg:flex fixed flex-col top-[35%] left-0 ml-[-30px] ">
        <ul className="h-[200px] flex flex-col justify-around">
          <li className="">
            <a target="_blank" >
              <AiOutlineLinkedin className="h-[40px] w-[110px]" />
            </a>
          </li>
          <li>
            <a  target="_blank" href="https://github.com/luchh94">
              <AiOutlineGithub className="h-[40px] w-[110px]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
