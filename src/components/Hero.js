import React, { useEffect } from "react";
import { Link } from "react-scroll";
import Aos from "aos";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div name="home" className="w-full h-[60em] bg-[#a2b9dd7e]">
      <div className="max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p
          className="font-sans text-[#EA738DFF] tracking-[2px]"
          data-aos="fade-left"
          aos_delay="100"
        >
          Hi! My name is
        </p>
        <h1
          className="text-6xl text-[#EA738DFF] sans mt-4 font-bold"
          data-aos="fade-left"
          data-aos-delay="300"
        >
          Lucas Hoffmann.
        </h1>
        <h1
          className="text-6xl text-[#4c356c]/[0.8] sans mb-4"
          data-aos="fade-left"
          data-aos-delay="600"
        >
          I am a Web Developer.
        </h1>
        <p
          className="text-1xl text-[#4c356c]/[0.6] sans mb-8 max-w-[500px] leading-6"
          data-aos="fade-up"
          data-aos-delay="1500"
        >
          I am a self-taught Web-Developer from Hamburg, currently based in
          Berlin. I like to learn new stuff and if you want to hire me...
        </p>
        <div
          className="w-[45%] md:w-[40%] flex justify-around"
          data-aos="fade-right"
          data-aos-delay="2000"
        >
          <Link to="contact" smooth={true} offset={50} duration={500}>
            <button className="border-2 border-[#4c356c] text-[#EA738DFF] font-sans tracking-widest p-3 hover:scale-[1.2] duration-300 ">
              Say Hello!
            </button>{" "}
          </Link>
          <Link to="work" smooth={true} offset={50} duration={500}>
            <button className="border-2 border-[#4c356c] text-[white] bg-[#4c356c] font-sans tracking-widest p-3 hover:scale-[1.2] duration-300 ">
              My Work
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Hero;
