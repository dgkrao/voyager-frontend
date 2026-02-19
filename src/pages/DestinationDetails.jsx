import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getDestinationBySlug } from "../api/destinationApi";

const DestinationDetails = () => {
  const { slug } = useParams();
  const [destination, setDestination] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const load = async () => {
      try {
        const data = await getDestinationBySlug(slug);
        setDestination(data);
      } catch (err) {
        setDestination(null);
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [slug]);

  if (loading) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Loading...
      </div>
    );
  }

  if (!destination) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Destination not found
      </div>
    );
  }

  return (
    <div className="bg-black text-white">
      {/* HERO */}
      <section className="relative h-[70vh]">
        <img
          src={destination.image}
          alt={destination.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="relative z-10 max-w-7xl mx-auto px-6 h-full flex items-end pb-16">
          <h1 className="text-5xl md:text-6xl font-semibold">
            {destination.name}
          </h1>
        </div>
      </section>

      {/* DESCRIPTION */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-6">
          <p className="text-white/70 text-lg leading-relaxed">
            {destination.description}
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 text-center">
        <Link
          to={`/booking?destination=${destination.slug}`}
          className="px-10 py-4 rounded-full bg-indigo-500 hover:bg-indigo-600"
        >
          Customize This Trip
        </Link>
      </section>
    </div>
  );
};

export default DestinationDetails;
