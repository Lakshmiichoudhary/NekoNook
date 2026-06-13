import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";
import PropTypes from "prop-types";

const ProtectedRoute = ({ allowedRoles }) => {
  const userState = useSelector((state) => state.user);
  
  // 1. Debugging line: Look at your browser console to see exactly what Redux outputs here!
  console.log("Current Redux userState value:", userState);

  // 2. Safe, robust extraction fallback matching Redux toolkit structures
  const currentUser = userState?.user || userState;

  // 3. If there is no user object at all, redirect to login
  if (!currentUser || (typeof currentUser === "object" && Object.keys(currentUser).length === 0)) {
    return <Navigate to="/login" replace />;
  }

  // 4. If roles are explicitly requested (like admin), validate the string assignment
  if (allowedRoles && allowedRoles.length > 0) {
    const userRole = currentUser?.role || currentUser?.user?.role;
    if (!allowedRoles.includes(userRole)) {
      return <Navigate to="/" replace />;
    }
  }
  
  // 5. User authenticated successfully
  return <Outlet />;
};

ProtectedRoute.propTypes = {
  allowedRoles: PropTypes.arrayOf(PropTypes.string),
};

export default ProtectedRoute;