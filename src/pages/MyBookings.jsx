import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getMyBookings } from "../api/bookingApi";

const statusStyle = {
  PENDING: "bg-amber-500/15 text-amber-400",
  CONFIRMED: "bg-emerald-500/15 text-emerald-400",
  COMPLETED: "bg-indigo-500/15 text-indigo-400",
  CANCELLED: "bg-red-500/15 text-red-400",
};

const MyBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const email = localStorage.getItem("email");

    getMyBookings(email)
      .then((data) => setBookings(data))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Loading bookings...
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-6xl mx-auto px-6 py-28 space-y-10">

        {/* HEADER */}
        <div>
          <h1 className="text-3xl font-semibold mb-2">
            My Bookings
          </h1>
          <p className="text-white/60">
            Track and manage your travel bookings
          </p>
        </div>

        {/* BOOKINGS LIST */}
        <div className="space-y-4">
          {bookings.map((b) => (
            <div
              key={b.id}
              className="p-6 rounded-2xl bg-white/5 border border-white/10 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6"
            >
              {/* LEFT */}
              <div>
                <h3 className="text-lg font-medium">
                  {b.destination?.name}
                </h3>
                <p className="text-white/60 text-sm">
                  {b.startDate} → {b.endDate}
                </p>
                <p className="text-white/50 text-sm mt-1">
                  Booking ID: BK{b.id}
                </p>
              </div>

              {/* RIGHT */}
              <div className="flex items-center gap-6">
                <div className="text-right">
                  <p className="text-sm text-white/50">
                    Total Paid
                  </p>
                  <p className="text-lg font-medium">
                    ₹{b.amount.toLocaleString()}
                  </p>
                </div>

                <span
                  className={`px-4 py-1.5 rounded-full text-xs ${statusStyle[b.status]}`}
                >
                  {b.status}
                </span>

                <Link
                  to={`/booking/${b.id}`}
                  className="text-indigo-400 text-sm hover:underline"
                >
                  View →
                </Link>
              </div>
            </div>
          ))}

          {bookings.length === 0 && (
            <div className="text-center py-20 text-white/40">
              You have no bookings yet.
            </div>
          )}
        </div>

        {/* CTA */}
        <div className="pt-10">
          <Link
            to="/plan-trip"
            className="px-8 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600"
          >
            Plan a New Trip
          </Link>
        </div>

      </div>
    </div>
  );
};

export default MyBookings;
