import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();

  if (!user) {
    // If not logged in, kick them to the Login page
    // replace: true ensures they can't click "Back" to return here
    return <Navigate to="/login" replace />;
  }

  // If logged in, show the secret page
  return children;
};

export default ProtectedRoute;
