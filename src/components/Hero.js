import React from "react";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div name="home" className="w-full h-screen bg-[#2f4454]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="font-fira text-[#65e1e3] tracking-[2px]">
          Hi! My name is
        </p>
        <h1 className="text-6xl text-white sans mt-4 font-bold">
          Lucas Hoffmann.
        </h1>
        <h1 className="text-6xl text-white/[0.8] sans mb-4 ">
          I build things for the web.
        </h1>
        <p className="text-1xl text-white/[0.6] sans mb-8 max-w-[500px] leading-6">
          I am a self-taught Web-Developer from Hamburg, currently based in
          Berlin. I like to learn new stuff and if you want to hire me...
        </p>
        <div className="w-[45%] md:w-[40%] flex justify-around">
        <Link to="contact" smooth={true} offset={50} duration={500}>
          <button className="border text-[#65e1e3] font-fira tracking-widest p-3 hover:scale-[1.2] duration-300 ">
            Say Hello!
          </button>{" "}
          </Link>
          <Link to="work" smooth={true} offset={50} duration={500}>
            <button className="border text-[#65e1e3] font-fira tracking-widest p-3 hover:scale-[1.2] duration-300 ">
              My Work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
