import React, { useState } from "react";

const destinations = ["Paris", "Bali", "Tokyo", "Switzerland"];

const initialPackages = [
  {
    id: 1,
    title: "Romantic Paris Getaway",
    destination: "Paris",
    duration: "7 Days / 6 Nights",
    price: 145000,
    status: "ACTIVE",
  },
  {
    id: 2,
    title: "Bali Island Escape",
    destination: "Bali",
    duration: "6 Days / 5 Nights",
    price: 110000,
    status: "DRAFT",
  },
];

const AdminPackages = () => {
  const [packages, setPackages] = useState(initialPackages);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    destination: "",
    duration: "",
    price: "",
    status: "ACTIVE",
  });

  const openAdd = () => {
    setEditingId(null);
    setForm({
      title: "",
      destination: "",
      duration: "",
      price: "",
      status: "ACTIVE",
    });
    setShowForm(true);
  };

  const openEdit = (pkg) => {
    setEditingId(pkg.id);
    setForm(pkg);
    setShowForm(true);
  };

  const savePackage = () => {
    if (!form.title || !form.destination || !form.price) return;

    if (editingId) {
      setPackages((prev) =>
        prev.map((p) =>
          p.id === editingId ? { ...form, id: editingId } : p
        )
      );
    } else {
      setPackages((prev) => [
        ...prev,
        { ...form, id: Date.now() },
      ]);
    }

    setShowForm(false);
  };

  const deletePackage = (id) => {
    if (!window.confirm("Delete this package?")) return;
    setPackages((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Packages</h1>
          <p className="text-sm text-white/50">
            Manage tour packages and pricing
          </p>
        </div>

        <button
          onClick={openAdd}
          className="px-5 py-2 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400"
        >
          + Add Package
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-white/60">
            <tr>
              <th className="text-left px-6 py-3">Title</th>
              <th className="text-left px-6 py-3">Destination</th>
              <th className="text-left px-6 py-3">Duration</th>
              <th className="text-left px-6 py-3">Price</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-right px-6 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {packages.map((p) => (
              <tr
                key={p.id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="px-6 py-4">{p.title}</td>
                <td className="px-6 py-4 text-white/60">
                  {p.destination}
                </td>
                <td className="px-6 py-4 text-white/60">
                  {p.duration}
                </td>
                <td className="px-6 py-4">
                  ₹{Number(p.price).toLocaleString()}
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs
                      ${
                        p.status === "ACTIVE"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-amber-500/15 text-amber-400"
                      }
                    `}
                  >
                    {p.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-4">
                  <button
                    onClick={() => openEdit(p)}
                    className="text-indigo-400 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deletePackage(p.id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {packages.length === 0 && (
              <tr>
                <td
                  colSpan="6"
                  className="px-6 py-10 text-center text-white/40"
                >
                  No packages found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* MODAL */}
      {showForm && (
        <div className="fixed inset-0 bg-black/70 flex items-center justify-center z-50">
          <div className="bg-[#020617] border border-white/10 rounded-xl w-full max-w-lg p-6 space-y-6">

            <h2 className="text-lg font-semibold">
              {editingId ? "Edit Package" : "Add Package"}
            </h2>

            <div className="grid grid-cols-1 gap-4">
              <input
                placeholder="Package title"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                className="px-4 py-3 rounded-md bg-black/60 border border-white/15 focus:outline-none focus:border-cyan-400"
              />

              <select
                value={form.destination}
                onChange={(e) =>
                  setForm({ ...form, destination: e.target.value })
                }
                className="px-4 py-3 rounded-md bg-black/60 border border-white/15"
              >
                <option value="">Select destination</option>
                {destinations.map((d) => (
                  <option key={d} value={d}>
                    {d}
                  </option>
                ))}
              </select>

              <input
                placeholder="Duration (eg: 7 Days / 6 Nights)"
                value={form.duration}
                onChange={(e) =>
                  setForm({ ...form, duration: e.target.value })
                }
                className="px-4 py-3 rounded-md bg-black/60 border border-white/15"
              />

              <input
                type="number"
                placeholder="Price (₹)"
                value={form.price}
                onChange={(e) =>
                  setForm({ ...form, price: e.target.value })
                }
                className="px-4 py-3 rounded-md bg-black/60 border border-white/15"
              />

              <select
                value={form.status}
                onChange={(e) =>
                  setForm({ ...form, status: e.target.value })
                }
                className="px-4 py-3 rounded-md bg-black/60 border border-white/15"
              >
                <option value="ACTIVE">ACTIVE</option>
                <option value="DRAFT">DRAFT</option>
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
                onClick={savePackage}
                className="px-5 py-2 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400"
              >
                Save
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default AdminPackages;
