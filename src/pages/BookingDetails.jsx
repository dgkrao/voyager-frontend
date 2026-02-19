import React from "react";
import { useParams, Link } from "react-router-dom";

const bookingData = {
  BK1021: {
    id: "BK1021",
    packageName: "Romantic Paris Getaway",
    destination: "Paris",
    dates: "12 Jun – 18 Jun 2026",
    travelers: 2,
    status: "CONFIRMED",
    amount: 145000,
    inclusions: [
      "4★ Hotel Accommodation",
      "Daily Breakfast",
      "Airport Transfers",
      "Seine River Cruise",
    ],
  },
};

const statusStyle = {
  PENDING: "bg-amber-500/15 text-amber-400",
  CONFIRMED: "bg-emerald-500/15 text-emerald-400",
  COMPLETED: "bg-indigo-500/15 text-indigo-400",
  CANCELLED: "bg-red-500/15 text-red-400",
};

const BookingDetails = () => {
  const { id } = useParams();
  const booking = bookingData[id];

  if (!booking) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Booking not found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-5xl mx-auto px-6 py-28 space-y-12">

        {/* HEADER */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-6">
          <div>
            <h1 className="text-3xl font-semibold">
              {booking.packageName}
            </h1>
            <p className="text-white/60 mt-1">
              Booking ID: {booking.id}
            </p>
          </div>

          <span
            className={`px-5 py-2 rounded-full text-sm ${statusStyle[booking.status]}`}
          >
            {booking.status}
          </span>
        </div>

        {/* DETAILS GRID */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

          {/* LEFT */}
          <div className="md:col-span-2 space-y-8">

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h2 className="text-xl font-semibold mb-4">
                Trip Details
              </h2>

              <div className="space-y-2 text-white/70">
                <p><b>Destination:</b> {booking.destination}</p>
                <p><b>Dates:</b> {booking.dates}</p>
                <p><b>Travelers:</b> {booking.travelers}</p>
              </div>
            </div>

            <div className="p-6 rounded-2xl bg-white/5 border border-white/10">
              <h2 className="text-xl font-semibold mb-4">
                Inclusions
              </h2>

              <ul className="list-disc list-inside text-white/70 space-y-2">
                {booking.inclusions.map((item, i) => (
                  <li key={i}>{item}</li>
                ))}
              </ul>
            </div>

          </div>

          {/* RIGHT */}
          <div className="p-6 rounded-2xl bg-white/5 border border-white/10 h-fit">
            <h2 className="text-xl font-semibold mb-4">
              Payment Summary
            </h2>

            <div className="space-y-3 text-white/70 text-sm">
              <p className="flex justify-between">
                <span>Package Price</span>
                <span>₹{booking.amount.toLocaleString()}</span>
              </p>
              <p className="flex justify-between">
                <span>Taxes & Fees</span>
                <span>Included</span>
              </p>
            </div>

            <div className="border-t border-white/10 mt-4 pt-4 flex justify-between text-lg font-medium">
              <span>Total Paid</span>
              <span>₹{booking.amount.toLocaleString()}</span>
            </div>

            {booking.status === "PENDING" && (
              <p className="text-xs text-amber-400 mt-4">
                Your booking is under review. We’ll notify you once confirmed.
              </p>
            )}

            {booking.status === "CONFIRMED" && (
              <p className="text-xs text-emerald-400 mt-4">
                Your trip is confirmed 🎉
              </p>
            )}
          </div>
        </div>

        {/* CTA */}
        <div className="flex gap-4">
          <Link
            to="/my-bookings"
            className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10"
          >
            Back to My Bookings
          </Link>

          <Link
            to="/plan-trip"
            className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600"
          >
            Plan Another Trip
          </Link>
        </div>

      </div>
    </div>
  );
};

export default BookingDetails;
