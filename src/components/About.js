import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full bg-[#2f4454] h-screen">
      <div className="max-w-[1000px] mx-auto h-full w-full flex flex-col justify-center p-4">
        <div className="flex align-center h-[60px] border-b">
          <p className="text-white sans text-4xl">
            {" "}
            <span className="text-2xl mr-3 text-[#65e1e3]">01.</span>About
          </p>
        </div>
        <div className="mt-10">
          <div>
            <p className="max-w-[500px] text-white/[0.8]">
              <p className="sans tracking-widest">
                Hey! My name is Lucas and I like being creative on the Internet.
              </p>
              <p className="sans my-10 tracking-widest text-white/[0.6]">
                Besides my passion for doing sports I grew up with a Computer
                and had all different kind of interests from editing Videos to
                making Music to... creating
                <span className="text-[#65e1e3]"> Web-Applications</span>!
              </p>
              <p className="sans tracking-widest text-white/[0.6]">
                For me life means learning and therefore I taught myself many
                different kind of skills to today. In my opinion you can learn
                whatver you want, you only have to no where to look for.
              </p>
              <p className="sans-italic tracking-widest text-white/[0.6] mt-20">
                There is nothing you cannot be, there is nothing you cannot do.
                There is nothing you cannot have.
              </p>
            </p>
          </div>
          <div></div>
        </div>
      </div>
    </div>
  );
};

export default About;
