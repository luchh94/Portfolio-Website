import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { AiOutlineLinkedin, AiOutlineGithub } from "react-icons/ai";
import { Link } from "react-scroll";

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const [show, showSet] = useState(true);
  const openMenuHandler = (e) => setOpen(!open);
  return (
    <div className="fixed w-full h-[80px] flex justify-between items-center px-4 bg-[#a2b9dd7e] z-10 text-white">
      <Link to="home" smooth={true} offset={50} duration={500}>
        {" "}
        <div className="cursor-pointer">
          <h1 className="border p-4 border-[#4c356c] text-[#4c356c]">LH</h1>
        </div>
      </Link>

      {/* Menu */}
      <div className="hidden md:flex">
        <ul className="hidden md:flex">
          <Link to="home" smooth={true} offset={50} duration={500}>
            <li className="font-fira cursor-pointer  flex hover:scale-[1.2] duration-300">
              <p className="text-[#EA738DFF] text-sm px-5">01.</p>
              <p className="tracking-widest text-[#4c356c] text-sm">Home</p>
            </li>
          </Link>
          <Link to="about" smooth={true} offset={50} duration={500}>
            <li className="font-fira cursor-pointer flex hover:scale-[1.2] duration-300">
              <p className="text-[#EA738DFF] text-sm px-5">02.</p>
              <p className="tracking-widest text-[#4c356c] text-sm">About</p>
            </li>
          </Link>
          <Link to="skills" smooth={true} duration={500}>
            <li className="font-fira cursor-pointer flex hover:scale-[1.2] duration-300">
              <p className="text-[#EA738DFF] text-sm px-5">03.</p>
              <p className="tracking-widest text-[#4c356c] text-sm">Skills</p>
            </li>
          </Link>
          <Link to="work" smooth={true} offset={50} duration={500}>
            <li className="font-fira cursor-pointer flex hover:scale-[1.2] duration-300">
              <p className="text-[#EA738DFF] text-sm px-5">04.</p>
              <p className="tracking-widest text-[#4c356c] text-sm">Work</p>
            </li>
          </Link>
          <Link to="contact" smooth={true} offset={50} duration={500}>
            <li className="font-fira cursor-pointer flex hover:scale-[1.2] duration-300">
              <p className="text-[#EA738DFF] text-sm px-5">05.</p>
              <p className="tracking-widest text-[#4c356c] text-sm">Contact</p>
            </li>
          </Link>
        </ul>
      </div>

      {/* Bars */}

      <div onClick={openMenuHandler} className="md:hidden z-10">
        {!open ? (
          <FaBars className="text-[#4c356c] hover:scale-110 duration-300 cursor-pointer" />
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
            <p className="text-[#EA738DFF] pr-5">01.</p>
            <p className="tracking-[5px]">Home</p>
          </li>
        </Link>
        <Link to="about" smooth={true} duration={500}>
          <li
            onClick={(e) => setOpen(false)}
            className="font-fira cursor-pointer  flex py-6 text-4xl"
          >
            <p className="text-[#EA738DFF] pr-5">02.</p>
            <p className="tracking-[5px]">About</p>
          </li>
        </Link>
        <Link to="skills" smooth={true} duration={500}>
          <li
            onClick={(e) => setOpen(false)}
            className="font-fira cursor-pointer  flex py-6 text-4xl"
          >
            <p className="text-[#EA738DFF] pr-5">03.</p>
            <p className="tracking-[5px]">Skills</p>
          </li>
        </Link>
        <Link to="work" smooth={true} duration={500}>
          <li
            onClick={(e) => setOpen(false)}
            className="font-fira cursor-pointer  flex py-6 text-4xl"
          >
            <p className="text-[#EA738DFF] pr-5">04.</p>
            <p className="tracking-[5px]">Work</p>
          </li>
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          <li
            onClick={(e) => setOpen(false)}
            className="font-fira cursor-pointer flex py-6 text-4xl"
          >
            <p className="text-[#EA738DFF] pr-5">05.</p>
            <p className="tracking-[5px]">Contact Me</p>
          </li>
        </Link>
      </ul>

      {/* SocialIcons */}
      <div className="hidden md:h-[200px] lg:flex fixed flex-col top-[35%] left-0 ml-[-30px] ">
        <ul className="h-[200px] flex flex-col justify-around">
          <li className="">
            <a target="_blank">
              <AiOutlineLinkedin className="h-[40px] w-[110px] text-[#4c356c]" />
            </a>
          </li>
          <li>
            <a target="_blank" href="https://github.com/luchh94">
              <AiOutlineGithub className="h-[40px] w-[110px] text-[#4c356c]" />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
