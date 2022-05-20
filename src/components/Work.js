import React from "react";
import AppleClone from "./Work/AppleClone";
import Ecommerce from "./Work/Ecommerce";
import OpenseaClone from "./Work/OpenseaClone";
import Portfolio from "./Work/Portfolio";
import FitnessWebsite from "./Work/FitnessWebsite";

const Work = () => {
  return (
    <div name="work" className="bg-[#a2b9ddc8] w-full h-full">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center">
        <div className="flex align-center h-[60px] border-b border-[#4c356c]">
          <p className="text-[#4c356c] sans text-4xl">
            <span className="text-2xl mr-3 text-[#EA738DFF]">03.</span>My Work
          </p>
        </div>
        <div className="flex flex-col">
          <FitnessWebsite />
          <Ecommerce />
          <AppleClone />
          <OpenseaClone />
          <Portfolio />
        </div>
      </div>
    </div>
  );
};

export default Work;
