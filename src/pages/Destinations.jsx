import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getDestinations } from "../api/destinationApi";

const Destinations = () => {
  const [destinations, setDestinations] = useState([]);

  useEffect(() => {
    getDestinations().then(setDestinations);
  }, []);

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-semibold mb-4">Destinations</h1>
        <p className="text-white/60 mb-14">
          Explore handpicked destinations curated for unforgettable journeys.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {destinations.map((d) => (
            <Link
              key={d.id}
              to={`/destinations/${d.slug}`}
              className="group relative h-80 rounded-3xl overflow-hidden"
            >
              <img
                src={d.image}
                alt={d.name}
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <h3 className="text-2xl font-semibold">{d.name}</h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Destinations;
