import React from "react";
import EWebsite from "./../../assets/ecommercewebsite.png";
import Sanity from "./../../../src/assets/sanity.png";
import NextJS from "../../assets/nextjs.png";
import ThirdWeb from "./../../assets/thirdweb.png";
import OpenSeaClone from "./../../assets/openseaclone.png";
import ReactJS from "./../../assets/react.png";
import MongoDB from "./../../assets/mongodb.png";
import NodeJS from "./../../assets/nodejs.png";
import Figma from "./../../assets/figma.png";
import Redux from "../../assets/redux.png";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import Tailwind from "../../assets/tailwind.png";

const OpenseaClone = () => {
  return (
    <>
      <div className="flex-col md:flex-row md:flex md:pb-10 md:pt-20  flex ">
        <div className="w-[60%] hidden md:block">
          <a href="" className="color">
            <div className="hover:scale-[1.05] duration-300 relative w-full h-96">
              <img
                src={OpenSeaClone}
                className="w-full h-full object-cover absolute opacity-80 saturate-10"
                alt="E - Commerce Website Picture"
              />
            </div>
          </a>
        </div>
        <div className="hidden md:flex flex-col ml-auto relative w-[40%]">
          <div className="flex flex-col mx-auto mr-0">
            <p className="text-right text-[#65e1e3] font-fira  tracking-widest">
              Project
            </p>
            <p className="text-white sans text-4xl border-b">OpenSea Clone</p>
          </div>
          <div className="bg-[#0c405e] w-[600px] h-[150px] right-0 top-40 absolute hidden shadow-md text-center md:flex justify-content align-center">
            <p className="w-fit h-fit tracking-widest text-white opacity-70 font-thin mx-auto my-auto ">
              I build this Project to understand more about the
              <span className="text-[#65e1e3] opacity-99"> ThirdWeb</span>,
              which in my opinion has a bright future ahead. I was guided by a
              Tutorial and the focus was less on being able to build this site
              from scratch, but more on understanding how you you are able to
              implement Thirdweb and dynamically load the Content of the
              Blockchain on your site.
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
              <p className="text-left text-[#65e1e3] font-fira  tracking-widest opacity-70">
                Project
              </p>
              <p className="text-white sans text-4xl">OverSea Clone</p>
            </div>
            <div className="mx-auto w-[80%]">
              <p className="tracking-widest text-white opacity-70">
                I build this Project to understand more about the ThirdWeb,
                which in my opinion has a bright future ahead. I was guided by a
                Tutorial and the focus was less on being able to build this site
                from scratch, but more on understanding how you you are able to
                implement Thirdweb and dynamically load the Content of the
                Blockchain on your site.
              </p>
            </div>
            <div className="max-w-[80%] h-[200px] mx-auto w-[80%] flex flex-col  justify-around">
              <div className="w-full h-[50px] grid grid-cols-4 gap-2 grid-rows-2">
                <div className="w-fit shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[#65e1e3]  opacity-60  font-fira ">
                    NextJS
                  </p>
                </div>
                <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[#65e1e3] opacity-60 font-fira ">
                    Tailwind
                  </p>
                </div>
                <div className="w-fit align-center  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[#65e1e3] opacity-60 font-fira ">
                    Sanity
                  </p>
                </div>
                <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[#65e1e3] opacity-60  font-fira ">
                    ThirdWeb
                  </p>
                </div>
              </div>
              <div className="flex w-[80%] h-[50px] mx-auto justify-around">
                <AiOutlineGithub className="text-4xl text-white" />

                <AiOutlineLink className="text-4xl text-white" />
              </div>
            </div>
          </div>
          {/*Single Project Container - End*/}
        </div>
      </div>
      <div>
        <div className="w-full h-[75px] hidden md:grid grid-cols-5 gap-2 grid-rows-1 text-center">
          <div className="shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group flex flex-col justify-between">
            <img className="w-10 mx-auto" src={NextJS} />
            <p className="text-white opacity-60  group-hover:block">NextJS</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group flex flex-col justify-between">
            <img className="w-10 mx-auto" src={Sanity} />
            <p className="text-white opacity-60 group-hover:block">Sanity</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group flex flex-col justify-between">
            <img className="w-10 mx-auto" src={Tailwind} />
            <p className="text-white opacity-60 group-hover:block">Tailwind</p>
          </div>
          <div className="shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group flex flex-col justify-between">
            <img className="w-10 mx-auto" src={ThirdWeb} />
            <p className="text-white opacity-60 group-hover:block">ThirdWeb</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] hidden md:flex justify-center items-center text-center">
        <div className="border-t w-[25%] h-[50%] flex justify-around items-center mr-0">
          <AiOutlineGithub className="text-4xl text-white hover:scale-[1.4] duration-300" />

          <AiOutlineLink className="text-4xl text-white hover:scale-[1.4] duration-300" />
        </div>
      </div>
    </>
  );
};

export default OpenseaClone;
