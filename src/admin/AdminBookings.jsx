import React, { useEffect, useState } from "react";
import { apiRequest } from "../api/api";

const statusStyles = {
  PENDING: "bg-amber-500/15 text-amber-400",
  CONFIRMED: "bg-emerald-500/15 text-emerald-400",
  CANCELLED: "bg-red-500/15 text-red-400",
};

const AdminBookings = () => {
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadBookings = async () => {
    try {
      const data = await apiRequest("/bookings/admin");
      setBookings(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  const updateStatus = async (id, status) => {
    await apiRequest(
      `/bookings/admin/status?bookingId=${id}&status=${status}`,
      { method: "POST" }
    );
    loadBookings(); // refresh
  };

  useEffect(() => {
    loadBookings();
  }, []);

  if (loading) {
    return <div className="text-white">Loading bookings...</div>;
  }

  return (
    <div className="space-y-8">
      <h1 className="text-2xl font-semibold">Bookings</h1>

      <div className="overflow-hidden rounded-xl border border-white/10">
        <table className="w-full text-sm">
          <thead className="bg-white/5 text-white/60">
            <tr>
              <th className="px-6 py-3 text-left">ID</th>
              <th className="px-6 py-3 text-left">Customer</th>
              <th className="px-6 py-3 text-left">Destination</th>
              <th className="px-6 py-3 text-left">Travelers</th>
              <th className="px-6 py-3 text-left">Amount</th>
              <th className="px-6 py-3 text-left">Status</th>
              <th className="px-6 py-3 text-right">Actions</th>
            </tr>
          </thead>

          <tbody>
            {bookings.map((b) => (
              <tr key={b.id} className="border-t border-white/10">
                <td className="px-6 py-4">BK{b.id}</td>
                <td className="px-6 py-4">
                  {b.user.name}
                  <div className="text-xs text-white/40">{b.user.email}</div>
                </td>
                <td className="px-6 py-4">{b.destination.name}</td>
                <td className="px-6 py-4">{b.travelers}</td>
                <td className="px-6 py-4">₹{b.amount}</td>
                <td className="px-6 py-4">
                  <span className={`px-3 py-1 rounded-full text-xs ${statusStyles[b.status]}`}>
                    {b.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right space-x-3">
                  {b.status === "PENDING" && (
                    <>
                      <button
                        onClick={() => updateStatus(b.id, "CONFIRMED")}
                        className="text-emerald-400"
                      >
                        Approve
                      </button>
                      <button
                        onClick={() => updateStatus(b.id, "CANCELLED")}
                        className="text-red-400"
                      >
                        Cancel
                      </button>
                    </>
                  )}
                </td>
              </tr>
            ))}

            {bookings.length === 0 && (
              <tr>
                <td colSpan="7" className="text-center py-10 text-white/40">
                  No bookings found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminBookings;
