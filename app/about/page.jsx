import Sidenav from "@/components/SideNav";
import React from "react";
import {
  MdArrowOutward,
  MdLocalPhone,
  MdOutlineEmail,
  MdOutlineLocationOn,
} from "react-icons/md";
import { PiUserSquare } from "react-icons/pi";

const AboutUsPage = () => {
  return (
    <>
      <Sidenav />
      <section className="min-h-screen flex items-center justify-between px-10 ml-80 py-20 bg-white">
        <div className="w-1/2 ml-10">
          <div className="mb-5">
            <p className="italic text-xl font-medium -ml-10">
              Nice to meet you!
            </p>
            <h1 className="text-5xl font-bold">WELCOME TO...</h1>
          </div>
          <div className="w-60 h-60 mb-5 rounded-full bg-gradient-to-r from-orange-400 via-pink-500 to-purple-500 ml-10" />
          <div className="ml-10">
            <h2 className="text-4xl font-bold gradient-title mb-2">
              SUPREET PATEL
            </h2>
            <p className="text-xl italic font-semibold mb-5 -ml-14">
              Full-Stack Web Developer{" "}
              <span className="font-normal italic">based in</span>{" "}
              <span className="italic">Odisha</span>
            </p>
          </div>
          <a
            href="/cv.pdf"
            download
            className="text-base flex ml-[82px] gap-2 p-3 text-black font-semibold bg-gray-200 rounded-md transition duration-300 hover:bg-gray-300 w-fit"
          >
            Download CV{" "}
            <span className="inline-block bg-gradient-to-tr from-[#FFB147] via-[#FF6C63] to-[#B86ADF] ml-1">
              <MdArrowOutward className="text-white" size={20} />
            </span>
          </a>
        </div>
        <div className="w-1/2 mt-10 md:mt-0 space-y-6">
          <div className="space-y-3 text-lg grid grid-cols-2 gap-4 italic">
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 text-black p-2 rounded-full">
                <MdLocalPhone size={16} />
              </span>
              <span className="font-semibold">+91 768-387-3206</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 text-black p-2 rounded-full">
                <PiUserSquare size={20} />
              </span>
              <span className="font-semibold">21 yrs</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 text-black p-2 rounded-full">
                <MdOutlineEmail size={20} />
              </span>
              <span className="font-semibold">supreetpatel2004@gmail.com</span>
            </div>
            <div className="flex items-center space-x-2">
              <span className="bg-gray-200 text-black p-2 rounded-full">
                <MdOutlineLocationOn size={20} />
              </span>
              <span className="font-semibold">Odisha, India</span>
            </div>
          </div>
          <div className="flex gap-10 border-t pt-6">
            <div>
              <p className="italic text-base">
                Hi, I'm{" "}
                <span className="gradient-title">Supreet Kumar Patel</span>. I'm
                a full-stack web developer, and I'm passionate about creating
                elegant and responsive web experiences. With over 3 years of
                experience in web development, I have a strong foundation in
                Next.js, Tailwind CSS, and modern UI libraries, allowing me to
                craft intuitive interfaces that seamlessly blend design and
                functionality. I'm also expanding my expertise in full-stack
                development and data science to build more impactful, end-to-end
                solutions.
              </p>
            </div>
          </div>
          <div className="bg-black text-white p-6 rounded-md text-lg italic w-fit">
            <p>
              <span className="text-3xl text-white mr-1">“</span>
              In a world full of static, I strive to build with motion and
              meaning.
              <span className="text-3xl text-white ml-1">”</span>
            </p>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutUsPage;
