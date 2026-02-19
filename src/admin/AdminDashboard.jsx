import React, { useEffect, useState } from "react";
import { getAllBookings } from "../api/adminBookingApi";
import { getAdminDestinations } from "../api/adminDestinationApi";

const AdminDashboard = () => {
  const [stats, setStats] = useState({
    total: 0,
    pending: 0,
    destinations: 0,
  });
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    Promise.all([
      getAllBookings(),
      getAdminDestinations(),
    ]).then(([bookings, destinations]) => {
      const pending = bookings.filter(
        (b) => b.status === "PENDING"
      ).length;

      setStats({
        total: bookings.length,
        pending,
        destinations: destinations.length,
      });

      setRecent(bookings.slice(0, 5));
    });
  }, []);

  return (
    <div className="space-y-12">

      <h1 className="text-2xl font-semibold">
        System Overview
      </h1>

      {/* STATS */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <Stat label="Total Bookings" value={stats.total} />
        <Stat label="Pending Requests" value={stats.pending} />
        <Stat label="Destinations" value={stats.destinations} />
      </div>

      {/* RECENT BOOKINGS */}
      <div>
        <h2 className="text-lg font-semibold mb-4">
          Recent Bookings
        </h2>

        <div className="space-y-3">
          {recent.map((b) => (
            <div
              key={b.id}
              className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between"
            >
              <span>{b.user?.email}</span>
              <span>{b.destination?.name}</span>
              <span className="text-white/60">
                {b.status}
              </span>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

const Stat = ({ label, value }) => (
  <div className="p-6 rounded-xl bg-white/5 border border-white/10">
    <p className="text-sm text-white/50">{label}</p>
    <h3 className="text-3xl font-semibold mt-2">{value}</h3>
  </div>
);

export default AdminDashboard;

