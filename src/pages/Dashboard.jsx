import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyBookings } from "../api/bookingApi";

const Dashboard = () => {
  const [stats, setStats] = useState({
    upcoming: 0,
    completed: 0,
    pending: 0,
  });
  const [recent, setRecent] = useState([]);

  useEffect(() => {
    const email = localStorage.getItem("email");

    getMyBookings(email).then((bookings) => {
      const today = new Date();

      let upcoming = 0;
      let completed = 0;
      let pending = 0;

      bookings.forEach((b) => {
        const end = new Date(b.endDate);

        if (b.status === "PENDING") pending++;
        else if (end < today) completed++;
        else upcoming++;
      });

      setStats({ upcoming, completed, pending });
      setRecent(bookings.slice(0, 3));
    });
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-28 space-y-14">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">
            Welcome back 👋
          </h1>
          <p className="text-white/60">
            Manage your trips and plan your next journey
          </p>
        </div>

        {/* STATS */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          <StatCard label="Upcoming Trips" value={stats.upcoming} />
          <StatCard label="Completed Trips" value={stats.completed} />
          <StatCard label="Pending Requests" value={stats.pending} />
        </div>

        {/* RECENT BOOKINGS */}
        <div>
          <h2 className="text-xl font-semibold mb-6">
            Recent Trips
          </h2>

          <div className="space-y-4">
            {recent.map((b) => (
              <div
                key={b.id}
                className="p-6 rounded-2xl bg-white/5 border border-white/10 flex justify-between"
              >
                <div>
                  <h3 className="font-medium">
                    {b.destination?.name}
                  </h3>
                  <p className="text-white/60 text-sm">
                    {b.startDate} → {b.endDate}
                  </p>
                </div>

                <Link
                  to={`/booking/${b.id}`}
                  className="text-indigo-400 text-sm"
                >
                  View →
                </Link>
              </div>
            ))}

            {recent.length === 0 && (
              <p className="text-white/40">
                No bookings yet.
              </p>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <Link
            to="/plan-trip"
            className="px-8 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600"
          >
            Plan New Trip
          </Link>
          <Link
            to="/destinations"
            className="px-8 py-3 rounded-full border border-white/20 hover:bg-white/10"
          >
            Explore Destinations
          </Link>
        </div>

      </div>
    </div>
  );
};

const StatCard = ({ label, value }) => (
  <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
    <p className="text-sm text-white/50">{label}</p>
    <h3 className="text-3xl font-semibold mt-2">{value}</h3>
  </div>
);

export default Dashboard;
