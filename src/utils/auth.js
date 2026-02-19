export function setAuth(token, role) {
  localStorage.setItem("token", token);
  localStorage.setItem("role", role);
}

export function isAuthenticated() {
  return !!localStorage.getItem("token");
}

export function getRole() {
  return localStorage.getItem("role");
}

export function logout() {
  localStorage.clear();
}
