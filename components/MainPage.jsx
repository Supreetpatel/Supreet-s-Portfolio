import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdArrowOutward } from "react-icons/md";

const MainPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-between px-10 ml-20 py-20 bg-white">
      <div className="max-w-xl space-y-6 mr-36">
        <h1 className="text-8xl leading-tight">
          <span className="text-black font-bold italic">
            SUPREET <br />
            PATEL...
          </span>
        </h1>
        <p className="text-3xl text-black">
          <span className="font-bold italic">
            Full-Stack Web Developer
            <br />
          </span>{" "}
          <span className="font-normal">based in </span>
          <span className="font-bold italic">Odisha</span>
        </p>

        <button className="px-5 py-3 bg-black text-white flex items-center gap-2 hover:bg-gray-900 transition">
          Let's talk with me
          <span className="inline-block bg-gradient-to-tr from-[#FFB147] via-[#FF6C63] to-[#B86ADF]">
            <MdArrowOutward size={20} />
          </span>
        </button>

        <div className="flex gap-6 items-center text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <span></span>
            <span className="italic">+91 768-387-3206</span>
          </div>
          <div className="flex items-center gap-2">
            <span></span>
            <span className="italic">supreetpatel2004@gmail.com</span>
          </div>
        </div>
      </div>
      <div className="relative">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-orange-400 via-pink-300 to-purple-600 flex items-center justify-center overflow-hidden">
          <div className="w-[95%] h-[95%] bg-white opacity-20 transform rotate-45" />
        </div>
      </div>
      <div className="flex flex-col items-start space-y-6 ml-48">
        <div className="flex flex-col gap-3">
          <a href="#" className="bg-white text-black p-2 rounded-full">
            <FaGithub size={16} />
          </a>
          <a href="#" className="bg-white text-black p-2 rounded-full">
            <FaLinkedinIn size={16} />
          </a>
          <a href="#" className="bg-white text-black p-2 rounded-full">
            <FaInstagram size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
