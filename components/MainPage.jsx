import React from "react";
import { FaGithub, FaInstagram, FaLinkedinIn } from "react-icons/fa";
import { MdArrowOutward, MdLocalPhone, MdOutlineEmail } from "react-icons/md";

const MainPage = () => {
  return (
    <section className="min-h-screen flex items-center justify-between px-10 ml-80 py-20 bg-white">
      <div className="max-w-xl space-y-6 mr-40">
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

        <button className="px-5 py-5 bg-black text-white flex items-center gap-2 hover:bg-gray-900 transition">
          Let's talk with me
          <span className="inline-block bg-gradient-to-tr from-[#FFB147] via-[#FF6C63] to-[#B86ADF]">
            <MdArrowOutward size={20} />
          </span>
        </button>

        <div className="flex gap-5 items-center text-sm text-gray-800">
          <div className="flex items-center gap-2">
            <span className="bg-gray-200 text-black p-2 rounded-full">
              <MdLocalPhone size={16} />
            </span>
            <span className="italic">+91 768-387-3206</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="bg-gray-200 text-black p-2 rounded-full">
              <MdOutlineEmail size={20} />
            </span>
            <span className="italic">supreetpatel2004@gmail.com</span>
          </div>
        </div>
      </div>

      <div className="relative ml-20">
        <div className="w-[500px] h-[500px] rounded-full bg-gradient-to-tr from-[#FFB147] via-[#FF6C63] to-[#B86ADF] flex items-center justify-center overflow-hidden">
          <div className="w-[95%] h-[95%] bg-white opacity-20 transform rotate-45" />
        </div>
      </div>
      <div className="flex flex-col items-start space-y-6 ml-40">
        <div className="flex flex-col gap-3">
          <a
            href="#"
            className="border-2 border-gray-200 text-black p-2 rounded-full -rotate-90"
          >
            <FaGithub size={20} />
          </a>
          <a
            href="#"
            className="border-2 border-gray-200 text-black p-2 rounded-full -rotate-90"
          >
            <FaLinkedinIn size={20} />
          </a>
          <a
            href="#"
            className="border-2 border-gray-200 text-black p-2 rounded-full -rotate-90"
          >
            <FaInstagram size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};

export default MainPage;
