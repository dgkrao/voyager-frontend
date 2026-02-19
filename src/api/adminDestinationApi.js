import { apiRequest } from "./api";

export const getAdminDestinations = () =>
  apiRequest("/admin/destinations");

export const createDestination = (data) =>
  apiRequest("/admin/destinations", {
    method: "POST",
    body: JSON.stringify(data),
  });

export const deleteDestination = (id) =>
  apiRequest(`/admin/destinations/${id}`, {
    method: "DELETE",
  });
