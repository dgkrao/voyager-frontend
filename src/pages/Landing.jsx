import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import LuxuryOffers from "../components/LuxuryOffers";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const Landing = () => {
  return (
    <div className="bg-black text-white overflow-hidden">
      {/* ================= HERO ================= */}
      <section className="relative min-h-[75vh] md:h-[88vh] w-full overflow-hidden">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-110"
          src="https://v.ftcdn.net/04/41/98/73/700_F_441987319_RTqlfj0NbULr0MXRZ4pGSjFfCyV9lRLm_ST.mp4"
        />

        {/* CINEMATIC OVERLAY */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/40 to-black/85" />
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.06),transparent_70%)]" />

        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeUp}
          transition={{ duration: 1.1 }}
          className="relative z-10 max-w-7xl mx-auto px-6
           h-full flex flex-col justify-center
           pt-36 md:pt-44 pb-20"
        >
          <p className="text-indigo-400/80 text-xs tracking-[0.25em] uppercase mb-8">
            Curated Luxury Travel
          </p>

          <h1
            className="text-4xl md:text-5xl lg:text-[3.5rem]
                         font-medium leading-tight max-w-3xl"
          >
            Thoughtfully planned journeys,
            <br />
            tailored to you.
          </h1>

          <p className="text-white/60 max-w-xl mt-10 text-lg leading-relaxed">
            Discover destinations, curated packages, and tailor-made trips —
            designed with quiet luxury and absolute comfort in mind.
          </p>

          <div className="flex gap-6 mt-14 flex-wrap">
            <Link
              to="/plan-trip"
              className="px-9 py-3 rounded-full
                         bg-indigo-500/90 hover:bg-indigo-500
                         transition"
            >
              Plan Your Trip
            </Link>

            <Link
              to="/destinations"
              className="px-9 py-3 rounded-full
                         border border-white/20
                         text-white/70 hover:text-white
                         hover:bg-white/5 transition"
            >
              Browse Destinations
            </Link>
          </div>
        </motion.div>
      </section>

      {/* ================= LUXURY OFFERS ================= */}
      <LuxuryOffers />

      {/* ================= FEATURED PACKAGES ================= */}
      <section className="py-20 md:py-24 bg-slate-950 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl font-medium mb-12 text-center">
            Featured Journeys
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
            {[
              { title: "Romantic Paris", days: "7 Days", price: "₹1,45,000" },
              { title: "Bali Escape", days: "6 Days", price: "₹1,10,000" },
              { title: "Swiss Alps", days: "10 Days", price: "₹2,20,000" },
            ].map((pkg, i) => (
              <div
                key={i}
                className="p-8 rounded-2xl
                           bg-white/4 border border-white/10
                           hover:border-indigo-400/30
                           transition"
              >
                <h3 className="text-lg font-medium mb-2">{pkg.title}</h3>
                <p className="text-white/50 text-sm mb-5">
                  {pkg.days} · From {pkg.price}
                </p>
                <Link to="/packages" className="text-indigo-400/80 text-sm">
                  View Journey →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-24 text-center bg-slate-950">
        <h2 className="text-4xl font-medium mb-6">Begin your next journey</h2>
        <p className="text-white/60 max-w-xl mx-auto mb-10 text-lg">
          Tell us where you’d like to go — we’ll handle every detail.
        </p>
        <Link
          to="/plan-trip"
          className="px-10 py-4 rounded-full
                     bg-indigo-500/90 hover:bg-indigo-500"
        >
          Start Planning
        </Link>
      </section>

      {/* ================= FOOTER ================= */}
      <footer className="py-10 text-center text-white/40 text-sm border-t border-white/5">
        © 2026 Voyager · Curated travel experiences
      </footer>
    </div>
  );
};

export default Landing;
