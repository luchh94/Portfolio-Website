import React from "react";
import EWebsite from "./../assets/ecommercewebsite.png";
import ReactJS from "./../assets/react.png";
import MongoDB from "./../assets/mongodb.png";
import NodeJS from "./../assets/nodejs.png";
import Figma from "./../assets/figma.png";
import Redux from "../assets/redux.png";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const Work = () => {
  return (
    <div name="work" className="bg-[#2f4454] w-full h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center">
        <div className="flex align-center h-[60px] border-b">
          <p className="text-white sans text-4xl">
            <span className="text-2xl mr-3 text-[#65e1e3]">03.</span>My Work
          </p>
        </div>
        <div className="flex-col md:flex-row md:flex md:pb-10 md:pt-20  flex ">
          <div className="w-[60%] hidden md:block">
            <a href="" className="color">
              <div className="hover:scale-[1.05] duration-300 relative w-full h-96">
                <img
                  src={EWebsite}
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
              <p className="text-white sans text-4xl border-b">
                Tech For Today
              </p>
            </div>
            <div className="bg-[#0c405e] w-[600px] h-[150px] right-0 top-40 absolute hidden shadow-md text-center md:flex justify-content align-center">
              <p className="w-fit h-fit tracking-widest text-white opacity-70 font-thin mx-auto my-auto ">
                My biggest Project so far: A complete functional
                <span className="text-[#65e1e3] opacity-99">
                  {" "}
                  E-Commerce-Site
                </span>
                , which has a fully functional
                <span className="text-[#65e1e3] opacity-99"> Cart-System</span>,
                you are able to
                <span className="text-[#65e1e3] opacity-99">
                  {" "}
                  create an Account and Login
                </span>
                ,{" "}
                <span className="text-[#65e1e3] opacity-99">
                  {" "}
                  pay your order
                </span>
                , and as an{" "}
                <span className="text-[#65e1e3] opacity-99"> Admin</span> you
                have complete Control through{" "}
                <span className="text-[#65e1e3] opacity-99"> Admin-Pages</span>,
                which makes it easy to create and delete products and edit
                orders and user.
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
                <p className="text-white sans text-4xl">Tech For Today</p>
              </div>
              <div className="mx-auto w-[80%]">
                <p className="tracking-widest text-white opacity-70">
                  My biggest Project so far: A complete functional
                  E-Commerce-Site, which has a fully functional Cart-System, you
                  are able to create an Account and Login, pay your order, and
                  as an Admin you have complete Control through Admin-Pages,
                  which makes it easy to create and delete products and edit
                  orders and user.
                </p>
              </div>
              <div className="max-w-[80%] h-[200px] mx-auto w-[80%] flex flex-col  justify-around">
                <div className="w-full h-[50px] grid grid-cols-4 gap-2 grid-rows-2">
                  <div className="w-fit shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                    <p className=" text-[#65e1e3]  opacity-60  font-fira ">
                      React
                    </p>
                  </div>
                  <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                    <p className=" text-[#65e1e3] opacity-60 font-fira ">
                      Redux
                    </p>
                  </div>
                  <div className="w-fit align-center  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                    <p className=" text-[#65e1e3] opacity-60 font-fira ">
                      MongoDB
                    </p>
                  </div>
                  <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                    <p className=" text-[#65e1e3] opacity-60  font-fira ">
                      NodeJS
                    </p>
                  </div>
                  <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                    <p className=" text-[#65e1e3] opacity-60">Figma</p>
                  </div>
                  <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                    <p className=" text-[#65e1e3] opacity-60 font-fira ">
                      StyledC.
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
            <div className="shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
              <img className="w-10 mx-auto" src={ReactJS} />
              <p className="text-white opacity-60  group-hover:block">
                ReactJS
              </p>
            </div>
            <div className="shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
              <img className="w-10 mx-auto" src={Redux} />
              <p className="text-white opacity-60 group-hover:block">Redux</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
              <img className="w-10 mx-auto" src={Figma} />
              <p className="text-white opacity-60 group-hover:block">Figma</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
              <img className="w-10 mx-auto" src={MongoDB} />
              <p className="text-white opacity-60 group-hover:block">MongoDB</p>
            </div>
            <div className="shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
              <img className="w-10 mx-auto" src={NodeJS} />
              <p className="text-white opacity-60 group-hover:block">NodeJS</p>
            </div>
          </div>
        </div>
        <div className="w-full h-[200px] hidden md:flex justify-center items-center text-center">
          <div className="border-t w-[25%] h-[50%] flex justify-around items-center mr-0">
            <AiOutlineGithub className="text-4xl text-white hover:scale-[1.4] duration-300" />

            <AiOutlineLink className="text-4xl text-white hover:scale-[1.4] duration-300" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work;
