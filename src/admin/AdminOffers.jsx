import React, { useState } from "react";

const initialOffers = [
  {
    id: 1,
    title: "Honeymoon Special",
    type: "PERCENT",
    value: 20,
    description: "Flat 20% off on international honeymoon packages",
    status: "ACTIVE",
  },
  {
    id: 2,
    title: "Summer Escape",
    type: "FLAT",
    value: 15000,
    description: "Save ₹15,000 on summer trips",
    status: "INACTIVE",
  },
];

const AdminOffers = () => {
  const [offers, setOffers] = useState(initialOffers);
  const [showForm, setShowForm] = useState(false);
  const [editingId, setEditingId] = useState(null);

  const [form, setForm] = useState({
    title: "",
    type: "PERCENT",
    value: "",
    description: "",
    status: "ACTIVE",
  });

  const openAdd = () => {
    setEditingId(null);
    setForm({
      title: "",
      type: "PERCENT",
      value: "",
      description: "",
      status: "ACTIVE",
    });
    setShowForm(true);
  };

  const openEdit = (offer) => {
    setEditingId(offer.id);
    setForm(offer);
    setShowForm(true);
  };

  const saveOffer = () => {
    if (!form.title || !form.value) return;

    if (editingId) {
      setOffers((prev) =>
        prev.map((o) =>
          o.id === editingId ? { ...form, id: editingId } : o
        )
      );
    } else {
      setOffers((prev) => [
        ...prev,
        { ...form, id: Date.now() },
      ]);
    }

    setShowForm(false);
  };

  const deleteOffer = (id) => {
    if (!window.confirm("Delete this offer?")) return;
    setOffers((prev) => prev.filter((o) => o.id !== id));
  };

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-semibold">Offers</h1>
          <p className="text-sm text-white/50">
            Manage promotional offers and discounts
          </p>
        </div>

        <button
          onClick={openAdd}
          className="px-5 py-2 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400"
        >
          + Add Offer
        </button>
      </div>

      {/* TABLE */}
      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-white/60">
            <tr>
              <th className="text-left px-6 py-3">Title</th>
              <th className="text-left px-6 py-3">Discount</th>
              <th className="text-left px-6 py-3">Status</th>
              <th className="text-right px-6 py-3">Actions</th>
            </tr>
          </thead>

          <tbody>
            {offers.map((o) => (
              <tr
                key={o.id}
                className="border-t border-white/10 hover:bg-white/5 transition"
              >
                <td className="px-6 py-4">
                  <p>{o.title}</p>
                  <p className="text-xs text-white/50">
                    {o.description}
                  </p>
                </td>

                <td className="px-6 py-4">
                  {o.type === "PERCENT"
                    ? `${o.value}%`
                    : `₹${Number(o.value).toLocaleString()}`}
                </td>

                <td className="px-6 py-4">
                  <span
                    className={`px-3 py-1 rounded-full text-xs
                      ${
                        o.status === "ACTIVE"
                          ? "bg-emerald-500/15 text-emerald-400"
                          : "bg-slate-500/20 text-slate-300"
                      }
                    `}
                  >
                    {o.status}
                  </span>
                </td>

                <td className="px-6 py-4 text-right space-x-4">
                  <button
                    onClick={() => openEdit(o)}
                    className="text-indigo-400 hover:underline"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => deleteOffer(o.id)}
                    className="text-red-400 hover:underline"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {offers.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="px-6 py-10 text-center text-white/40"
                >
                  No offers available
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
              {editingId ? "Edit Offer" : "Create Offer"}
            </h2>

            <div className="space-y-4">
              <input
                placeholder="Offer title"
                value={form.title}
                onChange={(e) =>
                  setForm({ ...form, title: e.target.value })
                }
                className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/15 focus:outline-none focus:border-cyan-400"
              />

              <select
                value={form.type}
                onChange={(e) =>
                  setForm({ ...form, type: e.target.value })
                }
                className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/15"
              >
                <option value="PERCENT">Percentage Discount (%)</option>
                <option value="FLAT">Flat Amount (₹)</option>
              </select>

              <input
                type="number"
                placeholder={
                  form.type === "PERCENT"
                    ? "Discount percentage"
                    : "Flat discount amount"
                }
                value={form.value}
                onChange={(e) =>
                  setForm({ ...form, value: e.target.value })
                }
                className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/15"
              />

              <textarea
                rows="3"
                placeholder="Offer description"
                value={form.description}
                onChange={(e) =>
                  setForm({ ...form, description: e.target.value })
                }
                className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/15"
              />

              <select
                value={form.status}
                onChange={(e) =>
                  setForm({ ...form, status: e.target.value })
                }
                className="w-full px-4 py-3 rounded-md bg-black/60 border border-white/15"
              >
                <option value="ACTIVE">ACTIVE</option>
                <option value="INACTIVE">INACTIVE</option>
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
                onClick={saveOffer}
                className="px-5 py-2 rounded-md bg-cyan-500 text-black font-medium hover:bg-cyan-400"
              >
                Save Offer
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
};

export default AdminOffers;
