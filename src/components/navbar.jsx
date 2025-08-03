import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navLinks = [
    { name: "Clock", path: "/Clock" },
    { name: "Timer", path: "/Timer" },
    { name: "Stopwatch", path: "/Stopwatch" },
    { name: "Alarm", path: "/Alarm" },
  ];

  return (
    <div>
      <nav className="shadow-2xl w-fit py-4 text-xs mt-[3.3rem] sm:mt-[4.3rem]">
        <ul className="flex flex-col text-left space-y-4 font-bold font-poppins sm:flex-row sm:space-x-8 sm:justify-center sm:w-screen sm:space-y-0 md:text-sm">
          {navLinks.map((link) => (
            <li key={link.name}>
              <Link
                to={link.path}
                className="px-3 py-1 rounded text-black transition-colors hover:text-white transition duration-1000"
              >
                {link.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
