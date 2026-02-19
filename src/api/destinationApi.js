import { apiRequest } from "./api";

export function getDestinations() {
  return apiRequest("/destinations");
}

export function getDestination(slug) {
  return apiRequest(`/destinations/${slug}`);
}


export const getDestinationBySlug = (slug) =>
  apiRequest(`/destinations/${slug}`);