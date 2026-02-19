import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { createBooking } from "../api/bookingApi";

const Booking = () => {
  const navigate = useNavigate();
  const params = new URLSearchParams(useLocation().search);

  const destinationSlug = params.get("destination");
  const destinationName = params.get("destinationName");
  const startDate = params.get("startDate");
  const endDate = params.get("endDate");
  const travelers = Number(params.get("travelers"));

  const email = localStorage.getItem("email"); // or decoded from JWT later

  const confirmBooking = async () => {
    try {
      await createBooking(
        {
          destinationSlug,
          startDate,
          endDate,
          travelers,
        },
        email
      );

      navigate("/my-bookings");
    } catch (e) {
      alert(e.message);
    }
  };

  return (
    <div className="bg-black min-h-screen text-white flex justify-center items-center px-6">
      <div className="max-w-lg w-full bg-white/5 border border-white/10 rounded-3xl p-8 space-y-8">

        <h1 className="text-2xl font-semibold">
          Review Your Booking
        </h1>

        <div className="space-y-4 text-white/80">
          <p><span className="text-white/50">Destination:</span> {destinationName}</p>
          <p><span className="text-white/50">Dates:</span> {startDate} → {endDate}</p>
          <p><span className="text-white/50">Travelers:</span> {travelers}</p>
        </div>

        <button
          onClick={confirmBooking}
          className="w-full py-4 rounded-full bg-indigo-500 hover:bg-indigo-600"
        >
          Confirm Booking
        </button>
      </div>
    </div>
  );
};

export default Booking;
