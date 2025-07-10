import React from "react";
import { Link } from 'react-router-dom';
import Header from "./header";

const Navbar = () => {
  return (
    <div>
    <nav className="border-black mt-[-10.4rem] border-2 px-6 py-4 shadow-md  width-screen rounded-xl border border-black ">
      <ul className="flex space-x-8 justify-center items-center">
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
