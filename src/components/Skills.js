import React from "react";
import HTML from "./../assets/html.png";
import CSS from "./../assets/css.png";
import JavaScript from "./../assets/javascript.png";
import GitHub from "./../assets/github.png";
import ReactJS from "./../assets/react.png";
import MongoDB from "./../assets/mongodb.png";
import NodeJS from "./../assets/nodejs.png";
import Figma from "./../assets/figma.png";
import AdobeAE from "./../assets/adobeae.png";
import Photoshop from "./../assets/adobeps.png";
import Redux from "../assets/redux.png";
import TailwindCSS from "./../assets/tailwindcss.svg";

const Skills = () => {
  return (
    <div name="skills" className="bg-[#a2b9dd7e] h-[70em] md:h-[50em]">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full justify-center">
        <div className="flex align-center h-[60px] border-b border-[#4c356c]">
          <p className="text-[#4c356c] sans text-4xl">
            <span className="text-2xl mr-3 text-[#EA738DFF]">02.</span>Skills
          </p>
        </div>
        <div className="py-4">
          <p className="text-[#4c356c] sans text-xl tracking-widest text-[#4c356c]/[0.8]">
            // These are the technologies I worked with
          </p>
        </div>
        <div className="w-full grid grid-cols-2 sm:grid-cols-4 gap-4 text-center py-8">
          <div className="shadow-md w-[75%] h-[110px] bg-[#4c356c] hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
            <img className="w-[5em] mx-auto" src={HTML} alt="HTML Icon" />
            <p className="hidden group-hover:block text-[white]/[0.6]">Html</p>
          </div>
          <div className="h-[110px] shadow-md w-[75%] bg-[#4c356c] hover:scale-110 duration-300 opacity-60  hover:opacity-100 saturate-5 hover:saturate-100 group">
            <img className="w-[5em] mx-auto" src={CSS} alt="CSS ICON" />
            <p className="text-[white] opacity-60 hidden group-hover:block cursor-default">
              Css
            </p>
          </div>
          <div className="shadow-md w-[75%] h-[110px] bg-[#4c356c] hover:scale-110 duration-300 opacity-60  hover:opacity-100 saturate-5 hover:saturate-100 group">
            <img
              className="w-20 mx-auto"
              src={JavaScript}
              alt="JAVASCRIPT ICON"
            />
            <p className="text-[white]/[0.6] hidden group-hover:block cursor-default">
              JavaScript
            </p>
          </div>
          <div className="shadow-md w-[75%] h-[110px] bg-[#4c356c] hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
            <img className="w-[5em] mx-auto" src={GitHub} alt="GITHUB ICON" />
            <p className="text-[white]/[0.6] hidden group-hover:block cursor-default">
              GitHub
            </p>
          </div>
          <div className="h-[110px] shadow-md w-[75%] bg-[#4c356c] hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
            <img className="w-[5em] mx-auto" src={ReactJS} alt="REACT JS ICON" />
            <p className="text-[white]/[0.6] hidden group-hover:block cursor-default">React</p>
          </div>
          <div className="shadow-md w-[75%] h-[110px] bg-[#4c356c] hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
            <img className="w-[5em] mx-auto" src={Redux} alt="REDUX ICON" />
            <p className="text-[white] opacity-60 hidden group-hover:block cursor-default">
              Redux
            </p>
          </div>
          <div className="shadow-md w-[75%] h-[110px] bg-[#4c356c] hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
            <img className="w-[5em] mx-auto" src={MongoDB} alt="MONGODB ICON" />
            <p className="text-[white] opacity-60 hidden group-hover:block cursor-default">
              MongoDB
            </p>
          </div>
          <div className="shadow-md w-[75%] h-[110px] bg-[#4c356c] hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
            <img className="w-[5em] mx-auto" src={NodeJS} alt="NODEJS ICON" />
            <p className="text-[white] hidden opacity-60 group-hover:block cursor-default">
              NodeJs
            </p>
          </div>

          <div className="shadow-md w-[75%] h-[110px] bg-[#4c356c]  hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
            <img
              className="w-20 mx-auto"
              src={TailwindCSS}
              alt="TAILWIND ICON"
            />
            <p className="text-[white] opacity-60 hidden group-hover:block cursor-default">
              Tailwind
            </p>
          </div>
          <div className="shadow-md w-[75%] h-[110px] bg-[#4c356c] hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
            <img
              className="w-20 mx-auto"
              src={Photoshop}
              alt="PHOTOSHOP ICON"
            />
            <p className="text-[white] opacity-60 hidden group-hover:block cursor-default">
              Photoshop
            </p>
          </div>
          <div className="shadow-md w-[75%] h-[110px] bg-[#4c356c] hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
            <img className="w-[5em] mx-auto" src={Figma} alt="Figma ICON" />
            <p className="text-[white] opacity-60 hidden group-hover:block cursor-default">
              Figma
            </p>
          </div>
          <div className="shadow-md w-[75%] h-[110px] bg-[#4c356c] hover:scale-110 duration-300 opacity-60 hover:opacity-100 saturate-5 hover:saturate-100 group">
            <img className="w-[5em] mx-auto" src={AdobeAE} alt="ADOBEAE ICON" />
            <p className="text-[white] opacity-60 hidden group-hover:block cursor-default">
              After Effects
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
