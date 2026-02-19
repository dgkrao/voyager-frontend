import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

/* ===== LAYOUTS ===== */
import PublicLayout from "./layouts/PublicLayout";
import AuthLayout from "./layouts/AuthLayout";
import DashboardLayout from "./layouts/DashboardLayout";
import AdminLayout from "./layouts/AdminLayout";

/* ===== ROUTE GUARDS ===== */
import ProtectedRoute from "./routes/ProtectedRoute";
import AdminRoute from "./routes/AdminRoute";

/* ===== PUBLIC PAGES ===== */
import Landing from "./pages/Landing";
import Destinations from "./pages/Destinations";
import DestinationDetails from "./pages/DestinationDetails";
import PlanTrip from "./pages/PlanTrip";
import Packages from "./pages/Packages";
import PackageDetails from "./pages/PackageDetails";
import Offers from "./pages/Offers";
import Blog from "./pages/Blog";
import BlogDetails from "./pages/BlogDetails";
import Contact from "./pages/Contact";

/* ===== AUTH PAGES ===== */
import Login from "./pages/Login";
import Register from "./pages/Register";

/* ===== USER PAGES (LOGIN REQUIRED) ===== */
import Dashboard from "./pages/Dashboard";
import MyBookings from "./pages/MyBookings";
import Booking from "./pages/Booking";
import BookingDetails from "./pages/BookingDetails";

/* ===== ADMIN PAGES ===== */
import AdminDashboard from "./admin/AdminDashboard";
import AdminDestinations from "./admin/AdminDestinations";
import AdminPackages from "./admin/AdminPackages";
import AdminBookings from "./admin/AdminBookings";
import AdminBlog from "./admin/AdminBlog";
import AdminOffers from "./admin/AdminOffers";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* ================= PUBLIC ================= */}
        <Route element={<PublicLayout />}>
          <Route path="/" element={<Landing />} />
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:slug" element={<DestinationDetails />} />
          <Route path="/plan-trip" element={<PlanTrip />} />
          <Route path="/packages" element={<Packages />} />
          <Route path="/packages/:slug" element={<PackageDetails />} />
          <Route path="/offers" element={<Offers />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/blog/:slug" element={<BlogDetails />} />
          <Route path="/contact" element={<Contact />} />
        </Route>

        {/* ================= AUTH ================= */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        {/* ================= USER (PROTECTED) ================= */}
        <Route element={<ProtectedRoute />}>
          <Route element={<DashboardLayout />}>
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/my-bookings" element={<MyBookings />} />
            <Route path="/booking/:id" element={<BookingDetails />} />
            <Route path="/booking" element={<Booking />} />
          </Route>
        </Route>

        {/* ================= ADMIN (ADMIN ONLY) ================= */}
        <Route element={<AdminRoute />}>
          <Route element={<AdminLayout />}>
            <Route path="/admin/dashboard" element={<AdminDashboard />} />
            <Route path="/admin/destinations" element={<AdminDestinations />} />
            <Route path="/admin/packages" element={<AdminPackages />} />
            <Route path="/admin/bookings" element={<AdminBookings />} />
            <Route path="/admin/blog" element={<AdminBlog />} />
            <Route path="/admin/offers" element={<AdminOffers />} />
          </Route>
        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;
