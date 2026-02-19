import React, { useEffect, useState } from "react";
import {
  getAdminDestinations,
  createDestination,
  deleteDestination,
} from "../api/adminDestinationApi";

const emptyForm = {
  name: "",
  slug: "",
  description: "",
  image: "",
};

const AdminDestinations = () => {
  const [destinations, setDestinations] = useState([]);
  const [form, setForm] = useState(emptyForm);
  const [error, setError] = useState("");

  const loadDestinations = async () => {
    try {
      const data = await getAdminDestinations();
      setDestinations(data);
    } catch (e) {
      setError(e.message);
    }
  };

  // ✅ CORRECT useEffect
  useEffect(() => {
    loadDestinations();
  }, []);

  const submit = async () => {
    try {
      await createDestination(form);
      setForm(emptyForm);
      loadDestinations();
    } catch (e) {
      setError(e.message);
    }
  };

  const remove = async (id) => {
    try {
      await deleteDestination(id);
      loadDestinations();
    } catch (e) {
      setError(e.message);
    }
  };

  return (
    <div className="space-y-10">

      <h1 className="text-2xl font-semibold">Manage Destinations</h1>

      {error && (
        <p className="text-red-400 text-sm">{error}</p>
      )}

      {/* ADD FORM */}
      <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
        <h2 className="text-lg font-medium mb-4">Add Destination</h2>

        <input
          placeholder="Name"
          value={form.name}
          onChange={(e) =>
            setForm({ ...form, name: e.target.value })
          }
          className="w-full mb-3 px-4 py-3 rounded bg-black/40 border border-white/20"
        />

        <input
          placeholder="Slug (lowercase)"
          value={form.slug}
          onChange={(e) =>
            setForm({ ...form, slug: e.target.value })
          }
          className="w-full mb-3 px-4 py-3 rounded bg-black/40 border border-white/20"
        />

        <input
          placeholder="Image URL"
          value={form.image}
          onChange={(e) =>
            setForm({ ...form, image: e.target.value })
          }
          className="w-full mb-3 px-4 py-3 rounded bg-black/40 border border-white/20"
        />

        <textarea
          placeholder="Description"
          value={form.description}
          onChange={(e) =>
            setForm({ ...form, description: e.target.value })
          }
          className="w-full mb-4 px-4 py-3 rounded bg-black/40 border border-white/20 h-28"
        />

        <button
          onClick={submit}
          className="px-6 py-3 bg-indigo-500 rounded-lg hover:bg-indigo-600"
        >
          Add Destination
        </button>
      </div>

      {/* LIST */}
      <div className="space-y-4">
        {destinations.map((d) => (
          <div
            key={d.id}
            className="p-4 rounded-xl bg-white/5 border border-white/10 flex justify-between items-center"
          >
            <div>
              <p className="font-medium">{d.name}</p>
              <p className="text-sm text-white/50">{d.slug}</p>
            </div>

            <button
              onClick={() => remove(d.id)}
              className="text-red-400 text-sm"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AdminDestinations;
