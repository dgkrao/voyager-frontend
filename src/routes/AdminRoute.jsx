import { Navigate, Outlet } from "react-router-dom";
import { isAuthenticated, getRole } from "../utils/auth";

const AdminRoute = () => {
  if (!isAuthenticated()) return <Navigate to="/login" replace />;
  if (getRole() !== "ADMIN") return <Navigate to="/" replace />;

  return <Outlet />;
};

export default AdminRoute;
