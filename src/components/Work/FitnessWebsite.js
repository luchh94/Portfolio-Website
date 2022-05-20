import React from "react";
import FitnessWebsite from "./../../assets/plexwebsite.png";
import ReactJS from "./../../assets/react.png";

import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const Ecommerce = () => {
  return (
    <>
      <div className="flex-col md:flex-row md:flex md:pb-10 md:pt-20  flex ">
        <div className="w-[60%] hidden md:block">
          <a
            target="_blank"
            href="https://luchh94.github.io/fitnesswebsite/"
            className="color"
          >
            <div className="hover:scale-[1.05] duration-300 relative w-full h-96">
              <img
                src={FitnessWebsite}
                className="w-full h-full object-cover absolute opacity-80 saturate-10"
                alt="E - Commerce Website"
              />
            </div>
          </a>
        </div>
        <div className="hidden md:flex flex-col ml-auto relative w-[40%]">
          <div className="flex flex-col mx-auto mr-0">
            <p className="text-right text-[#EA738DFF] font-fira  tracking-widest">
              Project
            </p>
            <p className="text-[#4c356c] sans text-4xl border-b border-[#4c356c]">Plex Fitness</p>
          </div>
          <div className="bg-[white] w-[600px] h-[150px] right-0 top-40 absolute hidden shadow-md text-center md:flex justify-content align-center">
            <p className="w-fit h-fit tracking-widest text-[#4c356c] opacity-70 font-thin mx-auto my-auto ">
              A landing-page for a FitnessClub created with ReactJS. It
              showcases my skill to create a modern looking homepage. The Design
              is made with Styled-Components.
            </p>
          </div>
          <div></div>
          <div></div>
        </div>

        {/* Small Device Projects */}

        <div className="w-max-[1000px] h-[full] flex flex-col md:hidden justify-center align-center">
          {/*Single Project Container - Start*/}
          <div className="w-[80%] h-[700px] mx-auto flex flex-col justify-around my-auto shadow-md pt-4">
            <div className="flex flex-col mx-auto w-[80%] pt-8">
              <p className="text-left text-[#EA738DFF] font-fira  tracking-widest opacity-70">
                Project
              </p>
              <p className="text-[#4c356c] sans text-4xl">Plex Fitness</p>
            </div>
            <div className="mx-auto w-[80%]">
              <p className="tracking-widest text-[#4c356c] opacity-70">
                A landing-page for a FitnessClub created with ReactJS. It
                showcases my skill to create a modern looking homepage. The
                Design is made with Styled-Components.
              </p>
            </div>
            <div className="max-w-[80%] h-[200px] mx-auto w-[80%] flex flex-col  justify-around">
              <div className="w-full max-h-[50px] grid grid-cols-4 gap-2 grid-rows-2">
                <div className="w-fit shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[white] bg-[#4c356c]  text-[12px] sm:text-base opacity-60  font-fira ">
                    React
                  </p>
                </div>

                <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[white] bg-[#4c356c] text-[12px] sm:text-base opacity-60">
                    Figma
                  </p>
                </div>
                <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[white] bg-[#4c356c] text-[12px] sm:text-base opacity-60 font-fira ">
                    StyledC.
                  </p>
                </div>
              </div>
              <div className="flex w-[80%] h-[50px] mx-auto justify-around">
                <a
                  target="_blank"
                  href="https://github.com/luchh94/fitnesswebsite"
                >
                  {" "}
                  <AiOutlineGithub className="text-4xl text-[#4c356c]" />
                </a>

                <a
                  target="_blank"
                  href="https://luchh94.github.io/fitnesswebsite/"
                >
                  {" "}
                  <AiOutlineLink className="text-4xl text-[#4c356c]" />
                </a>
              </div>
            </div>
          </div>
          {/*Single Project Container - End*/}
        </div>
      </div>
      <div>
        <div className="w-full h-[75px] hidden md:grid grid-cols-5 gap-2 grid-rows-1 text-center">
          <div className="shadow-md bg-[#4c356c] hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group flex flex-col justify-around">
            <img className="w-10 mx-auto" src={ReactJS} alt="REACT JS ICON" />
            <p className="text-[white] opacity-60  group-hover:block">ReactJS</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] hidden md:flex justify-center items-center text-center">
        <div className="border-t border-[#4c356c] w-[25%] h-[50%] flex justify-around items-center mr-0">
          <a target="_blank" href="https://github.com/luchh94/fitnesswebsite">
            <AiOutlineGithub className="text-4xl text-[#4c356c] hover:scale-[1.4] duration-300" />
          </a>

          <a target="_blank" href="https://luchh94.github.io/fitnesswebsite/">
            <AiOutlineLink className="text-4xl text-[#4c356c] hover:scale-[1.4] duration-300" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
