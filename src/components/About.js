import Aos from "aos";
import React, { useEffect } from "react";
import Lucas from "./../assets/lucas.jpg";

const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <div name="about" className="bg-[#a2b9dd96] h-[65em] md:h-[50em]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center">
        <div className="flex align-center h-[60px] border-b border-[#4c356c]">
          <p
            className="text-[#4c356c] sans text-4xl"
            data-aos="fade-down"
            aos_offset="100"
          >
            {" "}
            <span className="text-2xl mr-3 text-[#EA738DFF]">01.</span>About
          </p>
        </div>
        <div className="flex flex-col md:flex-row mt-10">
          <div className="w-[100%] md:w-[50%] justify-center">
            <p className="max-w-[500px] text-[#4c356c]/[0.8] mx-auto">
              <p className="sans tracking-widest">
                Hey! My name is Lucas, and I like being creative on the
                Internet.
              </p>
              <p className="sans my-10 tracking-widest text-[#4c356c]/[0.6]">
                Besides my passion for sports, I grew up with a computer and had
                a huge array of interests that ranged from editing videos to
                making music to... creating
                <span className="text-[#EA738DFF]"> Web-Applications</span>!
              </p>
              <p className="sans tracking-widest text-[#4c356c]/[0.6]">
                For me, life is about constantly learning and evolving, and I am
                therefore always on the lookout for new skills to develop and
                grow with. I believe that you can learn whatever you want at any
                point of your life, you only have to know where to look for the
                resources to do so.
              </p>
              <p className="sans-italic tracking-widest text-[#4c356c]/[0.6] mt-20">
                There is nothing you cannot be, there is nothing you cannot do.
                There is nothing you cannot have.
              </p>
            </p>
          </div>
          <div className="flex m-0 justify-center md:mt-0 mt-20 relative w-[100%] md:w-[50%] mx-auto ">
            <div className="absolute top-0 bottom-0  right-0 bg-[#307bb46f]" />
            <img
              src={Lucas}
              className=" md:max-w-[350px] max-w-[300px] opacity-60"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
