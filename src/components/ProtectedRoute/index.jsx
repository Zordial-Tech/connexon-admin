import { Navigate } from "react-router-dom";

const ProtectedRoute = ({ children }) => {
  const isAuthenticated = localStorage.getItem("token"); // or your auth logic

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return children; // ✅ DO NOT redirect here
};

export default ProtectedRoute;
