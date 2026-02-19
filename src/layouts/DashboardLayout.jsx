import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const DashboardLayout = () => {
  return (
    <>
      <Navbar variant="app" />
      <main className="pt-20">
        <Outlet />
      </main>
    </>
  );
};

export default DashboardLayout;
