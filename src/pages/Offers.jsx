import React from "react";
import { Link } from "react-router-dom";

const offers = [
  {
    title: "Honeymoon Special",
    discount: "Flat 20% OFF",
    desc: "On select international destinations",
  },
  {
    title: "Summer Escape",
    discount: "Save ₹15,000",
    desc: "Limited-time summer deals",
  },
  {
    title: "Early Bird Offer",
    discount: "Up to 25% OFF",
    desc: "Book 3 months in advance",
  },
];

const Offers = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-32">

        <h1 className="text-4xl font-semibold mb-4">
          Offers & Deals
        </h1>
        <p className="text-white/60 mb-14 max-w-2xl">
          Unlock exclusive travel deals curated just for you.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {offers.map((offer, i) => (
            <div
              key={i}
              className="p-8 rounded-2xl bg-white/5 border border-white/10"
            >
              <h3 className="text-xl font-semibold mb-2">
                {offer.title}
              </h3>
              <p className="text-indigo-400 mb-2">
                {offer.discount}
              </p>
              <p className="text-white/60 text-sm mb-6">
                {offer.desc}
              </p>

              <Link
                to="/destinations"
                className="text-indigo-400 text-sm"
              >
                Explore Destinations →
              </Link>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offers;
