import React from "react";
import { Link } from "react-router-dom";

const packages = [
  {
    title: "Romantic Paris Getaway",
    slug: "romantic-paris",
    duration: "7 Days / 6 Nights",
    price: "₹1,45,000",
    highlight: "Perfect for couples",
  },
  {
    title: "Bali Island Escape",
    slug: "bali-escape",
    duration: "6 Days / 5 Nights",
    price: "₹1,10,000",
    highlight: "Beaches & relaxation",
  },
  {
    title: "Swiss Alps Adventure",
    slug: "swiss-alps",
    duration: "10 Days / 9 Nights",
    price: "₹2,20,000",
    highlight: "Mountains & scenic trains",
  },
];

const Packages = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-semibold mb-4">
          Tour Packages
        </h1>
        <p className="text-white/60 max-w-2xl mb-14">
          Carefully crafted itineraries designed for comfort,
          discovery, and unforgettable experiences.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {packages.map((pkg) => (
            <div
              key={pkg.slug}
              className="p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition"
            >
              <h3 className="text-xl font-semibold mb-2">
                {pkg.title}
              </h3>

              <p className="text-white/60 text-sm mb-1">
                {pkg.duration}
              </p>

              <p className="text-white/60 text-sm mb-4">
                {pkg.highlight}
              </p>

              <p className="text-lg font-medium mb-6">
                From {pkg.price}
              </p>

              <Link
                to={`/packages/${pkg.slug}`}
                className="text-indigo-400 text-sm"
              >
                View Details →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
