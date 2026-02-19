import React from "react";
import { Outlet, Link, useLocation } from "react-router-dom";
import AdminTopbar from "../admin/AdminTopbar";

const AdminLayout = () => {
  const { pathname } = useLocation();

  const links = [
    { name: "Dashboard", path: "/admin/dashboard" },
    { name: "Destinations", path: "/admin/destinations" },
    { name: "Packages", path: "/admin/packages" },
    { name: "Bookings", path: "/admin/bookings" },
    { name: "Blog", path: "/admin/blog" },
    { name: "Offers", path: "/admin/offers" },
  ];

  return (
    <div className="min-h-screen flex bg-[#020617] text-white">

      {/* SIDEBAR */}
      <aside className="w-64 bg-[#020617] border-r border-white/10 p-6 flex flex-col">
        
        <div className="mb-10">
          <h1 className="text-xl font-bold tracking-wide">
            VO<span className="text-cyan-400">YAGER</span>
          </h1>
          <p className="text-xs text-white/40 mt-1">
            Admin Control Center
          </p>
        </div>

        <nav className="space-y-1 flex-1">
          {links.map((link) => {
            const active = pathname === link.path;

            return (
              <Link
                key={link.path}
                to={link.path}
                className={`block px-4 py-2 rounded-md text-sm transition
                  ${
                    active
                      ? "bg-cyan-500/15 text-cyan-400 border-l-4 border-cyan-400"
                      : "text-white/70 hover:bg-white/5"
                  }
                `}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div className="pt-6 border-t border-white/10 text-xs text-white/40">
          © 2026 Voyager Admin
        </div>
      </aside>

      {/* MAIN */}
      <div className="flex-1 flex flex-col">
        <AdminTopbar />

        <main className="flex-1 p-10 bg-[#020617]">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default AdminLayout;
