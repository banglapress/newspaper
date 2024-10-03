import useAuth from "../hooks/useAuth";
import useAdmin from "../hooks/useAdmin";
import { Navigate, useLocation } from "react-router-dom";

const AdminRoute = ({ children }) => {
  const { user, loading: authLoading } = useAuth();
  const [isAdmin, isAdminLoading] = useAdmin();
  const location = useLocation();

  // Show loading spinner while user or admin status is being checked
  if (authLoading || isAdminLoading) {
    return <progress className="progress w-56"></progress>;
  }

  // If user is logged in and is an admin, allow access to admin routes
  if (user && isAdmin) {
    return children;
  }

  // Otherwise, redirect the user (non-admins or guests) to the login page
  return <Navigate to="/login" state={{ from: location }} replace />;
};

export default AdminRoute;
