import React from "react";
import { Outlet } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import Navbar from "../components/Navbar/Navbar";

function Layout() {
  return (
    <>
      <ToastContainer />

      <Navbar />

      <Outlet />
    </>
  );
}

export default Layout;
