import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";

const Sidenav = () => {
  return (
    <aside className="w-64 h-screen bg-[#121111] text-white flex flex-col justify-between py-8 px-6">
      <div>
        <h1 className="text-2xl font-bold mb-24 font-ibm-plex-sans">
          Supreet.
        </h1>
        <nav className="space-y-5">
          {["HOME", "ABOUT", "EXPERENCIES", "WORKS", "CONTACT"].map((item) => (
            <Link
              key={item}
              href={`/${
                item.toLowerCase() === "home" ? "" : item.toLowerCase()
              }`}
              className={`block text-lg font-normal tracking-wide hover:text-yellow-400 transition ${
                item === "HOME" ? "text-white font-extrabold relative" : ""
              }`}
            >
              {item}
              {item === "HOME" && (
                <span className="absolute left-0 bottom-[-4px] w-4 h-[2px] bg-yellow-400 animate-pulse" />
              )}
            </Link>
          ))}
        </nav>
      </div>

      <div className="flex flex-col items-start space-y-6">
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
        <p className="text-sm text-gray-400 leading-4">
          Copyright ©2025 Supreet <br />
          Patel. All right reserved.
        </p>
      </div>
    </aside>
  );
};

export default Sidenav;
