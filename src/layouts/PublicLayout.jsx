import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PublicLayout = () => {
  return (
    <div className="bg-black min-h-screen">
      <Navbar />
      <main className="relative">
        <Outlet />
      </main>
    </div>
  );
};

export default PublicLayout;
