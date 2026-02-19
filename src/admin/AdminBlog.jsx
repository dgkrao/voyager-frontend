import React, { useState } from "react";

const initialBlogs = [
  {
    id: 1,
    title: "Best Time to Visit Paris",
    category: "Guides",
    status: "PUBLISHED",
    content: "Paris is beautiful all year round...",
  },
  {
    id: 2,
    title: "Top 10 Things to Do in Bali",
    category: "Destinations",
    status: "DRAFT",
    content: "Bali offers a perfect mix of beaches...",
  },
];

const AdminBlog = () => {
  const [blogs, setBlogs] = useState(initialBlogs);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    category: "",
    status: "DRAFT",
    content: "",
  });

  const openAdd = () => {
    setEditingId(null);
    setForm({
      title: "",
      category: "",
      status: "DRAFT",
      content: "",
    });
    setShowForm(true);
  };

  const openEdit = (blog) => {
    setEditingId(blog.id);
    setForm(blog);
    setShowForm(true);
  };

  const saveBlog = () => {
    if (!form.title || !form.content) return;

    if (editingId) {
      setBlogs((prev) =>
        prev.map((b) =>
          b.id === editingId ? { ...form, id: editingId } : b
        )
      );
    } else {
      setBlogs((prev) => [
        ...prev,
        { ...form, id: Date.now() },
      ]);
    }

    setShowForm(false);
  };

  const deleteBlog = (id) => {
    if (!window.confirm("Delete this blog post?")) return;
    setBlogs((prev) => prev.filter((b) => b.id !== id));
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Blog Management</h1>
          <p className="text-sm text-white/50">
            Create and manage travel articles
          </p>
        </div>

        <button
          onClick={openAdd}
          className="px-5 py-2 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400"
        >
          + New Blog
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-white/60">
            <tr>
              <th className="text-left px-6 py-3">Title</th>
              <th className="text-left px-6 py-3">Category</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-right px-6 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {blogs.map((b) => (
              <tr
                key={b.id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="px-6 py-4">{b.title}</td>
                <td className="px-6 py-4 text-white/60">{b.category}</td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs
                      ${
                        b.status === "PUBLISHED"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-amber-500/15 text-amber-400"
                      }
                    `}
                  >
                    {b.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-4">
                  <button
                    onClick={() => openEdit(b)}
                    className="text-indigo-400 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteBlog(b.id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {blogs.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-10 text-center text-white/40"
                >
                  No blog posts found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#020617] border border-white/10 rounded-xl w-full max-w-2xl p-6 space-y-6">

            <h2 className="text-lg font-semibold">
              {editingId ? "Edit Blog" : "Create Blog"}
            </h2>

            <div className="space-y-4">
              <input
                placeholder="Blog title"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/15 focus:outline-none focus:border-cyan-400"
              />

              <input
                placeholder="Category (Guides, Destinations, Tips)"
                value={form.category}
                onChange={(e) =>
                  setForm({ ...form, category: e.target.value })
                }
                className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/15"
              />

              <textarea
                rows="8"
                placeholder="Write blog content here..."
                value={form.content}
                onChange={(e) =>
                  setForm({ ...form, content: e.target.value })
                }
                className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/15 focus:outline-none focus:border-cyan-400"
              />

              <select
                value={form.status}
                onChange={(e) =>
                  setForm({ ...form, status: e.target.value })
                }
                className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/15"
              >
                <option value="DRAFT">DRAFT</option>
                <option value="PUBLISHED">PUBLISHED</option>
              </select>
            </div>

            <div className="flex justify-end gap-4 pt-4">
              <button
                onClick={() => setShowForm(false)}
                className="text-sm text-white/60 hover:text-white"
              >
                Cancel
              </button>
              <button
                onClick={saveBlog}
                className="px-5 py-2 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400"
              >
                Save Blog
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default AdminBlog;
