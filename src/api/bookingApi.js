import { apiRequest } from "./api";

export const createBooking = (data) =>
  apiRequest("/bookings", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const getMyBookings = () =>
  apiRequest("/bookings");
