import React from "react";
import EWebsite from "./../../assets/ecommercewebsite.png";
import ReactJS from "./../../assets/react.png";
import MongoDB from "./../../assets/mongodb.png";
import NodeJS from "./../../assets/nodejs.png";
import Figma from "./../../assets/figma.png";
import Redux from "../../assets/redux.png";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";

const Ecommerce = () => {
  return (
    <>
      <div className="flex-col md:flex-row md:flex md:pb-10 md:pt-20  flex ">
        <div className="w-[60%] hidden md:block">
          <a target="_blank" href="https://techfortoday.herokuapp.com/" className="color">
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
            <p className="text-white sans text-4xl border-b">Tech For Today</p>
          </div>
          <div className="bg-[#0c405e] w-[600px] h-[150px] right-0 top-40 absolute hidden shadow-md text-center md:flex justify-content align-center">
            <p className="w-fit h-fit tracking-widest text-white opacity-70 font-thin mx-auto my-auto ">
              My biggest Project so far: A complete functional
              <span className="text-[#65e1e3] opacity-99">
                {" "}
                E-Commerce-Site
              </span>
              , which includes a fully functional
              <span className="text-[#65e1e3] opacity-99"> Cart-System</span>, a
              ready-to-sure
              <span className="text-[#65e1e3] opacity-99">
                {" "}
                user login and account
              </span>
              , and a
              <span className="text-[#65e1e3] opacity-99">
                {" "}
                pay system for each order.
              </span>
              You have complete control through
              <span className="text-[#65e1e3] opacity-99">
                {" "}
                Admin pages
              </span>{" "}
              making it easy to
              <span className="text-[#65e1e3] opacity-99">
                {" "}
                create and delete products, edit orders, and track user
                interaction.
              </span>
              This Site still needs some work, especially when it comes to
              responsive design.
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
                My biggest Project so far: A complete functional E-Commerce-Site
                , which includes a fully functional Cart-System ready-to-sure
                user login and account , and a pay system for each order. You
                have complete control through Admin pages making it easy to
                create and delete products, edit orders, and track user
                interaction. This Site still needs some work, especially when it
                comes to responsive design.
              </p>
            </div>
            <div className="max-w-[80%] h-[200px] mx-auto w-[80%] flex flex-col  justify-around">
              <div className="w-full max-h-[50px] grid grid-cols-4 gap-2 grid-rows-2">
                <div className="w-fit shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[#65e1e3]  text-[12px] sm:text-base opacity-60  font-fira ">
                    React
                  </p>
                </div>
                <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[#65e1e3] text-[12px] sm:text-base opacity-60 font-fira ">Redux</p>
                </div>
                <div className="w-fit align-center  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[#65e1e3] text-[12px] sm:text-base opacity-60 font-fira ">
                    MongoDB
                  </p>
                </div>
                <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[#65e1e3] text-[12px] sm:text-base opacity-60  font-fira ">
                    NodeJS
                  </p>
                </div>
                <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[#65e1e3] text-[12px] sm:text-base opacity-60">Figma</p>
                </div>
                <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[#65e1e3] text-[12px] sm:text-base opacity-60 font-fira ">
                    StyledC.
                  </p>
                </div>
              </div>
              <div className="flex w-[80%] h-[50px] mx-auto justify-around">
                <a target="_blank" href="https://github.com/luchh94/E---Commerce-Site---Shop">
                  {" "}
                  <AiOutlineGithub className="text-4xl text-white" />
                </a>

                <a target="_blank" href="https://techfortoday.herokuapp.com/">
                  {" "}
                  <AiOutlineLink className="text-4xl text-white" />
                </a>
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
            <p className="text-white opacity-60  group-hover:block">ReactJS</p>
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
          <a target="_blank" href="https://github.com/luchh94/E---Commerce-Site---Shop">
            <AiOutlineGithub className="text-4xl text-white hover:scale-[1.4] duration-300" />
          </a>

          <a target="_blank" href="https://techfortoday.herokuapp.com/">
            <AiOutlineLink className="text-4xl text-white hover:scale-[1.4] duration-300" />
          </a>
        </div>
      </div>
    </>
  );
};

export default Ecommerce;
