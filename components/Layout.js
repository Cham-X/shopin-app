import React from "react";
import Navbar from "./mainNav/Navbar";
import Sidebar from "./mainNav/Sidebar";

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Sidebar />
      <main>{children}</main>
    </>
  );
};

export default Layout;
