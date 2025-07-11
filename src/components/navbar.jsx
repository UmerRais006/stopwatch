import React from "react";
import { Link } from 'react-router-dom';
import Header from "./header";

const Navbar = () => {
  return (
    <div>
    <nav className="shadow-2xl w-fit py-4 text-xs mt-[3.3rem] sm:mt-[4.3rem] ">
      <ul className="flex flex-col  text-left space-y-4  font-bold font-poppins  sm:flex-row sm:space-x-8 sm:justify-center sm:w-screen sm:space-y-0 md:text-sm ">
        <li>
          <Link 
            to="/Clock" 
            className="px-3 py-1 rounded text-black transition-colors hover:text-white transition duration-1000"
          >
            Clock
          </Link>
        </li>
        <li>
          <Link 
            to="/Timer" 
            className="px-3 py-1 rounded text-black transition-colors hover:text-white transition duration-1000"
          >
            Timer
          </Link>
        </li>
        <li>
          <Link 
            to="/Stopwatch" 
            className="px-3 py-1 rounded text-black transition-colors hover:text-white transition duration-1000"
          >
            Stopwatch
          </Link>
        </li>
        <li>
          <Link 
            to="/Alarm" 
            className="px-3 py-1 rounded text-black transition-colors hover:text-white transition duration-1000"
          >
            Alarm
          </Link>
        </li>
      </ul>
    </nav>
    </div>
  );
};

export default Navbar;
