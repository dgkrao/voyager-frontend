import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const popularDestinations = [
  { name: "Paris", slug: "paris" },
  { name: "Bali", slug: "bali" },
  { name: "Tokyo", slug: "tokyo" },
  { name: "Dubai", slug: "dubai" },
  { name: "Maldives", slug: "maldives" },
];

const PlanTrip = () => {
  const navigate = useNavigate();

  const [destination, setDestination] = useState({
    name: "",
    slug: "",
  });
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [travelers, setTravelers] = useState(2);
  const [budget, setBudget] = useState("");

  const continueBooking = () => {
    if (!destination.slug || !startDate || !endDate) {
      alert("Please complete all required fields");
      return;
    }

    navigate(
      `/booking?destination=${destination.slug}&destinationName=${destination.name}&startDate=${startDate}&endDate=${endDate}&travelers=${travelers}`
    );
  };

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-4xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-semibold mb-6">
          Customize Your Trip
        </h1>
        <p className="text-white/60 mb-12">
          Choose your preferences — we’ll take care of the rest.
        </p>

        <div className="bg-white/5 border border-white/10 rounded-3xl p-8 space-y-8">

          {/* DESTINATION */}
          <div>
            <label className="text-sm text-white/70 mb-3 block">
              Destination
            </label>

            <input
              value={destination.name}
              readOnly
              placeholder="Select destination"
              className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15"
            />

            <div className="flex flex-wrap gap-3 mt-4">
              {popularDestinations.map((d) => (
                <button
                  key={d.slug}
                  onClick={() => setDestination(d)}
                  className="px-4 py-2 rounded-full bg-white/10 text-sm hover:bg-indigo-500 transition"
                >
                  {d.name}
                </button>
              ))}
            </div>
          </div>

          {/* DATES */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-white/70 mb-2 block">
                Start Date
              </label>
              <input
                type="date"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15"
              />
            </div>

            <div>
              <label className="text-sm text-white/70 mb-2 block">
                End Date
              </label>
              <input
                type="date"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15"
              />
            </div>
          </div>

          {/* TRAVELERS & BUDGET */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="text-sm text-white/70 mb-2 block">
                Travelers
              </label>
              <select
                value={travelers}
                onChange={(e) => setTravelers(Number(e.target.value))}
                className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15"
              >
                {[1, 2, 3, 4, 5, 6].map((n) => (
                  <option key={n} value={n}>
                    {n} Traveler{n > 1 && "s"}
                  </option>
                ))}
              </select>
            </div>

            <div>
              <label className="text-sm text-white/70 mb-2 block">
                Budget
              </label>
              <select
                value={budget}
                onChange={(e) => setBudget(e.target.value)}
                className="w-full px-5 py-4 rounded-xl bg-black/60 border border-white/15"
              >
                <option value="">Select budget</option>
                <option>₹50,000 – ₹1,00,000</option>
                <option>₹1,00,000 – ₹2,00,000</option>
                <option>₹2,00,000+</option>
              </select>
            </div>
          </div>

          <button
            onClick={continueBooking}
            className="w-full py-4 rounded-full bg-indigo-500 hover:bg-indigo-600 font-medium"
          >
            Continue to Booking
          </button>
        </div>
      </div>
    </div>
  );
};

export default PlanTrip;
