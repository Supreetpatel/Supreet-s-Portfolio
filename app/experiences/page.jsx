import Sidenav from "@/components/SideNav";
import React from "react";
import { MdArrowOutward } from "react-icons/md";

const ExperiencePage = () => {
  return (
    <>
      <Sidenav />
      <section className="min-h-screen flex items-center justify-between px-10 ml-80 py-20 bg-white">
        <div className="flex-1">
          <p className="italic text-md mb-2">Experience</p>
          <h1 className="text-5xl font-bold mb-20">MY EXPERIENCE</h1>
          <p className="text-lg mb-10">
            Hello there! My name is Supreet Kumar Patel. <br />I am a web
            developer and data science, and I'm very passionate developer <br />
            with strong foundation.
          </p>
          <button className="px-5 py-5 bg-black text-white flex items-center gap-2 hover:bg-gray-900 transition">
            Download my resume
            <span className="inline-block bg-gradient-to-tr from-[#FFB147] via-[#FF6C63] to-[#B86ADF]">
              <MdArrowOutward size={20} />
            </span>
          </button>
        </div>
        <div className="flex-1 space-y-10">
          <div>
            <div className="text-sm italic  mb-1">2024 - Present</div>
            <div className="text-lg font-bold">FRONTEND DEVELOPER</div>
            <div className="text-sm">-Rolling Thunder</div>
            <hr className="mt-2 border-white/30" />
          </div>

          {/* Experience 2 */}
          <div>
            <div className="text-sm italic mb-1">2025 - Present</div>
            <div className="text-lg font-bold">WEB DEVELOPER</div>
            <div className="text-sm">-Locost Accessories</div>
            <hr className="mt-2 border-white/30" />
          </div>

          {/* Experience 3 */}
          <div>
            <div className="text-sm italic mb-1">2025 - Present</div>
            <div className="text-lg font-bold">JUNIOR UI/UX DESIGNER</div>
            <div className="text-sm">-Sagebrush</div>
            <hr className="mt-2 border-white/30" />
          </div>
        </div>
      </section>
    </>
  );
};

export default ExperiencePage;
