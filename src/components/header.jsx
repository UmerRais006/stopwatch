import React from "react";

function Header() {
  return (
    <div
      className="rounded-xl border border-black font-poppins text-black w-full fixed top-0 left-0 text-center 
                hover:text-white  transition duration-1000 shadow-xl"
 
    >
      <h1 className="font-bold text-center text-xl p-2 sm:p-3 sm:text-2xl md:p-4 md:text-3xl">
        Time Utility Web App
      </h1>
      
    </div>
  );
}

export default Header;
