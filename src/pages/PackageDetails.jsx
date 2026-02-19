import React from "react";
import { Link, useParams } from "react-router-dom";

const packageData = {
  "romantic-paris": {
    title: "Romantic Paris Getaway",
    duration: "7 Days / 6 Nights",
    price: "₹1,45,000",
    overview:
      "Experience the romance of Paris with iconic landmarks, charming cafés, and scenic cruises.",
    itinerary: [
      "Arrival in Paris & evening stroll",
      "Eiffel Tower & Seine cruise",
      "Louvre Museum & city tour",
      "Day trip to Versailles",
      "Montmartre & local experiences",
      "Free day for shopping",
      "Departure",
    ],
  },

  "bali-escape": {
    title: "Bali Island Escape",
    duration: "6 Days / 5 Nights",
    price: "₹1,10,000",
    overview:
      "Relax and unwind in Bali with serene beaches, temples, and tropical landscapes.",
    itinerary: [
      "Arrival & leisure",
      "Ubud temples & rice terraces",
      "Beach day in Kuta",
      "Water sports & sunset",
      "Free day",
      "Departure",
    ],
  },

  "swiss-alps": {
    title: "Swiss Alps Adventure",
    duration: "10 Days / 9 Nights",
    price: "₹2,20,000",
    overview:
      "Explore Switzerland’s scenic beauty with mountains, lakes, and charming towns.",
    itinerary: [
      "Arrival in Zurich",
      "Lucerne & Mount Pilatus",
      "Interlaken exploration",
      "Jungfraujoch excursion",
      "Scenic train journeys",
      "Lake Geneva region",
      "Bern city tour",
      "Free exploration",
      "Relaxation day",
      "Departure",
    ],
  },
};

const PackageDetails = () => {
  const { slug } = useParams();
  const pkg = packageData[slug];

  if (!pkg) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Package not found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">

      {/* HEADER */}
      <section className="py-28 border-b border-white/10">
        <div className="max-w-5xl mx-auto px-6">
          <h1 className="text-4xl font-semibold mb-3">
            {pkg.title}
          </h1>
          <p className="text-white/60 mb-2">
            {pkg.duration}
          </p>
          <p className="text-lg font-medium">
            Starting from {pkg.price}
          </p>
        </div>
      </section>

      {/* OVERVIEW */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4">
            Overview
          </h2>
          <p className="text-white/70 leading-relaxed">
            {pkg.overview}
          </p>
        </div>
      </section>

      {/* ITINERARY */}
      <section className="py-20 bg-slate-950">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-8">
            Day-wise Itinerary
          </h2>

          <ul className="space-y-4 text-white/70">
            {pkg.itinerary.map((day, i) => (
              <li key={i}>
                <span className="text-white font-medium">
                  Day {i + 1}:
                </span>{" "}
                {day}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <h2 className="text-3xl font-semibold mb-6">
          Customize this package
        </h2>
        <p className="text-white/70 max-w-xl mx-auto mb-10">
          Adjust dates, hotels, and experiences to suit your travel style.
        </p>

        <Link
          to="/plan-trip"
          className="px-10 py-4 rounded-full bg-indigo-500 hover:bg-indigo-600"
        >
          Continue to Booking
        </Link>
      </section>
    </div>
  );
};

export default PackageDetails;
