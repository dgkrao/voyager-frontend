import React from "react";
import { Outlet, Link } from "react-router-dom";

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-black/30 border-b border-white/10">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

          <Link to="/" className="text-2xl font-bold tracking-wide">
            VO<span className="text-indigo-400">YAGER</span>
          </Link>

          <div className="hidden md:flex gap-8 text-sm text-white/80">
            <Link to="/" className="hover:text-white transition">Home</Link>
            <Link to="/login" className="hover:text-white transition">Login</Link>
            <Link to="/register" className="hover:text-white transition">Register</Link>
          </div>

          <Link
            to="/login"
            className="px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600 transition text-sm"
          >
            Explore
          </Link>
        </div>
      </nav>

      {/* PAGE CONTENT */}
      <main className="pt-20">
        <Outlet />
      </main>

    </div>
  );
};

export default MainLayout;
