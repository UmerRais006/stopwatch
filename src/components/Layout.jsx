import React from "react";
import Navbar from "./navbar";
import Header from "./header";
import Footer from "./footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <div className="bg-[rgb(201,94,86)] ">
        <Header />
        <Navbar />
        <Outlet />
        <Footer />
      </div>
    </div>
  );
};

export default Layout;
