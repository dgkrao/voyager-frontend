import React from "react";
import { useParams, Link } from "react-router-dom";

const blogData = {
  "best-time-to-visit-paris": {
    title: "Best Time to Visit Paris",
    category: "Guides",
    content: [
      "Paris is beautiful all year round, but the experience varies depending on the season.",
      "Spring (April to June) is considered the best time to visit Paris, with mild weather and blooming gardens.",
      "Summer brings longer days and vibrant street life, though it can be crowded.",
      "Autumn offers fewer tourists and romantic scenery, while winter brings festive charm and fewer queues.",
    ],
  },

  "top-things-to-do-in-bali": {
    title: "Top 10 Things to Do in Bali",
    category: "Destinations",
    content: [
      "Bali offers a perfect mix of beaches, culture, and adventure.",
      "Visit Ubud for temples and rice terraces.",
      "Relax on the beaches of Kuta and Seminyak.",
      "Experience water sports, local cuisine, and traditional dances.",
    ],
  },

  "how-to-plan-a-luxury-trip": {
    title: "How to Plan a Luxury Trip",
    category: "Travel Tips",
    content: [
      "Luxury travel is about comfort, personalization, and seamless experiences.",
      "Start by choosing the right destination and season.",
      "Opt for curated itineraries instead of rushed schedules.",
      "Work with travel experts to customize accommodations and experiences.",
    ],
  },
};

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData[slug];

  if (!blog) {
    return (
      <div className="bg-black text-white min-h-screen flex items-center justify-center">
        Blog not found
      </div>
    );
  }

  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-3xl mx-auto px-6 py-28">

        {/* HEADER */}
        <span className="text-xs uppercase tracking-widest text-indigo-400">
          {blog.category}
        </span>

        <h1 className="text-4xl md:text-5xl font-semibold mt-4 mb-10">
          {blog.title}
        </h1>

        {/* CONTENT */}
        <div className="space-y-6 text-white/70 leading-relaxed">
          {blog.content.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center border-t border-white/10 pt-12">
          <h3 className="text-2xl font-semibold mb-4">
            Ready to plan your trip?
          </h3>
          <p className="text-white/60 mb-6">
            Explore destinations or customize your own journey with Voyager.
          </p>

          <div className="flex justify-center gap-4">
            <Link
              to="/destinations"
              className="px-6 py-3 rounded-full border border-white/20 hover:bg-white/10"
            >
              Explore Destinations
            </Link>
            <Link
              to="/plan-trip"
              className="px-6 py-3 rounded-full bg-indigo-500 hover:bg-indigo-600"
            >
              Plan Trip
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
};

export default BlogDetails;
