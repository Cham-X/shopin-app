import React from "react";
import Footer from "./Footer";
import Navbar from "./mainNav/Navbar";
import Sidebar from "./mainNav/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
      <Footer/>
    </>
  );
};

export default Layout;
