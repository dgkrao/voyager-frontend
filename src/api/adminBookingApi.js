import { apiRequest } from "./api";

export const getAllBookings = () =>
  apiRequest("/bookings/admin");

export const updateBookingStatus = (bookingId, status) =>
  apiRequest(`/bookings/admin/status?bookingId=${bookingId}&status=${status}`, {
    method: "POST",
  });
