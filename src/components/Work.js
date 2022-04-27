import React from "react";
import Ecommerce from "./Work/Ecommerce";
import OpenseaClone from "./Work/OpenseaClone";

const Work = () => {
  return (
    <div name="work" className="bg-[#2f4454] w-full h-full">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center">
        <div className="flex align-center h-[60px] border-b">
          <p className="text-white sans text-4xl">
            <span className="text-2xl mr-3 text-[#65e1e3]">03.</span>My Work
          </p>
        </div>
        <div className="flex flex-col">
          <Ecommerce />
          <OpenseaClone />
        </div>
      </div>
    </div>
  );
};

export default Work;
