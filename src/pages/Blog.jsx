import React from "react";
import { Link } from "react-router-dom";

const blogs = [
  {
    title: "Best Time to Visit Paris",
    slug: "best-time-to-visit-paris",
    category: "Guides",
    excerpt:
      "Discover the ideal seasons to explore Paris, from spring blooms to festive winters.",
  },
  {
    title: "Top 10 Things to Do in Bali",
    slug: "top-things-to-do-in-bali",
    category: "Destinations",
    excerpt:
      "From beaches to temples, here’s everything you must experience in Bali.",
  },
  {
    title: "How to Plan a Luxury Trip",
    slug: "how-to-plan-a-luxury-trip",
    category: "Travel Tips",
    excerpt:
      "A step-by-step guide to planning a stress-free, premium travel experience.",
  },
];

const Blog = () => {
  return (
    <div className="bg-black text-white min-h-screen">
      <div className="max-w-7xl mx-auto px-6 py-32">
        <h1 className="text-4xl font-semibold mb-4">
          Travel Blog & Guides
        </h1>
        <p className="text-white/60 max-w-2xl mb-14">
          Stories, tips, and destination insights curated by Voyager.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          {blogs.map((blog) => (
            <Link
              key={blog.slug}
              to={`/blog/${blog.slug}`}
              className="group p-8 rounded-2xl bg-white/5 border border-white/10 hover:border-indigo-400/40 transition"
            >
              <span className="text-xs uppercase tracking-widest text-indigo-400">
                {blog.category}
              </span>

              <h3 className="text-xl font-semibold mt-3 mb-3 group-hover:text-indigo-400 transition">
                {blog.title}
              </h3>

              <p className="text-white/60 text-sm mb-6">
                {blog.excerpt}
              </p>

              <span className="text-indigo-400 text-sm">
                Read Article →
              </span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Blog;
