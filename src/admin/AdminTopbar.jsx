import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import { logout } from "../utils/auth";

const titleMap = {
  "/admin/dashboard": "Dashboard",
  "/admin/destinations": "Manage Destinations",
  "/admin/packages": "Manage Packages",
  "/admin/bookings": "Manage Bookings",
  "/admin/blog": "Manage Blog",
  "/admin/offers": "Manage Offers",
};

const AdminTopbar = () => {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  const handleLogout = () => {
    logout();
    navigate("/login");
  };

  return (
    <header className="h-16 bg-[#0b0f19] border-b border-white/10 flex items-center justify-between px-8">
      
      {/* PAGE TITLE */}
      <div>
        <h1 className="text-lg font-semibold text-white tracking-wide">
          {titleMap[pathname] || "Admin Panel"}
        </h1>
        <p className="text-xs text-white/40">
          Voyager internal management
        </p>
      </div>

      {/* RIGHT */}
      <div className="flex items-center gap-6">
        <span className="text-xs uppercase tracking-widest text-cyan-400">
          ADMIN MODE
        </span>

        <button
          onClick={handleLogout}
          className="px-4 py-2 rounded-md text-sm
                     bg-red-500/10 text-red-400
                     hover:bg-red-500/20 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
};

export default AdminTopbar;
