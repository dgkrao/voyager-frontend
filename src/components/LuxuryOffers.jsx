import React from "react";

const offers = [
  {
    title: "Honeymoon Privilege",
    value: "20% Savings",
  },
  {
    title: "Summer Escape",
    value: "₹15,000 Benefit",
  },
  {
    title: "Early Bird Access",
    value: "Up to 25% Advantage",
  },
];

const LuxuryOffers = () => {
  return (
    <section className="relative py-16 md:py-20 bg-black">
      <div className="max-w-6xl mx-auto px-6">
        <div className="rounded-2xl bg-black/80 backdrop-blur-xl border border-white/10 shadow-2xl">

          <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10">
            {offers.map((offer, i) => (
              <div
                key={i}
                className="px-6 py-8 text-center"
              >
                <p className="text-[10px] tracking-widest uppercase text-white/40 mb-2">
                  Voyager Privilege
                </p>

                <h3 className="text-sm font-medium mb-1">
                  {offer.title}
                </h3>

                <p className="text-indigo-400 text-xs">
                  {offer.value}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
};

export default LuxuryOffers;
