"use client";
import { FaInstagram, FaGithub, FaLinkedinIn } from "react-icons/fa";
import Link from "next/link";
import { usePathname } from "next/navigation";

const Sidenav = () => {
  const pathname = usePathname();
  const navitems = [
    {
      title: "HOME",
      path: "/",
    },
    {
      title: "ABOUT",
      path: "/about",
    },
    {
      title: "EXPERIENCES",
      path: "/experiences",
    },
    {
      title: "PROJECTS",
      path: "/projects",
    },
    {
      title: "CONTACT",
      path: "/contact",
    },
  ];
  return (
    <aside className="fixed top-0 left-0 w-64 h-screen bg-[#121111] text-white flex flex-col justify-between py-8 px-6">
      <div>
        <Link href="/">
          <h1 className="text-2xl font-bold mb-24 font-ibm-plex-sans">
            Supreet.
          </h1>
        </Link>
        <nav className="space-y-4">
          {navitems.map(({ title, path }) => {
            const isActive = pathname === path;
            return (
              <Link
                key={title}
                href={path}
                className={`relative block text-lg tracking-wide transition rounded-xl px-4 py-2 w-full text-left
              ${
                isActive
                  ? "bg-gradient-to-r from-[#FFB147] via-[#FF6C63] to-[#B86ADF] text-white font-normal"
                  : "text-white hover:text-yellow-400"
              }`}
              >
                {isActive && (
                  <span className="absolute inset-0 rounded-xl p-[2px] from-[#FFB147] via-[#FF6C63] to-[#B86ADF] z-[-1]" />
                )}
                <span className="relative z-10">{title}</span>
              </Link>
            );
          })}
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
          Patel. All rights reserved.
        </p>
      </div>
    </aside>
  );
};

export default Sidenav;
