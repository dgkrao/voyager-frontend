import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { isAuthenticated, logout } from "../utils/auth";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  const loggedIn = isAuthenticated();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const handleLogout = () => {
    logout();
    navigate("/");
    setOpen(false);
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all
        ${
          scrolled
            ? "bg-black/70 backdrop-blur-md border-b border-white/10"
            : "bg-transparent"
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* LOGO */}
        <Link to="/" className="text-white font-semibold tracking-wide">
          VO<span className="text-indigo-400">YAGER</span>
        </Link>

        {/* DESKTOP LINKS */}
        <div className="hidden md:flex gap-8 text-sm text-white/80">
          <Link to="/destinations" className="hover:text-white">
            Destinations
          </Link>
          <Link to="/packages" className="hover:text-white">
            Packages
          </Link>
          <Link to="/blog" className="hover:text-white">
            Blog
          </Link>
          <Link to="/contact" className="hover:text-white">
            Contact
          </Link>

          {/* ✅ MY BOOKINGS (LOGGED IN ONLY) */}
          {loggedIn && (
            <Link
              to="/my-bookings"
              className="text-indigo-400 hover:text-indigo-300"
            >
              My Bookings
            </Link>
          )}
        </div>

        {/* DESKTOP AUTH */}
        <div className="hidden md:flex items-center gap-4 text-sm">
          {!loggedIn ? (
            <>
              <Link to="/login" className="hover:text-white">
                Login
              </Link>
              <Link
                to="/register"
                className="px-5 py-2 rounded-full bg-indigo-500 hover:bg-indigo-600"
              >
                Register
              </Link>
            </>
          ) : (
            <button
              onClick={handleLogout}
              className="px-5 py-2 rounded-full bg-red-500/90 hover:bg-red-600"
            >
              Logout
            </button>
          )}
        </div>

        {/* MOBILE HAMBURGER */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 px-6 py-6 space-y-4">
          {["destinations", "packages", "blog", "contact"].map((p) => (
            <Link
              key={p}
              to={`/${p}`}
              onClick={() => setOpen(false)}
              className="block text-white/80 hover:text-white"
            >
              {p.charAt(0).toUpperCase() + p.slice(1)}
            </Link>
          ))}

          {/* ✅ MY BOOKINGS (MOBILE, LOGGED IN ONLY) */}
          {loggedIn && (
            <Link
              to="/my-bookings"
              onClick={() => setOpen(false)}
              className="block text-white/80 hover:text-white"
            >
              My Bookings
            </Link>
          )}

          <div className="pt-4 border-t border-white/10">
            {!loggedIn ? (
              <>
                <Link
                  to="/login"
                  onClick={() => setOpen(false)}
                  className="block text-white/80 hover:text-white"
                >
                  Login
                </Link>
                <Link
                  to="/register"
                  onClick={() => setOpen(false)}
                  className="block px-4 py-2 rounded-full bg-indigo-500 text-center"
                >
                  Register
                </Link>
              </>
            ) : (
              <button
                onClick={handleLogout}
                className="w-full px-4 py-2 rounded-full bg-red-500/90"
              >
                Logout
              </button>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
