import React from "react";
import Sanity from "./../../../src/assets/sanity.png";
import NextJS from "../../assets/nextjs.png";
import ThirdWeb from "./../../assets/thirdweb.png";
import { AiOutlineGithub, AiOutlineLink } from "react-icons/ai";
import Tailwind from "../../assets/tailwind.png";
import OpenSeaClone from "../../assets/openseaclone.png";

const OpenseaClone = () => {
  return (
    <>
      <div className="flex-col md:flex-row md:flex md:pb-10 md:pt-20  flex ">
        <div className="w-[60%] hidden md:block">
          <a target="_blank"
            href="https://opensea-clone-e5rtgw4wg-luchh94.vercel.app/"
            className="color"
          >
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
            <p className="text-right text-[#EA738DFF] font-fira  tracking-widest">
              Project
            </p>
            <p className="text-[#4c356c] sans text-4xl border-b border-[#4c356c]">OpenSea Clone</p>
          </div>
          <div className="bg-[white] w-[600px] h-[200px] right-0 top-40 absolute hidden shadow-md text-center md:flex justify-content align-center">
            <p className="w-fit h-fit tracking-widest text-[#4c356c] opacity-70 font-thin mx-auto my-auto ">
              I built this project to deepen my knowledge of the ThirdWeb, which
              I believe has a promising future. I used a tutorial for guidance,
              and the aim was less to build this site from scratch, but more to
              understand how to successfully implement Thirdweb and dynamically
              load the content of the Blockchain on an active site. You need
              MetaMask to visit this Site so check out the GitRep for Pictures!
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
              <p className="text-[#4c356c] sans text-4xl">OverSea Clone</p>
            </div>
            <div className="mx-auto  w-[80%]">
              <p className="tracking-widest text-[#4c356c] opacity-70">
                I built this project to deepen my knowledge of the ThirdWeb,
                which I believe has a promising future. I used a tutorial for
                guidance, and the aim was less to build this site from scratch,
                but more to understand how to successfully implement Thirdweb
                and dynamically load the content of the Blockchain on an active
                site. You need MetaMask to visit this Site so check out the
                GitRep for Pictures!
              </p>
            </div>
            <div className="max-w-[80%] h-[200px] mx-auto w-[80%] flex flex-col  justify-around">
              <div className="w-full h-[50px] grid grid-cols-4 gap-2 grid-rows-2">
                <div className="w-fit shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[white] bg-[#4c356c] text-[12px] sm:text-base  opacity-60  font-fira ">
                    NextJS
                  </p>
                </div>
                <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[white] bg-[#4c356c] text-[12px] sm:text-base opacity-60 font-fira ">
                    Tailwind
                  </p>
                </div>
                <div className="w-fit align-center  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[white] bg-[#4c356c] text-[12px] sm:text-base opacity-60 font-fira ">
                    Sanity
                  </p>
                </div>
                <div className="w-fit  shadow-md hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
                  <p className=" text-[white] bg-[#4c356c] text-[12px] sm:text-base opacity-60  font-fira ">
                    ThirdWeb
                  </p>
                </div>
              </div>
              <div className="flex w-[80%] h-[50px] mx-auto justify-around">
                <a target="_blank" href=" https://github.com/luchh94/opensea-clone">
                  <AiOutlineGithub className="text-4xl text-[#4c356c]" />
                </a>

                <a target="_blank" href="https://opensea-clone-e5rtgw4wg-luchh94.vercel.app/">
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
            <img className="w-10 mx-auto" src={NextJS} />
            <p className="text-[white] opacity-60  group-hover:block">NextJS</p>
          </div>
          <div className="shadow-md bg-[#4c356c] hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group flex flex-col justify-around">
            <img className="w-10 mx-auto" src={Sanity} />
            <p className="text-[white] opacity-60 group-hover:block">Sanity</p>
          </div>
          <div className="shadow-md bg-[#4c356c] hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group flex flex-col justify-around">
            <img className="w-10 mx-auto" src={Tailwind} />
            <p className="text-[white] opacity-60 group-hover:block">Tailwind</p>
          </div>
          <div className="shadow-md bg-[#4c356c] hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group flex flex-col justify-around">
            <img className="w-10 mx-auto" src={ThirdWeb} />
            <p className="text-[white] opacity-60 group-hover:block">ThirdWeb</p>
          </div>
        </div>
      </div>
      <div className="w-full h-[200px] hidden md:flex justify-center items-center text-center">
        <div className="border-t border-[#4c356c] w-[25%] h-[50%] flex justify-around items-center mr-0">
          <a target="_blank" href="https://github.com/luchh94/opensea-clone">
            <AiOutlineGithub className="text-4xl text-[#4c356c] hover:scale-[1.4] duration-300" />
          </a>

          <a target="_blank" href="https://opensea-clone-e5rtgw4wg-luchh94.vercel.app/">
            {" "}
            <AiOutlineLink className="text-4xl text-[#4c356c] hover:scale-[1.4] duration-300" />
          </a>
        </div>
      </div>
    </>
  );
};

export default OpenseaClone;
