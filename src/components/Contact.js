import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full bg-[#2f4454] h-screen">
      <div className="max-w-[1000px] mx-auto p-4 flex flex-col w-full h-full">
        <div className="flex align-center h-[60px] border-b">
          <p className="text-white sans text-4xl">
            <span className="text-2xl mr-3 text-[#65e1e3]">04.</span>Contact Me!
          </p>
        </div>
        <div className="p-8">
          <p className="text-white text-2xl">
            {" "}
            // Fill in the Form to send me an Email!
          </p>
          <p className="text-2xl font-fira text-[#65e1e3]">
            {" "}
            lucashoffmann94@gmx.de
          </p>
        </div>
        <form
          method="POST"
          action="https://getform.io/f/636de1a7-ed92-4c08-b9f7-6ca5cf819960"
          className="flex flex-col items-align justify-center max-w-[full] h-full p-8"
        >
          <input
            className="w-[70%] h-[40px] my-2 mx-auto"
            type="text"
            name="name"
            placeholder="Type in your name..."
          />
          <input
            className="w-[70%] h-[40px] my-2 mx-auto"
            type="email"
            name="email"
            placeholder="Type in your email..."
          />
          <textarea
            className="w-[70%] my-2 mx-auto"
            type="text"
            name="message"
            rows="10"
            placeholder="Type in your name..."
          ></textarea>
          <button className="border w-[70%] text-[#65e1e3] font-fira tracking-widest p-3 mx-auto hover:scale-[1.05] duration-300">
            Hello!
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
